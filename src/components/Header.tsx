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
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Crown className="w-10 h-10 text-gold animate-pulse" />
              <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-foreground">
                النسر الذهبي
              </span>
              <span className="text-xs text-gold">خدمات نقل الأثاث</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-primary-foreground hover:text-gold transition-colors rounded-lg hover:bg-primary-light/50"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-primary"
              asChild
            >
              <a
                href="https://wa.me/201116870575"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>واتساب</span>
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-primary shadow-glow"
              asChild
            >
              <a href="tel:01116870575" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>اتصل الآن</span>
              </a>
            </Button>
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
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-primary"
                    asChild
                  >
                    <a
                      href="https://wa.me/201116870575"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>واتساب</span>
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-light text-primary"
                    asChild
                  >
                    <a
                      href="tel:01116870575"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>اتصل الآن</span>
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
