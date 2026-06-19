import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { CityGuidePage } from './pages/CityGuidePage'
import { CityDetailPage } from './pages/CityDetailPage'
import { SearchResultsPage } from './pages/SearchResultsPage'
import { InstitutionPage } from './pages/InstitutionPage'
import { ExhibitionsPage } from './pages/ExhibitionsPage'
import { ExhibitionDetailPage } from './pages/ExhibitionDetailPage'
import { AboutPage } from './pages/AboutPage'
import { EditorialBoardPage } from './pages/EditorialBoardPage'
import { LegalPage } from './pages/LegalPage'
import { SoyoungYoonArticle } from './pages/SoyoungYoonArticle'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cities/:slug" element={<CityDetailPage />} />
          <Route path="cities" element={<CityGuidePage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="exhibitions" element={<ExhibitionsPage />} />
          <Route path="exhibitions/:slug" element={<ExhibitionDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/editorial-board" element={<EditorialBoardPage />} />
          <Route path="soyoung-yoon-whitney-isp" element={<SoyoungYoonArticle />} />
          <Route
            path="privacy"
            element={
              <LegalPage
                title="Privacy"
                body="Yuranja respects your privacy. This demo site does not collect personal data. A production version would describe analytics, newsletters, and account data here in plain language."
              />
            }
          />
          <Route
            path="terms"
            element={
              <LegalPage
                title="Terms"
                body="This preview is provided as-is for design evaluation. Listings, ratings, and exhibition dates are illustrative and must be verified with each institution before visiting."
              />
            }
          />
          <Route path="spaces/:slug" element={<InstitutionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
