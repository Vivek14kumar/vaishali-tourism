"use client";
import { useEffect, useState } from "react";

export default function MobileTooltip() {
  const [visible, setVisible] = useState(true);

  // Auto-hide after 5 seconds (you can change the time)
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-gray-400 text-white text-center text-sm py-2 px-3 md:hidden flex justify-between items-center">
      <span> Tip: For best experience, open on desktop or tablet.</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-3 text-white font-bold"
      >
        ×
      </button>
    </div>
  );
}
