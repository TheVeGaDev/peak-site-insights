import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Package, DollarSign, Clock, Shield, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    icon: DollarSign,
    question: "كيف يتم تحديد تكلفة نقل الأثاث؟",
    answer:
      "يتم تحديد التكلفة بناءً على عدة عوامل: حجم الأثاث المراد نقله، المسافة بين الموقعين، عدد الطوابق، نوع الخدمة المطلوبة (فك وتركيب، تغليف)، وعدد العمال المطلوبين. نوفر معاينة مجانية لتقديم عرض سعر دقيق.",
  },
  {
    icon: Shield,
    question: "هل الأثاث مؤمن ضد التلف أثناء النقل؟",
    answer:
      "نعم، نحن نوفر تأمين شامل على جميع قطع الأثاث. كما نستخدم أحدث تقنيات التغليف والحماية لضمان وصول أثاثك بأمان تام. فريقنا مدرب على أعلى مستوى للتعامل مع جميع أنواع الأثاث.",
  },
  {
    icon: Clock,
    question: "كم من الوقت تستغرق عملية النقل؟",
    answer:
      "تعتمد مدة النقل على حجم المنزل والمسافة. في المتوسط، شقة من 3 غرف تستغرق 4-6 ساعات شاملة الفك والتركيب. نلتزم بالمواعيد المحددة ونعمل بكفاءة عالية لإنجاز المهمة في أسرع وقت ممكن.",
  },
  {
    icon: Package,
    question: "هل تقدمون خدمة الفك والتركيب؟",
    answer:
      "نعم، نوفر خدمة فك وتركيب شاملة لجميع أنواع الأثاث: غرف النوم، المطابخ، الدواليب، الأجهزة الكهربائية. فريقنا من الفنيين المهرة يضمن فك وتركيب أثاثك بدقة واحترافية عالية.",
  },
  {
    icon: MapPin,
    question: "ما هي المناطق التي تغطيها خدماتكم؟",
    answer:
      "نغطي جميع مناطق القاهرة والجيزة: مدينة نصر، التجمع الخامس، القاهرة الجديدة، الشيخ زايد، 6 أكتوبر، المعادي، الهرم، والمزيد. متاحون للنقل داخل وخارج المحافظات أيضاً.",
  },
  {
    icon: HelpCircle,
    question: "هل تقدمون خدمة التخزين المؤقت؟",
    answer:
      "نعم، نوفر مخازن آمنة ومجهزة بأحدث أنظمة الأمان والتحكم في المناخ. يمكنك تخزين أثاثك لأي مدة تريدها مع إمكانية الوصول إليه في أي وقت. جميع المخازن نظيفة ومراقبة على مدار الساعة.",
  },
];

export const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 backdrop-blur-sm border-2 border-neon-purple/40 rounded-full px-6 py-3 mb-6 shadow-lg">
            <HelpCircle className="w-5 h-5 text-neon-purple animate-pulse" />
            <span className="text-neon-purple font-bold text-lg">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="text-foreground">أسئلة</span>
            <span className="block bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent mt-3 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              وأجوبة
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            إجابات شاملة على الأسئلة الأكثر شيوعاً حول خدمات نقل الأثاث
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-border hover:border-neon-purple/60 rounded-2xl px-6 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-purple/20"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-right">
                      <div className="p-3 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-xl group-hover:from-neon-purple/30 group-hover:to-neon-pink/30 transition-all duration-300">
                        <Icon className="w-6 h-6 text-neon-purple" />
                      </div>
                      <span className="text-lg font-bold text-foreground group-hover:text-neon-purple transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
