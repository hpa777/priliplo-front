<template>
    <div class="container mt-[3.6rem] xl:mt-[3.1rem]">
        <h2 class="text-my-yellow text-3xl font-black uppercase md:text-[2.12rem] xl:text-[2.93rem]" :class="{'mb-3.5' : $slots.subtitle}">
            <slot></slot>
        </h2>
        <p v-if="$slots.subtitle" class="text-sm md:text-[1.22rem] xl:text-[1.44rem]">
            <slot name="subtitle"></slot>
        </p>
    </div>
</template>