import { Globe } from "lucide-react";

export function Footer() {
  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
    { code: "kn", name: "ಕನ್ನಡ" },
    { code: "ml", name: "മലയാളം" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--card)",
        borderTop: "1px solid var(--border)",
        marginTop: "5rem",
        padding: "3rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* About */}
        <div style={{ flex: "1 1 220px", minWidth: "220px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <div
              style={{
                width: "1.5rem",
                height: "1.5rem",
                backgroundColor: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.25rem",
              }}
            >
              <span style={{ color: "var(--primary-foreground)", fontWeight: "bold", fontSize: "0.75rem" }}>S</span>
            </div>
            <span style={{ fontWeight: "bold", fontSize: "1.125rem", color: "var(--foreground)" }}>SahAI</span>
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            Empowering citizens with easy access to government benefits and information.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 120px", minWidth: "120px" }}>
          <h4 style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "1rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/awareness" style={linkStyle}>Awareness</a></li>
            <li><a href="/how-to" style={linkStyle}>How-To</a></li>
            <li><a href="/help" style={linkStyle}>Help</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div style={{ flex: "1 1 120px", minWidth: "120px" }}>
          <h4 style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "1rem" }}>Resources</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><a href="#" style={linkStyle}>Documentation</a></li>
            <li><a href="#" style={linkStyle}>FAQ</a></li>
            <li><a href="#" style={linkStyle}>Contact Us</a></li>
            <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Language Selection */}
        <div style={{ flex: "1 1 150px", minWidth: "150px" }}>
          <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "1rem" }}>
            <Globe style={{ width: "1rem", height: "1rem" }} />
            Languages
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                style={{
                  fontSize: "0.875rem",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary)";
                  e.currentTarget.style.backgroundColor = "var(--muted)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted-foreground)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", margin: "2rem 0" }} />

      {/* Bottom */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", textAlign: "center" }}>
          © {currentYear} SahAI. All rights reserved. Empowering Government Digitalization.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

// Shared link style
const linkStyle = {
  color: "var(--muted-foreground)",
  textDecoration: "none",
  transition: "all 0.2s",
  cursor: "pointer",
  fontSize: "0.875rem",
  display: "inline-block",
};
