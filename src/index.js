import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
 import { ThemeProvider } from "styled-components";

 const theme= {
  default:{
    background:'#E6E2DD',
    darkBackground:'#373A36',
    color:'#E6E2DD',
    darkColor:'#373A36',
    uniqueColor:'#D48166',
    outlineColor:'rgba(140, 140, 140, 0.6)'
  },
  dark:{
    background:'',
    color:'',
    secondColor:'',
  },
  light:{
    background:'',
    color:'',
    secondColor:'',
  },  
 }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
