import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { AppProvider } from "./index.tsx";

createRoot(document.getElementById("root")!).render(<AppProvider />);
