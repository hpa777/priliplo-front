<template>
    <div class="container pb-8 sm:pb-0 md:px-[6.3rem] lg:px-32 xl:px-0">
        <div class="rounded-1.25 aspect-video border-4 border-[#1D70B8] p-[2px] relative mt-7 md:rounded-[2.5rem]">
            <div id="video-prev-button" class="absolute right-[calc(100%+4px)] top-1/2 w-max h-[10vw] -mt-[3.8vw] md:h-[3.8rem] md:-mt-[1.4rem] lg:h-[4.7rem] lg:-mt-[1.6rem] xl:h-auto">
                <img src="/images/page/about/road-sign.png" alt="" class="h-full">
                <div class="w-2.5 absolute top-full left-0 bg-[url(/images/page/about/pillar1.png)] h-[3000px] lg:w-3 xl:w-5"></div>
            </div>
            <div id="video-next-button" class="absolute left-[calc(100%+4px)] top-1/2 w-max h-[10vw] -mt-[3.8vw] md:h-[3.8rem] md:-mt-[1.4rem] lg:h-[4.7rem] lg:-mt-[1.6rem] xl:h-auto">
                <img src="/images/page/about/road-sign.png" alt="" class="h-full scale-x-[-1]">
                <div class="w-2.5 absolute top-full right-0 bg-[url(/images/page/about/pillar1.png)] h-[3000px] scale-x-[-1] lg:w-3 xl:w-5"></div>
            </div>
            <div class="h-full overflow-hidden rounded-[0.8rem] border-4 border-[#1D70B8] md:rounded-[2.2rem]">
                <ClientOnly>
                    <swiper
                        class="h-full"
                        :modules="[Navigation]"
                        :slides-per-view="1"
                        :space-between="20"
                        :loop="true"
                        :navigation="{
                            prevEl: '#video-prev-button',
                            nextEl: '#video-next-button',
                        }">
                        <swiper-slide>
                            <img src="/images/about-video-slide.png" alt="" class="h-full w-full object-cover" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/images/about-video-slide.png" alt="" class="h-full w-full object-cover" />
                        </swiper-slide>
                    </swiper>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>
