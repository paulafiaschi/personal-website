import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar fixed top-0 right-0 left-0">
        <div className="flex-1">
          <Link href={"/"}>
            <Image
              aria-hidden
              src="/PF.svg"
              alt="PF icon"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <Link href={"/"}>Home</Link>
            </li> */}
            {/* <li>
              <Link href={"/guide"}>Free Resources</Link>
            </li> */}
            <li>
              <Link
                href={"https://paufiaschi.kit.com/ytjournal"}
                target="_blank"
                className="btn btn-accent"
              >
                ✍️ Join My Newsletter
              </Link>
            </li>
            {/* <li>
              <details>
                <summary>Resources</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href={"#"}>Templates</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Book Recommendations</Link>
                  </li>
                </ul>
              </details>
            </li> */}
            {/* <li>
              <Link href={"#"}>Contact</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
