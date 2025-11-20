import { useEffect } from "react";
import { Users, Award, Truck, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "عميل سعيد",
    color: "neon-cyan",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "سنة خبرة",
    color: "neon-purple",
  },
  {
    icon: Truck,
    value: 10000,
    suffix: "+",
    label: "عملية نقل ناجحة",
    color: "neon-pink",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "خدمة متواصلة",
    color: "neon-green",
  },
];

const StatCard = ({ icon: Icon, value, suffix, label, color, delay }: any) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { count, startCounting } = useCountUp({ end: value, duration: 2500, startOnView: true });

  useEffect(() => {
    if (isVisible) {
      startCounting();
    }
  }, [isVisible, startCounting]);

  return (
    <div
      ref={ref}
      className={`group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/30 hover:border-${color}/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${color}/30 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
      
      <div className="relative z-10 text-center space-y-4">
        <div className="relative inline-block">
          <div className={`absolute inset-0 bg-${color}/30 blur-2xl rounded-full animate-pulse`} />
          <Icon className={`w-16 h-16 text-${color} relative z-10 mx-auto group-hover:scale-110 transition-transform duration-300`} />
        </div>
        
        <div>
          <div className="text-5xl font-black text-foreground mb-2">
            {isVisible ? (
              <>
                <span className={`bg-gradient-to-r from-${color} to-foreground bg-clip-text text-transparent`}>
                  {count.toLocaleString()}
                </span>
                <span className={`text-${color}`}>{suffix}</span>
              </>
            ) : (
              <span>0{suffix}</span>
            )}
          </div>
          <p className="text-lg font-bold text-foreground/80">{label}</p>
        </div>
      </div>
    </div>
  );
};

export const Stats = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 backdrop-blur-sm border-2 border-neon-cyan/40 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Award className="w-5 h-5 text-neon-cyan animate-pulse" />
            <span className="text-neon-cyan font-bold text-lg">إنجازاتنا</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="text-foreground">أرقام تتحدث</span>
            <span className="block bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent mt-3 drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              عن نجاحنا
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};
