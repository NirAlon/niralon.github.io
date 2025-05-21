import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";


export default function Contact() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if the user's OS/browser prefers dark mode
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDark = () => setIsDark(media.matches);
    updateDark();
    media.addEventListener("change", updateDark);
    return () => media.removeEventListener("change", updateDark);
  }, []);
  return (
    <section className="flex flex-col items-center gap-4 text-center py-32 min-h-[60vh]">
      <div className="flex items-center justify-center w-full mb-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-cyan-200 font-mono text-center">
          Let’s make time to talk!
        </h1>
      </div>
      <div className="w-full max-w-3xl mx-auto rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-xl">
        <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-10 flex flex-col items-center">
          <InlineWidget
            url="https://calendly.com/niralon99/30min"
            styles={{ height: "700px", width: "100%", minWidth: "320px" }}
            pageSettings={
              isDark
              ?{
                backgroundColor: "#262626", // Tailwind dark: bg-neutral-800
                primaryColor: "06b6d4", // cyan-400
                textColor: "#F3F4F4", // near-neutral-100
              }
              :{
                    backgroundColor: "#F5F5F5", // Tailwind bg-neutral-100
                    primaryColor: "7c3aed", // purple-600
                    textColor: "#262626", // neutral-800
              }
            
            
            }
          />
        </div>
      </div>
    </section>
  );
}
