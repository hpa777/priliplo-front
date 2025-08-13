import type { NitroFetchRequest, $Fetch } from 'nitropack'
//import type { paths } from '~/types/api'

export type Tokens = {
    access: string
    refresh: string
}
export type Credentials = {
    username: string
    password: string
}

export const tokenRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
    async getTokens(credentials: Credentials): Promise<Tokens> {
        return fetch<Tokens>('token/', {
            baseURL: useRuntimeConfig().public.apiUrl,
            method: 'POST',
            body: credentials,
        })
    },
    async refreshToken(refreshToket: { refresh: string }): Promise<Tokens> {
        return fetch<Tokens>('token/refresh/', {
            baseURL: useRuntimeConfig().public.apiUrl,
            method: 'POST',
            body: refreshToket,
        })
    },
    /*
    async register(userData: paths['/api/register/']['post']['requestBody']['content']['application/json']): Promise<paths['/api/register/']['post']['responses']['201']['content']['application/json']> {
        return fetch<paths['/api/register/']['post']['responses']['201']['content']['application/json']>('register/', {
            baseURL: useRuntimeConfig().public.apiUrl,
            method: 'POST',
            body: userData
        })
    }
        */
})
