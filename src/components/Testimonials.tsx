import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "أحمد محمد",
    location: "مدينة نصر",
    rating: 5,
    comment: "خدمة ممتازة جداً! الفريق محترف وسريع في العمل. تم نقل أثاثي بأمان تام ولم يحدث أي ضرر.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
  },
  {
    name: "فاطمة السيد",
    location: "التجمع الخامس",
    rating: 5,
    comment: "أفضل شركة نقل أثاث تعاملت معها! الأسعار معقولة والخدمة احترافية. أنصح الجميع بالتعامل معهم.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatma",
  },
  {
    name: "محمود حسن",
    location: "القاهرة الجديدة",
    rating: 5,
    comment: "دقة في المواعيد واحترافية في التعامل. شكراً للمهندس محمود والفريق على الخدمة الرائعة.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahmoud",
  },
  {
    name: "سارة عبدالله",
    location: "مصر الجديدة",
    rating: 5,
    comment: "تجربة رائعة من البداية للنهاية. الفريق ملتزم ومحترم والأسعار تنافسية جداً.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
  },
  {
    name: "خالد إبراهيم",
    location: "المعادي",
    rating: 5,
    comment: "نقلت أثاث شقتي بالكامل بدون أي مشاكل. الفريق متعاون جداً وحريص على سلامة الأثاث.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khaled",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/10 to-background relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 backdrop-blur-sm border-2 border-neon-pink/40 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Star className="w-5 h-5 text-neon-pink fill-neon-pink animate-pulse" />
            <span className="text-neon-pink font-bold text-lg">آراء عملائنا</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="text-foreground">ماذا يقول</span>
            <span className="block bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent mt-3 drop-shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              عملاؤنا عنا
            </span>
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple shadow-xl hover:shadow-2xl hover:shadow-neon-purple/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple shadow-xl hover:shadow-2xl hover:shadow-neon-purple/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Testimonials Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className={`group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/30 hover:border-neon-pink/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-pink/30 ${
                  index === 1 ? "md:scale-105 border-neon-pink/50" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-neon-pink/20" />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-neon-pink/30 blur-xl rounded-full animate-pulse" />
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-neon-pink/50 relative z-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-foreground/60">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-neon-pink fill-neon-pink animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-foreground/80 leading-relaxed">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-neon-pink to-neon-purple w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
