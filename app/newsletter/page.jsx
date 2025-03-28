import NLHero from "../components/newsletter/NLHero";
import Posts from "../components/newsletter/Posts";

export default function Newsletter() {
  return (
    <>
      <NLHero></NLHero>

      <section>
        <h2>Read past issues of My YouTube Journal</h2>
        <Posts></Posts>
      </section>
    </>
  );
}
