import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'

export function ThomasEllerVeniceConversation() {
  const document = getEditorialByPath('/journal/thomas-eller-venice')
  return <EditorialDocument document={document} />
}
