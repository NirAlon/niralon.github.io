import { useState, useRef, useEffect } from "react";

export default function ResumeChatBotDemo() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Welcome! What would you like to know about Nir’s experience, skills, or hobbies" }
    ]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    const API_URL = "https://nirportfolio.duckdns.org/chat";

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    async function handleSend(e) {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages((prev) => [
            ...prev,
            { sender: "user", text: input }
        ]);
        setInput("");
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });
            const data = await res.json();
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: data.response }
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Sorry, there was a problem reaching Nir's Bot." }
            ]);
        }
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-3">
                <span className="inline-block text-2xl">🤖</span>
                <span className="font-mono font-bold text-purple-700 dark:text-cyan-200 text-lg">Resume ChatBot</span>
            </div>
            <div className="flex-1 h-64 overflow-y-auto bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 mb-2">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`
                px-4 py-2 rounded-xl max-w-[80%] font-mono text-sm
                ${msg.sender === "user"
                                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white"
                                    : "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-cyan-100"}
              `}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef}></div>
            </div>
            <form onSubmit={handleSend} className="flex gap-2">
                <input
                    type="text"
                    className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 font-mono bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-cyan-100 focus:outline-none"
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-mono font-medium shadow hover:from-cyan-500 hover:to-pink-500 transition"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
