import NLHero from "../components/NLHero";
import Posts from "../components/Posts";

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
