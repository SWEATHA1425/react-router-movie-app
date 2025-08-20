import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function HostMovies(){

    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("/api/host/movies")
        .then(res => res.json())
        .then(data => setMovies(data.movies))
    },[])

    const hostMovieElements = movies.map(movie => (
        <Link to={`/host/movies/${movie.id}`} key={movie.id} className="block">
            <div key={movie.id} className="flex rounded-lg bg-emerald-100 mb-6 items-center gap-4 p-4">
                <img src={movie.imageUrl} alt={`Photo of ${movie.name}`} className="h-[50px] w-[45px] rounded-md"/>
                <div>
                    <h3  className="font-semibold text-lg">{movie.name}</h3>
                    <p className="text-sm">${movie.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return(
        <section>
            <h1  className="font-bold text-[25px] pb-[10px] pt-[15px]">Your Listed Movies</h1>
            <div>
                {
                    movies.length > 0 ? (
                        <section>
                            {hostMovieElements}
                        </section>
                    ):(
                    <h1 className="text-emerald-700 font-semibold">Loading...</h1>)
                }
            </div>
        </section>
    )
}