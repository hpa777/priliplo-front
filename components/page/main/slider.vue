<template>
	<swiper class="main-slider" :modules="[Pagination]" :pagination="{ clickable: true }" loop>
		<swiper-slide v-for="slide in data" :key="slide.id">
			<div class="relative h-[21rem] w-full">
				<picture>
					<source v-if="slide.img_mob" :srcset="slide.img" media="(width >= 768px)" />
					<img class="h-full w-full object-cover" :src="slide.img_mob ?? slide.img" alt="" />
				</picture>
				<div class="absolute inset-0 p-5">
					<div class="text-4xl font-black text-white" v-html="slide.title" ></div>
					<div v-if="slide.text" v-html="slide.text" class="w-1/2 text-sm font-medium"></div>
					<NuxtLink
						v-if="slide.btn_text && slide.btn_url"
						class="mt-4 inline-flex h-[2.81rem] items-center rounded-1.25 bg-white px-6"
						:to="slide.btn_url"
						>{{ slide.btn_text }}</NuxtLink
					>
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>
<script setup lang="ts">
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const sliderRepo = sliderRepository($fetch);
const { data } = await useAsyncData("main-slider", () => sliderRepo.getSlides("INDEX_SLIDER"));
</script>
<style scoped lang="css">
.main-slider {
	padding-bottom: 3.3rem;
	--swiper-pagination-color: var(--color-my-yellow);
}
</style>
