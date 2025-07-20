import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRouter from "./router.jsx";
import Footer from "./components/footer/footer.jsx";
import Nav from "./components/nav/nav.jsx";
import Chat from "./components/chat/chat.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Chat />
    <Nav />
    <div className="wrapper">
      <AppRouter />
    </div>
    <Footer />
  </StrictMode>
);
