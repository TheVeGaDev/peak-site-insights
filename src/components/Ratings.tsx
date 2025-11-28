import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, User, Calendar, MessageSquare, Send, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { z } from "zod";

interface Rating {
  id: string;
  name: string;
  service_type: string;
  rating: number;
  comment: string;
  created_at: string;
}

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

export const Ratings = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
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

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const { data, error } = await supabase
        .from("ratings")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) throw error;

      if (data) {
        setRatings(data);
        if (data.length > 0) {
          const avg = data.reduce((sum, r) => sum + r.rating, 0) / data.length;
          setAverageRating(avg);
        }
      }
    } catch (error) {
      console.error("Error fetching ratings:", error);
    } finally {
      setIsLoading(false);
    }
  };

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

      setFormData({
        name: "",
        phone: "",
        serviceType: "",
        rating: 0,
        comment: "",
      });
      setErrors({});
      setShowForm(false);
      fetchRatings();
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إضافة تقييمك. حاول مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number, size: "sm" | "lg" = "sm") => {
    const starSize = size === "lg" ? "w-8 h-8" : "w-5 h-5";
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating
                ? "text-neon-pink fill-neon-pink animate-pulse"
                : "text-muted-foreground/30"
            }`}
            style={{ animationDelay: `${star * 100}ms` }}
          />
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <section id="ratings" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-64 mx-auto" />
              <div className="h-4 bg-muted rounded w-96 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ratings" className="py-24 bg-gradient-to-b from-background via-primary/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 backdrop-blur-sm border-2 border-neon-pink/40 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Star className="w-5 h-5 text-neon-pink fill-neon-pink animate-pulse" />
            <span className="text-neon-pink font-bold text-lg">آراء عملائنا</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="text-foreground">ماذا يقول</span>
            <span className="block bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent mt-3 drop-shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              عملاؤنا عنا
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            آراء حقيقية من عملائنا الكرام - شاركنا تجربتك أيضاً!
          </p>

          {/* Average Rating & Add Button */}
          <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
            {ratings.length > 0 && (
              <div className="flex items-center gap-4 bg-gradient-to-r from-card/80 to-card/50 backdrop-blur-sm border-2 border-neon-pink/30 rounded-2xl p-6 shadow-xl">
                {renderStars(Math.round(averageRating), "lg")}
                <div className="text-right">
                  <div className="text-4xl font-bold bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    من {ratings.length} تقييم
                  </div>
                </div>
              </div>
            )}
            <Button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink text-lg font-bold px-8 py-6 rounded-xl shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 ml-2" />
              {showForm ? "إخفاء النموذج" : "أضف تقييمك"}
            </Button>
          </div>
        </div>

        {/* Rating Form */}
        {showForm && (
          <div className={`max-w-3xl mx-auto mb-16 transition-all duration-500 ${
            showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-neon-pink/30 shadow-2xl shadow-neon-pink/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rating Stars */}
                  <div className="text-center">
                    <label className="block text-lg font-bold text-foreground mb-4">
                      التقييم *
                    </label>
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className="transition-transform hover:scale-125"
                        >
                          <Star
                            className={`w-12 h-12 ${
                              star <= (hoveredStar || formData.rating)
                                ? "text-neon-pink fill-neon-pink"
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

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
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
                      <label className="block text-sm font-semibold text-foreground mb-2">
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
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
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
                    <label className="block text-sm font-semibold text-foreground mb-2">
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
                    className="w-full h-14 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink text-lg font-bold shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300"
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
        )}

        {/* Ratings Display */}
        {ratings.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 backdrop-blur-sm border-2 border-neon-pink/30 rounded-3xl p-12 max-w-2xl mx-auto">
              <Star className="w-20 h-20 text-neon-pink mx-auto mb-4 animate-pulse" />
              <p className="text-2xl font-bold text-foreground mb-2">
                كن أول من يضيف تقييماً!
              </p>
              <p className="text-muted-foreground">
                شارك تجربتك معنا وساعد الآخرين في اتخاذ القرار
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratings.map((rating, index) => (
              <Card
                key={rating.id}
                className={`group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-border hover:border-neon-pink/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-pink/30 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  <Quote className="absolute top-4 left-4 w-10 h-10 text-neon-pink/20" />

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="mb-4">{renderStars(rating.rating)}</div>

                    {/* Comment */}
                    <p className="text-foreground/90 mb-6 leading-relaxed line-clamp-4">
                      {rating.comment}
                    </p>

                    {/* Customer Info */}
                    <div className="space-y-2 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="p-1.5 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-lg">
                          <User className="w-4 h-4 text-neon-pink" />
                        </div>
                        <span className="font-bold text-foreground">
                          {rating.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {format(new Date(rating.created_at), "d MMMM yyyy", {
                            locale: ar,
                          })}
                        </span>
                      </div>
                      <div className="inline-block text-xs bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 border border-neon-pink/20 text-foreground px-3 py-1 rounded-full font-medium">
                        {rating.service_type}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
