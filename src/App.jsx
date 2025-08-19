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
      <header className="fixed top-0 left-0 w-full h-[90px] rounded-xl flex items-center py-2 bg-emerald-300">
        <div className="flex w-full justify-between items-center px-5">
          <Link to="/" className="font-bold text-xl">#MOVIES</Link>
          <nav className="flex space-x-4">
            <Link to="/about"
            className="text-black font-semibold text-[20px] hover:underline">About</Link>
            <Link to="/movies"
            className="text-black font-semibold text-[20px] hover:underline">Movies</Link>
          </nav>
        </div>
      </header>
      <div className="mt-[110px] p-5">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}