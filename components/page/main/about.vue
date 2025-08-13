<template>
	<div class="container px-0 pt-10 pb-[4.2rem]">
		<h2 class="text-my-yellow text-center text-3xl font-black">
			{{ slider?.title }}
		</h2>
		<div class="mt-8 mb-5 flex justify-center gap-x-4">
			<button id="about-prev-button">
				<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10.7143 26.6155L18.6429 26.6155L10.5 16.8008L30 16.8008L30 10.4687L10.5 10.4687L18.6429 0.653943L10.7143 0.653944L-1.13481e-06 13.6347L10.7143 26.6155Z"
						fill="#E0E1E2" />
				</svg>
			</button>
			<button id="about-next-button">
				<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19.2857 26.6155L11.3571 26.6155L19.5 16.8008L8.58031e-07 16.8008L1.4116e-06 10.4687L19.5 10.4687L11.3571 0.653943L19.2857 0.653944L30 13.6347L19.2857 26.6155Z"
						fill="#E0E1E2" />
				</svg>
			</button>
		</div>
		<swiper
			:modules="[Navigation]"
			:slides-per-view="2"
			:loop="true"
			:navigation="{
				prevEl: '#about-prev-button',
				nextEl: '#about-next-button',
			}">
			<swiper-slide v-for="slide in slider?.slides" :key="slide.id">
				<div class="flex flex-col items-center">
					<div class="about-item__img relative flex aspect-square w-[150px] px-4">
						<img :src="slide.img" alt="" class="m-auto h-full w-full rounded-full object-contain" />
						<img src="/images/car-photo-border.png" alt="" class="absolute inset-0" />
					</div>
					<div class="flex h-[6.5rem]">
						<img v-if="slide.icon" :src="slide.icon" alt="" class="m-auto max-h-full" />
					</div>
					<div class="px-4 text-center text-sm leading-relaxed font-medium">
						{{ slide.text }}
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script setup lang="ts">
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
const sliderRepo = sliderRepository($fetch);
const { data: slider } = await useAsyncData("main-about-slider", () => sliderRepo.getSlider("INDEX_ABOUT_SLIDER"));
</script>
