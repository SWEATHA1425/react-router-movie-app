import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies/Movies";
import MovieDetail from "./pages/Movies/MovieDetail"
import "./server"
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostMovies from "./pages/Host/HostMovies";
import HostMovieDetail from "./pages/Host/HostMovieDetail";

export default function App(){
  return(
    <BrowserRouter>
      <div className="mt-[55px] p-5 mb-[40px]">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />} />

            <Route path="movies">
              <Route index element={<Movies />} />
              <Route path=":id" element={<MovieDetail />} />
            </Route>

            <Route path="/host" element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="movies" element={<HostMovies />} />
              <Route path="movies/:id" element={<HostMovieDetail />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}