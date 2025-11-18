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
            <div className="inline-flex items-center gap-2 bg-gold-shine/20 backdrop-blur-sm border-2 border-gold-shine/40 rounded-full px-6 py-3 mb-4 shadow-gold-intense animate-glow-pulse">
              <Star className="w-5 h-5 text-gold-shine fill-gold-shine animate-pulse" />
              <span className="text-gold-shine font-black text-lg">الأفضل في مدينة نصر</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black text-foreground leading-tight drop-shadow-2xl">
                نقل أثاث آمن
                <span className="block text-gradient-gold mt-3 animate-shimmer">ومضمون 100%</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                خدمات نقل الأثاث الأكثر موثوقية في مدينة نصر والقاهرة الكبرى
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: Shield, text: "ضمان الحماية" },
                { icon: Clock, text: "خدمة 24 ساعة" },
                { icon: TrendingUp, text: "أسعار تنافسية" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-foreground/10 backdrop-blur-sm rounded-xl p-4 border-2 border-gold-1/30 hover:border-gold-1 shadow-soft hover:shadow-gold-intense transition-all duration-300 hover:scale-105 group"
                >
                  <feature.icon className="w-6 h-6 text-gold-shine group-hover:animate-pulse" />
                  <span className="text-foreground font-bold text-lg">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-1 via-gold-shine to-gold-2 hover:from-gold-shine hover:via-gold-accent hover:to-gold-3 text-primary text-xl font-black px-10 py-8 shadow-gold-intense hover:shadow-glow transition-all duration-300 hover:scale-110 animate-glow-pulse"
                asChild
              >
                <a href="tel:01116870575" className="flex items-center gap-3">
                  <Phone className="w-6 h-6 animate-pulse" />
                  <span>اتصل الآن 01116870575</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-gold-shine bg-foreground/5 backdrop-blur-sm text-gold-shine hover:bg-gold-shine hover:text-primary text-xl font-black px-10 py-8 shadow-glow hover:shadow-gold-intense transition-all duration-300 hover:scale-105"
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

            {/* WhatsApp Section */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 mt-8">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  تواصل معنا عبر واتساب
                </h3>
                <p className="text-primary-foreground/70">للاستفسار والحجز السريع</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/+201116870575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 animate-pulse group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div className="text-right">
                    <div className="text-sm">م. محمود مدحت</div>
                    <div className="text-xs opacity-90">01116870575</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/+201559887180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 animate-pulse group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div className="text-right">
                    <div className="text-sm">م. يوسف حسن</div>
                    <div className="text-xs opacity-90">01559887180</div>
                  </div>
                </a>
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
