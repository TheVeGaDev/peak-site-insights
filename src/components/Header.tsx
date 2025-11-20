import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Phone, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "الرئيسية", href: "#hero" },
  { name: "خدماتنا", href: "#services" },
  { name: "كيف نعمل", href: "#process" },
  { name: "لماذا نحن", href: "#why-us" },
  { name: "التقييمات", href: "#ratings" },
  { name: "اتصل بنا", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Crown className="w-10 h-10 text-gold" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-foreground">النسر الذهبي</span>
              <span className="text-xs text-gold font-semibold">نقل الأثاث</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-5 py-3 text-foreground hover:text-gold-shine transition-all duration-300 rounded-xl hover:bg-gold-1/10 font-bold text-base hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:01116870575"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-all font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>م. محمود مدحت</span>
            </a>
            <a
              href="tel:01559887180"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-all font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>م. يوسف حسن</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-6 border-b border-border">
                  <Crown className="w-8 h-8 text-gold" />
                  <div>
                    <div className="text-xl font-bold">النسر الذهبي</div>
                    <div className="text-sm text-muted-foreground">
                      خدمات نقل الأثاث
                    </div>
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="px-4 py-3 text-right hover:bg-muted rounded-lg transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-6 border-t border-border">
                  <a
                    href="tel:01116870575"
                    className="flex items-center justify-center gap-2 text-gold hover:text-gold-light transition-all duration-300 font-semibold py-3 border border-gold rounded-lg hover:scale-105"
                  >
                    <Phone className="w-5 h-5 animate-pulse" />
                    <span>م. محمود مدحت</span>
                  </a>
                  <a
                    href="tel:01559887180"
                    className="flex items-center justify-center gap-2 text-gold hover:text-gold-light transition-all duration-300 font-semibold py-3 border border-gold rounded-lg hover:scale-105"
                  >
                    <Phone className="w-5 h-5 animate-pulse" />
                    <span>م. يوسف حسن</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
