import Image from "next/image";
import Link from "next/link";
import BeehiivEmbed from "./BeehiivEmbed";

export default function Newsletter() {
  return (
    <section>
      <h2>Join My YouTube Journal</h2>
      <p className="subheading">
        Subscribe to my newsletter for exclusive updates on my YouTube adventure
        and personal insights.
      </p>
      <BeehiivEmbed></BeehiivEmbed>

      <p>By clicking Sign Up, you agree to our Terms and Conditions.</p>
    </section>
  );
}
