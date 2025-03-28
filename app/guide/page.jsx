import BeehiivGuideEmbed from "../components/BeehiivGuideEmbed";
import BulletPoint from "../components/guide/BulletPoint";
import GuideHero from "../components/guide/GuideHero";

export default function guide() {
  return (
    <>
      <GuideHero></GuideHero>

      <section className="guide-benefits">
        <h2>What will you find on this guide?</h2>
        <p className="mt-5 mb-5">
          This FREE guide has all the <b>answers</b> to the questions I had
          before and during my first month as a YouTuber. After watching{" "}
          <b>hundreds</b> of YouTube videos and taking paid courses, I&apos;ve
          distilled everything into one place.
        </p>
        <p> With this guide you will be able to:</p>
        <article className="benefits">
          <BulletPoint text="Pick your first video idea & start"></BulletPoint>
          <BulletPoint text="Craft click-worthy titles & thumbnails"></BulletPoint>
          <BulletPoint text="Script for clarity & engagement"></BulletPoint>
          <BulletPoint text="Build camera confidence"></BulletPoint>
          <BulletPoint text="Simple gear & setup tips"></BulletPoint>
          <BulletPoint text="Filming & editing essentials"></BulletPoint>
          <BulletPoint text="Upload & optimise your video"></BulletPoint>
          <BulletPoint text="Stay consistent & improve"></BulletPoint>
          <BulletPoint text="Bonus: 10 must-read books for YouTubers"></BulletPoint>
        </article>
      </section>

      <section class="highlight">
        <div className="highlight-card">
          <h2 className="mb-5">Get the FREE Guide and Start Your Journey</h2>
          <BeehiivGuideEmbed></BeehiivGuideEmbed>
        </div>
      </section>
    </>
  );
}
