import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MoviePage from "./MoviePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/:movieTitle" element={<MoviePage/>} />
    </Routes>
  </BrowserRouter>
);
