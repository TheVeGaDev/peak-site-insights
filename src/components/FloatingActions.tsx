import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";

const engineers = [
  { name: "م. محمود مدحت", phone: "01116870575" },
  { name: "م. يوسف حسن", phone: "01559887180" },
];

export const FloatingActions = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showCall, setShowCall] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button Group */}
      <div className="relative flex flex-col items-center gap-3">
        {/* Engineer WhatsApp Buttons */}
        <div
          className={`flex flex-col gap-2 transition-all duration-500 ease-out ${
            showWhatsApp
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          {engineers.map((engineer, index) => (
            <a
              key={index}
              href={`https://wa.me/2${engineer.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-green-400/30"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-bold whitespace-nowrap">{engineer.name}</span>
            </a>
          ))}
        </div>

        {/* Main WhatsApp Toggle Button */}
        <Button
          onClick={() => {
            setShowWhatsApp(!showWhatsApp);
            setShowCall(false);
          }}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-500 ${
            showWhatsApp
              ? "bg-red-500 hover:bg-red-600 rotate-90"
              : "bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700"
          } relative overflow-hidden group`}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
          {showWhatsApp ? (
            <X className="w-7 h-7 relative z-10 animate-pulse" />
          ) : (
            <MessageCircle className="w-7 h-7 relative z-10 animate-bounce" />
          )}
        </Button>
      </div>

      {/* Call Button Group */}
      <div className="relative flex flex-col items-center gap-3">
        {/* Engineer Call Buttons */}
        <div
          className={`flex flex-col gap-2 transition-all duration-500 ease-out ${
            showCall
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          {engineers.map((engineer, index) => (
            <a
              key={index}
              href={`tel:${engineer.phone}`}
              className="group flex items-center gap-3 bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold whitespace-nowrap">{engineer.name}</span>
            </a>
          ))}
        </div>

        {/* Main Call Toggle Button */}
        <Button
          onClick={() => {
            setShowCall(!showCall);
            setShowWhatsApp(false);
          }}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-500 ${
            showCall
              ? "bg-red-500 hover:bg-red-600 rotate-90"
              : "bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink hover:from-neon-purple hover:via-neon-pink hover:to-neon-cyan"
          } relative overflow-hidden group`}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
          {showCall ? (
            <X className="w-7 h-7 relative z-10 animate-pulse" />
          ) : (
            <Phone className="w-7 h-7 relative z-10 animate-pulse" />
          )}
        </Button>
      </div>
    </div>
  );
};
