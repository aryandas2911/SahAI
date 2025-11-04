import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "How-To", path: "/howto" },
    { label: "Help", path: "/help" },
    { label: "Chatbot", path: "/chat" },
  ];

  return (
    <nav
      className="fixed w-full top-0 z-50"
      style={{
        backgroundColor: "var(--card)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div
              style={{
                backgroundColor: "var(--primary)",
              }}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
            >
              <span
                style={{ color: "var(--primary-foreground)" }}
                className="font-bold text-lg"
              >
                S
              </span>
            </div>
            <span
              style={{ color: "var(--foreground)" }}
              className="font-bold text-xl hidden sm:inline"
            >
              SahAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--foreground)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--foreground)")
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              aria-label="Toggle language"
              style={{ borderRadius: "0.5rem" }}
              className="p-2 transition-colors"
            >
              <Globe
                style={{
                  color: "var(--foreground)",
                }}
                className="w-5 h-5"
              />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              style={{ borderRadius: "0.5rem" }}
              className="p-2 transition-colors"
            >
              {theme === "dark" ? (
                <Sun
                  style={{ color: "var(--foreground)" }}
                  className="w-5 h-5"
                />
              ) : (
                <Moon
                  style={{ color: "var(--foreground)" }}
                  className="w-5 h-5"
                />
              )}
            </button>

            {/* Login/Signup Button */}
            <button
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                borderRadius: "1.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
              className="hidden sm:block px-4 py-2 text-sm font-semibold transition-all duration-200"
            >
              Login/Signup
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? (
                <X style={{ color: "var(--foreground)" }} className="w-6 h-6" />
              ) : (
                <Menu
                  style={{ color: "var(--foreground)" }}
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 rounded-lg transition-colors"
                style={{ color: "var(--foreground)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--muted)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                borderRadius: "1.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
              className="w-full px-4 py-2 text-sm font-semibold transition-all duration-200"
            >
              Login/Signup
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
