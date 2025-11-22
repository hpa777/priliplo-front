<template>
    <div class="relative container lg:mt-9 lg:px-16 xl:px-0">
        <div class="mt-8 mb-5 flex justify-center gap-x-4 text-[#E0E1E2] lg:absolute lg:top-[45.3%] lg:left-0 lg:z-10 lg:m-0 lg:h-0 lg:w-full lg:justify-between xl:-left-[3.8rem] xl:w-[calc(100%+2*3.8rem)]">
            <button id="members-prev-button">
                <icon-left-arrow />
            </button>
            <button id="members-next-button">
                <icon-right-arrow />
            </button>
        </div>
        <ClientOnly>
            <swiper
                :modules="[Navigation]"
                :slides-per-view="2"
                :space-between="20"
                :loop="true"
                :navigation="{
                    prevEl: '#members-prev-button',
                    nextEl: '#members-next-button',
                }"
                :breakpoints="{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1920: {
                        slidesPerView: 4,
                    },
                }">
                <swiper-slide>
                    <div class="aspect-[1.09] overflow-hidden rounded-[1.88rem]">
                        <img src="/images/car-test-1.jpg" alt="" class="h-full w-full object-cover" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="aspect-[1.09] overflow-hidden rounded-[1.88rem]">
                        <img src="/images/car-test-2.jpg" alt="" class="h-full w-full object-cover" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="aspect-[1.09] overflow-hidden rounded-[1.88rem]">
                        <img src="/images/car-test-3.jpg" alt="" class="h-full w-full object-cover" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="aspect-[1.09] overflow-hidden rounded-[1.88rem]">
                        <img src="/images/car-test-4.jpg" alt="" class="h-full w-full object-cover" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="aspect-[1.09] overflow-hidden rounded-[1.88rem]">
                        <img src="/images/car-test-1.jpg" alt="" class="h-full w-full object-cover" />
                    </div>
                </swiper-slide>
            </swiper>
        </ClientOnly>
    </div>
</template>
<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>
