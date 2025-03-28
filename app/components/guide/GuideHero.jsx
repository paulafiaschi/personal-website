import Image from "next/image";
import Link from "next/link";
import BeehiivEmbed from "../BeehiivEmbed";
import BeehiivGuideEmbed from "../BeehiivGuideEmbed";

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
          <h1 className="text-5xl font-bold">
            Ready to Start Your YouTube Journey?
          </h1>
          <p className="text-2xl py-3">
            Download the FREE step-by-step guide to confidently creating,
            filming, editing, and uploading your first YouTube video with ease.
          </p>
          <BeehiivGuideEmbed></BeehiivGuideEmbed>
        </div>
      </div>
    </div>
  );
}
