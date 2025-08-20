import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function HostMovieDetail(){

    const {id} = useParams()
    const [currentMovie, setCurrentMovie] = useState(null);
    useEffect(() => {
        fetch(`/api/host/movies/${id}`)
        .then(res => res.json())
        .then(data => setCurrentMovie(data.movies))
    },[])

    // if (!currentMovie) {
    //     return <h1>Loading...</h1>
    // }
    return(
        <div>
            {currentMovie ? 
            (
            <div className="flex rounded-lg bg-emerald-100 mb-6 items-center gap-4 p-4"> 
                <img src={currentMovie.imageUrl} 
                    alt={`Image of ${currentMovie.name}`} 
                    className="h-[80px] w-[60px] rounded-md"
                />
                <div className="flex flex-col gap-1">
                    <p className={`
                            inline-block mt-1 px-11 py-1 rounded text-white
                            ${currentMovie.type === "comedy"  && "bg-orange-400"}
                            ${currentMovie.type === "thriller" && "bg-green-700"}
                            ${currentMovie.type === "horror"  && "bg-red-700"}
                        `}>{currentMovie.type}</p>
                    <h2 className="font-semibold text-lg">{currentMovie.name}</h2>

                    <p className="text-sm">${currentMovie.price}/movie</p>
                </div>

            </div>)
            : <h1>Loading...</h1>
        }
        </div>
    )
}