import { BookOpen, ArrowLeft, FileText, LifeBuoy, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeProvider";

const features = [
  {
    id: 1,
    icon: <FileText className="w-8 h-8 text-white" />,
    title: "Form Automation",
    description:
      "Fill government forms easily using AI-powered voice and text assistance. The app helps auto-populate fields and guides you step by step.",
    bgColor: "bg-blue-600",
  },
  {
    id: 2,
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Awareness Feed",
    description:
      "Get updates, news, schemes, and subsidies specific to your region. Short, verified cards and infographics make it easy to stay informed.",
    bgColor: "bg-green-600",
  },
  {
    id: 3,
    icon: <LifeBuoy className="w-8 h-8 text-white" />,
    title: "Guides & Help",
    description:
      "Quick how-to guides and helplines: how to file an RTI, apply for pensions, or access other government services with ease.",
    bgColor: "bg-yellow-500",
  },
  {
    id: 4,
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: "AI Chatbot",
    description:
      "Accessible via a floating icon on all pages. It can guide you, check your eligibility, and help fill forms in multiple languages.",
    bgColor: "bg-purple-600",
  },
];

export default function FeaturesPage() {
  const { theme } = useTheme();

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
          Key Features of SahAI
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-colors duration-300 hover:scale-105 transform hover:shadow-xl"
            >
              <div
                className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md`}
              >
                {feature.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {feature.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
