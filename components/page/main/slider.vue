<template>
    <div class="relative">
        <ClientOnly>
            <swiper
                class="main-slider !pb-[3.3rem] md:!pb-16 lg:!pb-0"
                :modules="[Pagination, Navigation]"
                :pagination="{ clickable: true }"
                :navigation="{
                    prevEl: '#main-prev-button',
                    nextEl: '#main-next-button',
                }"
                loop>
                <swiper-slide v-for="slide in data" :key="slide.id">
                    <div class="relative h-[21rem] w-full md:h-[25.8rem] xl:h-[46.3rem]">
                        <picture>
                            <source :srcset="slide.img" media="(width >= 1396px)" />
                            <source v-if="slide.img_mob" :srcset="slide.img_tablet ?? slide.img" media="(width >= 768px)" />
                            <img class="h-full w-full object-cover" :src="slide.img_mob ?? slide.img" alt="" />
                        </picture>
                        <div class="absolute inset-0 container">
                            <div class="py-5 md:w-1/2 md:pt-12 lg:pl-[5.3rem] xl:pl-0 xl:pt-[7.4rem]">
                                <div class="text-4xl font-black text-white md:text-[2.55rem] xl:text-6xl xl:leading-[4.3rem]" v-html="slide.title"></div>
                                <div v-if="slide.text" class="w-1/2 text-sm font-medium md:my-4 md:w-auto md:text-base xl:text-3xl xl:mt-9" v-html="slide.text"></div>
                                <NuxtLink v-if="slide.btn_text && slide.btn_url" class="rounded-1.25 mt-4 inline-flex h-[2.81rem] items-center bg-white px-6 md:h-[3.38rem] xl:text-2xl xl:h-[5.25rem] xl:mt-11 xl:px-11" :to="slide.btn_url">{{
                                    slide.btn_text
                                }}</NuxtLink>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </ClientOnly>
        <div class="absolute top-1/2 left-0 z-10 -mt-2 hidden h-0 w-full justify-between px-8 lg:flex xl:px-28 xl:mt-6">
            <button id="main-prev-button">
                <icon-left-arrow />
            </button>
            <button id="main-next-button">
                <icon-right-arrow />
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const sliderRepo = sliderRepository($fetch)
const { data, refresh } = useAsyncData('main-slider', () => sliderRepo.getSlides('INDEX_SLIDER'), {
    server: false,
    immediate: false,
})
onMounted(() => {
    refresh()
})
</script>
<style scoped lang="css">
.main-slider {
    --swiper-pagination-color: var(--color-my-yellow);
}
</style>
