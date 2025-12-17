<template>
    <div class="pt-3.5 md:pt-7 xl:pt-[2.4rem]">
        <PageMainSlider />
        <PageMainAbout />
        <PageMainInfo />
        <PageMainMap />
        <PageMainVideo />
        <div class="container mt-[3.8rem] xl:mt-28">
            <h2 class="text-my-yellow text-center text-3xl font-black uppercase md:text-[2.12rem] xl:text-[2.81rem]">Рекламодатели и акции</h2>
            <p class="text-my-blue mt-2.5 text-center text-lg leading-tight font-bold md:mt-5 md:text-xl xl:mt-0.5 xl:text-3xl">Сейчас ищут автомобили для оклейки</p>
        </div>
        <UiCompanySlider :src="actions" class="mt-7 lg:mt-20" />
    </div>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const actions = [
	{
		id: 1,
		img: '/images/logo2.png',
		name: 'item1',
		link: '#',
		label: '2'
	},
	{
		id: 2,
		img: '/images/logo1.png',
		name: 'item2',
		link: '#',
		label: '3'
	},
		
	{
		id: 3,
		img: '/images/logo2.png',
		name: 'item3',
		link: '#',
		label: '4'
	},
	{
		id: 4,
		img: '/images/logo1.png',
		name: 'item4',
		link: '#',
		label: '5'
	},
	{
		id: 5,
		img: '/images/logo2.png',
		name: 'item5',
		link: '#',
		label: '6'
	}
		
]
</script>
