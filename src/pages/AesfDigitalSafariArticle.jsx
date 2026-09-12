import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'
import aesfHeroImg from '../assets/AESF Yuranja.png'

export const AESF_DIGITAL_SAFARI_ARTICLE_PATH = '/journal/aes-f-digital-safari'

export function AesfDigitalSafariArticle() {
  const document = getEditorialByPath(AESF_DIGITAL_SAFARI_ARTICLE_PATH)
  return <EditorialDocument document={document} imageSrc={aesfHeroImg} />
}
