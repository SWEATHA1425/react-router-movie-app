import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function MovieDetail(){

    const params = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetch(`/api/movies/${params.id}`)
        .then(res => res.json())
        .then(data => setMovie(data.movies))
    },[params.id])

    return(
        <div>
            {
                movie ? (
                    <div>
                    <img 
                    className="w-[200px] h-[300px] object-cover rounded mb-2"
                    src={movie.imageUrl} />
                    <i className={`
                        inline-block mt-1 px-4 py-1 rounded text-white
                        ${movie.type === "comedy"  && "bg-orange-400"}
                        ${movie.type === "thriller" && "bg-green-700"}
                        ${movie.type === "horror"  && "bg-red-700"}
                    `}>{movie.type}</i>
                    <h2>{movie.name}</h2>
                    <p><span>${movie.price}</span>/movie</p>
                    <p>{movie.description}</p>
                    <button 
                    className="bg-blue-400 hover:bg-blue-500 shadow rounded px-2 py-2 text-white"
                    >Buy this movie</button>
                </div>
                ) : <h1 className="text-emerald-700 font-semibold">Loading...</h1>
            }
        </div>
    )
}