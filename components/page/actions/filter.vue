<template>
    <div class="container mt-5 xl:mt-10">
        <div class="relative flex flex-col gap-y-4 sm:flex-row sm:gap-x-5">
            <div class="bg-my-yellow absolute top-0 right-full hidden h-full w-[100rem] sm:block"></div>
            <div class="bg-my-yellow rounded-1.25 grid h-[3.13rem] place-content-center text-3xl font-bold uppercase sm:rounded-l-none sm:pr-6 md:h-auto md:text-[1.44rem] lg:text-3xl xl:pl-[1.4rem]">АКЦИИ</div>
            <div class="bg-my-yellow rounded-1.25 relative flex h-[3.13rem] items-center pr-12 pl-5 text-lg sm:grow md:hidden" @click="showFilters = !showFilters">
                <span class="overflow-hidden text-ellipsis whitespace-nowrap">{{ filter?.name }}</span>
                <IconDown class="absolute top-1/2 right-5 -translate-y-1/2" :class="{ 'rotate-180': !showFilters }" />
            </div>
            <ul class="rounded-1.25 absolute top-full left-0 z-10 w-full overflow-hidden md:static md:flex md:flex-wrap md:gap-5 md:rounded-none xl:py-4" :class="{ hidden: !showFilters }">
                <li
                    v-for="item in category"
                    :key="item.id"
                    class="bg-my-gray md:rounded-1.25 hover:bg-my-yellow cursor-pointer px-5 py-2.5 md:grow md:px-2 md:text-center md:text-lg"
                    :class="{ 'md:bg-my-yellow': filter?.id == item.id }"
                    @click="selectFilter(item)">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
    
interface ActionCategory {
    id: number
    name: string
}

const category = [
    { id: 1, name: 'Авто' },
    { id: 2, name: 'Здоровье' },
    { id: 3, name: 'Красота' },
    { id: 4, name: 'Обучение' },
    { id: 5, name: 'Развлечения' },
    { id: 6, name: 'Кафе и рестораны' },
    { id: 7, name: 'Разное' },
    { id: 8, name: 'Все акции', default: true },
]
const filter = ref(category.find((cat) => cat.default))
const showFilters = ref(false)
const selectFilter = (item: ActionCategory) => {
    filter.value = item
    showFilters.value = false
}
</script>
