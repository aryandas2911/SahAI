import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import HowTo from "./pages/HowTo";
import Features from "./pages/Features";
import Help from "./pages/Help";
import Navbar from "./components/Navbar";
import ThemeProvider from "./components/ThemeProvider.jsx";
import { FloatingChatbotWidget } from "./components/FloatingChatbotWidget";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/features" element={<Features />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <FloatingChatbotWidget />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
