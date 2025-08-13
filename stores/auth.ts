import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import dayjs from 'dayjs'

type Tokens = {
    access: string
    refresh: string
}
type User = {
    token_type: string
    exp: number
    iat: number
    jti: string
    user_id: number
}

const LOCAL_STORAGE_KEY = 'authTokens'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,        
        authTokens: null as Tokens | null
    }),
    actions: {
        isAuthenticated() : boolean {
            return !!this.user && !!this.authTokens
        },
        setTokens(tokens: Tokens) {
            this.authTokens = tokens 
            this.user = jwtDecode(this.authTokens.access)            
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.authTokens))
        },
        logout() {
            this.user = null            
            this.authTokens = null
            localStorage.removeItem(LOCAL_STORAGE_KEY)
        },
        checkAuth() {
            if (this.isAuthenticated()) {
                return
            }
            this.authTokens = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || 'null')
            if (this.authTokens) {
                this.user = jwtDecode(this.authTokens.access)                
            }
        },
        async retrieveValidTokens(): Promise<string | undefined> {
            this.checkAuth()
            if (!this.user || !this.authTokens) return
            const isExpired = dayjs.unix(this.user.exp).diff(dayjs(), 'minute') < 1
            if (isExpired) {
                const tokenRepo = tokenRepository($fetch)
                try {
                    const newTokens = await tokenRepo.refreshToken({ refresh: this.authTokens.refresh })
                    this.setTokens(newTokens)
                } catch (error) {
                    console.error('Error refreshing tokens:', error)
                    this.logout()
                    throw error
                }
            }            
            return this.authTokens.access
        },
    },
})
