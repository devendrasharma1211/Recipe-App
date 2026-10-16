import { BookOpen, ChevronRight } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export function Layout({ children }) {
  const { pathname } = useLocation()
  const linkClass = ({ isActive }) => `flex h-full items-center border-b-2 transition ${isActive ? 'border-orange-700 font-semibold text-orange-800' : 'border-transparent text-stone-600 hover:text-orange-800'}`
  return <div className="flex min-h-screen flex-col bg-stone-50 text-stone-800">
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-orange-100 bg-orange-50/95 px-5 backdrop-blur sm:px-10 lg:px-16">
      <Link to="/" className="flex items-center gap-2.5 text-base font-bold tracking-tight sm:text-lg"><span className="grid size-8 place-items-center rounded-xl bg-orange-100 text-orange-800"><BookOpen size={17}/></span>Recipe Book</Link>
      <nav aria-label="Main navigation" className="flex h-full items-center gap-5 text-sm sm:gap-8"><NavLink to="/" end className={linkClass}>Home</NavLink><NavLink to="/recipes" className={linkClass}>Recipes</NavLink><NavLink to="/about" className={linkClass}>About</NavLink></nav>
    </header>
    <main className={`mx-auto w-full max-w-6xl flex-1 px-4 py-7 sm:px-8 sm:py-10 ${pathname === '/' || pathname === '/about' ? 'max-w-5xl' : ''}`}>{children}</main>
    <footer className="mx-auto flex w-[calc(100%-2rem)] max-w-6xl flex-col gap-3 border-t border-stone-200 py-6 text-xs text-stone-500 sm:w-[calc(100%-4rem)] sm:flex-row sm:items-center sm:justify-between"><Link to="/" className="font-medium">Recipe Book <span className="px-1 text-orange-600">·</span> Made with a little extra love</Link><Link to="/recipes" className="flex items-center gap-1 text-orange-800">Find something delicious <ChevronRight size={14}/></Link></footer>
  </div>
}
