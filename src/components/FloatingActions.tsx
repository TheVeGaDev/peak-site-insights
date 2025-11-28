import { useState } from "react";
import { Phone, MessageCircle, User } from "lucide-react";
import { Button } from "./ui/button";

export const FloatingActions = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 lg:bottom-6 lg:left-6 z-50 flex flex-col gap-3 lg:gap-4">
      {/* WhatsApp Button */}
      <div className="relative">
        <Button
          onClick={() => setShowWhatsApp(!showWhatsApp)}
          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan hover:from-neon-cyan hover:to-neon-green shadow-2xl hover:shadow-neon-green/50 transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform" />
        </Button>

        {/* WhatsApp Menu */}
        {showWhatsApp && (
          <div className="absolute bottom-16 lg:bottom-20 left-0 bg-gradient-to-br from-card/98 to-card/95 backdrop-blur-xl border-2 border-neon-green/30 rounded-2xl p-4 shadow-2xl shadow-neon-green/20 animate-scale-in w-72 max-w-[calc(100vw-2rem)]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neon-green/20">
              <MessageCircle className="w-5 h-5 text-neon-green" />
              <span className="font-bold text-foreground">تواصل عبر واتساب</span>
            </div>
            <div className="space-y-2">
              <Button
                onClick={() => window.open("https://wa.me/201000000001", "_blank")}
                className="w-full justify-start bg-gradient-to-r from-neon-green/10 to-transparent hover:from-neon-green/20 hover:to-neon-green/10 border border-neon-green/30 text-foreground hover:text-neon-green transition-all duration-300 h-12"
              >
                <User className="w-4 h-4 ml-2" />
                م. محمود
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/201000000002", "_blank")}
                className="w-full justify-start bg-gradient-to-r from-neon-cyan/10 to-transparent hover:from-neon-cyan/20 hover:to-neon-cyan/10 border border-neon-cyan/30 text-foreground hover:text-neon-cyan transition-all duration-300 h-12"
              >
                <User className="w-4 h-4 ml-2" />
                م. يوسف
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Phone Button */}
      <div className="relative">
        <Button
          onClick={() => setShowPhone(!showPhone)}
          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-110 group"
        >
          <Phone className="w-6 h-6 lg:w-7 lg:h-7 group-hover:rotate-12 transition-transform" />
        </Button>

        {/* Phone Menu */}
        {showPhone && (
          <div className="absolute bottom-16 lg:bottom-20 left-0 bg-gradient-to-br from-card/98 to-card/95 backdrop-blur-xl border-2 border-neon-pink/30 rounded-2xl p-4 shadow-2xl shadow-neon-pink/20 animate-scale-in w-72 max-w-[calc(100vw-2rem)]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neon-pink/20">
              <Phone className="w-5 h-5 text-neon-pink" />
              <span className="font-bold text-foreground">اتصل بنا</span>
            </div>
            <div className="space-y-2">
              <Button
                onClick={() => window.location.href = "tel:01000000001"}
                className="w-full justify-start bg-gradient-to-r from-neon-pink/10 to-transparent hover:from-neon-pink/20 hover:to-neon-pink/10 border border-neon-pink/30 text-foreground hover:text-neon-pink transition-all duration-300 h-12"
              >
                <User className="w-4 h-4 ml-2" />
                م. محمود
              </Button>
              <Button
                onClick={() => window.location.href = "tel:01000000002"}
                className="w-full justify-start bg-gradient-to-r from-neon-purple/10 to-transparent hover:from-neon-purple/20 hover:to-neon-purple/10 border border-neon-purple/30 text-foreground hover:text-neon-purple transition-all duration-300 h-12"
              >
                <User className="w-4 h-4 ml-2" />
                م. يوسف
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
