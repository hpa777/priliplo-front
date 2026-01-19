import type { NitroFetchRequest, $Fetch } from 'nitropack'
import type { paths } from '~/types/api'

type Faq = paths['/api/v1/faq/']['get']['responses']['200']['content']['application/json']
type Dictionary = paths['/api/v1/dictionary/{locale}/{context}/']['get']['responses']['200']['content']['application/json']
export const pageRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) =>({
    async getFaq():Promise<Faq> {
        return fetch<Faq>('/api/v1/faq/')
    },
    async getDictionary(locale: string, context: string):Promise<Dictionary> {
        return fetch<Dictionary>(`/api/v1/dictionary/${locale}/${context}/`)
    }
})