import React from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowTodos from "./MyComponents/ShowTodos";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header title="My Todos List" searchBar={false} />

          <Routes>
            <Route path="/" element={<ShowTodos />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
