import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Send, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const ratingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "الاسم يجب أن يكون حرفين على الأقل" })
    .max(100, { message: "الاسم طويل جداً" }),
  phone: z
    .string()
    .trim()
    .regex(/^(010|011|012|015)\d{8}$/, {
      message: "رقم الهاتف غير صحيح (مثال: 01012345678)",
    }),
  serviceType: z.string().min(1, { message: "اختر نوع الخدمة" }),
  rating: z.number().min(1).max(5),
  comment: z
    .string()
    .trim()
    .min(10, { message: "التعليق يجب أن يكون 10 أحرف على الأقل" })
    .max(500, { message: "التعليق طويل جداً (حد أقصى 500 حرف)" }),
});

const serviceTypes = [
  "نقل أثاث منزلي",
  "نقل مكتبي",
  "فك وتركيب",
  "تغليف وتخزين",
  "نقل أجهزة منزلية",
];

export const RatingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "",
    rating: 0,
    comment: "",
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      ratingSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى التحقق من البيانات المدخلة",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("ratings").insert([
        {
          name: formData.name,
          phone: formData.phone,
          service_type: formData.serviceType,
          rating: formData.rating,
          comment: formData.comment,
        },
      ]);

      if (error) throw error;

      toast({
        title: "شكراً لتقييمك! 🎉",
        description: "تم إضافة تقييمك بنجاح وسيظهر قريباً",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        serviceType: "",
        rating: 0,
        comment: "",
      });
      setErrors({});

      // Reload ratings after a short delay
      setTimeout(() => {
        window.location.href = "#ratings";
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إضافة تقييمك. حاول مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold">شارك تجربتك</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            قيّم
            <span className="text-gold"> خدماتنا</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            رأيك يهمنا! ساعدنا في تحسين خدماتنا
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-strong">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              إضافة تقييم جديد
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating Stars */}
              <div className="text-center">
                <label className="block text-sm font-semibold text-primary mb-3">
                  التقييم *
                </label>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= (hoveredStar || formData.rating)
                            ? "text-gold fill-gold"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {errors.rating && (
                  <p className="text-sm text-destructive mt-2">{errors.rating}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  الاسم *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="أدخل اسمك"
                  className={`h-12 ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
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
                  className={`h-12 ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service Type */}
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
                  <SelectTrigger
                    className={`h-12 ${
                      errors.serviceType ? "border-destructive" : ""
                    }`}
                  >
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
                {errors.serviceType && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.serviceType}
                  </p>
                )}
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  التعليق *
                </label>
                <Textarea
                  required
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  placeholder="شاركنا تجربتك مع خدماتنا..."
                  rows={5}
                  className={errors.comment ? "border-destructive" : ""}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.comment ? (
                    <p className="text-sm text-destructive">{errors.comment}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {formData.comment.length}/500 حرف
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || formData.rating === 0}
                className="w-full h-12 bg-gold hover:bg-gold-light text-primary font-bold text-lg shadow-glow"
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <Send className="w-5 h-5 ml-2" />
                    إرسال التقييم
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
