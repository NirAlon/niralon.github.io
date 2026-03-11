import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

import Home from "./components/Home";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./index.css";

const SECTIONS = [
  { id: "home", label: "Overview", component: Home },
  { id: "work", label: "Work", component: Work },
  { id: "projects", label: "Projects", component: Projects },
  { id: "contact", label: "Contact", component: Contact },
];

const PROFILE_IMAGES = {
  home: "/prof1.jpg",
  work: "/prof2.jpg",
  projects: "/prof2.jpg",
  contact: "/prof3.jpg",
};

function StageSection({ sectionId, children, scrollDirection }) {
  return (
    <motion.div
      key={sectionId}
      initial={{ opacity: 0, y: scrollDirection === "down" ? 48 : -48, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: scrollDirection === "down" ? -48 : 48, scale: 0.985 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [active, setActive] = useState("home");
  const [scrollDirection, setScrollDirection] = useState("down");
  const scrollSceneRef = useRef(null);
  const lastScrollY = useRef(0);

  const activeSection = useMemo(
    () => SECTIONS.find((section) => section.id === active) || SECTIONS[0],
    [active]
  );

  if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY >= lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress = scrollHeight > 0 ? currentScrollY / scrollHeight : 0;
      document.documentElement.style.setProperty("--frame-angle", `${135 + pageProgress * 120}deg`);
      document.documentElement.style.setProperty("--frame-shift-x", `${20 + pageProgress * 60}%`);
      document.documentElement.style.setProperty("--frame-shift-y", `${80 - pageProgress * 55}%`);

      const scene = scrollSceneRef.current;
      if (!scene) return;

      const sceneTop = scene.offsetTop;
      const sceneHeight = scene.offsetHeight;
      const sceneScrollable = Math.max(sceneHeight - window.innerHeight, 1);
      const rawProgress = (currentScrollY - sceneTop) / sceneScrollable;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      const activeIndex = Math.min(
        SECTIONS.length - 1,
        Math.max(0, Math.round(clampedProgress * (SECTIONS.length - 1)))
      );
      setActive(SECTIONS[activeIndex].id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const scene = scrollSceneRef.current;
    const index = SECTIONS.findIndex((section) => section.id === id);
    if (!scene || index === -1) return;
    const targetTop = scene.offsetTop + index * window.innerHeight;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  const profilePhoto = PROFILE_IMAGES[active] || "/prof1.jpg";
  const ActiveComponent = activeSection.component;

  return (
    <div className="relative min-h-screen">
      <div className="w-full overflow-x-hidden font-sans bg-neutral-200 dark:bg-black transition-colors duration-300">
        <div className="fixed md:hidden top-0 left-0 w-full bg-neutral-100 dark:bg-neutral-900 border-t dark:border-neutral-700 flex justify-around py-2 z-40">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className={`
                cursor-pointer px-3 py-2 rounded-lg font-mono text-xs transition
                ${active === id
                  ? "bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-cyan-200 shadow"
                  : "text-neutral-900 dark:text-cyan-200 hover:bg-neutral-200 dark:hover:bg-neutral-800"}
              `}
            >
              {label}
            </button>
          ))}
          {active === "contact" && (
            <div className="flex gap-1 ml-2">
              <a href="mailto:niralon99@gmail.com" className="p-2 rounded-full border border-blue-400 text-blue-700 hover:bg-blue-700 hover:text-white transition" aria-label="Email" title="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://github.com/NirAlon" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-purple-500 text-purple-700 hover:bg-purple-700 hover:text-white transition" aria-label="GitHub" title="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/niralonse" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-pink-400 text-pink-700 hover:bg-pink-700 hover:text-white transition" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        <nav className="hidden md:flex flex-col gap-4 py-12 px-8 w-72 bg-gradient-to-b from-neutral-100 to-neutral-300 dark:from-neutral-900 dark:to-neutral-800 shadow-lg fixed h-full z-10 items-center transition-colors duration-300">
          <AnimatePresence mode="wait">
            <motion.img
              key={profilePhoto}
              src={profilePhoto}
              alt="Nir Alon"
              className="rounded-full shadow-lg mb-4 w-32 h-32 object-cover"
              initial={{ opacity: 0, y: scrollDirection === "down" ? 40 : -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: scrollDirection === "down" ? -40 : 40 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="mb-8 text-center">
            <div className="font-bold text-purple-700 dark:text-purple-400 text-2xl font-mono">Nir Alon</div>
            <div className="text-neutral-500 dark:text-neutral-400 text-base font-mono">Senior Backend &amp; Platform Engineer</div>
            <div className="text-neutral-400 dark:text-neutral-500 text-sm font-mono flex items-center justify-center mt-2">
              <svg className="w-4 h-4 mr-1 inline-block" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
              United States
            </div>
            <div className="text-neutral-400 dark:text-neutral-500 text-sm font-mono mt-1">
              Tucson, Arizona
            </div>
          </div>
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className={`
                cursor-pointer px-4 py-2 rounded-lg font-medium font-mono transition
                ${active === id
                  ? "bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-cyan-200 shadow"
                  : "text-neutral-900 dark:text-cyan-200 hover:bg-neutral-300 dark:hover:bg-neutral-800"}
              `}
            >
              {label}
            </button>
          ))}
        </nav>

        <div
          ref={scrollSceneRef}
          className="md:ml-72 w-full md:w-[calc(100vw-18rem)]"
          style={{ height: `${SECTIONS.length * 100}vh` }}
        />

        <div className="fixed inset-x-0 top-0 bottom-0 pointer-events-none">
          <div className="md:ml-72 h-full w-full md:w-[calc(100vw-18rem)]">
            <div className="portfolio-scroll h-full w-full flex flex-col items-center pt-8 pb-2 md:pt-0 md:pb-0">
              <div className="gradient-frame content-frame rounded-[30px] p-[4px] shadow-2xl pointer-events-auto">
                <div className="rounded-[26px] bg-neutral-100/95 dark:bg-neutral-900/95 backdrop-blur-sm h-[calc(100vh-3rem)] md:h-[calc(100vh-2rem)] overflow-hidden">
                  <div className="h-full w-full px-4 md:px-8 lg:px-12">
                    <AnimatePresence mode="wait">
                      <StageSection sectionId={activeSection.id} scrollDirection={scrollDirection}>
                        <ActiveComponent />
                      </StageSection>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
