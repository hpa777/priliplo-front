import type { NitroFetchRequest, $Fetch } from 'nitropack'
import type { paths } from '~/types/api'

type Faq = paths['/api/v1/faq/']['get']['responses']['200']['content']['application/json']
export const pageRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) =>({
    async getFaq():Promise<Faq> {
        return fetch<Faq>('/api/v1/faq/')
    }
})