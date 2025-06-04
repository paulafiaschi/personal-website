"use client";
import { useEffect } from "react";

const KitEmbed = () => {
  useEffect(() => {
    const scriptId = "kit-embed-script";
    if (document.getElementById(scriptId)) {
      return; // Avoid inserting the script again
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://paufiaschi.kit.com/5d0cc8f0fa/index.js";
    script.async = true;
    script.setAttribute("data-uid", "5d0cc8f0fa");

    const target = document.getElementById("newsletter");
    if (target) {
      target.appendChild(script);
    }

    // Don't remove the script; let it persist
  }, []);

  return null;
};

export default KitEmbed;
