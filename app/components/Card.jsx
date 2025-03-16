import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  console.log(props);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div>
            <h2 className="text-3xl font-bold">{props.title}</h2>
            <p>{props.subh}</p>
          </div>

          <div className="mt-6">
            <Link
              className="btn btn-primary btn-block"
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
