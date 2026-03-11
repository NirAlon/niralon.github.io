export default function Contact() {
  return (
    <section className="portfolio-panel flex flex-col items-center gap-6 justify-center">
      <div className="w-full max-w-4xl p-8 md:p-10 flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-cyan-200 font-mono">
          Let’s make time to talk
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-neutral-700 dark:text-neutral-200 font-mono leading-relaxed">
          Open to conversations about backend engineering, platform architecture,
          application security, and building reliable systems under real production constraints.
        </p>

        <div className="grid w-full max-w-3xl gap-4 md:grid-cols-3">
          <a
            href="https://calendly.com/niralon99/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-purple-500 px-6 py-5 font-mono text-purple-700 dark:text-cyan-200 hover:bg-purple-600 hover:text-white dark:hover:bg-cyan-600 transition text-center"
          >
            Book 30 min
          </a>
          <a
            href="mailto:niralon99@gmail.com"
            className="rounded-2xl border border-blue-500 px-6 py-5 font-mono text-blue-700 dark:text-cyan-200 hover:bg-blue-600 hover:text-white transition text-center"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/niralonse"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-pink-500 px-6 py-5 font-mono text-pink-700 dark:text-cyan-200 hover:bg-pink-600 hover:text-white transition text-center"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
