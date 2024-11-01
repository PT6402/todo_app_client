import "./assets/font/Poppins.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./contexts/store.tsx";
createRoot(document.getElementById("root")!).render(
  <Router>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>
);
