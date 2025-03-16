import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            aria-hidden
            src="/hero.png"
            alt="PF icon"
            width={700}
            height={500}
          />
          <div>
            <h1 className="text-5xl font-bold">Hi there!</h1>
            <p className="text-2xl py-3">
              I&apos;m Pau, a{" "}
              <Link
                href="https://www.youtube.com/channel/UCeRr6_UWLnBvRVrFvt9SB1A"
                target="_blank"
                className="link link-accent"
              >
                Youtuber
              </Link>{" "}
              and Web Developer.
              <br></br>I help entrepreneurs boost their digital presence.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <section>
        <h2>Elevate Your Digital Presence with me</h2>
        <p>
          Join me on a journey to enhance your online visibility and success.
          Discover valuable insights and tools tailored for entrepreneurs.
        </p>
        <article className="flex">
          <Card
            title="Explore My YouTube Channel for Insights"
            subh="Check out a bunch of videos packed with handy tips, cool insights, and easy-to-follow tutorials that will boost your knowledge and skills."
            cta="Explore my Channel"
            link="https://www.youtube.com/@PauFiaschi"
          ></Card>
          <Card
            title="Uncover and Delve into My Blog"
            subh="Check out my articles that'll get you fired up about using digital tools for your business and personal growth."
            cta="Read my Blog"
            link="https://www.youtube.com/@PauFiaschi"
          ></Card>
          <Card
            title="Free Resources Available to You"
            subh="Discover all the free templates and favourites that I highlight in my videos to help you elevate your entrepreneurial journey."
            cta="Access Free Resources"
            link="https://www.youtube.com/@PauFiaschi"
          ></Card>
        </article>
      </section>

      <section>
        <h2>Stay Updated with Our Newsletter</h2>
        <p>
          Subscribe now to receive the latest updates, tips, and resources
          directly to your inbox.
        </p>
      </section>
    </>
  );
}
