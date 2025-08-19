import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function Movies(){

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetch("/api/movies")
        .then(res => res.json())
        .then(data => setMovies(data.movies))
    },[])


    const movieElements = movies.map(movie => {
        return(
            <div key={movie.id} className="text-[#161616] max-w-[300px]">
                <Link to={`/movies/${movie.id}`}>
                <img src={movie.imageUrl} 
                    alt={`Image of ${movie.name}`} 
                    className="w-[350px] h-[400px] object-cover rounded mb-2"
                />
                <div>
                    <h3>{movie.name}</h3>
                    <p>${movie.price}<span>/movie</span></p>
                </div>
                <i
                    className={`
                        inline-block mt-1 px-4 py-1 rounded text-white
                        ${movie.type === "comedy"  && "bg-orange-400"}
                        ${movie.type === "thriller" && "bg-green-700"}
                        ${movie.type === "horror"  && "bg-red-700"}
                    `}
                    >
                    {movie.type}
                </i>
                </Link>

            </div>
        )
    })


    return(
        <div className="px-6">
            <h1 className="text-3xl font-bold mb-6">Explore our movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {movieElements}
            </div>
        </div>
    )
}