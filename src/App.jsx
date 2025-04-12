import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";
import BookDetails from "./components/BookDetails/BookDetails";
import Favorites from "./components/Favorites/Favorites";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Каталог</Link> |{' '}
        <Link to="/favorites">Избранное</Link> |{' '}
        <Link to="/profile">Профиль</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
