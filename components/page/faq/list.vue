<template>
    <dl class="mt-10 grid gap-y-5 pl-5 sm:mt-[1.6rem] xl:mt-9">
        <div v-for="item in src" :key="item.id" class="rounded-1.25 border-2 border-[#dfdfdf]">
            <dt class="relative flex cursor-pointer items-center gap-x-4 py-4 pr-3 pl-[3.8rem] md:py-5 md:pr-7 md:pl-20 xl:pr-[3.3rem] xl:pl-[6.7rem]" @click="click(item.id)">
                <div class="absolute -left-5 flex items-center gap-x-3.5 md:-left-7 md:gap-x-5 xl:gap-x-11">
                    <IconQuestion class="w-10 md:w-auto" />
                    <IconRightArrows class="w-3 md:w-auto" />
                </div>
                <div class="text-my-blue leading-[1.2] font-medium italic md:text-xl md:leading-[1.2] lg:text-[1.44rem]">{{ item.question }}</div>
                <div
                    class="before:bg-my-blue after:bg-my-blue relative ml-auto aspect-square w-6 shrink-0 opacity-40 before:absolute before:top-0 before:left-1/2 before:h-full before:w-1 before:-translate-x-1/2 before:rounded-full after:absolute after:top-1/2 after:left-0 after:h-1 after:w-full after:-translate-y-1/2 after:rounded-full md:w-[2.4rem]" :class="{'before:hidden':sel === item.id}"></div>
            </dt>
            <Transition name="fade">
                <dd
                    v-show="sel === item.id"
                    class="answer relative overflow-hidden pt-1 pr-4 pb-5 pl-[3.8rem] text-sm md:pt-0 md:pr-16 md:pb-[1.9rem] md:pl-20 md:text-lg lg:pr-20 lg:text-[1.44rem] lg:leading-[1.4] xl:pl-[6.7rem]"
                    :class="'answer--' + item.id"
                    v-html="item.answer"></dd>
            </Transition>
        </div>
    </dl>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'
import type { paths } from '~/types/api'

type Faq = paths['/api/v1/faq/']['get']['responses']['200']['content']['application/json']
defineProps({
    src: {
        type: Array as PropType<Faq>,
        default: () => [],
    },
})

const sel = ref()
const click = (id: number) => {
    sel.value = id === sel.value ? null : id
}
</script>
<style lang="css">
@reference "@/assets/css/global.css";
.answer p:not(:last-child) {
    @apply mb-2 xl:mb-6;
}
.answer ol {
    @apply space-y-3 py-2.5 [counter-reset:ol-counter] md:mb-2 md:space-y-5;
}
.answer ol > li {
    @apply before:bg-my-yellow flex items-start gap-x-2.5 [counter-increment:ol-counter] before:-mt-1 before:grid before:aspect-square before:w-7 before:shrink-0 before:place-content-center before:rounded-full before:text-lg before:font-bold before:content-[counter(ol-counter)] md:gap-x-4 md:before:-mt-2 md:before:w-11;
}
.answer p a {
    @apply text-my-blue font-medium underline;
}
.answer ul {
    @apply list-disc space-y-0.5 pl-5;
}
.answer h3 {
    @apply bg-my-yellow before:bg-my-yellow relative mt-5 mb-2.5 block w-fit rounded-r-2xl py-1.5 pr-5 font-bold before:absolute before:top-0 before:right-full before:h-full before:w-full md:py-2 md:text-xl lg:text-[1.44rem];
}
.answer h3 br {
    @apply md:hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
