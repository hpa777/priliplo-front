<template>
    <div>
        <UiBreadCrumb :chain="[{name: 'О PRILIPLO'}]"></UiBreadCrumb>
        <!-- banner -->
        <div 
            class="mt-5 bg-[url(/images/page/about/about_banner_bg.png)] bg-size-[100%_auto] bg-bottom bg-no-repeat md:mt-7 md:bg-[url(/images/page/about/about_banner_bg_md.png)] md:bg-auto md:bg-top-right xl:mt-[2.4rem] xl:bg-[url(/images/page/about/about_banner_bg_xl.png)] xl:bg-position-[49.5vw_0]">
            <div class="container pb-[59vw] sm:pb-[61.2vw] md:pr-[11.7rem] md:pb-0 lg:pb-32 lg:pr-[23.9rem] xl:pr-[46.2rem] xl:pb-36">
                <h1 class="bg-my-yellow rounded-1.25 mb-4 px-[3.1rem] py-[0.7rem] text-center text-[1.94rem] leading-[1.2] font-bold uppercase sm:px-4 sm:py-3 md:mb-5 md:px-7 md:py-6 md:text-left md:text-[2.5rem] xl:px-[4.4rem]">
                    Реклама по бартеру в системе PRiLiPLO
                </h1>
                <div class="text-sm md:pr-52 md:text-lg md:leading-normal lg:pr-8 xl:text-[1.44rem] xl:leading-[1.52] xl:pr-0">
                    <p class="mb-5">— это взаимовыгодный обмен услугами между бизнесом и клиентами, через бартер.</p>
                    <p>
                        Бизнес предлагает своим клиентам разместить стикер своей рекламной кампании на заднее стекло автомобиля за вознаграждение в виде бонусов, а автовладелец транслирует эту рекламу на своём автомобиле и
                        подтверждает её наличие фотоотчётами в определенный период, за что получает бонусные балы и тратит их в организации которую рекламирует.
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-10 bg-gradient-to-b from-transparent via-[#dfdfdf] lg:via-[140%] to-[#dfdfdf] sm:mt-5 md:mt-7 lg:-mt-[6.4rem]">
            <div class="container pb-[3.8rem] lg:pr-28 xl:pb-10">
                <div class="flex flex-col gap-y-2 sm:flex-row sm:gap-x-5 md:items-center lg:flex-col lg:gap-y-4 lg:items-start xl:gap-y-[2.1rem]">
                    <div
                        class="border-my-yellow rounded-1.25 text-my-blue flex h-[3.81rem] shrink-0 items-center justify-center border-2 text-3xl font-bold uppercase sm:w-[13.2rem] sm:text-2xl md:h-[5.12rem] md:w-[22.12rem] md:text-[2.81rem] xl:ml-[8.8rem] xl:w-[23.9rem]">
                        1 бонус = 1 ₽
                    </div>
                    <p class="text-my-blue text-center leading-[1.2] font-bold sm:text-left md:text-xl lg:text-[2.5rem] xl:text-[2.81rem] xl:whitespace-nowrap">Оплачивай до 100% стоимости товаров или услуг бонусами</p>
                </div>
            </div>
        </div>
        <!--/banner -->
        <UiSectionTitle class="text-center xl:text-left">УЧАСТНИКИ:</UiSectionTitle>
        <PageAboutMembers></PageAboutMembers>

        <UiSectionTitle class="text-center xl:text-left">АКТУАЛЬНОЕ ВИДЕО:</UiSectionTitle>
        <PageAboutVideo></PageAboutVideo>
    </div>
</template>
