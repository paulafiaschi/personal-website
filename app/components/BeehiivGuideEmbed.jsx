"use client";
import { useEffect, useState } from "react";

const BeehiivGuideEmbed = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering on the server

  return (
    <>
      <iframe
        src="https://embeds.beehiiv.com/d2219c99-fd31-42fe-b32e-aa0dd14f2f45?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
        style={{
          margin: 0,
          borderRadius: "4px",
          background: "none",
        }}
      ></iframe>
      <p className="caveat">
        By submitting this form, you’ll be signed up to my free newsletter. I
        may also send you other emails about my courses. You can opt-out at any
        time.
      </p>
    </>
  );
};

export default BeehiivGuideEmbed;
