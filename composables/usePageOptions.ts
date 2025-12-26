import { PublicRoutes } from '@/data'

export function usePageOptions() {
    const route = useRoute()

    function getCurrentRoute() {
        return PublicRoutes.find((value) => value.url === route.path)
    }

    return {
        currentRoute : getCurrentRoute()
    }
}