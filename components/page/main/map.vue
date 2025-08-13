<template>
	<div class="container pt-[3.8rem]">
		<h2 class="text-my-yellow text-center text-3xl font-black">ПОСМОТРЕТЬ НА КАРТЕ</h2>
		<p class="mt-3.5 text-center text-lg leading-normal">На карте отображены организации с действующими акциями</p>
		<div class="mt-7 grid grid-cols-2 gap-5">
			<button class="rounded-1.25 bg-my-gray flex h-[4.62rem] items-center justify-center text-xl">Акции</button>
			<button class="rounded-1.25 bg-my-gray flex h-[4.62rem] items-center justify-center text-xl">
				Автомобили
			</button>
			<button class="rounded-1.25 bg-my-gray col-span-2 flex h-[4.62rem] items-center justify-center text-xl">
				Где потратить баллы
			</button>
		</div>

		
		<div id="map" class="h-[400px] w-full">			
		</div>
	</div>
</template>

