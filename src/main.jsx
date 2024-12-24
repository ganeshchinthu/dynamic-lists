import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ListProvider } from "./context/ListContext.jsx";
import GlobalStyles from "./GlobalStyles.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <ListProvider>
      <App />
    </ListProvider>
  </>
);
