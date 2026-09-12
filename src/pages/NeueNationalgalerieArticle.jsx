import { EditorialDocument } from '../components/EditorialDocument'
import { getEditorialByPath } from '../data/editorial/documents.js'
import cattelanHeroImg from '../assets/MaurizioCattelan NNG.jpg'

export const NEUE_NATIONALGALERIE_ARTICLE_PATH = '/spaces/neue-nationalgalerie'

export function NeueNationalgalerieArticle() {
  const document = getEditorialByPath(NEUE_NATIONALGALERIE_ARTICLE_PATH)
  return (
    <EditorialDocument
      document={document}
      imageSrc={cattelanHeroImg}
      imageClassName="w-full"
    />
  )
}
