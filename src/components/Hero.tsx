import { Button } from "@/components/ui/button";
import { Phone, Star, TrendingUp, Shield, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMmgtMTJ6TTAgMTM0aDEydjEySDAwek0zNiA3OGgxMnYxMkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gold rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold font-semibold">الأفضل في مدينة نصر</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-primary-foreground leading-tight">
                نقل أثاث آمن
                <span className="block text-gradient-gold">ومضمون 100%</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl mx-auto lg:mx-0">
                خدمات نقل الأثاث الأكثر موثوقية في مدينة نصر والقاهرة الكبرى
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: Shield, text: "ضمان الحماية" },
                { icon: Clock, text: "خدمة 24 ساعة" },
                { icon: TrendingUp, text: "أسعار تنافسية" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 border border-primary-foreground/20"
                >
                  <feature.icon className="w-5 h-5 text-gold" />
                  <span className="text-primary-foreground font-semibold">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-primary text-lg px-8 py-6 shadow-glow hover:shadow-strong transition-all duration-300"
                asChild
              >
                <a href="tel:01116870575" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>اتصل الآن 01116870575</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                احصل على عرض سعر
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">+2000</div>
                <div className="text-sm text-primary-foreground/70">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">100%</div>
                <div className="text-sm text-primary-foreground/70">رضا العملاء</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <span className="text-3xl font-bold text-gold">5.0</span>
                  <Star className="w-6 h-6 text-gold fill-gold" />
                </div>
                <div className="text-sm text-primary-foreground/70">تقييم العملاء</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-strong">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                alt="نقل أثاث احترافي"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 right-8 bg-card/95 backdrop-blur-lg rounded-2xl p-6 shadow-strong border border-gold/20 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 rounded-full p-4">
                  <Phone className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">اتصل بنا الآن</div>
                  <div className="text-xl font-bold text-primary">01116870575</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
