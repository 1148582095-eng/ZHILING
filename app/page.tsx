"use client";

import { useState } from "react";

function getInitialTab(): "pc" | "mt" | "h5" {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam === "pc" || tabParam === "mt" || tabParam === "h5") {
      return tabParam;
    }
    const hash = window.location.hash.replace("#", "");
    if (hash === "pc" || hash === "mt" || hash === "h5") {
      return hash as "pc" | "mt" | "h5";
    }
  }
  return "pc";
}

export default function Home() {
  const [activeTab] = useState<"pc" | "mt" | "h5">(getInitialTab);

  const getUrl = () => {
    switch (activeTab) {
      case "pc":
        return "/prototype.html";
      case "mt":
        return "/mt.html";
      case "h5":
        return "/h5.html";
    }
  };

  const currentUrl = getUrl();

  return (
    <main className="w-screen h-screen overflow-hidden bg-[#edf1f2]">
      <iframe
        src={currentUrl}
        className="w-full h-full border-0 block"
        title="指令流转协同管理平台"
      />
    </main>
  );
}


