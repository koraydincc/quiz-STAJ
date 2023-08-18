import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Sorular from "./pages/Sorular";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Answer from "./pages/AnswerPage";
import Cevaplar from "./pages/Cevaplar";

function NotFound() {
  return <div>Sayfa Bulunamadı.</div>;
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/anket/:id" element={<Sorular />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cevap/:id" element={<Cevaplar />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
