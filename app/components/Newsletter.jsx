import Image from "next/image";
import Link from "next/link";
import BeehiivEmbed from "./BeehiivEmbed";

export default function Newsletter() {
  return (
    <section id="newsletter">
      <h2>Join My YouTube Journal</h2>
      <p className="subheading">
        Subscribe to my newsletter for exclusive updates on my YouTube adventure
        and personal insights.
      </p>
      <BeehiivEmbed></BeehiivEmbed>

      <p className="caveat">
        By submitting this form, you’ll be signed up to my free newsletter. I
        may also send you other emails about my courses. You can opt-out at any
        time.
      </p>
    </section>
  );
}
