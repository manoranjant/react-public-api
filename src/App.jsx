import "./css/App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/favorites" Component={Favorites} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
