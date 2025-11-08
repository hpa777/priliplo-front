<template>
    <div>
        <UiBreadCrumb :chain="[{ name: 'Бизнесу' }]"></UiBreadCrumb>
        <div class="container mt-5 md:mt-7 xl:mt-[2.4rem]">
            <div class="flex flex-col gap-y-4">
                <h1 class="bg-my-yellow rounded-1.25 px-[3.1rem] py-[0.7rem] text-center text-[1.94rem] leading-[1.2] font-bold uppercase sm:px-4 sm:py-3 md:px-7 md:py-6 md:text-left md:text-[2.5rem] xl:px-[4.4rem]">
                    пока конкуренты шагают, вы едите!
                </h1>
                <p class="text-sm md:text-lg md:leading-normal xl:text-[1.44rem] xl:leading-[1.52]">
                    <span class="font-bold">Сотрудничество по бартеру</span> — это обмен услугами. Бизнес продаёт автовладельцу товар или услугу за заработанные им бонусы, а он взамен бизнесу делает рекламу по нескольким
                    направлениям:
                </p>
            </div>
            <div class="mt-[1.6rem] bg-[url(/images/business_bl1_bg.png)] bg-size-[100%_auto] bg-bottom bg-no-repeat pb-[3.8rem]">
                <div class="rounded-1.88 border-my-blue overflow-hidden border-4">
                    <div class="bg-my-blue rounded-br-1.88 relative pt-2 pb-3 pl-4 text-lg font-bold text-white uppercase">
                        Наружная реклама
                        <div class="border-my-blue absolute -top-[3px] -right-[1px] flex aspect-square w-[3.6rem] rounded-full border-4 bg-white p-[0.2rem]">
                            <img src="/images/business_bl1_ico1.svg" alt="" class="m-auto" />
                        </div>
                    </div>
                    <div class="px-4 py-5 text-sm bg-white">
                        Визуальный охват аудитории города за счёт динамичного перемещения автомобиля в городском потоке, стоянки у дома, на работе, посещения парковок у торгового центра и т.д.
                    </div>
                </div>
                <div class="bg-my-blue before:bg-my-blue mx-auto flex h-5 w-[4px] flex-col items-center justify-center before:aspect-square before:w-[387%] before:rounded-full"></div>
                <div class="rounded-1.88 border-my-blue overflow-hidden border-4">
                    <div class="bg-my-blue rounded-br-1.88 relative pt-2 pb-3 pl-4 text-lg font-bold text-white uppercase">
                        Сарафанное радио
                        <div class="border-my-blue absolute -top-[3px] -right-[1px] flex aspect-square w-[3.6rem] rounded-full border-4 bg-white p-[0.2rem]">
                            <img src="/images/business_bl1_ico2.svg" alt="" class="m-auto" />
                        </div>
                    </div>
                    <div class="px-4 py-5 text-sm bg-white">
                        Близкие, друзья, знакомые, соседи и коллеги по работе обязательно спросят у автовладельца о рекламной наклейке и автовладелец расскажет о рекламируемом товаре или услуге.
                    </div>
                </div>
                <div class="bg-my-blue before:bg-my-blue mx-auto flex h-5 w-[4px] flex-col items-center justify-center before:aspect-square before:w-[387%] before:rounded-full"></div>
                <div class="rounded-1.88 border-my-blue overflow-hidden border-4">
                    <div class="bg-my-blue rounded-br-1.88 relative pt-2 pb-3 pl-4 text-lg font-bold text-white uppercase">
                        Имидж и доверие
                        <div class="border-my-blue absolute -top-[3px] -right-[1px] flex aspect-square w-[3.6rem] rounded-full border-4 bg-white p-[0.2rem]">
                            <img src="/images/business_bl1_ico3.svg" alt="" class="m-auto" />
                        </div>
                    </div>
                    <div class="px-4 py-5 text-sm bg-white">
                        Являясь потребителем рекламируемых товаров или услуг, автовладелец расскажет в положительном контексте о том, что рекламирует. Общение с собеседником сформирует доверие, а также вызовет у него
                        интерес и сделает потенциальными клиентом.
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center pt-[3.6rem]">
            <h2 class="text-3xl text-my-yellow font-black uppercase mb-3.5">Инструмент маркетолога нового поколения</h2>
            <p class="text-sm"><span class="font-bold">PRiLiPLO</span> — это бонусная система лояльности нового поколения, а также рабочий инструмент для привлечения, возврата и удержания клиентов Вашего бизнеса.</p>
        </div>
        <div class="mt-7">
            <div>
                <picture>
                    <img src="/images/business_bl2_img1.jpg" alt="" class="w-full">
                </picture>
                <div class="container bg-[#eaeaea]">
                    <h3 class="font-bold text-lg text-my-blue">Система лояльности</h3>
                    <p class="text-[0.81rem]">Новый уровень отношений между бизнесом и клиентом, где клиент добровольно выступая в роли живой рекламы, показывает свой уровень доверия к продукту или услуге рекламируемо-го бизнеса, тем самым формируя лояльное и доверительное отношение у круга своего общения и визуально охваченной аудитории.</p>
                </div>
            </div>
        </div>
    </div>
</template>
