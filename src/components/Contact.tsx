import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: Phone,
    title: "اتصل بنا",
    content: "01116870575",
    link: "tel:01116870575",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    content: "info@goldeneagle.com",
    link: "mailto:info@goldeneagle.com",
  },
  {
    icon: MapPin,
    title: "العنوان",
    content: "مدينة نصر، القاهرة، مصر",
    link: "#",
  },
];

const serviceTypes = [
  "نقل أثاث منزلي",
  "نقل مكتبي",
  "فك وتركيب",
  "تغليف وتخزين",
  "نقل أجهزة منزلية",
  "استشارة مجانية",
];

export const Contact = () => {
  const { toast } = useToast();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "تم إرسال طلبك بنجاح! 🎉",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });
      setFormData({ name: "", phone: "", serviceType: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-4">
            <Send className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold">تواصل معنا</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            احصل على
            <span className="text-gradient-gold"> استشارة مجانية</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لمساعدتك في كل خطوة من رحلة نقل أثاثك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-2 border-primary/30 hover:border-neon-green/60 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-neon-green/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    الاسم الكامل *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="أدخل اسمك"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    رقم الهاتف *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="01XXXXXXXXX"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    نوع الخدمة *
                  </label>
                  <Select
                    required
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, serviceType: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="اختر نوع الخدمة" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    تفاصيل إضافية
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="أخبرنا عن احتياجاتك..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gold hover:bg-gold-light text-primary font-bold text-lg shadow-glow"
                >
                  {isSubmitting ? (
                    "جاري الإرسال..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الطلب
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-medium transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      className="flex items-center gap-4"
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <div className="bg-gold/10 p-4 rounded-full group-hover:bg-gold/20 transition-colors">
                        <info.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.title}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          {info.content}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-success/20 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  تواصل فوري عبر واتساب
                </h3>
                <p className="text-muted-foreground mb-6">
                  للحصول على رد سريع وعرض سعر فوري
                </p>
                <Button
                  size="lg"
                  className="w-full bg-success hover:bg-success/90 text-white"
                  asChild
                >
                  <a
                    href="https://wa.me/201116870575"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>تواصل عبر واتساب</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  ساعات العمل
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>السبت - الخميس</span>
                    <span className="font-semibold">24 ساعة</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة</span>
                    <span className="font-semibold">24 ساعة</span>
                  </div>
                  <div className="text-sm text-gold mt-4">
                    ⭐ خدمة الطوارئ متاحة على مدار الساعة
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
