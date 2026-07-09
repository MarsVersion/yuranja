import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { PlausibleAnalytics } from './components/PlausibleAnalytics'
import { HomePage } from './pages/HomePage'
import { CityGuidePage } from './pages/CityGuidePage'
import { CityDetailPage } from './pages/CityDetailPage'
import { InstitutionPage } from './pages/InstitutionPage'
import { ExhibitionsPage } from './pages/ExhibitionsPage'
import { ExhibitionDetailPage } from './pages/ExhibitionDetailPage'
import { AboutPage } from './pages/AboutPage'
import { EditorialBoardPage } from './pages/EditorialBoardPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import {
  AESF_DIGITAL_SAFARI_ARTICLE_PATH,
  AesfDigitalSafariArticle,
} from './pages/AesfDigitalSafariArticle'
import {
  NEUE_NATIONALGALERIE_ARTICLE_PATH,
  NeueNationalgalerieArticle,
} from './pages/NeueNationalgalerieArticle'
import { PEOPLE_PATH, PeoplePage } from './pages/PeoplePage'
import {
  THOMAS_ELLER_PAGE_PATH,
  THOMAS_ELLER_VENICE_CONVERSATION_PATH,
  ThomasEllerPage,
} from './pages/ThomasEllerPage'
import { ThomasEllerVeniceConversation } from './pages/ThomasEllerVeniceConversation'
import {
  SOYOUNG_YOON_ARTICLE_PATH,
  SoyoungYoonArticle,
} from './pages/SoyoungYoonArticle'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <PlausibleAnalytics />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cities/:slug" element={<CityDetailPage />} />
          <Route path="cities" element={<CityGuidePage />} />
          <Route path="exhibitions" element={<ExhibitionsPage />} />
          <Route path="exhibitions/:slug" element={<ExhibitionDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/editorial-board" element={<EditorialBoardPage />} />
          <Route path={SOYOUNG_YOON_ARTICLE_PATH.slice(1)} element={<SoyoungYoonArticle />} />
          <Route
            path={AESF_DIGITAL_SAFARI_ARTICLE_PATH.slice(1)}
            element={<AesfDigitalSafariArticle />}
          />
          <Route
            path="soyoung-yoon-whitney-isp"
            element={<Navigate to={SOYOUNG_YOON_ARTICLE_PATH} replace />}
          />
          <Route
            path={NEUE_NATIONALGALERIE_ARTICLE_PATH.slice(1)}
            element={<NeueNationalgalerieArticle />}
          />
          <Route path={PEOPLE_PATH.slice(1)} element={<PeoplePage />} />
          <Route path={THOMAS_ELLER_PAGE_PATH.slice(1)} element={<ThomasEllerPage />} />
          <Route
            path={THOMAS_ELLER_VENICE_CONVERSATION_PATH.slice(1)}
            element={<ThomasEllerVeniceConversation />}
          />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="spaces/:slug" element={<InstitutionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
