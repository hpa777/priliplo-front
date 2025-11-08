<template>
    <div class="container pt-10 pb-[4.2rem] lg:pt-[3.6rem]">
        <h2 class="text-my-yellow text-center text-3xl font-black lg:text-4xl xl:text-left xl:text-[2.81rem]">
            {{ slider?.title }}
        </h2>

        <div class="relative lg:mt-8 lg:px-[4.5rem] xl:-mx-16 xl:px-0">
            <div class="mt-8 mb-5 flex justify-center gap-x-4 text-[#E0E1E2] lg:absolute lg:top-[6.7rem] lg:left-0 lg:z-10 lg:m-0 lg:h-0 lg:w-full lg:justify-between lg:px-6 xl:px-0 xl:-left-20 xl:top-[14.2rem] xl:w-[calc(100%+10rem)]">
                <button id="about-prev-button">
                    <icon-left-arrow />
                </button>
                <button id="about-next-button">
                    <icon-right-arrow />
                </button>
            </div>
            <ClientOnly>
                <swiper
                    :modules="[Navigation]"
                    :slides-per-view="2"
                    :loop="true"
                    :navigation="{
                        prevEl: '#about-prev-button',
                        nextEl: '#about-next-button',
                    }"
                    :breakpoints="{
                        768: {
                            slidesPerView: 3,
                        },
                        960: {
                            slidesPerView: 3,
                            spaceBetween: 22,
                        },
                    }">
                    <swiper-slide v-for="slide in slider?.slides" :key="slide.id">
                        <div class="flex flex-col items-center">
                            <div class="about-item__img relative flex aspect-square w-[87%] px-4 xl:w-full xl:px-[8.2%]">
                                <img :src="slide.img" alt="" class="m-auto h-full w-full rounded-full object-contain" />
                                <img src="/images/car-photo-border.png" alt="" class="absolute inset-0 w-full" />
                            </div>
                            <div class="xl:flex xl:items-start xl:pt-[1.1rem] xl:px-[1.4rem] xl:gap-x-10">
                                <div class="flex h-24 shrink-0 md:mt-5 xl:mt-0 xl:h-auto">
                                    <img v-if="slide.icon" :src="slide.icon" alt="" class="m-auto max-h-full" />
                                </div>
                                <div class="px-4 text-center text-sm leading-relaxed font-medium xl:px-0 xl:text-left xl:text-3xl xl:leading-10 xl:pt-1" v-html="slide.text"></div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
const sliderRepo = sliderRepository($fetch)
const { data: slider, refresh } = useAsyncData('main-about-slider', () => sliderRepo.getSlider('INDEX_ABOUT_SLIDER'), {
    server: false,
    immediate: false,
})
onMounted(() => {
    refresh()
})
</script>
