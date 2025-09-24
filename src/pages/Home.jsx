import ClassesSection from "../components/AllCourse";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceSection from "../components/ServiceSection";
import Testimonials from "../components/Testimonials";
import About from "./About";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* Add id attributes to match navbar links */}
      <section id="home">
        <Hero />
      </section>
      <section id="service">
        <ServiceSection />
      </section>
      <section id="allcourse">
        <ClassesSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
    // <div className="">
    //   <Navbar />
    //   <Hero />
    //   <ServiceSection />
    //   <Course />
    //   <About />
    //   <Footer />
    // </div>
  );
}
