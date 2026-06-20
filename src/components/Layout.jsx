import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

function getPageTheme(pathname) {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/cities')) return 'cities'
  if (pathname.startsWith('/exhibitions')) return 'exhibitions'
  if (pathname.startsWith('/about')) return 'about'
  return 'default'
}

export function Layout() {
  const { pathname } = useLocation()
  const theme = getPageTheme(pathname)

  return (
    <div className={`site-shell site-shell--${theme} min-h-svh`}>
      <Header />
      {/* Do not use flex-1 on main — it clips long pages (e.g. About) below the viewport */}
      <main className="site-main w-full pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
