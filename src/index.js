import { createRoot } from "react-dom/client";
import Dashboard from "./Dashboard";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Dashboard />);
