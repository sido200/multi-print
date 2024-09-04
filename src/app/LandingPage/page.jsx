import Slider from "@/components/Slider/Slider";
import "./LandingPage.css";
import DataCard from "@/components/DataCard/DataCard";
import Image from "next/image";
import contactImage from "../../app/assets/contact-image.jpg"
import contactImage2 from "../../app/assets/contact-image2.jpg"
import { Outfit } from "next/font/google";
import ProductSlide from "@/components/ProductSlide/ProductSlide";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";

const outfit = Outfit({ subsets: ["latin"] });
export default function LandingPage() {
  return (
    <main className="landing-page">
      <section id="hero-section">
        <Slider />
      </section>
      <section id="data-section">
        <h2>Read the ticket thoroughly to understand the costumer’s</h2>
        <div className="grid-card">
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
      </section>
      <section id="about-section">
        <div className="left-about">
          <h2>Discovering Design & print Mastery evolution</h2>
          <p>
            Exploring the intersection of vision, innovation, craftmanship,
            provision and performing design & print solutions
          </p>
          <div className="stat">
            <div className="stat-1">
              <h3>+20</h3>
              <p>Ready to use products</p>
            </div>
            <div className="stat-1">
              <h3>99%</h3>
              <p>Customer satisfaction</p>
            </div>
          </div>
          <div className="button">
            <button className={outfit.className}>Contact us</button>
            <button className={outfit.className}>Book a call </button>
          </div>
        </div>
        <div className="right-about">
          <Image src={contactImage} alt="contact-image"/>
        </div>
      </section>
      <section id="product-section">
       <div className="text">
       <h2>Our Latest Products </h2>
       <p>Introducing our latest Print marvel - Pushing boundaries and redefining print excellence  </p>
       </div>
        <ProductSlide/>
      </section>
      <section id="vision-section">
      <div className="left-vision">
          <Image src={contactImage2} alt="vision-image"/>
        </div>
      <div className="right-vision">
          <h2>Multiprint's journey to printing excellence</h2>
          <h3>Vision to reality</h3>
          <p>
          Mulitprint’s remarkable journey in the realm of design and print innovation has consistently steered the company towards a path of unparalleled excellence.
          </p>
          <h3>Creating dreams</h3>
          <p>
          Pioneering innovation, collaborative excellence, and unwavering commitment to transforming vision into timeless realities
          </p>
      
         
        </div>
      
      </section>
      <section id="contact-section">
        <h2>Let’s Build your vision</h2>
        <p>Reach out to us for expert guidance, collaborative design, and tailored to shape your vision into reality</p>
        <div className="button">
            <button className={outfit.className}>Contact us</button>
            <button className={outfit.className}>Book a call </button>
          </div>
      </section>
      <section id="Testimonial-section">
    <h2>Testimonial</h2>
    <h3>What our <span>costumers</span> have to say</h3>
    <TestimonialSlider/>
      </section>
    </main>
  );
}
