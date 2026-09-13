import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'
import { HELLO_90_PATH } from '../data/editorial/hello90.js'

export const HELLO_90_ARTICLE_PATH = HELLO_90_PATH

export function Hello90Article() {
  const document = getEditorialByPath(HELLO_90_PATH)
  return <EditorialDocument document={document} imageClassName="w-full" />
}
