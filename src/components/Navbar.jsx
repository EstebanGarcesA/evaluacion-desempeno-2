import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const linkClass =
  'px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer rounded-md transition-colors'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    [linkClass, isActive ? 'text-amber-400' : 'text-white'].filter(Boolean).join(' ')

  return (
    <nav className="urban-gradient text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold tracking-wider">URBAN THREADS</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/" end className={navLinkClass}>
                Inicio
              </NavLink>
              <NavLink to="/productos" className={navLinkClass}>
                Productos
              </NavLink>
              <NavLink to="/contacto" className={navLinkClass}>
                Contacto
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((open) => !open)}
              className="text-white hover:text-amber-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-white/10 pb-4">
            <div className="mt-2 flex flex-col space-y-1">
              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/productos"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                Productos
              </NavLink>
              <NavLink
                to="/contacto"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                Contacto
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
