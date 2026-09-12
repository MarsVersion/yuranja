import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'
import { thomasEller } from '../assets/people/images.js'

export const THOMAS_ELLER_PAGE_PATH = '/people/thomas-eller'
export const THOMAS_ELLER_VENICE_CONVERSATION_PATH = '/journal/thomas-eller-venice'

export function ThomasEllerPage() {
  const document = getEditorialByPath(THOMAS_ELLER_PAGE_PATH)
  return <EditorialDocument document={document} imageSrc={thomasEller} />
}
