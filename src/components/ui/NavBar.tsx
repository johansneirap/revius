export default function NavBar() {
  return (
    <header className="min-w-full bg-gradient-to-r from-blue-700 to-blue-500 absolute">
      <div className="flex text-white justify-between px-16 py-8 text-xl">
        <nav>
          <ul className="flex gap-6">
            <li>LOGO</li>
            <li>¿Por Que Revius?</li>
            <li>Súmate a la comunidad</li>
            <li>Lo más visto</li>
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-6">
            <li>Inicia Sesión</li>
            <li>Registrate</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
