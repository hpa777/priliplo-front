<template>
    <div>
        <UiBreadCrumb :chain="[{ name: 'Акции' }]"></UiBreadCrumb>
        <UiPageTitle>КОМПАНИИ</UiPageTitle>
        <UiCompanySlider :src="actions" class="mt-3 lg:mt-[1.4rem] xl:mt-10" />
        <PageActionsFilter />

        <!--Actions-->
        <div class="relative container mt-[1.6rem] xl:mt-10">
            <UiSliderNavigation
                :prev-id="'action-prev-button'"
                :next-id="'action-next-button'" 
                 />
            <ClientOnly>
                <swiper
                    :modules="[Navigation]"
                    :slides-per-view="1"
                    :loop="true"
                    :navigation="{
                        prevEl: '#action-prev-button',
                        nextEl: '#action-next-button',
                    }"                    
                    :breakpoints="{
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },                        
                        1396: {
                            slidesPerView: 4,
                            spaceBetween: 16,                            
                        },
                    }">
                    <swiper-slide v-for="n in 6" :key="n" class="pb-8">
                        <div class="rounded-1.88 border-my-blue relative border-2 pb-4 xl:pb-6">
                            <div class="border-my-blue absolute top-0 left-7 aspect-square w-[3.13rem] rounded-b-xl border-2 border-t-0 bg-white lg:w-[5.3rem] xl:w-24">
                                <img src="/images/logo1.png" alt="" class="h-full w-full object-contain" />
                            </div>
                            <div class="p-2 pb-0">
                                <div class="rounded-1.25 aspect-[1.17] overflow-hidden">
                                    <img src="/images/action.png" alt="" class="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div class="text-my-blue mt-2.5 line-clamp-2 h-12 text-center text-xl leading-[1.2] font-bold xl:mt-1 xl:h-16 xl:text-[1.75rem]">Пиццерия <br /><span class="uppercase">«Гравитация»</span></div>
                            <div class="mt-2.5 line-clamp-2 h-11 bg-[linear-gradient(90deg,#e4e4e4_0%,#f1f1f1_51.5%)] p-1 text-center text-sm leading-[1.2] font-medium xl:h-12 xl:text-base">
                                Акция: Р-ПГ-1 <br />пример текста
                            </div>
                            <div
                                class="grid grid-cols-[2.8rem_4.2rem_1fr] items-center gap-2 px-5 py-3.5 sm:px-2.5 lg:grid-cols-[2.8rem_5.2rem_1fr] lg:gap-x-[1.1rem] lg:gap-y-[0.7rem] lg:px-[1.1rem] lg:py-5 xl:grid-cols-[3.3rem_6rem_1fr] xl:px-7 xl:py-3.5">
                                <div>
                                    <IconCoins class="max-w-full" />
                                </div>
                                <div class="text-sm leading-[1.2] font-medium lg:text-base xl:text-xl">Бонусов за акцию</div>
                                <div class="text-right text-[1.56rem] font-medium sm:text-lg lg:text-[1.56rem] xl:text-center xl:text-3xl">3 000</div>
                                <div class="text-my-yellow relative -top-1.5 col-span-3 text-sm font-bold whitespace-nowrap lg:text-base xl:text-xl">Оплата бонусами: до 50%</div>
                                <div>
                                    <img src="/images/page/actions/check_ico.png" alt="" class="h-10 xl:h-auto" />
                                </div>
                                <div class="text-sm leading-[1.2] font-medium lg:text-base xl:text-xl">Приём заявок</div>
                                <div class="text-right text-sm leading-[1.2] font-medium lg:text-base xl:text-center xl:text-xl">до 31.05<br />2024</div>
                                <div>
                                    <IconCar class="max-w-full text-my-blue" />
                                </div>
                                <div class="text-my-blue text-sm leading-[1.2] font-medium lg:text-base xl:text-xl">Машин требуется</div>
                                <div class="text-my-blue text-right text-[1.56rem] font-medium sm:text-lg lg:text-[1.56rem] xl:text-center xl:text-3xl">25</div>
                                <div></div>
                                <div class="text-my-green text-sm leading-[1.2] font-medium lg:text-base xl:text-xl">Осталось мест</div>
                                <div class="text-my-green text-right text-[1.56rem] font-medium sm:text-lg lg:text-[1.56rem] xl:text-center xl:text-3xl">8</div>
                            </div>
                            <a
                                href="#"
                                class="bg-my-yellow absolute bottom-0 left-1/2 grid h-[2.81rem] w-[10.38rem] -translate-x-1/2 translate-y-1/2 place-content-center rounded-xl lg:text-lg xl:h-[3.69rem] xl:w-[12.13rem] xl:text-2xl"
                                >Подробнее</a
                            >
                        </div>
                    </swiper-slide>
                </swiper>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const actions = [
    {
        id: 1,
        img: '/images/logo2.png',
        name: 'item1',
        link: '#',
        label: '2',
    },
    {
        id: 2,
        img: '/images/logo1.png',
        name: 'item2',
        link: '#',
        label: '3',
    },

    {
        id: 3,
        img: '/images/logo2.png',
        name: 'item3',
        link: '#',
        label: '4',
    },
    {
        id: 4,
        img: '/images/logo1.png',
        name: 'item4',
        link: '#',
        label: '5',
    },
    {
        id: 5,
        img: '/images/logo2.png',
        name: 'item5',
        link: '#',
        label: '6',
    },
]
</script>
