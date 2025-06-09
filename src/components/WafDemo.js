import { useState, useRef, useEffect } from "react";
import clsx from "clsx"; // Optional, for easier class toggling. If you don't use it, just use string templates.

const XSS_URL = "https://nirportfolio.duckdns.org/predict/xss";
const SQLI_URL = "https://nirportfolio.duckdns.org/predict/sqli";
const THRESHOLD_XSS = 0.05;
const THRESHOLD_SQL = 0.978;

export default function WafDemo() {
    // XSS state
    const [xssInput, setXssInput] = useState("<script>alert('XSS')</script>");
    const [xssStatus, setXssStatus] = useState(""); // "attack" | "safe" | ""
    const [xssLoading, setXssLoading] = useState(false);

    // SQLi state
    const [sqliInput, setSqliInput] = useState("SELECT * FROM users WHERE id=1 OR 1=1");
    const [sqliStatus, setSqliStatus] = useState("");
    const [sqliLoading, setSqliLoading] = useState(false);

    const [showXssInfo, setShowXssInfo] = useState(false);
    const xssInfoRef = useRef();

    useEffect(() => {
        if (!showXssInfo) return;
        function handleClick(e) {
            if (xssInfoRef.current && !xssInfoRef.current.contains(e.target)) {
                setShowXssInfo(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [showXssInfo]);

    async function handleTestXSS(e) {
        e.preventDefault();
        setXssLoading(true);
        setXssStatus("");
        try {
            const res = await fetch(XSS_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: xssInput }),
            });
            const data = await res.json();
            const pred = data?.prediction?.[0]?.[0];
            if (typeof pred === "number" && pred > THRESHOLD_XSS) {
                setXssStatus("attack");
            } else {
                setXssStatus("safe");
            }
        } catch {
            setXssStatus("error");
        }
        setXssLoading(false);
    }

    const [showSqliInfo, setShowSqliInfo] = useState(false);
    const sqliInfoRef = useRef();

    useEffect(() => {
        if (!showSqliInfo) return;
        function handleClick(e) {
            if (sqliInfoRef.current && !sqliInfoRef.current.contains(e.target)) {
                setShowSqliInfo(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [showSqliInfo]);

    async function handleTestSQLi(e) {
        e.preventDefault();
        setSqliLoading(true);
        setSqliStatus("");
        try {
            const res = await fetch(SQLI_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: sqliInput }),
            });
            const data = await res.json();
            const pred = data?.prediction?.[0]?.[0];
            if (typeof pred === "number" && pred > THRESHOLD_SQL) {
                setSqliStatus("attack");
            } else {
                setSqliStatus("safe");
            }
        } catch {
            setSqliStatus("error");
        }
        setSqliLoading(false);
    }

    // Animation classes
    const shakeClass = "animate-shake";
    const glowClass = "ring-2 ring-green-400 shadow-green-400/50";

    return (
        <div className="w-full max-w-lg mx-auto bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow p-6 flex flex-col gap-4">

            {/* XSS Section */}
            <form onSubmit={handleTestXSS} className="flex flex-col gap-2">
                <div className="relative flex items-center">
                    <label htmlFor="xss-input" className="font-mono text-sm text-neutral-600 dark:text-neutral-200">
                        Test for XSS
                    </label>
                    <button
                        type="button"
                        className="ml-2 w-5 h-5 flex items-center justify-center rounded-full border border-neutral-400 dark:border-neutral-500 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
                        onClick={() => setShowXssInfo(v => !v)}
                        aria-label="Show info about XSS testing"
                    >
                        <span className="font-bold">i</span>
                    </button>
                    {showXssInfo && (
                        <div
                            ref={xssInfoRef}
                            className="absolute left-full top-0 z-20 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-lg rounded p-4 w-96 text-xs text-neutral-700 dark:text-neutral-200"
                        >
                            <div className="font-semibold mb-1">XSS Detection Info</div>
                            <ul className="list-disc pl-4">
                                <li><strong>What:</strong> This test sends your input to an AI model that predicts if it contains a Cross-Site Scripting (XSS) attack.</li>
                                <li><strong>Example input:</strong> <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code></li>
                                <li><strong>Result:</strong> If a real XSS injection went through, an attacker could run scripts in the victim’s browser, stealing data or hijacking sessions.</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <input
                        id="xss-input"
                        value={xssInput}
                        onChange={e => setXssInput(e.target.value)}
                        className={clsx(
                            "px-3 py-2 rounded bg-neutral-100 dark:bg-neutral-900 font-mono transition-all text-green-700 dark:text-green-700 placeholder:text-green-300 dark:placeholder:text-green-600 border",
                            xssStatus === "attack" && shakeClass + " border-2 border-pink-700 text-pink-700",
                            xssStatus === "safe" && glowClass + " border-2 border-green-400 text-green-700"
                        )}
                        disabled={xssLoading}
                        placeholder="<script>alert('XSS')</script>"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 rounded font-mono bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-300 text-white dark:text-neutral-900 transition shadow-md
           hover:from-neutral-400 hover:to-neutral-700"
                        disabled={xssLoading}
                    >
                        {xssLoading ? "Hacking..." : "Inject XSS"}
                    </button>
                </div>
                {xssStatus === "attack" && (
                    <div className="mt-2 text-pink-700 font-mono font-semibold animate-shake">
                        🚨 XSS Attack Detected!
                    </div>
                )}
                {xssStatus === "safe" && (
                    <div className="mt-2 text-green-700 font-mono font-semibold animate-glow">
                        ✅ No XSS Attack
                    </div>
                )}
                {xssStatus === "error" && (
                    <div className="mt-2 text-red-700 font-mono font-semibold">
                        Error: Could not contact server
                    </div>
                )}
            </form>

            {/* SQLi Section */}
            <form onSubmit={handleTestSQLi} className="flex flex-col gap-2">
                <div className="relative flex items-center">
                    <label htmlFor="sqli-input" className="font-mono text-sm text-neutral-600 dark:text-neutral-200">
                        Test for SQLi
                    </label>
                    <button
                        type="button"
                        className="ml-2 w-5 h-5 flex items-center justify-center rounded-full border border-neutral-400 dark:border-neutral-500 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
                        onClick={() => setShowSqliInfo(v => !v)}
                        aria-label="Show info about SQLi testing"
                    >
                        <span className="font-bold">i</span>
                    </button>
                    {showSqliInfo && (
                        <div
                            ref={sqliInfoRef}
                            className="absolute left-full top-0 z-20 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-lg rounded p-4 w-96 text-xs text-neutral-700 dark:text-neutral-200"
                        >
                            <div className="font-semibold mb-1">SQL Injection Detection Info</div>
                            <ul className="list-disc pl-4">
                                <li><strong>What:</strong> This test sends your input to an AI model that predicts if it contains a SQL Injection (SQLi) attack.</li>
                                <li><strong>Example input:</strong> <code>SELECT * FROM users WHERE id=1 OR 1=1 --</code></li>
                                <li><strong>Result:</strong> If a real SQL injection went through, an attacker could access or manipulate sensitive database data—potentially dumping tables, bypassing authentication, or deleting records.</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <input
                        id="sqli-input"
                        value={sqliInput}
                        onChange={e => setSqliInput(e.target.value)}
                        className={clsx(
                            "px-3 py-2 rounded bg-neutral-100 dark:bg-neutral-900 font-mono transition-all text-green-700 dark:text-green-700 placeholder:text-green-300 dark:placeholder:text-green-600 border",
                            sqliStatus === "attack" && shakeClass + " border-2 border-pink-700 text-pink-700",
                            sqliStatus === "safe" && glowClass + " border-2 border-green-400 text-green-700"
                        )}
                        disabled={sqliLoading}
                        placeholder="Enter SQLi payload"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 rounded font-mono bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-300 text-white dark:text-neutral-900 transition shadow-md
           hover:from-neutral-400 hover:to-neutral-700"
                        disabled={sqliLoading}
                    >
                        {sqliLoading ? "Hacking..." : "Inject SQL"}
                    </button>
                </div>
                {sqliStatus === "attack" && (
                    <div className="mt-2 text-pink-700 font-mono font-semibold animate-shake">
                        🚨 SQLi Attack Detected!
                    </div>
                )}


                {sqliStatus === "safe" && (
                    <div className="mt-2 text-green-700 font-mono font-semibold animate-glow">
                        ✅ No SQLi Attack
                    </div>
                )}
                {sqliStatus === "error" && (
                    <div className="mt-2 text-red-700 font-mono font-semibold">
                        Error: Could not contact server
                    </div>
                )}

            </form>
        </div>
    );
}
