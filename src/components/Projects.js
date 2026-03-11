const TAG_COLORS = {
  "Machine Learning": "bg-purple-800 text-purple-200",
  "TensorFlow Lite": "bg-purple-800 text-purple-200",
  "Cybersecurity": "bg-pink-900 text-pink-200",
  "XSS": "bg-pink-900 text-pink-200",
  "SQLi": "bg-pink-900 text-pink-200",
  "Python": "bg-yellow-800 text-yellow-200",
  "FastAPI": "bg-yellow-800 text-yellow-200",
  "gRPC": "bg-yellow-800 text-yellow-200",
  "Go": "bg-yellow-800 text-yellow-200",
  "LangGraph": "bg-purple-800 text-purple-200",
  "Open Source": "bg-cyan-900 text-cyan-200",
  "API": "bg-cyan-900 text-cyan-200",
};

const projectGroups = [
  {
    title: "Open Source",
    eyebrow: "Community Contribution",
    items: [
      {
        title: "tmc/langgraphgo contribution",
        summary:
          "Extended langgraphgo with conditional edge support for state-based routing in graph execution.",
        details: [
          "Added the routing model, invalid-condition error handling, and test coverage for conditional graph execution.",
          "Validated the fork in a real consumer project instead of treating it as an isolated patch.",
          "Planned next steps include iteration limits, reducers, and parallel fan-out/fan-in execution for safer production workflows.",
        ],
        link: "https://github.com/NirAlon/langgraphgo",
        linkLabel: "Source Code",
        tags: ["Open Source", "LangGraph", "Go", "API"],
      },
      {
        title: "Machine-Learning Web Application Firewall",
        summary:
          "A public security project that shows how I design API-first protection layers around ML-based detection for XSS and SQL injection.",
        details: [
          "Built a modular service around machine-learning threat detection instead of a one-off demo.",
          "Used it to demonstrate practical security boundaries, deployable components, and integration into broader application infrastructure.",
        ],
        link: "https://github.com/NirAlon/WafProject",
        linkLabel: "Source Code",
        tags: ["Machine Learning", "TensorFlow Lite", "Cybersecurity", "XSS", "SQLi", "Python", "FastAPI", "gRPC", "API"],
      },
    ],
  },
];

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`${TAG_COLORS[tag] || "bg-neutral-400 text-neutral-900"} px-3 py-1 rounded-full text-xs font-semibold font-mono`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ item }) {
  const linkClasses = item.link
    ? "rounded-full border border-purple-500 px-5 py-2 text-sm md:text-base text-purple-700 dark:text-cyan-300 font-mono hover:bg-purple-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition shadow-sm"
    : "rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2 text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-mono";

  return (
    <div className="rounded-2xl border border-neutral-300 dark:border-neutral-700 p-6 md:p-8 flex flex-col gap-5 text-left">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 font-mono">
          {item.title}
        </h3>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            {item.linkLabel}
          </a>
        ) : (
          <span className={linkClasses}>{item.linkLabel}</span>
        )}
      </div>

      <p className="text-lg md:text-xl text-neutral-900 dark:text-neutral-100 font-mono leading-relaxed text-left">
        {item.summary}
      </p>

      <div className="grid gap-3 text-left">
        {item.details.map((detail) => (
          <p
            key={detail}
            className="text-neutral-800 dark:text-neutral-100 font-mono leading-relaxed border-l-2 border-purple-500 pl-4"
          >
            {detail}
          </p>
        ))}
      </div>

      <TagList tags={item.tags} />
    </div>
  );
}

export default function Projects() {
  return (
    <section className="portfolio-panel flex flex-col items-center gap-8 justify-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
        {projectGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-5">
            <div className="flex flex-wrap items-end gap-3 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-cyan-200 font-mono leading-none">
                {group.title}
              </h2>
              <p className="pb-1 text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-mono">
                {group.eyebrow}
              </p>
            </div>

            <div className="grid gap-5">
              {group.items.map((item) => (
                <ProjectCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
