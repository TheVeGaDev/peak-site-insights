import { Crown, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-8 h-8 text-gold" />
              <div>
                <div className="text-2xl font-bold">النسر الذهبي</div>
                <div className="text-sm text-gold">خدمات نقل الأثاث</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              الشركة الرائدة في مجال نقل الأثاث بمدينة نصر والقاهرة الكبرى.
              نقدم خدمات احترافية مع ضمان السلامة الكاملة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {[
                { name: "الرئيسية", href: "#hero" },
                { name: "خدماتنا", href: "#services" },
                { name: "كيف نعمل", href: "#process" },
                { name: "التقييمات", href: "#ratings" },
                { name: "اتصل بنا", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>نقل الأثاث المنزلي</li>
              <li>نقل المكاتب والشركات</li>
              <li>فك وتركيب الأثاث</li>
              <li>التغليف والتخزين</li>
              <li>نقل الأجهزة المنزلية</li>
              <li>التأمين الشامل</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <a
                href="tel:01116870575"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors group"
              >
                <div className="bg-primary-foreground/10 p-2 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">01116870575</span>
              </a>
              <a
                href="mailto:info@goldeneagle.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors group"
              >
                <div className="bg-primary-foreground/10 p-2 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@goldeneagle.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <div className="bg-primary-foreground/10 p-2 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">مدينة نصر، القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} النسر الذهبي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-gold transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
