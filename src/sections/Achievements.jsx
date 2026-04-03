import { useState } from "react";
import {
  Award,
  Trophy,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Carrom | Inter-University Colors Awardee",
    year: "2024",
    description:
      "In recognition of my athletic excellence and commitment to sportsmanship, I was honored with University Colors in 2024 for Carrom. Representing the University of Sri Jayewardenepura at the inter-university level required immense focus, strategic thinking, and discipline—qualities that I carry over into my professional career as a software developer.",

    images: ["/achive/interunicolor1.JPG"],
  },
  {
    icon: Award,
    title: "Carrom Team Captain | SLUG XV",
    year: "2024-2025",
    description:
      "Led the University of Sri Jayewardenepura Carrom Team as the Captain for the 15th Sri Lanka University Games (SLUG XV). This prestigious role involved managing team dynamics, strategic planning, and maintaining peak performance under the high-pressure environment of Sri Lanka's largest inter-university sporting event. My leadership during the tournament was a testament to my ability to guide a team toward a common goal through discipline and tactical focus.",

    images: [
      "/achive/captain.JPG",
      "/achive/captain1.JPG",
      "/achive/captain2.JPG",
    ],
  },
  {
    icon: Trophy,
    title: "Carrom | Awarded SLUG XV University Colors",
    year: "2025",
    description:
      "In recognition of my performance at the 15th Sri Lanka University Games (SLUG XV), I was awarded University Colors for Carrom. Achieving colors at SLUG—the most prestigious inter-university sporting event in Sri Lanka—represents a peak in my athletic career. It stands as a testament to the discipline, strategic focus, and high-pressure performance I maintain, both on the board and in my technical projects.",

    images: ["/achive/slugcolor1.JPG", "/achive/slugcolor2.JPG"],
  },
];

export const Achievements = () => {
  const [activeAlbumIndex, setActiveAlbumIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openAlbum = (albumIndex, imageIndex = 0) => {
    setActiveAlbumIndex(albumIndex);
    setActiveImageIndex(imageIndex);
  };

  const closeAlbum = () => {
    setActiveAlbumIndex(null);
  };

  const showPrevImage = () => {
    if (activeAlbumIndex === null) return;
    const total = achievements[activeAlbumIndex].images.length;
    setActiveImageIndex((prev) => (prev - 1 + total) % total);
  };

  const showNextImage = () => {
    if (activeAlbumIndex === null) return;
    const total = achievements[activeAlbumIndex].images.length;
    setActiveImageIndex((prev) => (prev + 1) % total);
  };

  const activeImages =
    activeAlbumIndex !== null ? achievements[activeAlbumIndex].images : [];

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Key Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Milestones that
            <span className="font-serif italic font-normal text-white">
              {" "}
              define my journey.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A snapshot of moments I'm most proud of – from competitions and
            academics to open-source impact.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image header */}
              <button
                type="button"
                className="relative aspect-video overflow-hidden w-full group cursor-pointer"
                onClick={() => openAlbum(idx, 0)}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-highlight/20 text-highlight font-medium">
                    {item.year}
                  </span>
                </div>
                {item.images.length > 1 && (
                  <span className="absolute bottom-3 right-3 text-[11px] px-2 py-1 rounded-full bg-black/60 text-foreground">
                    {item.images.length} photos
                  </span>
                )}
              </button>

              {/* Text content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Album Viewer */}
      {activeAlbumIndex !== null && activeImages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative max-w-4xl w-full mx-4 bg-background/80 rounded-2xl overflow-hidden glass-strong">
            {/* Close button */}
            <button
              type="button"
              onClick={closeAlbum}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-foreground hover:bg-black/70 z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Main image with navigation */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src={activeImages[activeImageIndex]}
                alt="Achievement photo"
                className="max-h-full max-w-full object-contain"
              />

              {activeImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevImage}
                    className="absolute left-3 md:left-4 p-2 rounded-full bg-black/60 text-foreground hover:bg-black/80"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 md:right-4 p-2 rounded-full bg-black/60 text-foreground hover:bg-black/80"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-black/60 text-foreground">
                    {activeImageIndex + 1} / {activeImages.length}
                  </span>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {activeImages.length > 1 && (
              <div className="px-4 py-3 bg-card/90 border-t border-border flex gap-3 overflow-x-auto">
                {activeImages.map((src, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border ${
                      idx === activeImageIndex
                        ? "border-primary shadow-[0_0_0_1px_rgba(32,178,166,0.7)]"
                        : "border-border/60 hover:border-primary/60"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
