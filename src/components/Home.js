export default function Home() {
  return (
    <section className="portfolio-panel flex flex-col items-center gap-6 text-center justify-center">
      <div className="w-full p-10 md:p-12 flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-cyan-200 font-mono max-w-5xl">
          Secure Platform Architect for Distributed Systems
        </h1>

        <p className="max-w-4xl text-lg md:text-xl text-neutral-700 dark:text-neutral-200 font-mono leading-relaxed">
          I specialize in distributed systems, microservices architecture, and
          cloud-native platforms, with a security-first mindset grounded in clear
          execution boundaries, identity-aware access, and strong observability.
          My work is hands-on and end to end, spanning Go backend services,
          container-orchestrated internal platforms, CI/CD workflows, and queue-driven
          realtime systems. I am usually the engineer teams rely on to remove
          bottlenecks, improve concurrency and production reliability, and make
          secure systems easier to ship and operate at scale.
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          <span className="bg-purple-800 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold font-mono">Distributed Systems</span>
          <span className="bg-yellow-800 text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold font-mono">Platform Engineering</span>
          <span className="bg-pink-900 text-pink-200 px-3 py-1 rounded-full text-xs font-semibold font-mono">Application Security</span>
          <span className="bg-cyan-900 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold font-mono">Cloud Infrastructure</span>
          <span className="bg-neutral-800 text-neutral-100 px-3 py-1 rounded-full text-xs font-semibold font-mono">Production Reliability</span>
        </div>
      </div>
    </section>
  );
}
