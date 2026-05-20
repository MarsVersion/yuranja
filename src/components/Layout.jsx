import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-canvas text-ink">
      <Header />
      <main className="site-main flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
