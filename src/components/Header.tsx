import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-background/98 backdrop-blur-xl shadow-xl shadow-neon-purple/10 border-b-2 border-neon-purple/20" 
        : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 lg:gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan shadow-lg">
                <span className="text-xl lg:text-2xl font-black text-background">م</span>
              </div>
            </div>
            <div>
              <h1 className="text-base lg:text-xl font-black bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                المهندس محمود
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">لنقل الأثاث</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#services" className="text-foreground hover:text-neon-pink transition-colors font-semibold">خدماتنا</a>
            <a href="#offers" className="text-foreground hover:text-neon-pink transition-colors font-semibold">العروض</a>
            <a href="#ratings" className="text-foreground hover:text-neon-pink transition-colors font-semibold">التقييمات</a>
            <a href="#contact" className="text-foreground hover:text-neon-pink transition-colors font-semibold">اتصل بنا</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink shadow-lg hover:shadow-neon-pink/50 transition-all duration-300 px-6"
              onClick={() => window.location.href = "tel:01000000000"}
            >
              <Phone className="w-4 h-4 ml-2" />
              اتصل الآن
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-neon-pink hover:bg-neon-pink/10"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-background/98 backdrop-blur-xl border-l-2 border-neon-purple/20">
              <nav className="flex flex-col gap-6 mt-8">
                <a 
                  href="#services" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg py-3 px-4 rounded-xl hover:bg-neon-purple/10 transition-colors text-foreground font-semibold"
                >
                  خدماتنا
                </a>
                <a 
                  href="#offers" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg py-3 px-4 rounded-xl hover:bg-neon-purple/10 transition-colors text-foreground font-semibold"
                >
                  العروض
                </a>
                <a 
                  href="#ratings" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg py-3 px-4 rounded-xl hover:bg-neon-purple/10 transition-colors text-foreground font-semibold"
                >
                  التقييمات
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg py-3 px-4 rounded-xl hover:bg-neon-purple/10 transition-colors text-foreground font-semibold"
                >
                  اتصل بنا
                </a>
                <Button 
                  className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink shadow-lg mt-4 h-14 text-lg"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = "tel:01000000000";
                  }}
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
