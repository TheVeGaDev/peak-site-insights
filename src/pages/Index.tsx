import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Offers } from "@/components/Offers";
import { Gallery } from "@/components/Gallery";
import { Ratings } from "@/components/Ratings";
import { ServiceMap } from "@/components/ServiceMap";
import { FAQ } from "@/components/FAQ";
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
        <Offers />
        <Gallery />
        <Ratings />
        <ServiceMap />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
