import { MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ServiceMap = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const serviceAreas = [
    "مدينة نصر",
    "التجمع الخامس",
    "القاهرة الجديدة",
    "مصر الجديدة",
    "المعادي",
    "الشيخ زايد",
    "6 أكتوبر",
    "الهرم",
    "فيصل",
    "الدقي",
    "المهندسين",
    "العجوزة",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-neon-green/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-neon-cyan/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 backdrop-blur-sm border-2 border-neon-green/40 rounded-full px-6 py-3 mb-6 shadow-lg">
            <MapPin className="w-5 h-5 text-neon-green animate-pulse" />
            <span className="text-neon-green font-bold text-lg">مناطق الخدمة</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="text-foreground">نغطي كل</span>
            <span className="block bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent mt-3 drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
              القاهرة والجيزة
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            خدماتنا متوفرة في جميع أنحاء القاهرة الكبرى والجيزة مع إمكانية النقل بين المحافظات
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
          {/* Map */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-2xl hover:shadow-neon-green/30 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442133.18104935525!2d30.805482908594924!3d30.025744296107074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1647896523456!5m2!1sen!2seg"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Service Areas List */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-border rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-lg">
                  <MapPin className="w-7 h-7 text-neon-green" />
                </div>
                المناطق المغطاة
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-3 bg-gradient-to-r from-background/50 to-transparent rounded-xl hover:from-neon-green/10 hover:to-neon-cyan/10 transition-all duration-300 border border-border/50 hover:border-neon-green/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan group-hover:animate-pulse" />
                    <span className="text-foreground font-medium group-hover:text-neon-green transition-colors">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-neon-green/10 via-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm border-2 border-neon-green/30 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-neon-green to-neon-cyan rounded-xl shadow-lg animate-pulse">
                  <Phone className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">منطقتك غير موجودة؟</h4>
                  <p className="text-muted-foreground">لا تقلق! اتصل بنا للاستفسار</p>
                </div>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                نحن نقدم خدماتنا في جميع مناطق القاهرة الكبرى والجيزة، وحتى خارج المحافظات. تواصل معنا الآن لمعرفة المزيد عن الخدمات المتاحة في منطقتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
