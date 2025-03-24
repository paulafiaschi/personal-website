"use client";
import { useEffect, useState } from "react";

const BeehiivEmbed = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering on the server

  return (
    <iframe
      src="https://embeds.beehiiv.com/99b90ddb-a1e8-460c-8011-17cc85ab6ea6?slim=true"
      data-test-id="beehiiv-embed"
      height="52"
      frameBorder="0"
      scrolling="no"
      style={{ margin: 0, borderRadius: "0px", backgroundColor: "transparent" }}
    ></iframe>
  );
};

export default BeehiivEmbed;
