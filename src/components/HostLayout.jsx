import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    return(
        <>
            <nav className="space-x-4">
                <NavLink to="/host" end
                    className={({isActive}) => isActive ? 
                    "text-teal-600 underline font-semibold" : "font-semibold text-teal-500"}>Dashboard</NavLink>
                <NavLink to="/host/movies" 
                    className={({isActive}) => isActive ? 
                    "text-teal-600 underline font-semibold" : "font-semibold text-teal-500"}>Movies</NavLink>
                <NavLink to="/host/income" 
                    className={({isActive}) => isActive ? 
                    "text-teal-600 underline font-semibold" : "font-semibold text-teal-500"}>Income</NavLink>
                <NavLink to="/host/reviews" 
                    className={({isActive}) => isActive ? 
                    "text-teal-600 underline font-semibold" : "font-semibold text-teal-500"}>Reviews</NavLink>
                <Outlet />
            </nav>
        </>
    )
}