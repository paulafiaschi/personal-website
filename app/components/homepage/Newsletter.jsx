import Image from "next/image";
import Link from "next/link";
import BeehiivEmbed from "../BeehiivEmbed";
import KitEmbed from "../KitEmbed";

export default function Newsletter() {
  return (
    <>
      <section id="newsletter">
        <KitEmbed></KitEmbed>
      </section>
    </>
  );
}
