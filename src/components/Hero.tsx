import { Button } from "@/components/ui/button";
import { Phone, Star, TrendingUp, Shield, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-secondary/30">
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-pulse"
              style={{
                background: i % 3 === 0 ? 'hsl(var(--neon-cyan))' : i % 3 === 1 ? 'hsl(var(--neon-purple))' : 'hsl(var(--gold))',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 backdrop-blur-sm border-2 border-neon-cyan/40 rounded-full px-6 py-3 mb-4 shadow-lg hover:shadow-neon-cyan/50 transition-all">
            <Star className="w-5 h-5 text-neon-cyan fill-neon-cyan animate-pulse" />
            <span className="text-neon-cyan font-bold text-lg">الأفضل في مدينة نصر</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-8xl font-black leading-tight">
              <span className="text-foreground">نقل أثاث آمن</span>
              <span className="block bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent mt-2 drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                ومضمون 100%
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto font-semibold">
              خدمات نقل الأثاث الأكثر موثوقية في مدينة نصر والقاهرة الكبرى
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Shield, text: "ضمان الحماية", color: "neon-green" },
              { icon: Clock, text: "خدمة 24 ساعة", color: "neon-cyan" },
              { icon: TrendingUp, text: "أسعار تنافسية", color: "neon-purple" },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative flex items-center gap-3 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-xl p-4 border-2 border-primary/30 hover:border-neon-cyan/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-cyan/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  i === 0 ? 'from-neon-green/10 to-transparent' : 
                  i === 1 ? 'from-neon-cyan/10 to-transparent' : 
                  'from-neon-purple/10 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                <feature.icon className={`w-6 h-6 text-${feature.color} relative z-10 group-hover:scale-110 transition-transform`} />
                <span className="text-foreground font-bold relative z-10">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink hover:from-neon-purple hover:via-neon-pink hover:to-neon-cyan text-white text-lg font-black px-10 py-7 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-neon-purple/50 group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-3 relative z-10">
                <div className="absolute inset-0 bg-white/20 blur-xl group-hover:blur-2xl transition-all" />
                <Phone className="w-6 h-6 animate-pulse relative z-10" />
                <span className="relative z-10">احجز الآن مجاناً</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neon-cyan hover:bg-neon-cyan/10 text-foreground hover:text-neon-cyan text-lg font-bold px-10 py-7 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/30"
              asChild
            >
              <a href="#services" className="flex items-center gap-3">
                <Star className="w-6 h-6" />
                <span>اكتشف خدماتنا</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
