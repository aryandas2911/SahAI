import { Lightbulb, ArrowLeft, FileCheck, MessageSquare, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeProvider";

const guides = [
  {
    id: 1,
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "Chat with SahAI",
    description:
      "Ask our intelligent AI assistant about government schemes, benefits, or eligibility. Get answers in your preferred language instantly.",
    bgColor: "bg-blue-600",
  },
  {
    id: 2,
    icon: <FileCheck className="w-6 h-6 text-white" />,
    title: "Auto Form Fill",
    description:
      "Automatically populate government forms with your profile data. Save time and avoid mistakes while applying for schemes.",
    bgColor: "bg-green-600",
  },
  {
    id: 3,
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Stay Informed",
    description:
      "Receive personalized updates about local schemes and benefits relevant to you, based on your location and profile.",
    bgColor: "bg-yellow-500",
  },
];

export default function HowTo() {
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

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center transition-colors duration-300 mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center transition-colors duration-300">
              <Lightbulb className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            How to Use SahAI
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Step-by-step guides to help you access government benefits easily, apply to schemes, and stay informed with SahAI.
          </p>
        </div>

        {/* Guides Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-colors duration-300"
            >
              <div
                className={`${guide.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-md`}
              >
                {guide.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {guide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
