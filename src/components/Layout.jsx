import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="bg-canvas text-ink">
      <Header />
      {/* Do not use flex-1 on main — it clips long pages (e.g. About) below the viewport */}
      <main className="site-main w-full pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
