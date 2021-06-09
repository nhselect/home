import { IContentDocument } from '@nuxt/content/types/content'

export interface ILink extends IContentDocument {
  name: string
  url: string
}
