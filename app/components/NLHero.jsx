import Image from "next/image";
import Link from "next/link";

export default function NLHero() {
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
          <p>Free Bi-weekly</p>
          <h1 className="text-5xl font-bold">YouTube Insights</h1>
          <p className="text-2xl py-3">
            Join <b>My YouTube Journal</b> - my free bi-weekly newsletter where
            I share my thoughts, challenges and learnings from my YouTube
            journey.
          </p>
        </div>
      </div>
    </div>
  );
}
