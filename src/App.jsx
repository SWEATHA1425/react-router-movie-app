import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail"
import "./server"

export default function App(){
  return(
    <BrowserRouter>
    <header className="h-[110px] flex items-center py-2">
      <Link to="/">#MOVIES</Link>
      <nav className="flex space-x-4 mx-auto">
        <Link to="/about"
        className="text-[#4D4D4D] font-semibold hover:text-[#161616] hover:underline">About</Link>
        <Link to="/movies"
        className="text-[#4D4D4D] font-semibold hover:text-[#161616] hover:underline">Movies</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
    </BrowserRouter>
  )
}