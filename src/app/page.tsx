import About from "@/components/HomeComponents/About";
import Contact from "@/components/HomeComponents/Contact";
import Hero from "@/components/HomeComponents/Hero";
import Projects from "@/components/HomeComponents/Projects";
import Resume from "@/components/HomeComponents/Resume";
import Footer from "@/components/utils/Footer";
import Navbar from "@/components/utils/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 bg-[#141819] text-[#ddd]">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
