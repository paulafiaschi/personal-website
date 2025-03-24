import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <Image
          src="/Stars.svg"
          alt="stars icons"
          width={100}
          height={50}
        ></Image>
        <h3>
          "Watching you get out of your comfort zone has been inspiring. Your
          honesty and dedication are truly motivating!"
        </h3>
        <div className="author">
          <Image
            src="/Stars.svg"
            alt="stars icons"
            width={100}
            height={50}
          ></Image>
          <div className="author-text">
            <p className="name">Cristina Ortega</p>
            <p className="title">My mum</p>
          </div>
        </div>
      </section>
    </>
  );
}
