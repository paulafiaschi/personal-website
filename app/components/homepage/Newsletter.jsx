import Image from "next/image";
import Link from "next/link";
import BeehiivEmbed from "../BeehiivEmbed";

export default function Newsletter() {
  return (
    <section id="newsletter">
      <h2>Join My YouTube Journal</h2>
      <p className="subheading">
        Subscribe to my newsletter for exclusive updates on my YouTube adventure
        and personal insights.
      </p>
      <BeehiivEmbed></BeehiivEmbed>
    </section>
  );
}
