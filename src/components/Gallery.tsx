import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "نقل أثاث فيلا فاخرة",
    description: "مشروع نقل كامل لفيلا في التجمع الخامس",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    title: "نقل شقة عصرية",
    description: "نقل احترافي لشقة في القاهرة الجديدة",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "تأثيث منزل جديد",
    description: "خدمة فك وتركيب وتغليف شاملة",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    title: "نقل مكتب شركة",
    description: "نقل مكتب كامل مع المعدات",
  },
  {
    url: "https://images.unsplash.com/photo-1560185127-6a1e6e0c65b5?w=800&q=80",
    title: "نقل أثاث كلاسيكي",
    description: "نقل أثاث عتيق بعناية فائقة",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    title: "نقل شقة كاملة",
    description: "مشروع نقل شامل في مدينة نصر",
  },
];

export const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-green/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-cyan/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 backdrop-blur-sm border-2 border-neon-green/40 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Camera className="w-5 h-5 text-neon-green animate-pulse" />
            <span className="text-neon-green font-bold text-lg">معرض الأعمال</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="text-foreground">أعمالنا</span>
            <span className="block bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent mt-3 drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
              السابقة
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            شاهد بعض مشاريعنا الناجحة ونتائج عملنا الاحترافي
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-neon-green/60 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-green/30"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Camera Icon */}
              <div className="absolute top-4 right-4 p-2 bg-gradient-to-br from-neon-green to-neon-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
                <Camera className="w-5 h-5 text-background" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full p-0 bg-background/95 backdrop-blur-xl border-2 border-neon-green/30">
            {selectedImage !== null && (
              <div className="relative">
                {/* Close Button */}
                <Button
                  onClick={closeLightbox}
                  className="absolute top-4 left-4 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan hover:from-neon-cyan hover:to-neon-green shadow-xl"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  onClick={goToPrevious}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan hover:from-neon-cyan hover:to-neon-green shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
                <Button
                  onClick={goToNext}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan hover:from-neon-cyan hover:to-neon-green shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                {/* Image */}
                <div className="relative w-full" style={{ maxHeight: "85vh" }}>
                  <img
                    src={galleryImages[selectedImage].url}
                    alt={galleryImages[selectedImage].title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6 lg:p-8 rounded-b-lg">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {galleryImages[selectedImage].title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {galleryImages[selectedImage].description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan animate-pulse" />
                      <span className="text-sm text-muted-foreground">
                        {selectedImage + 1} / {galleryImages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
