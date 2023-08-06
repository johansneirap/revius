import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function NavBar() {
  const menu = useRef<HTMLDivElement>(null)
  const mobileButtonOnClick = () => menu.current?.classList.toggle('hidden')
  useEffect(() => menu.current?.classList.add('hidden'), [])

  return (
    <header className="min-w-full bg-gradient-to-r from-blue-700 to-blue-500 absolute top-0">
      <div className="flex text-white justify-between px-8 md:px-16 py-8 text-xl">
        <a href="#">LOGO</a>
        {/* First Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#">¿Por Que Revius?</a>
          <a href="#">Súmate a la comunidad</a>
          <a href="#">Lo más visto</a>
        </nav>
        {/* Second Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="/login">Inicia sesión</Link>
          <Link href="/register">Regístrate</Link>
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button" onClick={mobileButtonOnClick}>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className="mobile-menu flex flex-col md:hidden text-white items-start justify-center px-6 shadow-2xl"
        ref={menu}
      >
        <div className="flex flex-col gap-6 py-4">
          {/* First Nav */}
          <nav className="flex flex-col gap-6">
            <a href="#">¿Por Que Revius?</a>
            <a href="#">Súmate a la comunidad</a>
            <a href="#">Lo más visto</a>
          </nav>
          {/* Second Nav */}
          <nav className="flex flex-col gap-6">
            <a href="#">Inicia Sesión</a>
            <a href="#">Registrate</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
