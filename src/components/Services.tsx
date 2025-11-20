import { Card, CardContent } from "@/components/ui/card";
import { 
  Truck, 
  Package, 
  Home, 
  Building2, 
  Wrench, 
  Shield,
  Clock,
  DollarSign
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "نقل الأثاث المنزلي",
    description: "نقل آمن وسريع لجميع أنواع الأثاث المنزلي مع ضمان الحماية الكاملة",
    features: ["فك وتركيب", "تغليف احترافي", "نقل آمن"],
  },
  {
    icon: Building2,
    title: "نقل المكاتب والشركات",
    description: "خدمات نقل متخصصة للمكاتب والشركات مع الحفاظ على سير العمل",
    features: ["تخطيط مسبق", "نقل سريع", "تركيب احترافي"],
  },
  {
    icon: Package,
    title: "التغليف والتخزين",
    description: "خدمات تغليف احترافية ومستودعات آمنة للتخزين المؤقت",
    features: ["مواد عالية الجودة", "تخزين آمن", "حماية كاملة"],
  },
  {
    icon: Wrench,
    title: "فك وتركيب الأثاث",
    description: "فريق متخصص في فك وتركيب جميع أنواع الأثاث بدقة واحترافية",
    features: ["فنيون محترفون", "أدوات حديثة", "سرعة في الإنجاز"],
  },
  {
    icon: Home,
    title: "الأجهزة المنزلية",
    description: "نقل آمن للأجهزة الكهربائية والإلكترونية مع ضمان السلامة",
    features: ["تغليف خاص", "نقل آمن", "تركيب صحيح"],
  },
  {
    icon: Shield,
    title: "التأمين الشامل",
    description: "تأمين شامل على جميع المنقولات لراحة بالك الكاملة",
    features: ["تغطية كاملة", "تعويض فوري", "ضمان مكتوب"],
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "خدمة 24/7",
    description: "متاحون على مدار الساعة لخدمتك",
  },
  {
    icon: Shield,
    title: "ضمان موثوق",
    description: "نضمن سلامة ممتلكاتك بالكامل",
  },
  {
    icon: DollarSign,
    title: "أسعار منافسة",
    description: "أفضل الأسعار في السوق المصري",
  },
  {
    icon: Truck,
    title: "أسطول حديث",
    description: "سيارات مجهزة بأحدث المعدات",
  },
];

export const Services = () => {
  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/5 relative">

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/50 border border-gold/20 rounded-full px-5 py-2 mb-4">
              <Package className="w-5 h-5 text-gold" />
              <span className="text-gold font-bold">خدماتنا المميزة</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-4">
              نقدم أفضل خدمات
              <span className="text-gradient-gold block mt-2">نقل الأثاث في مصر</span>
            </h2>
            <p className="text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              خدمات متكاملة ومتخصصة تلبي جميع احتياجاتك في نقل وتخزين الأثاث
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover-lift border-2 border-gold-1/20 hover:border-gold-1/60 bg-gradient-card backdrop-blur-sm overflow-hidden relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-1/5 via-transparent to-gold-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex p-5 bg-gradient-to-br from-gold-1 to-gold-2 rounded-2xl shadow-gold-intense group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gold-shine transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground/80">
                        <div className="w-2 h-2 bg-gold-accent rounded-full shadow-glow" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold-2/20 backdrop-blur-sm border-2 border-gold-2/40 rounded-full px-6 py-3 mb-6 shadow-glow">
              <Shield className="w-5 h-5 text-gold-shine animate-pulse" />
              <span className="text-gold-shine font-bold text-lg">لماذا نحن؟</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-6 text-foreground">
              ما يميزنا عن
              <span className="text-gradient-gold block mt-2 animate-shimmer"> الآخرين</span>
            </h2>
            <p className="text-2xl text-foreground/80 max-w-3xl mx-auto">
              نفخر بتقديم خدمات استثنائية تتجاوز توقعاتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="group text-center hover-lift bg-card/50 backdrop-blur-sm border-2 border-gold-2/20 hover:border-gold-2/60 rounded-3xl p-8 shadow-soft"
              >
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-gold-2/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-gold-2 to-gold-3 rounded-full p-6 shadow-gold-intense group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gold-shine transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
