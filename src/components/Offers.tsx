import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Percent, Clock, Gift, Sparkles, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Offers = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      icon: Percent,
      title: "خصم 25% على النقل الكامل",
      description: "خصم خاص على خدمات نقل الأثاث الكامل للشقق والمنازل",
      discount: "25%",
      color: "from-neon-pink to-neon-purple",
    },
    {
      icon: Gift,
      title: "تغليف مجاني",
      description: "احصل على خدمة التغليف الاحترافي مجاناً عند حجز خدمة النقل",
      discount: "مجاناً",
      color: "from-neon-cyan to-neon-green",
    },
    {
      icon: Sparkles,
      title: "خصم 15% للعملاء الجدد",
      description: "عرض خاص للعملاء الجدد على جميع خدماتنا",
      discount: "15%",
      color: "from-neon-purple to-neon-pink",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 backdrop-blur-sm border-2 border-neon-pink/40 rounded-full px-6 py-3 mb-6 shadow-lg animate-pulse">
            <Percent className="w-5 h-5 text-neon-pink" />
            <span className="text-neon-pink font-bold text-lg">عروض محدودة</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="text-foreground">عروض</span>
            <span className="block bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent mt-3 drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]">
              وخصومات حصرية
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            استفد من عروضنا الحصرية قبل انتهاء الوقت
          </p>

          {/* Countdown Timer */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-2 border-neon-pink/30 rounded-3xl p-6 lg:p-8 shadow-2xl shadow-neon-pink/20">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-neon-pink animate-pulse" />
                <span className="text-lg font-bold text-foreground">العرض ينتهي خلال</span>
              </div>
              <div className="grid grid-cols-4 gap-2 lg:gap-6">
                {[
                  { value: timeLeft.days, label: "يوم" },
                  { value: timeLeft.hours, label: "ساعة" },
                  { value: timeLeft.minutes, label: "دقيقة" },
                  { value: timeLeft.seconds, label: "ثانية" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 backdrop-blur-sm border-2 border-neon-pink/20 rounded-2xl p-3 lg:p-6"
                  >
                    <div className="text-3xl lg:text-5xl font-black bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent mb-2">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs lg:text-sm text-muted-foreground font-semibold">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className={`grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card
                key={index}
                className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-border hover:border-neon-pink/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-neon-pink/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className={`bg-gradient-to-r ${offer.color} text-background border-0 text-lg font-black px-4 py-2 shadow-xl animate-pulse`}>
                    {offer.discount}
                  </Badge>
                </div>

                <CardContent className="p-6 lg:p-8 relative z-10 pt-20">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${offer.color} rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-neon-pink transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {offer.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
          <Button
            onClick={() => window.location.href = "#contact"}
            className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink text-xl font-bold px-12 py-8 rounded-2xl shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-6 h-6 ml-3" />
            احجز الآن واستفد من العرض
          </Button>
        </div>
      </div>
    </section>
  );
};
