import { useState, useRef, useEffect } from "react";
import { Send, Mic, HelpCircle, Globe, X } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const TypingIndicator = () => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
  </div>
);

const ChatBubble = ({ message }) => {
  const isUser = message.sender === "user";
  return (
    <div className={cn("flex mb-4", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "rounded-2xl p-3 max-w-md break-words",
          isUser
            ? "bg-blue-100 dark:bg-blue-500 text-gray-800 dark:text-white rounded-br-none"
            : "bg-blue-600 dark:bg-blue-700 text-white dark:text-white rounded-bl-none"
        )}
      >
        <p className="text-sm">{message.text}</p>
        <span
          className={cn(
            "text-xs mt-1 block",
            isUser ? "text-gray-600 dark:text-gray-300" : "text-blue-100 dark:text-blue-200"
          )}
        >
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </div>
  );
};

const EligibleSchemesCard = ({ schemes }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4">
    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Eligible Schemes</h3>
    <div className="space-y-2">
      {schemes.map((scheme) => (
        <div
          key={scheme.id}
          className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
        >
          <span className="text-sm text-gray-700 dark:text-gray-200">{scheme.name}</span>
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded",
              scheme.status === "eligible"
                ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                : scheme.status === "pending"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"
                : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
            )}
          >
            {scheme.status.charAt(0).toUpperCase() + scheme.status.slice(1)}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ApplicationProgressCard = ({ applications }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">Application Progress</h3>
    <div className="space-y-4">
      {applications.map((app, idx) => (
        <div key={idx}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700 dark:text-gray-200">{app.schemeName}</span>
            <span className="text-xs text-gray-600 dark:text-gray-300">{app.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={cn(
                "h-2 rounded-full transition-all",
                app.status === "completed"
                  ? "bg-green-500 dark:bg-green-400"
                  : app.status === "in_progress"
                  ? "bg-blue-500 dark:bg-blue-400"
                  : "bg-gray-400 dark:bg-gray-600"
              )}
              style={{ width: app.progress + "%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Chat() {
  const { theme } = useTheme();
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! I'm SahAI, your Government Assistant. How can I help you today?", sender: "bot", timestamp: new Date() },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const messagesEndRef = useRef(null);

  const eligibleSchemes = [
    { id: "1", name: "PM-KISAN", status: "eligible" },
    { id: "2", name: "National Health Mission", status: "pending" },
    { id: "3", name: "MGNREGA", status: "ineligible" },
  ];
  const applicationProgress = [
    { schemeName: "PM-KISAN", progress: 75, status: "in_progress" },
    { schemeName: "National Health Mission", progress: 100, status: "completed" },
  ];

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now().toString(), text: input, sender: "user", timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = { id: (Date.now() + 1).toString(), text: "I'm here to help! You can ask me about government schemes, benefits, and application procedures. How can I assist you?", sender: "bot", timestamp: new Date() };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } };

  return (
    <div className="flex h-full bg-gradient-to-b from-blue-50 dark:from-gray-900 to-blue-100 dark:to-gray-800 transition-colors duration-300">
      {/* Main Chat Container */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">SahAI</h1>
          </div>
          <div className="flex items-center gap-4">
            <button aria-label="Toggle language" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button aria-label="Help" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button onClick={() => setShowSidebar(!showSidebar)} className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              {showSidebar ? <X className="w-5 h-5" /> : <span>≡</span>}
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => <ChatBubble key={msg.id} message={msg} />)}
            {isTyping && <div className="flex justify-start mb-4"><div className="bg-blue-600 dark:bg-blue-500 text-white rounded-2xl rounded-bl-none p-3"><TypingIndicator /></div></div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Sidebar */}
          {showSidebar && (
            <div className="hidden md:block w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto p-4">
              <EligibleSchemesCard schemes={eligibleSchemes} />
              <ApplicationProgressCard applications={applicationProgress} />
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-md p-4 flex items-center gap-3">
          <button aria-label="Send voice message" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-600 dark:text-gray-300">
            <Mic className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type or speak your answer…"
            className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-500 text-white rounded-xl px-4 py-2 flex items-center gap-2 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showSidebar && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setShowSidebar(false)} />}
      {showSidebar && (
        <div className="md:hidden fixed bottom-0 right-0 top-0 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto p-4 z-50 animate-slide-up">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-800 dark:text-gray-100">Sidebar</h2>
            <button onClick={() => setShowSidebar(false)}><X className="w-5 h-5" /></button>
          </div>
          <EligibleSchemesCard schemes={eligibleSchemes} />
          <ApplicationProgressCard applications={applicationProgress} />
        </div>
      )}
    </div>
  );
}
