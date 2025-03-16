import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-accent text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <Link href={"#"}>
          <Image
            aria-hidden
            src="/PF.svg"
            alt="PF icon"
            width={50}
            height={50}
          />
        </Link>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end place-self-center">
        <Link href={"https://www.youtube.com/@PauFiaschi"} target="blank">
          <p>Watch my Channel</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </Link>
      </nav>
    </footer>
  );
}
