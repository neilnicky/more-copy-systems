import { Brands } from "@/components/Brands";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/products/Products";
import GoogleReview from "@/components/GoogleReview";
import BajajFin from "@/components/BajajFin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grainy-light">
      <Hero />
      <About title={"About Us"} />
      <BajajFin />
      <Products />
      <Brands />
      <GoogleReview />
      <Contact />
      <Footer />
    </div>
  );
}
