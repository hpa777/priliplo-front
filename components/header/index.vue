<template>
    <header>
        <div class="relative container flex items-start justify-between pt-[1.2rem] md:gap-x-0 md:pt-[1.9rem] lg:grid lg:grid-cols-[4.7rem_1fr] lg:gap-y-5 lg:pt-5 xl:gap-x-16 xl:px-0 xl:pt-[3.2rem]">
            <NuxtLink to="/" class="flex-shrink-0 lg:row-start-2 xl:row-span-2 xl:row-start-1">
                <picture>
                    <source srcset="/images/layout/logo.png" media="(min-width: 768px)" />
                    <img src="/images/layout/logo_sm.png" alt="" />
                </picture>
            </NuxtLink>

            <div class="flex justify-evenly sm:flex-grow-1 md:pt-2.5 lg:col-span-2 lg:row-start-1 lg:justify-between xl:col-span-1 xl:pt-4">
                <div class="flex flex-shrink-0 md:flex-col md:gap-y-[1.3rem] lg:flex-row lg:gap-x-10 xl:gap-x-[13.7rem]">
                    <div class="flex flex-col gap-y-4">
                        <HeaderCitySelect />
                        <a class="text-center font-bold md:hidden" :href="'tel:' + $t('header_telephon')">{{ $t('header_telephon') }}</a>
                    </div>

                    <div
                        id="search-form-1"
                        ref="SearchForm"
                        class="hidden items-center overflow-hidden rounded-[0.31rem] border border-stone-400 bg-white sm:absolute sm:top-5 sm:left-0 sm:h-10 sm:w-full md:static md:flex md:h-[1.56rem] lg:w-[12.14rem] xl:w-72"
                        :class="{ 'sm:flex': showSearchMobile }">
                        <button class="bg-my-yellow grid aspect-square h-10 place-content-center rounded-r-[0.31rem] md:h-full">
                            <IconSearch class="h-6 w-6 md:h-4 md:w-4" />
                        </button>
                        <input type="text" placeholder="Поиск компании" class="flex-grow-1 indent-4 placeholder:text-stone-400 focus:outline-0" />
                    </div>
                </div>

                <div class="flex md:flex-col md:gap-y-[1.3rem] lg:flex-row lg:gap-x-10">
                    <div class="hidden gap-x-1 md:flex">
                        <a href="" class="grid aspect-square h-[1.56rem] place-content-center rounded-[0.31rem] bg-[#08c]">
                            <IconTelegram />
                        </a>
                        <a href="" class="grid aspect-square h-[1.56rem] place-content-center rounded-[0.31rem] bg-[#34bf44]">
                            <IconWhatsapp />
                        </a>
                        <a class="ml-2.5" :href="'tel:' + $t('header_telephon')">{{ $t('header_telephon') }}</a>
                    </div>
                    <div class="flex sm:gap-x-6 md:gap-x-7">
                        <button class="hidden flex-col items-center gap-y-1 sm:flex md:hidden" @click="showSearchMobile = true">
                            <div class="bg-my-yellow grid aspect-square h-10 place-content-center rounded-[0.31rem] md:h-auto">
                                <IconSearch class="h-8 w-8" />
                            </div>
                            <span class="text-sm">Поиск</span>
                        </button>
                        <HeaderLoginBtn class="md-login-btn" />
                        <HeaderRegisterBtn class="border-my-yellow hidden h-[1.56rem] items-center rounded-[0.31rem] border px-2.5 md:flex" />
                    </div>
                </div>
            </div>

            <button class="bg-my-yellow grid aspect-square w-[3.8rem] place-content-center rounded-[0.31rem] md:mt-4 lg:hidden" @click="showMenuMobile = true">
                <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.07143 4.93018H28.9286C29.5203 4.93018 30 4.4397 30 3.83459V1.0956C30 0.490485 29.5203 0 28.9286 0H1.07143C0.479665 0 0 0.490485 0 1.0956V3.83459C0 4.4397 0.479665 4.93018 1.07143 4.93018ZM1.07143 15.8861H28.9286C29.5203 15.8861 30 15.3957 30 14.7905V12.0516C30 11.4464 29.5203 10.956 28.9286 10.956H1.07143C0.479665 10.956 0 11.4464 0 12.0516V14.7905C0 15.3957 0.479665 15.8861 1.07143 15.8861ZM1.07143 26.8421H28.9286C29.5203 26.8421 30 26.3516 30 25.7465V23.0075C30 22.4024 29.5203 21.9119 28.9286 21.9119H1.07143C0.479665 21.9119 0 22.4024 0 23.0075V25.7465C0 26.3516 0.479665 26.8421 1.07143 26.8421Z"
                        fill="black" />
                </svg>
            </button>
            <nav
                ref="MainMenu"
                class="fixed top-0 right-0 z-10 flex max-h-screen flex-col gap-y-5 overflow-y-auto bg-black px-5 pt-7 md:pb-7 lg:static lg:block lg:overflow-visible lg:bg-white lg:p-0"
                :class="{ hidden: !showMenuMobile, flex: showMenuMobile }">
                <button class="absolute top-7 right-5 z-10" @click="showMenuMobile = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path
                            fill="#F7F7F7"
                            fill-rule="evenodd"
                            d="M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12 12-5.377 12-12S18.623 0 12 0Zm0 1.026c6.057 0 10.974 4.917 10.974 10.974S18.057 22.974 12 22.974 1.026 18.057 1.026 12 5.943 1.026 12 1.026Z"
                            clip-rule="evenodd" />
                        <path
                            fill="#F7F7F7"
                            d="M6.4 7.077a.478.478 0 1 1 .677-.676L12 11.324 16.923 6.4a.478.478 0 1 1 .676.676L12.676 12l4.923 4.923a.478.478 0 0 1-.676.676L12 12.677l-4.923 4.922a.478.478 0 0 1-.676-.676L11.323 12 6.401 7.077Z" />
                    </svg>
                </button>
                <HeaderLoginBtn class="sm-login-btn" />
                <HeaderRegisterBtn class="border-my-yellow flex w-fit items-center justify-center rounded-[0.31rem] border px-1 text-white sm:hidden" />
                <div id="search-form-2" class="flex h-[1.56rem] items-center overflow-hidden rounded-[0.31rem] border border-stone-400 bg-white sm:hidden">
                    <button class="bg-my-yellow grid aspect-square h-full place-content-center rounded-r-[0.31rem]">
                        <IconSearch class="h-4 w-4" />
                    </button>
                    <input type="text" placeholder="Поиск компании" class="flex-grow-1 indent-4 placeholder:text-stone-400 focus:outline-0" />
                </div>

                <ul class="flex flex-col justify-between gap-y-3 lg:flex-row lg:flex-wrap lg:gap-x-4 lg:gap-y-2.5 lg:pt-4 lg:pl-11 xl:gap-x-0 xl:p-0">
                    <li v-for="(item, key) in PublicRoutes" :key="key" class="main-menu-item group" :class="{ 'has-submenu': item.submenu, active: item.url == route.path }" @click="menuItemClick">
                        <NuxtLink :to="item.url" class="hover:text-my-yellow group-[.active]:text-my-yellow text-sm font-medium uppercase">{{ item.name }}</NuxtLink>
                        <IconDown v-if="item.submenu" class="absolute top-1.5 right-0 inline w-3 lg:static lg:ml-1" />
                        <div v-if="item.submenu" class="main-submenu hidden group-hover:block lg:absolute lg:z-10 lg:bg-white pt-2">
                            <ul class="flex flex-col gap-y-1.5">
                                <li v-for="(subitem, key) in item.submenu" :key="key">
                                    <a href="" class="hover:text-my-yellow text-xs font-medium uppercase">{{ subitem.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="flex gap-x-4 py-8 md:hidden">
                    <a href="" class="grid aspect-square h-[1.56rem] place-content-center rounded-[0.31rem] bg-[#08c]"><IconTelegram /></a>
                    <a href="" class="grid aspect-square h-[1.56rem] place-content-center rounded-[0.31rem] bg-[#34bf44]"><IconWhatsapp /></a>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { PublicRoutes } from '@/data'

const route = useRoute()
watch(
    () => route.path,
    (newPath, oldPath) => {
        console.log(`Navigated from ${oldPath} to ${newPath}`)
    }
)

const showMenuMobile = ref(false)
watch(showMenuMobile, (v) => {
    if (v === false) {
        closeAllSubmenu()
    }
})

const MainMenuContainer = useTemplateRef('MainMenu')
onClickOutside(MainMenuContainer, () => {
    closeAllSubmenu()
    if (showMenuMobile.value === true) {
        showMenuMobile.value = false
    }
})

const showSearchMobile = ref(false)
const searchForm = useTemplateRef('SearchForm')
onClickOutside(searchForm, () => {
    if (showSearchMobile.value === true) {
        showSearchMobile.value = false
    }
})

const clickedItemClass = 'menu-item-clicked'
const menuItemClick = (e: Event) => {
    const el = (e.target as HTMLElement).closest('.main-menu-item')
    if (!el) return
    if (!el.classList.contains('has-submenu') || el.classList.contains(clickedItemClass)) {
        showMenuMobile.value = false
        return true
    }
    e.preventDefault()
    closeAllSubmenu()
    el.classList.add(clickedItemClass)
}

const closeAllSubmenu = () => document.querySelectorAll('.main-menu-item').forEach((m) => m.classList.remove(clickedItemClass))
</script>
