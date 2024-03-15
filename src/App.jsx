import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

const MainPage = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("username")) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="doctors">
          {/* <Doctors /> */}
        </div>
        <div id="blogs">
          <Blogs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
