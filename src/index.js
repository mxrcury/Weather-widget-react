import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const theme = {
  default: {
    background: "#E6E2DD",
    darkBackground: "#373A36",
    color: "#E6E2DD",
    darkColor: "#373A36",
    uniqueColor: "#D48166",
    outlineColor: "rgba(140, 140, 140, 0.6)",
    outlineColorHover:'rgba(80, 80, 80, 1)',
    placeholder:'#373A36'
  },
  dark: {
    background: "#4a4a4a",
    color: "white",
    secondColor: "",
    outlineColor:'white',
    outlineColorHover:'rgba(250, 250, 250, 1)',
    placeholder:'white'
  },
  light: {
    background: "",
    color: "",
    secondColor: "",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

window.store = store;
