import "./assets/font/Poppins.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./contexts/store.tsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")!).render(
  <Router>
    <ThemeProvider>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </ThemeProvider>
  </Router>
);
