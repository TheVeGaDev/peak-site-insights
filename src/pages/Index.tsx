import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Ratings } from "@/components/Ratings";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-0">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Testimonials />
        <Ratings />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
