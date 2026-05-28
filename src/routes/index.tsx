import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  Leaf,
  Crown,
  Clock,
  ChevronRight,
  Star,
  ShoppingBag,
  ArrowDown,
  User,
  ThumbsUp,
  Check,
  CheckCircle,
  PenTool,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M&M — Mist & Muse | Wear Confidence" },
      {
        name: "description",
        content:
          "Luxury perfumes and body mists in Kumasi, Ghana. Premium UAE-crafted fragrances. Order on WhatsApp.",
      },
      {
        property: "og:title",
        content: "M&M — Mist & Muse | Wear Confidence",
      },
      {
        property: "og:description",
        content: "Luxury perfumes and body mists in Kumasi, Ghana. Order on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "233548351786";
const DISPLAY_PHONE = "0548351786";

type Product = { name: string; price: number; badge?: string; image?: string };

const perfumes200: Product[] = [
  { name: "Suave", price: 200, badge: "Best Seller", image: "/suave.jpg" },
  { name: "Picky Rose", price: 200, image: "/picky-rose.jpg" },
  { name: "Extremely Unique", price: 200, image: "/extremely-unique.jpg" },
  { name: "Hayaati", price: 200, badge: "Popular", image: "/hayaati.jpg" },
  { name: "Black Leather Men", price: 200, badge: "For Him", image: "/black-leather-men.jpg" },
  { name: "Sara Blaze", price: 200, image: "/sara-blaze.jpg" },
  { name: "Elysia Pista Sundae", price: 200, image: "/elysia-pista-sundae.jpg" },
];

const perfumes60: Product[] = [
  { name: "Kaly Floral Majesty", price: 60, image: "/kaly-floral-majesty.jpg" },
  { name: "Bad Lad Pour Homme", price: 60, badge: "For Him", image: "/bad-lad.jpg" },
  { name: "Dolores Pour Femme", price: 60, badge: "For Her", image: "/dolores.jpg" },
  { name: "Invicto Intense", price: 60, image: "/invicto-intense-single.jpg" },
  { name: "Oniro", price: 60, image: "/oniro.jpg" },
  { name: "Niro", price: 60, image: "/niro.jpg" },
];

const bodyMists: Product[] = [
  { name: "elitedi bellezza Gold Rush", price: 160, image: "/mists-and-invicto.jpg" },
  { name: "Storm Elixir Athena", price: 160, badge: "Premium", image: "/mists-and-invicto.jpg" },
  { name: "Dolores Athena", price: 160, image: "/dolores-athena.jpg" },
  { name: "Intense Athena", price: 160, image: "/intense-athena.jpg" },
  { name: "Elitedi Storm Elixir", price: 160, image: "/elitedi-storm-elixir.jpg" },
  { name: "Elitedi Bellezza", price: 160, image: "/elitedi-bellezza.jpg" },
  { name: "Elitedi Storm", price: 160, image: "/mists-and-invicto.jpg" },
  { name: "Elixir Rush", price: 160, badge: "New", image: "/mists-and-invicto.jpg" },
];

const designerPerfumes: Product[] = [
  {
    name: "Louis Vuitton Imagination",
    price: 5200,
    badge: "Exclusive",
    image: "/lv-imagination.jpg",
  },
  { name: "Dior Sauvage Elixir", price: 3800, badge: "Best Seller", image: "/sauvage-elixir.jpg" },
  {
    name: "Versace Eros Energy",
    price: 2100,
    badge: "New Release",
    image: "/versace-eros-energy.jpg",
  },
  { name: "Hugo Boss Bottled Elixir", price: 2200, image: "/hugo-boss-elixir.jpg" },
  { name: "Versace Men's Eros", price: 1900, image: "/versace-eros.jpg" },
  { name: "Dolce & Gabbana Light Blue Intense", price: 1800, image: "/dg-light-blue.jpg" },
  { name: "Polo Ralph Lauren Blue", price: 1700, image: "/polo-blue.jpg" },
  {
    name: "Clive Christian Collection",
    price: 5400,
    badge: "Elite Luxury",
    image: "/clive-christian.jpg",
  },
  { name: "Louis Vuitton Pacific Chill", price: 4900, image: "/lv-collection.jpg" },
];

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  productName: string;
  date: string;
  verified: boolean;
  likes: number;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Amah K.",
    rating: 5,
    comment:
      "The scent of Sara Blaze is absolutely divine! It lasts all day and I get so many compliments. Ordering was super fast and easy.",
    productName: "Sara Blaze",
    date: "May 12, 2026",
    verified: true,
    likes: 12,
  },
  {
    id: "2",
    name: "Kofi A.",
    rating: 5,
    comment:
      "Suave is incredibly close to Sauvage but at an unbeatable price point. Lasts 8+ hours on my clothes. 10/10!",
    productName: "Suave",
    date: "May 20, 2026",
    verified: true,
    likes: 8,
  },
  {
    id: "3",
    name: "Esi B.",
    rating: 4,
    comment:
      "Elysia Pista Sundae is so creamy, nutty, and sweet. Perfect gourmand perfume for everyday wear. Fast delivery in Kumasi.",
    productName: "Elysia Pista Sundae",
    date: "May 24, 2026",
    verified: true,
    likes: 4,
  },
  {
    id: "4",
    name: "Emmanuel O.",
    rating: 5,
    comment:
      "Kaly Floral Majesty is a hit with my wife. Smells premium and the bottle design is very elegant.",
    productName: "Kaly Floral Majesty",
    date: "May 26, 2026",
    verified: true,
    likes: 5,
  },
];

function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("mm_reviews");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return DEFAULT_REVIEWS;
  });

  const [likedReviews, setLikedReviews] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("mm_liked_reviews");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("mm_reviews", JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem("mm_liked_reviews", JSON.stringify(likedReviews));
  }, [likedReviews]);

  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form states
  const [formName, setFormName] = useState("");
  const [formComment, setFormComment] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formProduct, setFormProduct] = useState("General Shop Experience");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
      : "0.0";

  const starCounts = [0, 0, 0, 0, 0]; // 1, 2, 3, 4, 5 stars
  reviews.forEach((r) => {
    if (r.rating >= 1 && r.rating <= 5) {
      starCounts[r.rating - 1]++;
    }
  });

  const filteredReviews = reviews.filter((r) => {
    if (filterRating === "all") return true;
    return r.rating === filterRating;
  });

  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0;
    return Math.round((count / totalReviews) * 100);
  };

  const handleLike = (id: string) => {
    if (likedReviews.includes(id)) return; // Already liked
    setLikedReviews([...likedReviews, id]);
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!formComment.trim()) {
      setFormError("Please write a review comment.");
      return;
    }
    if (formComment.length < 5) {
      setFormError("Review comment must be at least 5 characters.");
      return;
    }

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const now = new Date();
    const formattedDate = `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

    const newReview: Review = {
      id: Date.now().toString(),
      name: formName.trim(),
      rating: formRating,
      comment: formComment.trim(),
      productName: formProduct,
      date: formattedDate,
      verified: false,
      likes: 0,
    };

    setReviews([newReview, ...reviews]);
    setFormSuccess(true);
    setFormError("");

    // Reset form fields
    setFormName("");
    setFormComment("");
    setFormRating(5);
    setFormProduct("General Shop Experience");

    // Close form after a short delay
    setTimeout(() => {
      setFormSuccess(false);
      setIsFormOpen(false);
    }, 3000);
  };

  const allProductNames = [
    "General Shop Experience",
    ...perfumes200.map((p) => p.name),
    ...perfumes60.map((p) => p.name),
    ...bodyMists.map((p) => p.name),
    ...designerPerfumes.map((p) => p.name),
  ];

  return (
    <section
      id="reviews"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 border-t border-gold/10 bg-ink"
    >
      <SectionHeader
        label="Feedback"
        title="Customer Ratings"
        subtitle="See what our community in Kumasi and across Ghana says about M&M, or share your own review."
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Side: Summary & Action */}
        <div className="lg:col-span-4 space-y-8">
          <div className="rounded-2xl border border-gold/20 bg-charcoal/40 p-6 backdrop-blur-sm">
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">Store Rating</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-bold text-cream">{averageRating}</span>
              <span className="text-sm text-cream-muted/60">out of 5</span>
            </div>

            {/* Stars row */}
            <div className="mt-2 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(Number(averageRating))
                      ? "fill-gold text-gold"
                      : "text-gold/20"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-cream-muted/80">({totalReviews} reviews)</span>
            </div>

            {/* Progress Bars */}
            <div className="mt-6 space-y-3">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = starCounts[star - 1];
                const pct = getPercentage(count);
                return (
                  <div key={star} className="flex items-center gap-3 text-xs">
                    <button
                      onClick={() => setFilterRating(star)}
                      className="flex w-12 items-center gap-1 text-cream-muted hover:text-gold transition-colors text-left cursor-pointer"
                    >
                      <span>{star}</span>
                      <Star className="h-3 w-3 fill-gold text-gold" />
                    </button>
                    <div className="h-2 flex-1 rounded-full bg-ink/80 overflow-hidden border border-gold/10">
                      <div
                        className="h-full rounded-full bg-gold transition-all duration-1000"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-cream-muted/50">{pct}%</span>
                  </div>
                );
              })}
            </div>

            {/* Write a review button */}
            <div className="mt-8">
              <button
                onClick={() => {
                  setIsFormOpen(!isFormOpen);
                  setFormSuccess(false);
                  setFormError("");
                }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gold/10 border border-gold/30 hover:bg-gold hover:text-ink px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gold transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] cursor-pointer"
              >
                {isFormOpen ? (
                  <>
                    <X className="h-4 w-4" /> Cancel Review
                  </>
                ) : (
                  <>
                    <PenTool className="h-4 w-4" /> Write a Review
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Inline Form */}
          {isFormOpen && (
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-charcoal to-ink p-6 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-scale-in">
              {formSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in-up">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/40 animate-bounce">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h5 className="font-serif text-xl font-bold text-gold">Review Submitted!</h5>
                  <p className="mt-2 text-sm text-cream-muted/70">
                    Thank you for your rating. Your voice helps us improve!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h5 className="font-serif text-lg font-semibold text-gold border-b border-gold/15 pb-2">
                    Your Feedback
                  </h5>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cream-muted/70 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Ama Serwaa"
                      className="w-full rounded-xl border border-gold/20 bg-ink/75 px-4 py-2.5 text-sm text-cream placeholder-cream-muted/30 focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cream-muted/70 mb-1">
                      Which Scent Did You Order?
                    </label>
                    <select
                      value={formProduct}
                      onChange={(e) => setFormProduct(e.target.value)}
                      className="w-full rounded-xl border border-gold/20 bg-ink/75 px-4 py-2.5 text-sm text-cream focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/30"
                    >
                      {allProductNames.map((name) => (
                        <option key={name} value={name} className="bg-ink text-cream">
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cream-muted/70 mb-1">
                      Rating
                    </label>
                    <div className="flex gap-2 py-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="text-gold/20 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`h-7 w-7 ${
                              star <= formRating
                                ? "fill-gold text-gold"
                                : "text-gold/20 hover:text-gold/50"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cream-muted/70 mb-1">
                      Review Comment
                    </label>
                    <textarea
                      value={formComment}
                      onChange={(e) => setFormComment(e.target.value)}
                      placeholder="Share your thoughts on the scent longevity, smell, and ordering experience..."
                      rows={4}
                      className="w-full rounded-xl border border-gold/20 bg-ink/75 px-4 py-2.5 text-sm text-cream placeholder-cream-muted/30 focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/30 resize-none"
                    />
                  </div>

                  {formError && <p className="text-xs text-red-400 font-semibold">{formError}</p>}

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gold py-3 text-sm font-bold uppercase tracking-widest text-ink shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] cursor-pointer"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Reviews List */}
        <div className="lg:col-span-8 space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gold/10 pb-4">
            <span className="text-xs uppercase tracking-wider text-cream-muted/50 mr-2">
              Filter:
            </span>
            <button
              onClick={() => setFilterRating("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                filterRating === "all"
                  ? "bg-gold text-ink font-bold shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                  : "bg-charcoal/60 border border-gold/20 text-cream-muted/70 hover:text-gold hover:border-gold/40"
              }`}
            >
              All Reviews
            </button>
            {[5, 4, 3, 2, 1].map((star) => (
              <button
                key={star}
                onClick={() => setFilterRating(star)}
                className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  filterRating === star
                    ? "bg-gold text-ink font-bold shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                    : "bg-charcoal/60 border border-gold/20 text-cream-muted/70 hover:text-gold hover:border-gold/40"
                }`}
              >
                <span>{star}</span>
                <Star className="h-3 w-3 fill-current" />
              </button>
            ))}
          </div>

          {/* List of Reviews */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            {filteredReviews.length === 0 ? (
              <div className="rounded-2xl border border-gold/15 bg-charcoal/20 py-16 text-center animate-scale-in">
                <Star className="mx-auto h-8 w-8 text-gold/20" />
                <p className="mt-4 text-cream-muted/50">No reviews found matching this filter.</p>
              </div>
            ) : (
              filteredReviews.map((review) => {
                const isLiked = likedReviews.includes(review.id);
                return (
                  <div
                    key={review.id}
                    className="group rounded-2xl border border-gold/15 bg-charcoal/20 p-5 transition-all duration-300 hover:border-gold/45 hover:bg-charcoal/30 animate-scale-in"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      {/* Avatar & Info */}
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 font-serif text-sm font-bold text-gold">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-serif text-base font-semibold text-cream">
                              {review.name}
                            </span>
                            {review.verified && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold">
                                <Check className="h-2.5 w-2.5" /> Verified Buyer
                              </span>
                            )}
                          </div>

                          {/* Stars row */}
                          <div className="mt-1 flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-3.5 w-3.5 ${
                                  star <= review.rating ? "fill-gold text-gold" : "text-gold/10"
                                }`}
                              />
                            ))}
                            <span className="ml-2 text-[11px] text-cream-muted/50">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Product Tag */}
                      <div className="sm:text-right shrink-0">
                        <span className="inline-block rounded-lg bg-ink/80 border border-gold/10 px-2.5 py-1 text-xs text-gold/80">
                          Scent:{" "}
                          <span className="font-semibold text-cream">{review.productName}</span>
                        </span>
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="mt-4 text-sm leading-relaxed text-cream-muted/80 pl-1">
                      "{review.comment}"
                    </p>

                    {/* Helpful Bar */}
                    <div className="mt-4 flex items-center justify-end pl-1">
                      <button
                        onClick={() => handleLike(review.id)}
                        disabled={isLiked}
                        className={`flex items-center gap-1.5 text-xs transition-colors cursor-pointer ${
                          isLiked
                            ? "text-gold font-semibold"
                            : "text-cream-muted/50 hover:text-gold"
                        }`}
                      >
                        <ThumbsUp
                          className={`h-3.5 w-3.5 ${isLiked ? "fill-gold text-gold" : ""}`}
                        />
                        <span>Helpful ({review.likes})</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function waLink(p: Product) {
  let greeting = "Hello";
  if (typeof window !== "undefined") {
    const hour = new Date().getHours();
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  }

  const msg = `${greeting} M&M — Mist & Muse! I want to order *${p.name}* for GH₵${p.price}. Please assist me with my order.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

function generalWaLink() {
  let greeting = "Hello";
  if (typeof window !== "undefined") {
    const hour = new Date().getHours();
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  }
  const msg = `${greeting} M&M — Mist & Muse! I would like to inquire about your fragrances.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function ProductCard({ p, index }: { p: Product; index: number }) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col rounded-2xl border border-gold/20 bg-gradient-to-b from-charcoal to-ink p-4 transition-all duration-500 hover:-translate-y-3 hover:border-gold/60 hover:shadow-[0_0_50px_rgba(212,175,55,0.25)] ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Badge */}
      {p.badge && (
        <span className="absolute -top-2 left-4 z-10 rounded-full bg-gold px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink shadow-lg">
          {p.badge}
        </span>
      )}

      {/* Image / Placeholder */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-charcoal via-ink to-black transition-all duration-500 group-hover:border-gold/60">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/5 transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/10">
              <Sparkles className="h-7 w-7 text-gold/50 transition-all duration-500 group-hover:text-gold/80" />
            </div>
            <p className="text-xs font-medium tracking-widest text-cream-muted/40 uppercase px-4 text-center">
              {p.name}
            </p>
          </div>
        )}
        {/* Corner accents */}
        <div className="absolute left-2 top-2 h-4 w-4 border-l border-t border-gold/30 transition-all group-hover:border-gold/60" />
        <div className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-gold/30 transition-all group-hover:border-gold/60" />
        {/* Price */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="rounded-lg bg-ink/80 px-3 py-1.5 text-sm font-bold text-gold backdrop-blur-sm border border-gold/20">
            GH₵{p.price}
          </span>
        </div>
      </div>

      <h3 className="mt-4 text-center font-serif text-base font-semibold tracking-wide text-cream transition-colors group-hover:text-gold sm:text-lg">
        {p.name}
      </h3>

      <a
        href={waLink(p)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-5 py-2.5 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-ink hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
      >
        <ShoppingBag className="h-3.5 w-3.5" /> Order Now
      </a>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  index: number;
}) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-gold/15 bg-ink/60 p-7 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Number */}
      <span className="absolute right-4 top-4 font-serif text-5xl font-bold text-gold/5 transition group-hover:text-gold/10">
        0{index + 1}
      </span>

      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/5 text-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/15 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="font-serif text-xl font-semibold text-cream transition-colors group-hover:text-gold">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-cream-muted/60">{desc}</p>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className={`mb-14 text-center ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="mb-4 inline-flex items-center gap-3">
        <div className="h-px w-8 bg-gold/50" />
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">{label}</p>
        <div className="h-px w-8 bg-gold/50" />
      </div>
      <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-sm text-cream-muted/80 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}

function Index() {
  const [tab, setTab] = useState<"perfumes" | "mists" | "designers">("perfumes");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-ink font-sans text-cream antialiased">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      {/* ===== NAVIGATION ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-gold/15 bg-ink/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
              <span className="font-serif text-lg font-bold text-gold">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-gold leading-none">
                M&amp;M
              </span>
              <span className="text-[9px] tracking-[0.25em] text-cream-muted/60 uppercase">
                Mist &amp; Muse
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#products"
              className="text-sm tracking-wide text-cream-muted/70 transition hover:text-gold"
            >
              Collection
            </a>
            <a
              href="#why-us"
              className="text-sm tracking-wide text-cream-muted/70 transition hover:text-gold"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide text-cream-muted/70 transition hover:text-gold"
            >
              Contact
            </a>
          </nav>
          <a
            href={generalWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-ink sm:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Order
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(212,175,55,0.06), transparent 50%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(212,175,55,0.06), transparent 50%)",
            }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-gold/40 animate-float" />
        <div className="absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-gold/30 animate-float delay-300" />
        <div className="absolute left-[20%] bottom-[25%] h-1 w-1 rounded-full bg-gold/25 animate-float delay-500" />
        <div className="absolute right-[25%] bottom-[30%] h-2 w-2 rounded-full bg-gold/20 animate-float delay-700" />

        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          {/* Top label */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-5 py-2">
            <Star className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Luxury Fragrances
            </span>
            <Star className="h-3.5 w-3.5 text-gold" />
          </div>

          {/* Main title */}
          <h1 className="animate-fade-in-up delay-100 font-serif text-7xl font-bold leading-[0.9] tracking-tight text-cream sm:text-8xl lg:text-9xl">
            M<span className="text-gold-gradient">&amp;</span>M
          </h1>

          <p className="animate-fade-in-up delay-200 mt-4 font-serif text-2xl italic text-cream/80 sm:text-3xl lg:text-4xl">
            Mist &amp; Muse
          </p>

          {/* Divider */}
          <div className="animate-fade-in-up delay-300 mx-auto my-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/40" />
            <Sparkles className="h-4 w-4 text-gold/60" />
            <div className="h-px w-16 bg-gold/40" />
          </div>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-400 font-serif text-3xl font-medium tracking-wide text-gold sm:text-4xl lg:text-5xl">
            Wear Confidence
          </p>

          {/* Description */}
          <p className="animate-fade-in-up delay-500 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream-muted/70 sm:text-lg">
            Discover a curated collection of premium perfumes and body mists crafted in the UAE.
            Long-lasting elegance, affordable luxury — delivered with love from Kumasi, Ghana.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up delay-600 mt-10">
            <button
              onClick={scrollToProducts}
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-10 py-4 text-sm font-bold uppercase tracking-widest text-ink shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
            >
              Shop Now
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up delay-700 mt-16">
            <button
              onClick={scrollToProducts}
              className="inline-flex flex-col items-center gap-2 text-cream-muted/40 transition hover:text-gold/60"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-gold/10 bg-charcoal/50">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "21+", label: "Fragrances" },
              { value: "UAE", label: "Crafted In" },
              { value: "GH₵60", label: "From" },
              { value: "Kumasi", label: "Ghana" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-gold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream-muted/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeader
          label="Our Collection"
          title="Signature Scents"
          subtitle="Handpicked fragrances for every mood, every moment, every you."
        />

        {/* Tabs */}
        <div className="mb-14 flex justify-center">
          <div className="inline-flex rounded-full border border-gold/20 bg-charcoal/80 p-1.5 flex-wrap justify-center">
            <button
              onClick={() => setTab("perfumes")}
              className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 sm:px-8 cursor-pointer ${
                tab === "perfumes"
                  ? "bg-gold text-ink shadow-[0_0_30px_rgba(212,175,55,0.35)]"
                  : "text-cream-muted/60 hover:text-gold"
              }`}
            >
              {tab === "perfumes" && (
                <span className="absolute inset-0 rounded-full animate-glow-pulse" />
              )}
              <span className="relative z-10">Perfumes (Clones)</span>
            </button>
            <button
              onClick={() => setTab("mists")}
              className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 sm:px-8 cursor-pointer ${
                tab === "mists"
                  ? "bg-gold text-ink shadow-[0_0_30px_rgba(212,175,55,0.35)]"
                  : "text-cream-muted/60 hover:text-gold"
              }`}
            >
              {tab === "mists" && (
                <span className="absolute inset-0 rounded-full animate-glow-pulse" />
              )}
              <span className="relative z-10">Body Mists</span>
            </button>
            <button
              onClick={() => setTab("designers")}
              className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 sm:px-8 cursor-pointer ${
                tab === "designers"
                  ? "bg-gold text-ink shadow-[0_0_30px_rgba(212,175,55,0.35)]"
                  : "text-cream-muted/60 hover:text-gold"
              }`}
            >
              {tab === "designers" && (
                <span className="absolute inset-0 rounded-full animate-glow-pulse" />
              )}
              <span className="relative z-10">Designer Imports</span>
            </button>
          </div>
        </div>

        {tab === "perfumes" && (
          <div className="space-y-16">
            {/* Premium Line */}
            <div>
              <div className="mb-8 flex items-center justify-center gap-4">
                <div className="h-px flex-1 max-w-24 bg-gold/30" />
                <Crown className="h-5 w-5 text-gold/60" />
                <h3 className="font-serif text-xl font-semibold text-gold sm:text-2xl">
                  Premium Line
                </h3>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-xs font-bold text-gold">
                  GH₵200
                </span>
                <Crown className="h-5 w-5 text-gold/60" />
                <div className="h-px flex-1 max-w-24 bg-gold/30" />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {perfumes200.map((p, i) => (
                  <ProductCard key={p.name} p={p} index={i} />
                ))}
              </div>
            </div>

            {/* Classic Line */}
            <div>
              <div className="mb-8 flex items-center justify-center gap-4">
                <div className="h-px flex-1 max-w-24 bg-gold/30" />
                <Sparkles className="h-5 w-5 text-gold/60" />
                <h3 className="font-serif text-xl font-semibold text-gold sm:text-2xl">
                  Classic Line
                </h3>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-xs font-bold text-gold">
                  GH₵60
                </span>
                <Sparkles className="h-5 w-5 text-gold/60" />
                <div className="h-px flex-1 max-w-24 bg-gold/30" />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {perfumes60.map((p, i) => (
                  <ProductCard key={p.name} p={p} index={i} />
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "mists" && (
          <div>
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px flex-1 max-w-24 bg-gold/30" />
              <Leaf className="h-5 w-5 text-gold/60" />
              <h3 className="font-serif text-xl font-semibold text-gold sm:text-2xl">Body Mists</h3>
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-xs font-bold text-gold">
                GH₵160
              </span>
              <Leaf className="h-5 w-5 text-gold/60" />
              <div className="h-px flex-1 max-w-24 bg-gold/30" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {bodyMists.map((p, i) => (
                <ProductCard key={p.name} p={p} index={i} />
              ))}
            </div>
          </div>
        )}

        {tab === "designers" && (
          <div>
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px flex-1 max-w-24 bg-gold/30" />
              <Crown className="h-5 w-5 text-gold/60" />
              <h3 className="font-serif text-xl font-semibold text-gold sm:text-2xl">
                Designer Imports
              </h3>
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-xs font-bold text-gold">
                Authentic Brands
              </span>
              <Crown className="h-5 w-5 text-gold/60" />
              <div className="h-px flex-1 max-w-24 bg-gold/30" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {designerPerfumes.map((p, i) => (
                <ProductCard key={p.name} p={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section
        id="why-us"
        className="relative overflow-hidden border-y border-gold/10 bg-gradient-to-b from-charcoal to-ink py-24"
      >
        {/* Background glow */}
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="The M&M Promise"
            title="Why Choose Us"
            subtitle="We believe luxury should be accessible. Every bottle is a promise of quality."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Clock,
                title: "Long-Lasting",
                desc: "Fragrances crafted to linger from dawn to dusk, making every moment memorable.",
              },
              {
                icon: Crown,
                title: "Affordable Luxury",
                desc: "Premium quality scents that respect your pocket without compromising elegance.",
              },
              {
                icon: Leaf,
                title: "Premium Ingredients",
                desc: "Finely sourced, high-grade fragrance notes for an unforgettable olfactory journey.",
              },
              {
                icon: Sparkles,
                title: "Made in UAE",
                desc: "Authentic Middle Eastern artistry bottled with modern sophistication.",
              },
            ].map(({ icon, title, desc }, i) => (
              <FeatureCard key={title} icon={icon} title={title} desc={desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== RATINGS & REVIEWS SECTION ===== */}
      <ReviewsSection />

      {/* ===== TESTIMONIAL STRIP ===== */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="animate-shimmer">
          <Sparkles className="mx-auto mb-4 h-6 w-6 text-gold/40" />
        </div>
        <blockquote className="font-serif text-xl italic text-cream/80 sm:text-2xl lg:text-3xl">
          "A fragrance is like a signature — invisible but unforgettable."
        </blockquote>
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-gold/30" />
          <p className="text-xs uppercase tracking-[0.3em] text-gold/60">M&amp;M Philosophy</p>
          <div className="h-px w-8 bg-gold/30" />
        </div>
      </section>

      {/* ===== FOOTER / CONTACT ===== */}
      <footer
        id="contact"
        className="relative overflow-hidden border-t border-gold/10 bg-charcoal py-20"
      >
        <div
          className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/2 opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.2), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
            <Sparkles className="h-5 w-5 text-gold" />
          </div>

          <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
            Ready to <span className="text-gold-gradient">Wear Confidence</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream-muted/70">
            Place your order today. Fast delivery across Kumasi with friendly, personal service.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:+${PHONE}`}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold/40 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 sm:w-auto"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
              Call {DISPLAY_PHONE}
            </a>
            <a
              href={generalWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/15 bg-gold/5 px-4 py-2 text-cream-muted/60">
            <MapPin className="h-3.5 w-3.5 text-gold/60" />
            <span className="text-sm">Kumasi, Ghana</span>
          </div>

          <div className="mt-14 border-t border-gold/10 pt-8">
            <p className="font-serif text-xl font-bold text-gold">M&amp;M — Mist &amp; Muse</p>
            <p className="mt-1 text-xs tracking-wider text-cream-muted/40">
              Wear Confidence &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP ===== */}
      <a
        href={generalWaLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)]"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[8px] font-bold text-ink">
          !
        </span>
      </a>
    </div>
  );
}
