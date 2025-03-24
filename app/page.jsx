import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Section2></Section2>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>

      <Footer></Footer>
    </>
  );
}
