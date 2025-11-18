import { PhoneCall, FileCheck, Truck, CheckCircle2 } from "lucide-react";

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
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-background to-primary-light">
        <div className="absolute inset-0 opacity-20">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold-3 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-3/20 backdrop-blur-sm border-2 border-gold-3/40 rounded-full px-6 py-3 mb-6 shadow-glow animate-glow-pulse">
            <Truck className="w-5 h-5 text-gold-shine animate-pulse" />
            <span className="text-gold-shine font-bold text-lg">كيف نعمل</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6 text-foreground">
            خطوات بسيطة
            <span className="text-gradient-gold block mt-2 animate-shimmer"> لنقل أثاثك بأمان</span>
          </h2>
          <p className="text-2xl text-foreground/80 max-w-3xl mx-auto">
            عملية سهلة وواضحة من البداية حتى النهاية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-0 w-full h-1 bg-gradient-to-l from-gold-3 via-gold-2 to-transparent -z-10 shadow-glow" />
              )}

              <div className="text-center group">
                {/* Number Badge */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-gold-3/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-gold-3 to-gold-accent rounded-full p-8 shadow-gold-intense group-hover:scale-110 transition-all duration-500">
                    <step.icon className="w-14 h-14 text-primary" />
                  </div>
                  <div className="absolute -top-3 -left-3 bg-gradient-to-br from-foreground to-gold-shine text-primary w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-gold-intense border-2 border-gold-shine/50">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gold-shine transition-colors">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="tel:01116870575"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-gold-2 via-gold-shine to-gold-accent hover:from-gold-shine hover:via-gold-accent hover:to-gold-2 text-primary font-black text-2xl px-12 py-6 rounded-full shadow-gold-intense hover:shadow-glow transition-all duration-300 hover:scale-110 animate-glow-pulse"
          >
            <PhoneCall className="w-8 h-8 animate-pulse" />
            <span>ابدأ الآن - اتصل 01116870575</span>
          </a>
        </div>
      </div>
    </section>
  );
};
