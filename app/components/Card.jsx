import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  console.log(props);
  return (
    <>
      <div className="card w-96  shadow-sm">
        <div className="card-body">
          <div>
            <Image
              aria-hidden
              src={`/${props.icon}.svg`}
              alt={`${props.icon}`}
              width={50}
              height={50}
            />
            <h3>{props.title}</h3>
            <p>{props.subh}</p>
          </div>

          <div className="mt-6">
            <Link
              className="btn btn-soft btn-accent btn-block"
              href={`${props.link}`}
              target="blank"
            >
              {props.cta}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
