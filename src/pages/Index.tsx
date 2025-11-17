import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Ratings } from "@/components/Ratings";
import { RatingForm } from "@/components/RatingForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Ratings />
        <RatingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
