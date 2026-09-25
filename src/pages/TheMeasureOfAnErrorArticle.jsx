import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'
import { THE_MEASURE_OF_AN_ERROR_PATH } from '../data/editorial/measureOfAnError.js'

export const THE_MEASURE_OF_AN_ERROR_ARTICLE_PATH = THE_MEASURE_OF_AN_ERROR_PATH

export function TheMeasureOfAnErrorArticle() {
  const document = getEditorialByPath(THE_MEASURE_OF_AN_ERROR_PATH)
  return <EditorialDocument document={document} imageClassName="w-full" />
}
