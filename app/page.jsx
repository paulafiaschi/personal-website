import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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
              className="link link-primary"
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
  );
}
