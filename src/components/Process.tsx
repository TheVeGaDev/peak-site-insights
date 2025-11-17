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
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-4">
            <Truck className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold">كيف نعمل</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            خطوات بسيطة
            <span className="text-gradient-gold"> لنقل أثاثك</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            عملية سهلة وواضحة من البداية حتى النهاية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-0 w-full h-0.5 bg-gradient-to-l from-gold/50 to-transparent -z-10" />
              )}

              <div className="text-center group">
                {/* Number Badge */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-gold to-gold-light rounded-full p-6 shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -left-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="tel:01116870575"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-primary font-bold text-xl px-10 py-5 rounded-full shadow-glow hover:shadow-strong transition-all duration-300 hover:scale-105"
          >
            <PhoneCall className="w-6 h-6" />
            <span>ابدأ الآن - اتصل 01116870575</span>
          </a>
        </div>
      </div>
    </section>
  );
};
