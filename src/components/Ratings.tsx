import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

interface Rating {
  id: string;
  name: string;
  service_type: string;
  rating: number;
  comment: string;
  created_at: string;
}

export const Ratings = () => {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

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

  const renderStars = (rating: number, size: "sm" | "lg" = "sm") => {
    const starSize = size === "lg" ? "w-8 h-8" : "w-5 h-5";
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating
                ? "text-gold fill-gold"
                : "text-muted-foreground/30"
            }`}
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
    <section id="ratings" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-gold font-semibold">تقييمات العملاء</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            ماذا يقول
            <span className="text-gradient-gold"> عملاؤنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            آراء حقيقية من عملائنا الكرام
          </p>

          {/* Average Rating */}
          {ratings.length > 0 && (
            <div className="flex items-center justify-center gap-4 mb-8">
              {renderStars(Math.round(averageRating), "lg")}
              <div className="text-right">
                <div className="text-4xl font-bold text-primary">
                  {averageRating.toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">
                  من {ratings.length} تقييم
                </div>
              </div>
            </div>
          )}
        </div>

        {ratings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              كن أول من يضيف تقييماً!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratings.map((rating) => (
              <Card
                key={rating.id}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="mb-4">{renderStars(rating.rating)}</div>

                  {/* Comment */}
                  <p className="text-foreground mb-6 leading-relaxed line-clamp-4">
                    "{rating.comment}"
                  </p>

                  {/* Customer Info */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-gold" />
                      <span className="font-semibold text-primary">
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
                    <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md inline-block">
                      {rating.service_type}
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
