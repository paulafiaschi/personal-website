import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Section2></Section2>
      <Newsletter></Newsletter>

      <section>
        <Image
          aria-hidden
          src="/construction.svg"
          alt="construction icon"
          width={50}
          height={50}
        />
        <h2>Site under construction</h2>
        <p className="subheading">
          I've recently changed directions in my career, and I'm building a site
          that reflects that. Apologies for the inconvenciece, come back soon!
        </p>
      </section>

      <Footer></Footer>
    </>
  );
}
