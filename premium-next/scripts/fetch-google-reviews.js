const fs = require("fs");
const path = require("path");

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJG2ww4MCTMkcRvgaBdLz1z9A";
const OUTPUT_PATH = path.join(__dirname, "..", "src", "data", "google-reviews.json");
const PUBLIC_OUTPUT_PATH = path.join(__dirname, "..", "public", "google-reviews.json");
const MAX_REVIEWS = 5;

const AVATAR_COLORS = [
  "#8e44ad", "#c0392b", "#27ae60", "#16a085",
  "#2980b9", "#e67e22", "#1abc9c", "#9b59b6",
];

/** Normalize legacy + new API review into one shape */
function normalizeRawReview(review) {
  if (review.authorAttribution) {
    const publishTime = review.publishTime
      ? Math.floor(new Date(review.publishTime).getTime() / 1000)
      : 0;
    return {
      author_name: review.authorAttribution.displayName || "Anonim",
      time: publishTime,
      relative_time_description: review.relativePublishTimeDescription || "",
      text: review.text?.text || review.originalText?.text || "",
      rating: review.rating || 5,
      profile_photo_url: review.authorAttribution.photoUri || "",
      author_reply: review.ownerResponse?.text?.text
        ? { text: review.ownerResponse.text.text }
        : undefined,
    };
  }

  return {
    author_name: review.author_name || "Anonim",
    time: review.time || 0,
    relative_time_description: review.relative_time_description || "",
    text: review.text || "",
    rating: review.rating || 5,
    profile_photo_url: review.profile_photo_url || "",
    author_reply: review.author_reply,
  };
}

function formatReview(review, index) {
  const name = review.author_name || "Anonim";
  const nameParts = name.split(" ");
  const initial = nameParts[0]?.[0]?.toUpperCase() || "?";
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1][0] + "." : "";
  const shortName = `${nameParts[0]} ${lastName}`.trim();

  const publishTime = review.time || 0;
  // Zawsze ufaj opisowi z Google (zgodny z Maps), nie własnemu liczeniu
  let timeAgo = review.relative_time_description || "";
  if (!timeAgo && publishTime) {
    const diffDays = Math.floor((Date.now() - publishTime * 1000) / (1000 * 60 * 60 * 24));
    if (diffDays < 7) timeAgo = `${diffDays} dni temu`;
    else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      timeAgo = `${weeks} ${weeks === 1 ? "tydzień" : "tygodnie"} temu`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      timeAgo = `${months} ${months === 1 ? "miesiąc" : months < 5 ? "miesiące" : "miesięcy"} temu`;
    } else {
      const years = Math.floor(diffDays / 365);
      timeAgo = `${years} ${years === 1 ? "rok" : "lata"} temu`;
    }
  }

  return {
    name,
    shortName,
    time: timeAgo,
    publishTimestamp: publishTime,
    text: review.text || "",
    reply: review.author_reply?.text || "",
    initial,
    color: AVATAR_COLORS[index % AVATAR_COLORS.length],
    rating: review.rating || 5,
    profilePhoto: review.profile_photo_url || "",
    source: "google",
  };
}

async function fetchNewPlacesApi() {
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}`;
  const response = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": GOOGLE_API_KEY,
      "X-Goog-FieldMask": "id,displayName,reviews,rating,userRatingCount",
      "X-Goog-Language-Code": "pl",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    console.warn("[fetch-reviews] New Places API:", response.status, data.error?.message || JSON.stringify(data));
    return null;
  }

  return {
    placeName: data.displayName?.text || "Komfort Taxi",
    overallRating: data.rating || 0,
    totalReviews: data.userRatingCount || 0,
    rawReviews: data.reviews || [],
    source: "places-new",
  };
}

async function fetchLegacyPlacesApi() {
  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(PLACE_ID)}` +
    `&fields=reviews,rating,user_ratings_total,name` +
    `&key=${GOOGLE_API_KEY}` +
    `&language=pl` +
    `&reviews_sort=newest` +
    `&reviews_no_translations=true`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "OK") {
    console.warn("[fetch-reviews] Legacy API:", data.status, data.error_message || "");
    return null;
  }

  return {
    placeName: data.result?.name || "Komfort Taxi",
    overallRating: data.result?.rating || 0,
    totalReviews: data.result?.user_ratings_total || 0,
    rawReviews: data.result?.reviews || [],
    source: "places-legacy",
  };
}

function pickBestResult(newResult, legacyResult) {
  if (!newResult && !legacyResult) return null;
  if (!newResult) return legacyResult;
  if (!legacyResult) return newResult;

  const newTs = Math.max(0, ...(newResult.rawReviews.map((r) => normalizeRawReview(r).time || 0)));
  const legacyTs = Math.max(0, ...(legacyResult.rawReviews.map((r) => normalizeRawReview(r).time || 0)));

  console.log(`[fetch-reviews] New API newest ts: ${newTs}, Legacy newest ts: ${legacyTs}`);
  return newTs >= legacyTs ? newResult : legacyResult;
}

async function fetchReviews() {
  if (!GOOGLE_API_KEY) {
    console.error("[fetch-reviews] Missing GOOGLE_PLACES_API_KEY");
    return;
  }

  console.log(`[fetch-reviews] Place ID: ${PLACE_ID}`);

  try {
    const [newResult, legacyResult] = await Promise.all([
      fetchNewPlacesApi(),
      fetchLegacyPlacesApi(),
    ]);

    const picked = pickBestResult(newResult, legacyResult);
    if (!picked) {
      console.error("[fetch-reviews] Both APIs failed. Enable Places API + Places API (New) in Google Cloud.");
      process.exitCode = 1;
      return;
    }

    console.log(`[fetch-reviews] Using: ${picked.source}`);
    console.log(`[fetch-reviews] Place: ${picked.placeName} (${picked.totalReviews} reviews total)`);

    const normalized = picked.rawReviews.map(normalizeRawReview);
    normalized.forEach((r, i) => {
      console.log(`  [${i + 1}] ${r.author_name} | ${r.relative_time_description || r.time} | ts=${r.time}`);
    });

    const sortedReviews = normalized
      .sort((a, b) => (b.time || 0) - (a.time || 0))
      .slice(0, MAX_REVIEWS);

    const reviews = sortedReviews.map((r, i) => formatReview(r, i));

    const output = {
      fetchedAt: new Date().toISOString(),
      placeId: PLACE_ID,
      placeName: picked.placeName,
      overallRating: picked.overallRating,
      totalReviews: picked.totalReviews,
      apiSource: picked.source,
      reviews,
    };

    const dataDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const json = JSON.stringify(output, null, 2);
    fs.writeFileSync(OUTPUT_PATH, json, "utf-8");
    fs.writeFileSync(PUBLIC_OUTPUT_PATH, json, "utf-8");

    console.log(`[fetch-reviews] Saved ${reviews.length} reviews. Newest: ${reviews[0]?.name} (${reviews[0]?.time})`);
  } catch (err) {
    console.error("[fetch-reviews] Error:", err.message);
    process.exitCode = 1;
  }
}

fetchReviews();
