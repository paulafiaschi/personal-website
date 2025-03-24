import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
          <h1 className="text-5xl font-bold">Join Me on My YouTube Journey!</h1>
          <p className="text-2xl py-3">
            I recently started my{" "}
            <Link
              href="https://youtube.com/@paufiaschi?si=mo7MuqEqRWjctgLb&sub_confirmation=1"
              target="_blank"
              className="link"
            >
              YouTube channel
            </Link>
            , where I share my experiences as I navigate the exciting world of
            content creation. Subscribe now to follow my journey from the very
            beginning and learn alongside me!
          </p>
          <Link
            href="https://youtube.com/@paufiaschi?si=mo7MuqEqRWjctgLb&sub_confirmation=1"
            target="_blank"
            className="btn btn-accent"
          >
            Subscribe to My Channel
          </Link>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
