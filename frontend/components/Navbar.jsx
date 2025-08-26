import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white shadow-sm border-b border-gray-200">
      <nav className="flex items-baseline justify-center gap-6 py-3 text-lg" 
           style={{ fontFamily: "'Just Me Again Down Here', cursive" }}>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `hover:text-green-600 transition-colors px-2 ${isActive ? 'text-green-600 font-bold' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/about"
          className={({ isActive }) => 
            `hover:text-green-600 transition-colors px-2 ${isActive ? 'text-green-600 font-bold' : ''}`
          }
        >
          About Me
        </NavLink>
        <h1 className="text-xl font-normal mx-6">My Showcase</h1>
        <NavLink 
          to="/projects"
          className={({ isActive }) => 
            `hover:text-green-600 transition-colors px-2 ${isActive ? 'text-green-600 font-bold' : ''}`
          }
        >
          My Projects
        </NavLink>
        <NavLink 
          to="/contact"
          className={({ isActive }) => 
            `hover:text-green-600 transition-colors px-2 ${isActive ? 'text-green-600 font-bold' : ''}`
          }
        >
          Contact Me
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar