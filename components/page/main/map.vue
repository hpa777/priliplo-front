<template>
    <div>
        <div class="container pt-[3.8rem] xl:flex xl:flex-wrap xl:items-center">
            <h2 class="text-my-yellow text-center text-3xl font-black md:text-[2.12rem] xl:text-[2.81rem] xl:text-left xl:w-96">ПОСМОТРЕТЬ НА КАРТЕ</h2>
            <p class="mt-3.5 text-center text-lg leading-normal md:text-[1.44rem] xl:order-3 xl:mt-[1.4rem]">На карте отображены организации с действующими акциями</p>
            <div class="mt-7 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:ml-auto xl:mt-0 xl:w-[51.5rem]">
                <button class="rounded-1.25 bg-my-gray flex h-[4.62rem] items-center justify-center text-xl md:text-2xl md:h-[5.25rem]">Акции</button>
                <button class="rounded-1.25 bg-my-gray flex h-[4.62rem] items-center justify-center text-xl md:text-2xl md:h-[5.25rem]">Автомобили</button>
                <button class="rounded-1.25 bg-my-gray col-span-2 flex h-[4.62rem] items-center justify-center text-xl md:text-2xl md:h-[5.25rem] lg:col-auto xl:px-4">Где потратить баллы</button>
            </div>
        </div>
        <div class="mt-4 h-[28rem] md:h-[42.31rem] xl:mt-7">
            <ClientOnly>
                <yandex-map
                    width="100%"
                    height="100%"
                    :settings="{
                        location: {
                            center: [37.617644, 55.755819],
                            zoom: 9,
                        },
                        showScaleInCopyrights: true,
                    }">
                    <yandex-map-default-scheme-layer />
                    <yandex-map-default-features-layer />
                    <yandex-map-marker v-for="marker in markers" :key="marker.iconSrc" position="top-center left-center" :settings="{ coordinates: marker.coordinates }">
                        <img alt="" class="pin" :src="marker.iconSrc" @click="produceAnAlert" />
                    </yandex-map-marker>
                </yandex-map>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import type { YMap, LngLat } from '@yandex/ymaps3-types'
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker, YandexMapMarker } from 'vue-yandex-maps'

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)

const counter = ref(0)

const produceAnAlert = () => {
    alert(`${++counter.value} capybara`)
}

const markers = [
    {
        coordinates: [37.623, 55.752] as LngLat,
        iconSrc: 'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/yellow-capybara.png',
    },
    {
        coordinates: [38.125, 55.622] as LngLat,
        iconSrc: 'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/purple-capybara.png',
    },
    {
        coordinates: [37.295, 55.415] as LngLat,
        iconSrc: 'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/green-capybara.png',
    },
]
</script>
<style scoped>
.pin {
    cursor: pointer;
    max-width: unset;
    width: 75px;
    height: 75px;
    border-radius: 50%;
}
</style>
