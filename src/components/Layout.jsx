import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-svh bg-canvas text-ink">
      <Header />
      <main className="site-main pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
