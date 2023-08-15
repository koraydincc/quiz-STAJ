import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Sorular from "./pages/Sorular";

// function Home() {
//   return <div>asdadasd</div>;
// }

function NotFound() {
  return <div>Sayfa Bulunamadı.</div>;
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/anket/:id" Component={Sorular} />
      {/* <Route path="/mahmut" Component={Home} /> */}
      <Route path="*" Component={NotFound} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
