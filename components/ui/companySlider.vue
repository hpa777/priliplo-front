<template>
    <div class="relative container">        
        <UiSliderNavigation
            :prev-id="'company-prev-button'"
            :next-id="'company-next-button'" 
            :class="{'hidden': src.length<3, 'md:hidden': src.length<4, 'lg:hidden': src.length<5}" />
        <ClientOnly>
            <swiper
                    :modules="[Navigation]"
                    :slides-per-view="2"
                    :loop="true"
                    :navigation="{
                        prevEl: '#company-prev-button',
                        nextEl: '#company-next-button',
                    }"
                    :breakpoints="{
                        768: {
                            slidesPerView: 3,
                        },
                        1396: {
                            slidesPerView: 4,
                            spaceBetween: 22,
                        },
                    }">
                <swiper-slide v-for="item in src" :key="item.id">
                    <NuxtLink :to="item.link" class="relative block h-32 pt-1 sm:h-[11.4rem] md:pt-8 md:h-52 lg:h-72 lg:pt-2.5 max-h-full">
                        <img :src="item.img" :alt="item.name" class="m-auto max-h-full" />
                        <div
                            v-if="item.label"
                            class="bg-my-yellow absolute top-0 right-3.5 grid aspect-square w-[1.25rem] place-content-center rounded-full text-sm font-medium text-black sm:w-[1.75rem] sm:text-lg md:w-[2.69rem] md:text-3xl lg:right-9">
                            {{ item.label }}
                        </div>
                    </NuxtLink>
                </swiper-slide>
            </swiper>
        </ClientOnly>
    </div>
</template>
<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { PropType } from 'vue'

interface CompanySlide {
    id: number
    img: string
    name?: string
    link: string
    label?: string
}

defineProps({
    src: {
        type: Array as PropType<CompanySlide[]>,
        required: true,
    },
})
</script>
