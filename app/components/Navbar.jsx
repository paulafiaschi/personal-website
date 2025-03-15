import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar fixed">
      <Link href={"#"}>
        <Image
          aria-hidden
          src="/PF.svg"
          alt="PF icon"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}
