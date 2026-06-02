import { useEffect } from "react";

interface VGConfig {
  ID: string;
  region: string;
  render: string;
  stylesheets: string[];
}

declare global {
  interface Window {
    VG_CONFIG?: VGConfig;
  }
}

const ConvoCoreChat = () => {
  useEffect(() => {
    // Prevent double-init
    if (document.getElementById("VG_LIVE_CHAT_WIDGET")) return;

    const container = document.createElement("div");
    container.id = "VG_LIVE_CHAT_WIDGET";
    document.body.appendChild(container);

    window.VG_CONFIG = {
      ID: "7qSQfsz8cGkOxDiXjKuC",
      region: "na",
      render: "bottom-right",
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      container.remove();
      delete window.VG_CONFIG;
    };
  }, []);

  return null;
};

export default ConvoCoreChat;
