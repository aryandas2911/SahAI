import { HelpCircle, ArrowLeft, MessageCircle, BookOpen, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeProvider";

export default function Help() {
  const { theme } = useTheme();

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: "How can I check my eligibility for PM-KISAN?",
      answer:
        "You can ask our AI chatbot directly or check the Eligibility section in the dashboard. SahAI will guide you step by step.",
    },
    {
      id: 2,
      question: "Can I apply for multiple schemes at once?",
      answer:
        "Yes! SahAI helps you fill multiple applications with AI assistance, auto-populating fields where possible.",
    },
    {
      id: 3,
      question: "Which languages are supported?",
      answer:
        "The AI chatbot and app currently support English, Hindi, and regional languages for government forms and guidance.",
    },
  ];

  const helpTopics = [
    {
      id: 1,
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "AI Chatbot Assistance",
      description:
        "Ask about government schemes, check your eligibility, and get step-by-step help for filling forms.",
      bgColor: "bg-purple-600",
      actionText: "Try Chatbot",
      actionLink: "/chat",
    },
    {
      id: 2,
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Step-by-Step Guides",
      description:
        "Access How-To guides for applying to pensions, RTIs, subsidies, and other government services.",
      bgColor: "bg-blue-600",
      actionText: "View Guides",
      actionLink: "/howto",
    },
    {
      id: 3,
      icon: <HelpCircle className="w-6 h-6 text-white" />,
      title: "Frequently Asked Questions",
      description:
        "Find answers to common queries about government schemes, eligibility criteria, documentation, and applications.",
      bgColor: "bg-green-600",
      actionText: "View FAQs",
      actionLink: "#faqs",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
          Help & Support
        </h1>

        {/* Help Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-colors duration-300 hover:scale-105 transform hover:shadow-xl"
            >
              <div
                className={`${topic.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md`}
              >
                {topic.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {topic.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {topic.description}
              </p>
              {topic.actionLink && (
                <Link
                  to={topic.actionLink}
                  className="mt-auto inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {topic.actionText}
                  <Info className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div id="faqs" className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-300"
              >
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder / Notes */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-100 dark:bg-gray-700/50 rounded-xl px-6 py-4 transition-colors duration-300">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              📝 <strong>Keep building!</strong> You can further expand this page with video tutorials,
              live chat support, multilingual assistance, and quick links to frequently used forms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
