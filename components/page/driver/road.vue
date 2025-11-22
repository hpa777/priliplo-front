<template>
    <div class="relative mt-[1.6rem] lg:mt-9 xl:mt-10">
        <picture>
            <source srcset="/images/page/driver/road-xl.png" media="(min-width:1396px)" />
            <source srcset="/images/page/driver/road-lg.png" media="(min-width:960px)" />
            <source srcset="/images/page/driver/road-md.png" media="(min-width:768px)" />
            <img src="/images/page/driver/road-sm.jpg" alt="" class="w-full" />
        </picture>

        <div class="absolute top-[26vw] left-[43vw] md:top-[4.4%] md:left-[23.7%] md:h-[21.6%] md:w-[26.3%] lg:top-[3.8%] lg:left-[23.3%] lg:h-[20.3%] lg:w-[26.7%] xl:top-[8.5%] xl:left-[31.6%] xl:h-[23.5%] xl:w-[17.7%]">
            <div
                class="bg-my-blue peer flex aspect-square w-[8.4vw] items-center justify-center rounded-full border-4 border-white text-[4vw] font-bold text-white transition-[border-width] md:hidden"
                :class="{ active: activeButton === '1' }"
                @click="setActive('1')">
                1
            </div>
            <div
                class="bg-my-yellow tail tail--yellow tail--down absolute bottom-[17vw] left-[4.2vw] hidden -translate-x-1/2 flex-col items-center justify-center gap-y-2.5 rounded-4xl px-5 py-3.5 text-center peer-[.active]:flex md:relative md:inset-0 md:flex md:h-full md:translate-0 md:px-1.5 lg:gap-y-[2vw]">
                <p class="text-sm leading-[1.1] font-bold uppercase lg:text-[1.5vw]">зарегистрировать свой автомобиль</p>
                <a href="" class="lg:rounded-1.25 flex h-[2.56rem] items-center justify-center self-stretch rounded-full bg-white lg:h-[4.4vw] lg:w-[73%] lg:self-center lg:text-[1.3vw]">Регистрация</a>
            </div>
        </div>

        <div class="absolute top-[26vw] left-[64vw] md:top-[4.4%] md:left-[52.5%] md:h-[21.6%] md:w-[26.3%] lg:top-[3.8%] lg:left-[52.1%] lg:h-[20.3%] lg:w-[26.7%] xl:top-[8.5%] xl:left-[51.6%] xl:h-[23.5%] xl:w-[17.7%]">
            <div
                class="bg-my-blue peer flex aspect-square w-[8.4vw] items-center justify-center rounded-full border-4 border-white text-[4vw] font-bold text-white transition-[border-width] md:hidden"
                :class="{ active: activeButton === '2' }"
                @click="setActive('2')">
                2
            </div>
            <div
                class="bg-my-yellow tail tail--yellow tail--down absolute bottom-[17vw] left-[4.2vw] hidden min-w-48 -translate-x-1/2 flex-col items-center justify-center gap-y-2.5 rounded-4xl px-5 py-3.5 text-center peer-[.active]:flex md:relative md:inset-0 md:flex md:h-full md:translate-0 md:px-1.5 md:after:!left-[23%] lg:gap-y-[2vw] lg:after:!left-[28%] xl:gap-y-2.5 xl:after:!left-[23%]">
                <p class="text-sm leading-[1.1] font-bold uppercase lg:text-[1.5vw]">Подать заявку</p>
                <p class="text-sm leading-none lg:text-[0.95vw]">или получить предложение на участие в рекламной кампании</p>
                <IconForm class="shrink-0 text-white lg:h-[5vw] lg:w-[4vw]" />
            </div>
        </div>

        <div class="absolute top-[41vw] left-[78.7vw] md:top-[27.8%] md:left-[77.9%] md:h-[31.6%] md:w-[19.5%] lg:top-[31.8%] lg:left-[78%] lg:h-[24.9%] lg:w-[19.9%] xl:top-[39.1%] xl:left-[69%] xl:h-[25.8%] xl:w-[17.7%]">
            <div
                class="bg-my-blue peer flex aspect-square w-[8.4vw] items-center justify-center rounded-full border-4 border-white text-[4vw] font-bold text-white transition-[border-width] md:hidden"
                :class="{ active: activeButton === '3' }"
                @click="setActive('3')">
                3
            </div>
            <div
                class="bg-my-yellow tail tail--yellow tail--right md-tail--left absolute top-[4.2vw] right-[17.2vw] hidden min-w-48 -translate-y-1/2 flex-col items-center justify-center gap-y-2.5 rounded-4xl px-5 py-3.5 text-center peer-[.active]:flex md:relative md:inset-0 md:flex md:h-full md:min-w-auto md:translate-0 md:px-1.5 lg:gap-y-[2vw] xl:gap-2">
                <p class="text-sm leading-[1.1] font-bold uppercase lg:text-[1.5vw]">Разместить стикер-наклейку</p>
                <p class="text-sm leading-none lg:text-[0.95vw]">Размещается сотрудниками priliplo на заднем стекле Вашего автомобиля</p>
                <svg width="47" height="40" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0 lg:h-[6vw] lg:w-[6vw]">
                    <path
                        d="M45.3956 25.6978C45.3956 25.1398 46.08 21.2011 45.8519 20.1179C45.3304 17.5578 45.1023 17.0654 44.0919 14.7022C43.8963 14.2098 43.6682 13.7503 43.4726 13.2252C44.4178 12.9626 45.2 12.6015 45.6563 11.7153C45.8519 11.3214 45.8193 11.0917 45.4608 10.9604C44.7111 10.665 43.9289 10.4024 43.1467 10.1726C42.6578 10.0085 42.2667 10.2383 41.9734 10.6322C41.9082 10.7306 41.8104 10.8619 41.68 11.026C41.4519 10.5993 41.2238 10.2383 41.0608 9.87723C40.083 7.80939 39.9201 2.42645 34.0534 1.50741C31.3808 1.08072 28.7083 0.982247 26.0031 0.949425C21.8313 0.850956 17.6268 0.818133 13.5528 1.67153C9.18539 2.55774 8.3054 3.31267 7.03429 8.00633C6.67578 9.2536 6.05652 10.3367 5.01356 11.1901C4.58986 10.468 4.32912 10.1398 3.90542 10.1726C2.86246 10.2711 1.88469 10.5665 1.03729 11.1573C0.939508 11.223 0.874323 11.4199 0.906916 11.5184C1.26543 12.142 1.59136 12.7656 2.34098 12.9954C2.6995 13.0939 3.05802 13.258 3.41653 13.4221C3.25357 13.7831 3.09061 14.1114 2.99283 14.4724C2.60172 15.7853 1.55876 18.1158 1.26543 19.6912C0.972101 21.3324 1.62395 25.0742 1.65654 27.1749C1.68913 30.3915 1.68913 33.6081 1.72173 36.8248C1.72173 37.7766 2.21061 38.2361 3.15579 38.269C4.0032 38.269 4.81801 38.269 5.66541 38.269C6.80615 38.269 6.96911 38.1048 7.19726 36.9889C7.91429 36.7263 8.04466 36.595 8.04466 35.8073C8.04466 35.118 8.04466 34.3959 8.04466 33.6738H37.3778C37.3778 33.9692 37.3778 34.1989 37.3778 34.4615C37.3778 34.7241 37.3778 35.0195 37.3778 35.2821C37.4104 36.0698 37.7364 36.3981 38.5186 36.3981C39.0727 36.3981 39.6267 36.3981 40.2134 36.3981C40.246 36.7263 40.2786 36.9232 40.3112 37.153C40.3438 37.2843 40.3438 37.4484 40.3438 37.5797C40.4089 38.1705 40.6371 38.4003 41.2238 38.4003C42.2341 38.4003 43.2119 38.4003 44.2223 38.4003C45.0371 38.4003 45.4608 38.1048 45.6563 37.3171C45.7541 36.9889 45.7541 36.6278 45.7541 36.2668C45.7215 34.5928 45.6889 32.9188 45.6237 31.2449C45.5585 29.3412 45.4282 27.5359 45.3956 25.6978ZM39.5615 13.2908C40.4741 13.2252 41.1586 13.6519 41.5823 14.4396C42.1363 15.5556 42.3645 16.77 42.4297 18.0173C42.4297 18.0829 42.3971 18.1814 42.3645 18.247C41.3541 18.3127 40.5067 18.1814 40.0504 17.0982C39.8223 16.5403 39.203 16.3761 38.649 16.2449C37.5408 16.0151 36.4653 15.7197 35.3571 15.5556C34.7053 15.4571 34.8682 14.9319 34.7705 14.5709C34.6727 14.2427 34.8356 13.9473 35.129 13.816C35.5527 13.6519 35.9764 13.5206 36.4327 13.4877C37.4756 13.3564 38.5186 13.3236 39.5615 13.2908ZM9.02243 9.08948C9.02243 5.90567 9.44613 3.34549 23.0372 3.34549H24.569C37.4756 3.34549 38.2578 5.90567 38.2578 9.08948C38.2578 10.2711 37.2801 11.223 36.1067 11.223H11.1735C10.0002 11.223 9.02243 10.2711 9.02243 9.08948ZM17.2683 19.3958C16.4209 19.3958 16.1602 19.1004 16.1276 18.1814C16.095 16.1792 16.1602 16.1136 17.9528 16.1136C22.1246 16.1136 26.329 16.1136 30.5008 16.1136C31.3482 16.1136 31.609 16.409 31.6416 17.328C31.6742 19.1661 31.6416 19.4615 29.849 19.4287C27.8283 19.3958 25.8401 19.4287 23.8194 19.4287C21.6683 19.3958 19.452 19.3958 17.2683 19.3958ZM4.8506 16.6059C4.98097 16.0479 5.14393 15.4899 5.30689 14.9319C5.56763 13.9801 6.54541 13.1595 7.62096 13.2908C8.82688 13.4221 10.0328 13.4877 11.2387 13.5862C11.4343 13.5862 11.5972 13.6847 11.7928 13.7503C12.1513 13.8816 12.412 14.1442 12.3143 14.5709C12.2165 14.9976 12.3143 15.5228 11.6624 15.6212C10.6195 15.8182 9.5765 16.0807 8.53354 16.2777C7.81651 16.409 7.19726 16.7044 6.87133 17.4265C6.44763 18.3455 5.60023 18.247 4.65505 18.2799C4.68764 17.6562 4.72023 17.1311 4.8506 16.6059ZM43.1793 25.4681C40.8652 25.3368 38.5838 25.2711 36.2697 25.2711C26.329 25.304 16.3557 25.3368 6.41504 25.4024C5.66541 25.4024 4.94838 25.2711 4.19875 25.4681C3.41653 25.665 2.66691 26.223 1.88469 26.6169C2.11284 25.4681 2.82987 24.4177 3.28616 23.991C3.87283 23.4002 4.81801 23.2361 5.698 23.2033C10.5869 23.1048 15.5409 23.1376 20.4624 23.1376C27.8609 23.1376 35.2593 23.1376 42.6252 23.1376C43.8311 23.1376 44.6134 24.0567 45.0371 26.0589C44.4178 25.8291 43.7986 25.5009 43.1793 25.4681Z"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-miterlimit="10" />
                </svg>
            </div>
        </div>

        <div
            class="absolute top-[70vw] left-[7.6vw] md:top-[48.7%] md:left-[2.6%] md:h-[29.6%] md:w-[19.5%] lg:top-[52.6%] lg:left-[2.1%] lg:h-[25.2%] lg:w-[19.8%] xl:top-[57.6%] xl:left-[13.4%] xl:h-[25.8%] xl:w-[17.7%]">
            <div
                class="bg-my-blue peer flex aspect-square w-[8.4vw] items-center justify-center rounded-full border-4 border-white text-[4vw] font-bold text-white transition-[border-width] md:hidden"
                :class="{ active: activeButton === '4' }"
                @click="setActive('4')">
                4
            </div>
            <div
                class="bg-my-yellow tail tail--yellow tail--left md-tail--right absolute top-[4.2vw] left-[17.2vw] hidden min-w-48 -translate-y-1/2 flex-col items-center justify-center gap-y-2.5 rounded-4xl px-5 py-3.5 text-center peer-[.active]:flex md:relative md:inset-0 md:flex md:h-full md:min-w-auto md:translate-0 md:px-1.5 lg:gap-y-[1vw]">
                <p class="text-sm leading-[1.1] font-bold uppercase lg:text-[1.5vw]">выкладывать фотоотчёт</p>
                <p class="text-sm leading-none lg:text-[0.95vw]">1 раз в 14 дней, подтверждающий наличие рекламного стикера</p>
                <svg width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0 lg:h-[3.6vw] lg:w-[6vw]">
                    <path
                        d="M13.1003 3.17067C12.8295 3.90701 12.5974 4.56716 12.404 5.20193C12.2235 5.79862 11.798 6.10331 11.1533 6.10331H11.1275C9.65759 6.09061 8.1361 6.09061 6.66619 6.09061H5.19627C2.1404 6.10331 0 8.19804 0 11.1942C0 18.494 0 25.7939 0 33.0937C0 36.1025 2.12751 38.2099 5.18338 38.2099C9.27077 38.2099 13.3582 38.2099 17.4456 38.2099H22.5H27.5931C31.6934 38.2099 35.8066 38.2099 39.9069 38.2099C42.8596 38.2099 45 36.1025 45 33.1953C45 25.7558 45 18.3163 45 11.1053C45 8.19804 42.8596 6.09061 39.9069 6.09061H38.7593C37.1734 6.09061 35.5358 6.07792 33.9241 6.10331H33.9112C33.202 6.10331 32.7636 5.77323 32.5702 5.11307C32.3897 4.51638 32.1834 3.88161 31.9126 3.18337C31.1776 1.26636 29.3854 0.0222169 27.3352 0.00952154C24.1891 -0.00317385 20.9269 -0.00317385 17.6777 0.00952154C15.6146 0.0222169 13.8223 1.26636 13.1003 3.17067ZM17.8324 1.65992C20.9269 1.65992 24.0731 1.65992 27.1676 1.65992C28.7278 1.65992 29.914 2.49782 30.4169 3.97048C30.5845 4.4656 30.7521 4.96072 30.9198 5.44315C31.1003 5.97635 31.2808 6.49686 31.4613 7.03007C31.6547 7.58867 31.8739 7.75371 32.4928 7.75371C33.8338 7.75371 35.1877 7.75371 36.5286 7.75371H36.7865C37.7923 7.75371 38.7851 7.75371 39.7908 7.75371C41.9699 7.75371 43.3367 9.08672 43.3367 11.2195C43.3367 18.5194 43.3367 25.8192 43.3367 33.1191C43.3367 35.2519 41.9828 36.5849 39.7908 36.5849H31.6805H5.27364C3.03009 36.5849 1.68911 35.2773 1.68911 33.0683C1.68911 25.8065 1.68911 18.5321 1.68911 11.2703C1.68911 9.11211 3.04298 7.7664 5.23496 7.7664C6.33095 7.7664 7.42693 7.7664 8.52292 7.7664C9.851 7.7664 11.1662 7.7664 12.4943 7.7664C13.1648 7.7664 13.3711 7.62675 13.5903 7.00468C13.7579 6.50956 13.9255 6.01444 14.0931 5.51932C14.2607 5.0115 14.4413 4.49099 14.6089 3.98318C15.086 2.49782 16.2722 1.65992 17.8324 1.65992Z"
                        fill="white" />
                    <path
                        d="M30.2103 13.8222C28.1473 11.7909 25.4009 10.6737 22.4739 10.6737C19.5857 10.6737 16.8521 11.7909 14.802 13.8222C12.739 15.8534 11.6172 18.5448 11.6172 21.4013C11.6172 27.3047 16.504 32.1162 22.4997 32.1289H22.5126C28.5083 32.1289 33.408 27.33 33.408 21.4394C33.3951 18.5575 32.2733 15.8534 30.2103 13.8222ZM29.0112 27.7998C27.2705 29.5137 24.9625 30.4658 22.5255 30.4658C17.4324 30.4658 13.2934 26.416 13.2805 21.4521C13.2805 19.0019 14.2347 16.704 15.9754 14.9901C17.716 13.2763 20.0499 12.3241 22.5513 12.3241C27.6057 12.3241 31.7189 16.3993 31.7189 21.414C31.7189 23.8134 30.7647 26.0859 29.0112 27.7998Z"
                        fill="white" />
                    <path
                        d="M37.9749 11.8162C37.3044 11.8162 36.75 12.3621 36.75 13.0222C36.75 13.6697 37.3044 14.2283 37.962 14.2283H37.9749C38.2973 14.2283 38.6067 14.1013 38.8388 13.8728C39.0709 13.6443 39.1999 13.3269 39.1999 13.0095C39.187 12.3494 38.6325 11.8162 37.9749 11.8162Z"
                        fill="white" />
                </svg>
            </div>
        </div>

        <div class="absolute top-[85vw] left-[78.7vw] md:top-[71.6%] md:left-[77.9%] md:h-[28.3%] md:w-[19.5%] lg:top-[76.7%] lg:left-[78.1%] lg:h-[19.2%] lg:w-[19.8%] xl:left-[69.1%] xl:h-[21%] xl:w-[17.7%]">
            <div
                class="bg-my-blue peer flex aspect-square w-[8.4vw] items-center justify-center rounded-full border-4 border-white text-[4vw] font-bold text-white transition-[border-width] md:hidden"
                :class="{ active: activeButton === '5' }"
                @click="setActive('5')">
                5
            </div>
            <div
                class="bg-my-yellow tail tail--yellow tail--right md-tail--top absolute top-[4.2vw] right-[17.2vw] hidden min-w-56 -translate-y-1/2 flex-col items-center justify-center gap-y-2.5 rounded-4xl px-5 py-3.5 text-center peer-[.active]:flex md:relative md:inset-0 md:flex md:h-full md:min-w-auto md:translate-0 md:px-1.5 lg:gap-y-[2vw]">
                <p class="text-sm leading-[1.1] font-bold uppercase lg:text-[1.5vw]">ЗАЧИСЛЕНИЕ БАЛЛОВ</p>
                <p class="text-sm leading-none lg:text-[0.95vw]">После подтверждения фототчёта, бонусные балы зачисляются счёт и их можно тратить на товары и услуги</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const activeButton = ref()
const setActive = (btn: string) => {
    activeButton.value = btn
}
</script>
<style lang="css" scoped>
.active {
    border-width: 0;
}
</style>
