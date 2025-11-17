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
      {/* Services Section */}
      <section id="services" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-4">
              <Package className="w-4 h-4 text-gold" />
              <span className="text-gold font-semibold">خدماتنا</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              نقدم أفضل خدمات
              <span className="text-gradient-gold"> نقل الأثاث</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              خدمات متكاملة ومتخصصة تلبي جميع احتياجاتك في نقل وتخزين الأثاث
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-gold/50"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex p-4 bg-gold/10 rounded-2xl group-hover:bg-gold/20 transition-colors">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              لماذا تختار
              <span className="text-gold"> النسر الذهبي؟</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              نحن الخيار الأول لآلاف العملاء في مدينة نصر والقاهرة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex p-4 bg-gold/20 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
