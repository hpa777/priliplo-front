<template>
	<div class="flex gap-x-2.5">
		<div class="hidden md:block lg:hidden xl:block">
			{{ $t("city_selector_title") }}
		</div>
		<IconMapPoint
			class="text-my-yellow text-[1.4rem] md:hidden lg:block xl:hidden"
		/>
		<Listbox v-model="selectedCity">
			<div class="relative">
				<ListboxButton
					class="bg-my-yellow before:bg-my-yellow relative flex h-[1.56rem] w-[7.7rem] cursor-pointer items-center gap-x-4 overflow-hidden rounded-[0.31rem] pr-6 pl-2.5 text-nowrap before:absolute before:top-0 before:right-0 before:block before:h-full before:w-6"
					>{{ selectedCity?.name }}
					<IconDown class="absolute right-1.5 text-white" />
				</ListboxButton>
				<ListboxOptions
					class="absolute top-full left-0 z-10 bg-white p-2.5 shadow"
				>
					<ListboxOption
						v-for="city in cities"
						:key="city.id"
						:value="city"
						:disabled="city.unavailable"
						class="hover:text-my-yellow cursor-pointer"
					>
						{{ city.name }}
					</ListboxOption>
				</ListboxOptions>
			</div>
		</Listbox>
	</div>
</template>
<script setup lang="ts">
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from "@headlessui/vue";

const cities = [
	{ id: 1, name: "Воронеж", unavailable: false },
	{ id: 2, name: "Тамбов", unavailable: false },
	{ id: 2, name: "Санкт-Петербург", unavailable: false },
];
const selectedCity = ref(cities[0]);
</script>
