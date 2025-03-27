import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

export default function Section2() {
  return (
    <section>
      <h2>Key Milestones in My YouTube Adventure</h2>
      <p className="subheading">
        Embarking on my YouTube journey has been transformative. Each step has
        taught me invaluable lessons about creativity and persistence.
      </p>
      <article className="grid">
        <Card
          title="First Video: Overcoming Fear of Filming"
          subh="My first video was a leap into the unknown, pushing me to confront my fears."
          cta="Explore my Channel"
          link="https://www.youtube.com/@PauFiaschi"
          icon="youtube"
        ></Card>
        <Card
          title="Developing Skills for Effective Delivery"
          subh="Improving public speaking skills can be incredibly rewarding and motivating."
          cta="Read my Blog"
          link="https://www.youtube.com/@PauFiaschi"
          icon="talk"
        ></Card>
        <Card
          title="Learning the Art of Editing Videos"
          subh="Learning video editing has already enhanced my storytelling skills."
          cta="Access Free Resources"
          link="https://www.youtube.com/@PauFiaschi"
          icon="film"
        ></Card>
      </article>
      <Link
        href="https://youtube.com/@paufiaschi?si=mo7MuqEqRWjctgLb&sub_confirmation=1"
        target="_blank"
        className="btn btn-large btn-accent"
      >
        Subscribe to My Channel
      </Link>
    </section>
  );
}
