<template>
    <div class="xl:bg-[url(/images/page/main/index_video_bg_xl.png)] xl:bg-contain xl:bg-center xl:bg-no-repeat">
        <div class="container pt-[3.8rem]">
            <h2 class="text-my-yellow text-center text-3xl font-black md:text-[2.12rem] xl:text-left xl:text-[2.81rem]">АКТУАЛЬНОЕ ВИДЕО</h2>
            <div class="relative lg:mt-9 lg:px-16">
                <div class="mt-8 mb-5 flex justify-center gap-x-4 text-[#E0E1E2] lg:absolute lg:top-72 lg:left-0 lg:z-10 lg:m-0 lg:h-0 lg:w-full lg:justify-between">
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
                        :slides-per-view="1"
                        :loop="true"
                        :navigation="{
                            prevEl: '#about-prev-button',
                            nextEl: '#about-next-button',
                        }"
                        :breakpoints="{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }">
                        <swiper-slide>
                            <div class="flex justify-center">
                                <img src="/images/tg_slide.png" alt="" />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="flex justify-center">
                                <img src="/images/tg_slide.png" alt="" />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="flex justify-center">
                                <img src="/images/tg_slide.png" alt="" />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="flex justify-center">
                                <img src="/images/tg_slide.png" alt="" />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="flex justify-center">
                                <img src="/images/tg_slide.png" alt="" />
                            </div>
                        </swiper-slide>
                    </swiper>
                </ClientOnly>
            </div>
            <a href="#" class="bg-my-yellow rounded-1.25 mt-8 flex h-[4.62rem] w-full items-center justify-center text-xl md:mx-auto md:h-[5.25rem] md:w-[15.5rem] md:text-2xl">Телеграмм</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>
