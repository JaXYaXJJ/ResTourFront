import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Tours from "./routes/Tours";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./routes/NotFound";
import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import TourDetails from "./routes/TourDetails";
import Admin from "./routes/Admin";
import AdminPost from "./routes/AdminPost";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {isLoggedIn && <Route path="/admin" element={<Admin />} />}
        {isLoggedIn && <Route path="/tours" element={<Tours />} />}
        {isLoggedIn && <Route path="/tours/:id" element={<TourDetails />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
