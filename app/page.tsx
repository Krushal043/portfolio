import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Portfolio from "@/components/portfolio/Portfolio";
import Qualifications from "@/components/qualifications/Qualifications";
import Services from "@/components/services/Services";
import Specialties from "@/components/Specialties/Specialties";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="specialties">
        <Specialties />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="qualifications">
        <Qualifications />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
