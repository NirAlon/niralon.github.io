import ComputerIcon from "./ComputerIcon";

import WafDemo from "./WafDemo";
import ResumeChatBotDemo from "./ResumeChatBotDemo";

const TAG_COLORS = {
  "Machine Learning": "bg-purple-800 text-purple-200",
  "TensorFlow Lite": "bg-purple-800 text-purple-200",
  "Cybersecurity": "bg-pink-900 text-pink-200",
  "XSS": "bg-pink-900 text-pink-200",
  "SQLi": "bg-pink-900 text-pink-200",
  "Python": "bg-yellow-800 text-yellow-200",
  "FastAPI": "bg-yellow-800 text-yellow-200",
  "gRPC": "bg-yellow-800 text-yellow-200",
  "REST": "bg-yellow-800 text-yellow-200",
  "Cloud": "bg-cyan-900 text-cyan-200",
  "Microservices": "bg-cyan-900 text-cyan-200",
  "Docker-Compose": "bg-cyan-900 text-cyan-200",
  "Caddy": "bg-cyan-900 text-cyan-200",
  "Pipelines": "bg-cyan-900 text-cyan-200",
  "React": "bg-cyan-900 text-cyan-200",
  "API": "bg-cyan-900 text-cyan-200",
  "GO": "bg-yellow-800 text-yellow-200",
  "Gin&Gonic": "bg-cyan-900 text-cyan-200",
  "Chatbot": "bg-purple-800 text-purple-200",
  "NLP": "bg-purple-800 text-purple-200",
  "OpenAI": "bg-purple-800 text-purple-200",
  "LangChain": "bg-yellow-800 text-yellow-200"
};

const projects = [
  {
    title: "Web Application Firewall (WAF)",
    description:
      "Designed and implemented a modular, machine learning-driven Web Application Firewall (WAF) to provide robust, automated protection against web application threats—including XSS and SQL injection—across client-facing services. The solution is architected as a containerized microservice, deployable via Docker Compose, with an API-first approach for seamless integration into diverse client infrastructures.",
    live: "/",
    source: "https://github.com/NirAlon/WafProject",
    tags: [
      "Machine Learning",
      "TensorFlow Lite",
      "Cybersecurity",
      "XSS",
      "SQLi",
      "Python",
      "FastAPI",
      "gRPC",
      "REST",
      "Cloud",
      "Microservices",
      "Docker-Compose",
      "Caddy",
      "Pipelines",
      "React",
      "API"
    ],
    demo: WafDemo
  },
  {
    title: "Resume Q&A Chatbot",
    description:
      "Built a conversational AI assistant trained on my resume, work experience, and skills. The chatbot answers questions from recruiters and visitors about my background, key projects, and expertise. This interactive tool provides an engaging, modern way to learn about my professional profile—going beyond the limitations of a static CV.",
    live: "/",
    source: "https://github.com/NirAlon/ResumeChatBot",
    tags: [
      "React",
      "GO",
      "Gin&Gonic",
      "Chatbot",
      "NLP",
      "OpenAI",
      "LangChain",
      "API"
    ],
    demo: ResumeChatBotDemo
  }
];



export default function Projects() {

  return (
    <section className="flex flex-col items-center gap-4 py-32 min-h-[60vh]">
      <div className="flex justify-center items-center gap-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-cyan-200 font-mono text-center">
          Projects
        </h1>
        <ComputerIcon className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <div className="w-full max-w-3xl mx-auto rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-xl">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="bg-neutral-100 dark:bg-neutral-800 p-10 rounded-2xl shadow flex flex-col gap-6 transition-colors duration-300 text-left"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 font-mono">
                {project.title}
              </h3>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-purple-500 text-purple-600 dark:border-cyan-300 dark:text-cyan-200 font-mono font-medium hover:bg-purple-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition shadow"
              >
                Source Code
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${TAG_COLORS[tag] || "bg-neutral-400 text-neutral-900"} px-3 py-1 rounded-full text-xs font-semibold font-mono`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-neutral-700 dark:text-neutral-100 font-mono">
              {project.description}
            </p>

            <div className="flex gap-4 mt-3">
              <project.demo />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
