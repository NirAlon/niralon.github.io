export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 text-center py-32 min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-cyan-200 mb-6 font-mono">
        Hi, I’m Nir Alon{" "}
        <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
      </h1>

      {/* Editor-inspired badges */}
      <div className="flex flex-wrap gap-2 justify-center mb-2">
        <span className="bg-purple-800 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold font-mono">Cloud &amp; DevOps</span>
        <span className="bg-yellow-800 text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold font-mono">Automation</span>
        <span className="bg-pink-900 text-pink-200 px-3 py-1 rounded-full text-xs font-semibold font-mono">Cybersecurity</span>
        <span className="bg-cyan-900 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold font-mono">Machine Learning</span>
      </div>

      {/* Gradient border for About Me */}
      <div className="w-full max-w-3xl mx-auto rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-2xl my-12">
        <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-12 text-left">
          <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 font-mono">
            About me:
          </h3>
          <p className="text-lg text-neutral-800 dark:text-neutral-100 text-justify font-mono">
            Ever since I was a kid, I’ve been captivated by the sounds and mysteries of computers—the whirr of a CD-ROM, the tick of a hard drive, the unforgettable buzz of a dial-up modem. While being a pilot remains a dream, becoming a computer and programming expert is the part that came true.
            <br /><br />
            Today, I’m passionate about building secure, reliable, and impactful solutions that keep systems running smoothly. I thrive in fast-paced environments where I can tackle challenging issues, from complex Kubernetes pod crashes to cross-region connectivity puzzles. I enjoy working hands-on with detailed logging and advanced monitoring to ensure everything runs seamlessly and users get the best experience possible.
            <br /><br />
            My strengths include designing end-to-end automation with integrated linting, security scans, and workflow optimization. I take pride in quickly diagnosing and resolving production incidents, and I’m constantly looking for new ways to innovate and grow.
            <br /><br />
            If you’re interested in learning more about my work, collaborating, or just want to talk tech, feel free to connect—I’m always open to new ideas and great conversations!
          </p>
        </div>
      </div>
    </section>
  );
}
