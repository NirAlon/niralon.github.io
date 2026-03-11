import { useState } from "react";

const TAG_COLORS = {
  "Distributed Systems": "bg-purple-800 text-purple-200",
  "Platform Engineering": "bg-purple-800 text-purple-200",
  "Execution Boundaries": "bg-pink-900 text-pink-200",
  "Observability": "bg-pink-900 text-pink-200",
  "Authentication": "bg-yellow-800 text-yellow-200",
  "Authorization": "bg-yellow-800 text-yellow-200",
  "RBAC": "bg-yellow-800 text-yellow-200",
  "Realtime Systems": "bg-cyan-900 text-cyan-200",
  "Build Pipelines": "bg-cyan-900 text-cyan-200",
  "Microservices": "bg-cyan-900 text-cyan-200",
  "Scalability": "bg-cyan-900 text-cyan-200",
  "Cybersecurity": "bg-pink-900 text-pink-200",
  "Architecture Reviews": "bg-neutral-800 text-neutral-100",
  "Cloud Infrastructure": "bg-cyan-900 text-cyan-200",
  "Operations": "bg-neutral-800 text-neutral-100",
  "Defense Systems": "bg-pink-900 text-pink-200",
  "Testing": "bg-yellow-800 text-yellow-200",
  "Software Engineering": "bg-purple-800 text-purple-200",
  "Cybersecurity Minor": "bg-pink-900 text-pink-200",
  "Electronics": "bg-yellow-800 text-yellow-200",
};

const timelineItems = [
  {
    slug: "appik",
    year: "2025",
    range: "2025 - Present",
    company: "Appik",
    timelineLabel: "Founding Engineer",
    title: "Founding Engineer",
    type: "Experience",
    description:
      "Architected the backend platform that converts natural-language intent into deployable applications, with controlled execution boundaries across distributed services.",
    highlights: [
      "Designed backend APIs and service boundaries for production-ready build flows.",
      "Built autonomous recovery pipelines for compiler failures and targeted remediation.",
      "Implemented authentication, authorization, and role-based access for sensitive operations.",
      "Designed realtime communication paths for high-concurrency service synchronization.",
    ],
    link: "https://apps.apple.com/us/app/appik-build-apps-earn-money/id6755661882",
    linkLabel: "Appik on the App Store",
    tags: ["Distributed Systems", "Platform Engineering", "Execution Boundaries", "Authentication", "Authorization", "RBAC", "Realtime Systems", "Build Pipelines"],
  },
  {
    slug: "appdome",
    year: "2022",
    range: "2022 - 2025",
    company: "Appdome",
    timelineLabel: "Infrastructure Engineer",
    title: "Infrastructure Engineer",
    type: "Experience",
    description:
      "Led infrastructure and architecture work that improved isolation, scalability, and maintainability across a cybersecurity platform.",
    highlights: [
      "Drove microservices transformation that reduced coupling and improved deployment reliability.",
      "Designed high-concurrency processing flows for better throughput under production load.",
      "Provided architectural guidance and design reviews that improved engineering velocity.",
    ],
    link: "https://www.appdome.com/",
    linkLabel: "Appdome",
    tags: ["Microservices", "Scalability", "Cybersecurity", "Platform Engineering", "Architecture Reviews", "Observability"],
  },
  {
    slug: "ibm",
    year: "2018",
    range: "2018 - 2021",
    company: "IBM",
    timelineLabel: "Technical Student Engineer",
    title: "Technical Student Engineer",
    type: "Experience",
    description:
      "Maintained infrastructure reliability through patching, configuration validation, and incident resolution across distributed multi-OS systems.",
    highlights: [
      "Resolved production issues that improved uptime and service stability across Linux, Windows, and macOS environments.",
      "Supported lifecycle management for enterprise hardware and software stacks.",
    ],
    tags: ["Cloud Infrastructure", "Distributed Systems", "Operations", "Observability"],
  },
  {
    slug: "afeka",
    year: "2016",
    range: "2016 - 2020",
    company: "Afeka College of Engineering",
    timelineLabel: "B.Sc. Software Engineering",
    title: "B.Sc. Software Engineering, Minor in Cybersecurity",
    type: "Education",
    description:
      "Completed a software engineering degree with a cybersecurity minor, formalizing the systems and security foundations that continue to shape my work.",
    highlights: [
      "Focused academic training on software engineering principles with additional cybersecurity depth.",
      "Built a machine-learning Web Application Firewall project for XSS and SQL injection detection as part of my practical systems and security work.",
    ],
    link: "https://github.com/NirAlon/WafProject",
    linkLabel: "WAF Project",
    tags: ["Software Engineering", "Cybersecurity Minor"],
  },
  {
    slug: "iai",
    year: "2014",
    range: "2014 - 2016",
    company: "Israel Aerospace Industries",
    timelineLabel: "R&D Integration Engineer",
    title: "R&D Integration Engineer",
    type: "Experience",
    description:
      "Integrated phased-array radar hardware and software systems during pre-delivery bring-up and validation for operational readiness.",
    highlights: [
      "Executed stress and fault-injection tests to validate prototypes before delivery.",
      "Worked across hardware integration, system validation, and operational reliability.",
    ],
    link: "https://www.iai.co.il/",
    linkLabel: "IAI",
    tags: ["Defense Systems", "Testing", "Operations"],
  },
  {
    slug: "ort",
    year: "2009",
    range: "2009",
    company: "Ort College",
    timelineLabel: "A.A.S. in Electronics & Software Engineering",
    title: "A.A.S. in Electronics & Software Engineering",
    type: "Education",
    description:
      "Completed associate-level studies in electronics and software engineering, building the technical foundation that later shaped my systems and engineering work.",
    highlights: [
      "Built a practical foundation in electronics, software systems, and engineering problem-solving.",
    ],
    tags: ["Electronics", "Software Engineering"],
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

export default function Work() {
  const [activeItem, setActiveItem] = useState("appik");
  const item = timelineItems.find((entry) => entry.slug === activeItem) || timelineItems[timelineItems.length - 1];

  return (
    <section className="portfolio-panel flex flex-col items-center gap-8 justify-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
        <div className="grid h-full gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-stretch">
        <div className="order-2 lg:order-2 min-h-[620px] h-full p-8 md:p-10 flex flex-col gap-6 text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 font-mono">
                {item.title}
              </h3>

          <p className="text-lg md:text-xl text-neutral-900 dark:text-neutral-100 font-mono leading-relaxed">
            {item.description}
          </p>

          <TagList tags={item.tags} />

          <div className="grid gap-3">
            {item.highlights.map((highlight) => (
              <p
                key={highlight}
                className="text-lg md:text-xl text-neutral-900 dark:text-neutral-100 font-mono leading-relaxed border-l-2 border-purple-500 pl-4"
              >
                {highlight}
              </p>
            ))}
          </div>

          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start rounded-full border border-purple-500 px-5 py-2 text-sm md:text-base text-purple-700 dark:text-cyan-300 font-mono hover:bg-purple-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition shadow-sm"
            >
              {item.linkLabel}
            </a>
          ) : null}
        </div>

          <div className="order-1 lg:order-1 relative min-h-full">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 opacity-70" />
            <div className="flex h-full flex-col justify-between min-h-full">
              {timelineItems.map((entry) => {
                const isActive = activeItem === entry.slug;
                return (
                  <button
                    key={entry.slug}
                    type="button"
                    onClick={() => setActiveItem(entry.slug)}
                    className="group relative flex items-start gap-4 text-left"
                  >
                    <span
                      className={`relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 font-mono text-[11px] font-bold transition ${
                        isActive
                          ? "border-purple-600 bg-purple-600 text-white shadow-[0_0_0_6px_rgba(168,85,247,0.15)]"
                          : "border-neutral-300 bg-neutral-100 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
                      }`}
                    >
                      {entry.year}
                    </span>
                    <span className="flex flex-col gap-1 pt-1">
                      <span
                        className={`font-mono text-sm transition ${
                          isActive
                            ? "text-neutral-900 dark:text-neutral-100"
                            : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200"
                        }`}
                      >
                        {entry.company}
                      </span>
                      <span className="text-[11px] tracking-[0.05em] text-neutral-400 dark:text-neutral-500 font-mono">
                        {entry.timelineLabel}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
