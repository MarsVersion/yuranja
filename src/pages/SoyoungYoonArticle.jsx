import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'

export const SOYOUNG_YOON_ARTICLE_PATH = '/journal/soyoung-yoon-independent-study-program'

export function SoyoungYoonArticle() {
  const document = getEditorialByPath(SOYOUNG_YOON_ARTICLE_PATH)
  return <EditorialDocument document={document} />
}
