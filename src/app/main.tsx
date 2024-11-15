<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { AppProvider } from "./index.tsx";

createRoot(document.getElementById("root")!).render(<AppProvider />);
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { AppProvider } from "./providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
);
>>>>>>> 5e4c808a492c27846ae0aeee7f4f24cca820f92f
