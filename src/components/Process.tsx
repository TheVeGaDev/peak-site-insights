import { PhoneCall, FileCheck, Truck, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: PhoneCall,
    title: "اتصل بنا",
    description: "تواصل معنا عبر الهاتف أو واتساب",
    number: "01",
  },
  {
    icon: FileCheck,
    title: "احصل على عرض سعر",
    description: "نقدم لك عرض سعر مفصل ومجاني",
    number: "02",
  },
  {
    icon: Truck,
    title: "تحديد الموعد",
    description: "نحدد موعد مناسب للنقل",
    number: "03",
  },
  {
    icon: CheckCircle2,
    title: "إتمام النقل",
    description: "نقل آمن واحترافي لأثاثك",
    number: "04",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-neon-pink/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-neon-green/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 backdrop-blur-sm border-2 border-neon-pink/40 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Truck className="w-5 h-5 text-neon-pink animate-pulse" />
            <span className="text-neon-pink font-bold text-lg">كيف نعمل</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6 text-foreground">
            <span className="text-foreground">خطوات بسيطة</span>
            <span className="block bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent mt-3 drop-shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              لنقل أثاثك بأمان
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-semibold">
            عملية سهلة وواضحة من البداية حتى النهاية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
            return (
              <div
                key={index}
                ref={ref}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 right-0 w-full h-1 bg-gradient-to-l from-neon-pink via-neon-purple to-transparent -z-10 shadow-lg shadow-neon-purple/30" />
                )}

                <div className="text-center group">
                  {/* Number Badge */}
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-neon-pink/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300 animate-pulse" />
                    <div className="relative bg-gradient-to-br from-neon-pink to-neon-purple rounded-full p-8 shadow-2xl shadow-neon-pink/50 group-hover:scale-110 transition-all duration-500">
                      <step.icon className="w-14 h-14 text-white" />
                    </div>
                    <div className="absolute -top-3 -left-3 bg-gradient-to-br from-neon-cyan to-neon-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-2xl shadow-neon-cyan/50 border-2 border-white/30">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-neon-pink transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-lg">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink hover:from-neon-pink hover:via-neon-purple hover:to-neon-cyan text-white font-black text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-neon-purple/50 transition-all duration-500 hover:scale-110 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 blur-xl group-hover:blur-2xl transition-all" />
            <PhoneCall className="w-8 h-8 animate-pulse relative z-10" />
            <span className="relative z-10">ابدأ الآن واحصل على عرض مجاني</span>
          </a>
        </div>
      </div>
    </section>
  );
};
