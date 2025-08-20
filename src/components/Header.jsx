import { NavLink , Link} from "react-router-dom"

export default function Header(){
    return(
        <header className="fixed top-0 left-0 w-full h-[60px] rounded-xl flex items-center py-2 bg-emerald-200">
        <div className="flex w-full justify-between items-center px-5">
          <Link to="/" className="font-bold text-xl">#MOVIES</Link>
          <nav className="flex space-x-4">
            
            <NavLink to="/about"
            end
            className={({ isActive }) =>
                isActive
                ? "text-black font-semibold text-[15px] underline"
                : "font-semibold text-[15px] text-black"
            }>About</NavLink>
            <NavLink to="/host"
            className={({ isActive }) =>
                isActive
                ? "text-black font-semibold text-[15px] underline"
                : "font-semibold text-[15px] text-black"
            }>Host</NavLink>
            <NavLink to="/movies"
            className={({ isActive }) =>
                isActive
                ? "text-black font-semibold text-[15px] underline"
                : "font-semibold text-[15px] text-black"
            }>Movies</NavLink>

          </nav>
        </div>
      </header>
    )
}