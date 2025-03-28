import GuideHero from "./GuideHero";
import Image from "next/image";

export default function BulletPoint(props) {
  return (
    <>
      {" "}
      <div className="bullet-point">
        <Image
          aria-hidden
          src="/check.svg"
          alt="checkmark icon"
          width={30}
          height={30}
        />
        <p>{props.text}</p>
      </div>
    </>
  );
}
