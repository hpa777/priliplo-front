export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const auth = useAuthStore()
    const api = $fetch.create({
        baseURL: config.public.apiUrl,
        async onRequest({ options }) {
            await auth
                .retrieveValidTokens()
                .then((accessToken) => options.headers.set('Authorization', `Bearer ${accessToken}`))
                .catch(async () => {
                    await nuxtApp.runWithContext(() => {
                        navigateTo('/user/login')
                    })
                })
        },
    })
    return {
        provide: {
            api,
        },
    }
})
