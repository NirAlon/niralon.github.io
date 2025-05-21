import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, Element, Events } from "react-scroll";
import { motion, useInView, AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import Projects from "./components/Projects"
import Contact from "./components/Contact";

import './index.css';

function AnimatedSection({ id, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center gap-4 text-center min-h-[60vh]"
    >
      {children}
    </motion.section>
  );
}

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];


// Profile images per section
const PROFILE_IMAGES = {
  home: "/prof1.jpg",
  projects: "/prof2.jpg",
  contact: "/prof3.jpg"
};

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", function () { });
    Events.scrollEvent.register("end", function () { });
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;
      const offsets = SECTIONS.map(({ id }) => {
        const elem = document.getElementById(id);
        if (!elem) return { id, offset: 0 };
        const rect = elem.getBoundingClientRect();
        return { id, offset: Math.abs(rect.top) };
      });
      const min = offsets.reduce(
        (prev, curr) => (curr.offset < prev.offset ? curr : prev),
        offsets[0]
      );
      setActive(min.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Get the profile photo for the current section
  const profilePhoto = PROFILE_IMAGES[active] || "/prof1.jpg";

  return (
    <div className="flex min-h-screen font-sans bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
      {/* Sidebar Navigation */}
      <nav className="
  hidden md:flex flex-col gap-4 py-12 px-8 w-72
  bg-gradient-to-b from-neutral-100 to-neutral-300
  dark:from-neutral-900 dark:to-neutral-800
  shadow-lg fixed h-full z-10 items-center
  transition-colors duration-300
">
        <AnimatePresence mode="wait">
          <motion.img
            key={profilePhoto}
            src={profilePhoto}
            alt="Nir Alon"
            className="rounded-full shadow-lg mb-4 w-32 h-32 object-cover"
            initial={{
              opacity: 0,
              y: scrollDirection === "down" ? 40 : -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: scrollDirection === "down" ? -40 : 40,
            }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="mb-8 text-center">
          <div className="font-bold text-purple-700 dark:text-purple-400 text-2xl font-mono">Nir Alon</div>
          <div className="text-neutral-500 dark:text-neutral-400 text-base font-mono">Softwar Engineer</div>
        </div>
        {SECTIONS.map(({ id, label }) => (
          <ScrollLink
            key={id}
            to={id}
            smooth={true}
            duration={500}
            offset={-24}
            className={`
        cursor-pointer px-4 py-2 rounded-lg font-medium font-mono transition
        ${active === id
                ? "bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-cyan-200 shadow"
                : "text-neutral-900 dark:text-cyan-200 hover:bg-neutral-300 dark:hover:bg-neutral-800"}
      `}
          >
            {label}
          </ScrollLink>
        ))}
        <AnimatePresence>
          {active === "contact" && (
            <motion.div
              key="contact-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex gap-4 mt-4"
            >
              <a
                href="https://github.com/NirAlon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-purple-500 dark:border-cyan-300 text-purple-700 dark:text-cyan-200 font-mono font-medium hover:bg-purple-700 hover:text-white dark:hover:bg-cyan-700 dark:hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/niralonse"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-pink-400 dark:border-cyan-300 text-pink-700 dark:text-cyan-200 font-mono font-medium hover:bg-pink-700 hover:text-white dark:hover:bg-cyan-700 dark:hover:text-white transition"
              >
                LinkedIn
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      {/* Page Content */}
      <div className="flex-1 flex flex-col items-center ml-0 md:ml-72 pt-8 md:pt-0">
        <Element name="home" id="home" className="w-full max-w-3xl">
          <AnimatedSection id="home">
            <Home />
          </AnimatedSection>
        </Element>

        <Element name="projects" id="projects" className="w-full max-w-3xl">
          <AnimatedSection id="projects">
            <Projects />
          </AnimatedSection>
        </Element>


        <Element name="contact" id="contact" className="w-full max-w-3xl">
          <AnimatedSection id="contact">
            <Contact />
          </AnimatedSection>
        </Element>
      </div>
    </div>
  );
}

export default App;
