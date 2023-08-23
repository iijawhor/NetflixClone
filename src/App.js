import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import MovieDetail from "./components/MovieDetails/MovieDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Feed} />
          <Route path="/item/:id" Component={MovieDetail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
