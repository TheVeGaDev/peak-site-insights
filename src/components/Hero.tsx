import { Button } from "@/components/ui/button";
import { Phone, Star, TrendingUp, Shield, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/50 backdrop-blur-sm border border-gold/20 rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 text-gold fill-gold" />
            <span className="text-gold font-bold">الأفضل في مدينة نصر</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-tight">
              نقل أثاث آمن
              <span className="block text-gradient-gold mt-2">ومضمون 100%</span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 max-w-2xl mx-auto">
              خدمات نقل الأثاث الأكثر موثوقية في مدينة نصر والقاهرة الكبرى
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Shield, text: "ضمان الحماية" },
              { icon: Clock, text: "خدمة 24 ساعة" },
              { icon: TrendingUp, text: "أسعار تنافسية" },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-gold/20 hover-lift"
              >
                <feature.icon className="w-5 h-5 text-gold" />
                <span className="text-foreground font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:opacity-90 text-primary text-lg font-bold px-8 py-6 transition-all hover-lift"
              asChild
            >
              <a href="tel:01116870575" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>م. محمود - 01116870575</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gold hover:bg-gold/10 text-foreground text-lg font-bold px-8 py-6"
              asChild
            >
              <a href="tel:01559887180" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>م. يوسف - 01559887180</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
