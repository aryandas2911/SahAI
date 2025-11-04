import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function FloatingChatbotWidget() {
  const { theme } = useTheme(); // Access current theme
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! I'm SahAI, your Government Assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: "I'm here to help! You can ask me about government schemes, benefits, and application procedures. How can I assist you?",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chatbot"
        className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg transition-all duration-200
                   bg-primary text-primary-foreground hover:scale-105 dark:bg-primary-light dark:text-primary-foreground"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-96 max-w-full h-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                        rounded-xl shadow-xl flex flex-col z-50 transition-colors duration-300"
        >
          {/* Header */}
          <div
            className="px-4 py-3 rounded-t-xl bg-gradient-to-r from-primary to-secondary dark:from-primary-light dark:to-secondary-light
                          text-primary-foreground dark:text-gray-100"
          >
            <h3 className="font-bold text-lg">SahAI Assistant</h3>
            <p className="text-sm opacity-90">
              Ask me anything about government benefits
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[16rem] p-2.5 rounded-lg 
                              ${
                                message.sender === "user"
                                  ? "bg-primary text-primary-foreground rounded-br-none"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none"
                              }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex p-3 gap-2 border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700
                         text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            />
            <button
              onClick={handleSend}
              aria-label="Send message"
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary
                         transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
