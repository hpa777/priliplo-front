import type { NitroFetchRequest, $Fetch } from 'nitropack'
import type { paths } from '~/types/api'

type Slides = paths['/api/v1/sliders/{slug}/slides/']['get']['responses']['200']['content']['application/json']
type Slider = paths['/api/v1/sliders/{slug}/']['get']['responses']['200']['content']['application/json']
export const sliderRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) =>({
    async getSlides(slug: string):Promise<Slides> {
        return fetch<Slides>(`/api/v1/sliders/${slug}/slides/`)
    },
    async getSlider(slug: string): Promise<Slider> {
        return fetch<Slider>(`/api/v1/sliders/${slug}/`)
    }
})
