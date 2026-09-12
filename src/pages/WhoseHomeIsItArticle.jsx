import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'
import { WHOSE_HOME_IS_IT_PATH } from '../data/editorial/whoseHomeIsIt.js'

export const WHOSE_HOME_IS_IT_ARTICLE_PATH = WHOSE_HOME_IS_IT_PATH

export function WhoseHomeIsItArticle() {
  const document = getEditorialByPath(WHOSE_HOME_IS_IT_PATH)
  return <EditorialDocument document={document} imageClassName="w-full" />
}
