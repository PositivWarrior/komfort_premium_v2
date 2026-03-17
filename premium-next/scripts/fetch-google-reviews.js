const fs = require("fs");
const path = require("path");

// ─── Configuration ──────────────────────────────────────────────
const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJG2ww4MCTMkcRvgaBdLz1z9A";
const OUTPUT_PATH = path.join(__dirname, "..", "src", "data", "google-reviews.json");
const MAX_REVIEWS = 5; // Show the 5 newest reviews

// ─── Avatar color palette ───────────────────────────────────────
const AVATAR_COLORS = [
  "#8e44ad", "#c0392b", "#27ae60", "#16a085",
  "#2980b9", "#e67e22", "#1abc9c", "#9b59b6",
];

/**
 * Format a raw Google Places API review into our display format.
 */
function formatReview(review, index) {
  const name = review.author_name || "Anonim";
  const nameParts = name.split(" ");
  const initial = nameParts[0]?.[0]?.toUpperCase() || "?";
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1][0] + "." : "";
  const displayName = `${nameParts[0]} ${lastName}`.trim();

  // Calculate relative time in Polish
  const publishTime = review.time; // Unix timestamp in seconds
  let timeAgo = review.relative_time_description || "";
  if (publishTime && !timeAgo) {
    const date = new Date(publishTime * 1000);
    const diffMs = Date.now() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) timeAgo = "dzisiaj";
    else if (diffDays === 1) timeAgo = "wczoraj";
    else if (diffDays < 7) timeAgo = `${diffDays} dni temu`;
    else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      timeAgo = `${weeks} ${weeks === 1 ? "tydzień" : weeks < 5 ? "tygodnie" : "tygodni"} temu`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      timeAgo = `${months} ${months === 1 ? "miesiąc" : months < 5 ? "miesiące" : "miesięcy"} temu`;
    } else {
      const years = Math.floor(diffDays / 365);
      timeAgo = `${years} ${years === 1 ? "rok" : years < 5 ? "lata" : "lat"} temu`;
    }
  }

  const text = review.text || "";
  const rating = review.rating || 5;
  const profilePhoto = review.profile_photo_url || "";

  // Owner response (if any)
  const ownerReply = review.author_reply?.text || "";

  return {
    name: displayName,
    time: timeAgo,
    publishTimestamp: publishTime || 0,
    text,
    reply: ownerReply,
    initial,
    color: AVATAR_COLORS[index % AVATAR_COLORS.length],
    rating,
    profilePhoto,
    source: "google",
  };
}

async function fetchReviews() {
  if (!GOOGLE_API_KEY) {
    console.error("┌─────────────────────────────────────────────────┐");
    console.error("│  ✘ Missing GOOGLE_PLACES_API_KEY env variable   │");
    console.error("│                                                 │");
    console.error("│  Set it in .env.local:                          │");
    console.error("│  GOOGLE_PLACES_API_KEY=your_key_here            │");
    console.error("│                                                 │");
    console.error("│  Or pass as environment variable:               │");
    console.error("│  GOOGLE_PLACES_API_KEY=xxx node scripts/...     │");
    console.error("└─────────────────────────────────────────────────┘");
    console.log("[fetch-reviews] Keeping existing google-reviews.json (if any).");
    return;
  }

  console.log(`[fetch-reviews] Fetching reviews for Place ID: ${PLACE_ID}`);
  console.log(`[fetch-reviews] Will keep the ${MAX_REVIEWS} newest reviews.`);

  try {
    // Use the Places API (Legacy) - Place Details endpoint
    // reviews_sort=newest ensures we get the most recent reviews
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
      console.error("[fetch-reviews] Google API error:", data.status, data.error_message || "");
      return;
    }

    const placeName = data.result?.name || "Komfort Taxi";
    const overallRating = data.result?.rating || 0;
    const totalReviews = data.result?.user_ratings_total || 0;
    const rawReviews = data.result?.reviews || [];

    console.log(`[fetch-reviews] Place: ${placeName}`);
    console.log(`[fetch-reviews] Overall rating: ${overallRating} (${totalReviews} reviews total)`);
    console.log(`[fetch-reviews] Fetched ${rawReviews.length} reviews from Google.`);

    // Sort by time descending (newest first), take MAX_REVIEWS
    const sortedReviews = rawReviews
      .sort((a, b) => (b.time || 0) - (a.time || 0))
      .slice(0, MAX_REVIEWS);

    const reviews = sortedReviews.map((r, i) => formatReview(r, i));

    // Ensure output directory exists
    const dataDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const output = {
      fetchedAt: new Date().toISOString(),
      placeId: PLACE_ID,
      placeName,
      overallRating,
      totalReviews,
      reviews,
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
    console.log(`[fetch-reviews] ✔ Saved ${reviews.length} reviews to ${OUTPUT_PATH}`);
  } catch (err) {
    console.error("[fetch-reviews] Error fetching reviews:", err.message);
  }
}

fetchReviews();
