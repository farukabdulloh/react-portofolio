import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
  offset: 60,
  duration: 800,
  easing: "ease-out-cubic",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen bg-[#0c0d0f] text-[#ededef]">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
