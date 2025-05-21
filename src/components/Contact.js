export default function Contact() {
  return (
    <section className="flex flex-col items-center gap-4 text-center py-32 min-h-[60vh]">
      <h2 className="text-3xl font-bold text-purple-700 dark:text-cyan-200 mb-2 font-mono">Contact</h2>
      <p className="text-lg text-neutral-700 dark:text-neutral-200 font-mono mb-2">
        Let’s connect!
      </p>
      <a
        href="mailto:niralon@gmail.com"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
          text-white font-mono font-semibold text-lg shadow hover:from-cyan-500 hover:to-pink-500 transition"
      >
        Email Me
      </a>
      <div className="flex gap-4 mt-4">
        <a
          href="https://github.com/NirAlon"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full border border-purple-500 dark:border-cyan-300 text-purple-700 dark:text-cyan-200 font-mono font-medium hover:bg-purple-700 hover:text-white dark:hover:bg-cyan-700 dark:hover:text-white transition"
        >
          GitHub
        </a>
        {/* Add more links here */}
        <a
          href="https://www.linkedin.com/in/niralonse"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full border border-pink-400 dark:border-cyan-300 text-pink-700 dark:text-cyan-200 font-mono font-medium hover:bg-pink-700 hover:text-white dark:hover:bg-cyan-700 dark:hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
