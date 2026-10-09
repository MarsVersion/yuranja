import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'
import { TAKING_TIME_TO_LISTEN_PATH } from '../data/editorial/takingTimeToListen.js'

export const TAKING_TIME_TO_LISTEN_ARTICLE_PATH = TAKING_TIME_TO_LISTEN_PATH

export function TakingTimeToListenArticle() {
  const document = getEditorialByPath(TAKING_TIME_TO_LISTEN_PATH)
  return <EditorialDocument document={document} imageClassName="w-full" />
}
