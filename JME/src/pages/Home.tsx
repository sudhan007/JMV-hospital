import NavBar from "../components/NavBar";
import Bg from "../assets/banner.jpeg";
import FeaturedProducts from "../pages/FeaturedProducts";
import About from "../pages/About";
import Cards from "../pages/Cards";
import NewProducts from "../pages/NewProducts";
import OurProducts from "../pages/OurProducts";
import Footer from "../pages/Footer";
import { useRef } from "react";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const sectionMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      home: homeRef,
      about: aboutRef,
      shop: shopRef,
      contact: contactRef,
    };

    sectionMap[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <div ref={homeRef} className="relative pt-20">
  {/* Image Section */}
  <div className="h-[400px] md:h-[600px] w-full">
    <img src={Bg} alt="" className="object-cover opacity-90 h-full w-full" />
  </div>

  {/* Text Overlay Section */}
  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center md:justify-start px-4 md:px-12">
  <div className="text-center md:text-left space-y-6 md:space-y-10">
    <p className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-[0_8px_10px_rgba(0,0,0,1)]">
      One-stop Solution
    </p>
    <p className="text-xl md:text-4xl font-bold text-white drop-shadow-[0_8px_10px_rgba(0,0,0,1)]">
      for all Wound Management Needs
    </p>
    <div className="mt-6 md:mt-10">
      <button className="border drop-shadow-[0_8px_10px_rgba(0,0,0,1)] text-white px-6 py-2 md:px-8 md:py-3 rounded hover:bg-blue-500 hover:transition-all hover:scale-110 duration-300">
        Explore
      </button>
    </div>
  </div>
</div>


</div>
      <Cards />
      <FeaturedProducts />
      <About  />
      <div ref={aboutRef}>
      <NewProducts />
      </div>
      <OurProducts />
      <div ref={contactRef}>
      <Footer />
      </div>
    
    </>
  );
}

export default App;
