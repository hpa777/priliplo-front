<template>
    <div class="container">
        <ul class="mt-5 flex text-sm md:mt-8 md:text-base">
            <li class="after:mx-1 after:content-['/']">
                <NuxtLink to="/" class="hover:text-my-blue">Главная</NuxtLink>
            </li>
            <li v-for="(item, key) in chain" :key="key" :class="{'after:mx-1 after:content-[\'/\']': item.url}">
                <NuxtLink v-if="item.url" :to="item.url" class="hover:text-my-blue">{{ item.name }}</NuxtLink>
                <span v-else class="text-my-blue">{{ item.name }}</span>
            </li>
        </ul>
        <div>    
  </div>
    </div>
</template>
<script lang="ts" setup>

interface ChainItem {
    name: string;
    url?: string;
}
interface Props {
    chain: ChainItem[]
}
defineProps<Props>();

</script>
