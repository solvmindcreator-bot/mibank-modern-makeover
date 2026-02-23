import { useEffect } from "react";

declare global {
  interface Window {
    VG_CONFIG?: Record<string, unknown>;
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

    try {
      fetch("https://convocore.ai/api/tracking/widget-ping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agentId: "7qSQfsz8cGkOxDiXjKuC",
          region: "na",
          domain: window.location.hostname,
          timestamp: Date.now(),
        }),
        keepalive: true,
      }).catch(() => {});
    } catch (_e) { /* noop */ }

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
