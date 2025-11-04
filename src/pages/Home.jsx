import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageSquare,
  FileCheck,
  Globe,
  Users,
  Lightbulb,
  BookOpen,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                Access Government Benefits
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  Effortlessly
                </span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Chat, understand, and apply — in your own language. SahAI helps
                you navigate government schemes, benefits, and documentation
                with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/chat">
                  <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                    Start Chatbot
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/awareness">
                  <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                    Explore Awareness Feed
                    <Lightbulb className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div
              className="relative h-96 md:h-full flex items-center justify-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative w-full h-full max-w-md">
                {/* Background shapes */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rotate-6"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 -rotate-6"></div>

                {/* Central illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-sm transition-colors duration-300">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center transition-colors duration-300">
                          <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            SahAI Assistant
                          </p>
                          <p className="text-xs text-gray-700 dark:text-gray-300">
                            How can I help you today?
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 flex-row-reverse">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center transition-colors duration-300">
                          <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="flex-1 text-right">
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            Citizen
                          </p>
                          <p className="text-xs text-gray-700 dark:text-gray-300">
                            I need information on school benefits
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center transition-colors duration-300">
                          <FileCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            Instant Results
                          </p>
                          <p className="text-xs text-gray-700 dark:text-gray-300">
                            5 schemes matched for you
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <div className="card-base p-8 text-center animate-slide-up transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50K+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Citizens Helped
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Successfully accessing government benefits
              </p>
            </div>

            {/* Stat 2 */}
            <div className="card-base p-8 text-center animate-slide-up transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FileCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                200+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Schemes Simplified
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Government benefits explained clearly
              </p>
            </div>

            {/* Stat 3 */}
            <div className="card-base p-8 text-center animate-slide-up transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-50 dark:bg-green-900/10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                10+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Languages Supported
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Access in your preferred language
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How SahAI Works
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to make government benefits accessible
              to everyone
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-base p-8 animate-slide-up transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                AI Chatbot
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Chat with our intelligent assistant to find schemes matching
                your profile. Get instant answers about eligibility and
                application process.
              </p>
              <Link
                to="/chatbot"
                className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Try Chatbot
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="card-base p-8 animate-slide-up transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <FileCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Auto Form Fill
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Automatically fill government application forms using your
                profile information. Save time and reduce errors in
                documentation.
              </p>
              <Link
                to="/how-to"
                className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="card-base p-8 animate-slide-up transition-colors duration-300">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Localized Awareness
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Stay updated with location-specific government benefits and
                local schemes. Get personalized alerts about opportunities
                relevant to you.
              </p>
              <Link
                to="/awareness"
                className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore Feed
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-3xl p-12 text-center border border-blue-200 dark:border-blue-700 transition-colors duration-300">
          <BookOpen className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ready to Access Your Benefits?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Start exploring government schemes and benefits tailored to your
            needs. Chat with our AI assistant or browse our awareness feed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chatbot">
              <button className="btn-primary w-full sm:w-auto">
                Start Chatbot
              </button>
            </Link>
            <Link to="/awareness">
              <button className="btn-outline w-full sm:w-auto">
                Explore Feed
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
