<template>
    <div>
        <UiBreadCrumb :chain="[{ name: 'Бизнесу' }]"></UiBreadCrumb>
        <div class="container mt-5 md:mt-7 xl:mt-[2.4rem]">
            <div class="flex flex-col gap-y-4 xl:flex-row xl:gap-x-16">
                <h1
                    class="bg-my-yellow rounded-1.25 px-[3.1rem] py-[0.7rem] text-center text-[1.94rem] leading-[1.2] font-bold uppercase sm:px-4 sm:py-3 md:px-32 md:py-6 md:text-[2.5rem] lg:px-56 xl:w-[39.8rem] xl:shrink-0 xl:px-[4.4rem] xl:text-left">
                    пока конкуренты шагают, вы едите!
                </h1>
                <p class="text-sm sm:text-center md:text-lg md:leading-normal xl:text-left xl:text-[1.44rem] xl:leading-[1.52]">
                    <span class="font-bold">Сотрудничество по бартеру</span> — это обмен услугами. Бизнес продаёт автовладельцу товар или услугу за заработанные им бонусы, а он взамен бизнесу делает рекламу по нескольким
                    направлениям:
                </p>
            </div>
        </div>
        <div class="mt-[1.6rem] bg-[url(/images/business_bl1_bg.png)] bg-size-[100%_auto] bg-bottom bg-no-repeat pb-[3.8rem] lg:bg-[url(/images/business_bl1_bg_lg.png)] xl:pb-[5.8rem]">
            <div class="container lg:flex xl:mt-14">
                <div class="rounded-1.88 border-my-blue overflow-hidden border-4 bg-white lg:basis-1/3">
                    <div
                        class="bg-my-blue rounded-br-1.88 relative pt-2 pb-3 pl-4 text-lg font-bold text-white uppercase md:text-[1.44rem] md:leading-[1.2] lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-2.5 lg:rounded-none xl:block xl:pt-3.5 xl:pr-[8.5rem] xl:pb-6 xl:pl-[2.4rem] xl:text-[1.88rem]">
                        Наружная реклама
                        <div
                            class="border-my-blue absolute -top-[3px] -right-[1px] flex h-[3.6rem] w-[3.6rem] rounded-full border-4 bg-white p-[0.2rem] md:w-[4.2rem] lg:static lg:h-[3.8rem] lg:w-[3.8rem] lg:shrink-0 xl:absolute xl:top-1.5 xl:right-3 xl:h-[7.6rem] xl:w-[7.6rem]">
                            <img src="/images/business_bl1_ico1.svg" alt="" class="m-auto" />
                        </div>
                    </div>
                    <div class="px-4 py-5 text-sm md:text-base xl:py-12 xl:text-[1.44rem] xl:leading-[1.52]">
                        Визуальный охват аудитории города за счёт динамичного перемещения автомобиля в городском потоке, стоянки у дома, на работе, посещения парковок у торгового центра и т.д.
                    </div>
                </div>
                <div
                    class="bg-my-blue before:bg-my-blue mx-auto flex h-5 w-[4px] shrink-0 flex-col items-center justify-center before:aspect-square before:w-[387%] before:rounded-full lg:h-[4px] lg:w-5 lg:self-center lg:before:w-[80%] xl:w-[57px] xl:before:w-[27px] xl:mt-12"></div>
                <div class="rounded-1.88 border-my-blue overflow-hidden border-4 bg-white lg:basis-1/3">
                    <div
                        class="bg-my-blue rounded-br-1.88 relative pt-2 pb-3 pl-4 text-lg font-bold text-white uppercase md:text-[1.44rem] md:leading-[1.2] lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-2.5 lg:rounded-none xl:block xl:pt-3.5 xl:pr-[8.5rem] xl:pb-6 xl:pl-[2.4rem] xl:text-[1.88rem]">
                        Сарафанное радио
                        <div
                            class="border-my-blue absolute -top-[3px] -right-[1px] flex h-[3.6rem] w-[3.6rem] rounded-full border-4 bg-white p-[0.2rem] md:w-[4.2rem] lg:static lg:h-[3.8rem] lg:w-[3.8rem] lg:shrink-0 xl:absolute xl:top-1.5 xl:right-3 xl:h-[7.6rem] xl:w-[7.6rem]">
                            <img src="/images/business_bl1_ico2.svg" alt="" class="m-auto" />
                        </div>
                    </div>
                    <div class="px-4 py-5 text-sm md:text-base xl:py-12 xl:text-[1.44rem] xl:leading-[1.52]">
                        Близкие, друзья, знакомые, соседи и коллеги по работе обязательно спросят у автовладельца о рекламной наклейке и автовладелец расскажет о рекламируемом товаре или услуге.
                    </div>
                </div>
                <div
                    class="bg-my-blue before:bg-my-blue mx-auto flex h-5 w-[4px] shrink-0 flex-col items-center justify-center before:aspect-square before:w-[387%] before:rounded-full lg:h-[4px] lg:w-5 lg:self-center lg:before:w-[80%] xl:w-[57px] xl:before:w-[27px] xl:mt-12"></div>
                <div class="rounded-1.88 border-my-blue overflow-hidden border-4 bg-white lg:basis-1/3">
                    <div
                        class="bg-my-blue rounded-br-1.88 relative pt-2 pb-3 pl-4 text-lg font-bold text-white uppercase md:text-[1.44rem] md:leading-[1.2] lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-2.5 lg:rounded-none xl:block xl:pt-3.5 xl:pr-[8.5rem] xl:pb-6 xl:pl-[2.4rem] xl:text-[1.88rem]">
                        Имидж и доверие
                        <div
                            class="border-my-blue absolute -top-[3px] -right-[1px] flex h-[3.6rem] w-[3.6rem] rounded-full border-4 bg-white p-[0.2rem] md:w-[4.2rem] lg:static lg:h-[3.8rem] lg:w-[3.8rem] lg:shrink-0 xl:absolute xl:top-1.5 xl:right-3 xl:h-[7.6rem] xl:w-[7.6rem]">
                            <img src="/images/business_bl1_ico3.svg" alt="" class="m-auto" />
                        </div>
                    </div>
                    <div class="px-4 py-5 text-sm md:text-base xl:pt-5 xl:pb-1.5 xl:text-[1.44rem] xl:leading-[1.52]">
                        Являясь потребителем рекламируемых товаров или услуг, автовладелец расскажет в положительном контексте о том, что рекламирует. Общение с собеседником сформирует доверие, а также вызовет у него
                        интерес и сделает потенциальными клиентом.
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-[3.6rem] xl:mt-[3.1rem]">
            <h2 class="text-my-yellow mb-3.5 text-center text-3xl font-black uppercase xl:text-[2.93rem]">Инструмент маркетолога нового поколения</h2>
            <p class="text-center text-sm lg:text-lg xl:text-left xl:text-[1.44rem]">
                <span class="font-bold">PRiLiPLO</span> — это бонусная система лояльности нового поколения, а также рабочий инструмент для привлечения, возврата и удержания клиентов Вашего бизнеса.
            </p>
        </div>

        <div class="mt-7 bg-[#eaeaea] pb-0.5 md:relative md:pb-0">
            <img src="/images/business_bl2_bg.jpg" alt="" class="hidden md:block md:w-full" />
            <div class="md:absolute md:inset-0">
                <div class="md:container md:flex md:h-1/4 md:items-center md:gap-x-[6.4vw]">
                    <div class="min-w-1/2 shrink-0">
                        <img src="/images/business_bl2_img1.jpg" alt="" class="w-full md:hidden" />
                    </div>
                    <div class="container mt-3 mb-5 md:m-0 md:p-0">
                        <h3 class="text-my-blue mb-2 text-lg font-bold md:text-xl xl:text-[2.81rem] xl:mb-8 xl:leading-[1.1]">Система лояльности</h3>
                        <p class="text-[0.81rem] leading-[1.4] xl:text-[1.44rem] xl:leading-[1.5]">
                            Новый уровень отношений между бизнесом и клиентом, где клиент добровольно выступая в роли живой рекламы, показывает свой уровень доверия к продукту или услуге рекламируемо-го бизнеса, тем самым
                            формируя лояльное и доверительное отношение у круга своего общения и визуально охваченной аудитории.
                        </p>
                    </div>
                </div>
                <div class="md:container md:flex md:h-1/4 md:flex-row-reverse md:items-center md:gap-x-[6.4vw]">
                    <div class="min-w-1/2 shrink-0">
                        <img src="/images/business_bl2_img2.jpg" alt="" class="w-full md:hidden" />
                    </div>
                    <div class="container mt-3 mb-5 md:m-0 md:p-0">
                        <h3 class="text-my-blue mb-2 text-lg font-bold md:text-xl xl:text-[2.81rem] xl:mb-8 xl:leading-[1.1]">Бонусная программа</h3>
                        <p class="text-[0.81rem] leading-[1.4] xl:text-[1.44rem] xl:leading-[1.5]">
                            Новое решение для бизнеса в начислении бонусов, где клиент за счёт своих полезных действий генерирует себе бонусы. <span class="text-my-blue font-bold">1 бонус = 1 ₽</span>. Тем самым
                            <span class="text-my-blue font-bold">бизнес получает только заинтересо-ванных и целевых клиентов,</span> для которых бонусы имеют действительно свою ценность, являясь платёжным форматом, для
                            получения товаров или услуг. PRiLiPLO даёт возможность зарабатывать бонусы тем, кто действительно в них нуждается и может принести пользу для бизнеса.
                        </p>
                    </div>
                </div>
                <div class="md:container md:flex md:h-1/4 md:items-center md:gap-x-[6.4vw]">
                    <div class="min-w-1/2 shrink-0">
                        <img src="/images/business_bl2_img3.jpg" alt="" class="w-full md:hidden" />
                    </div>
                    <div class="container mt-3 mb-5 md:m-0 md:p-0">
                        <h3 class="text-my-blue mb-2 text-lg font-bold md:text-xl xl:text-[2.81rem] xl:mb-8 xl:leading-[1.1]">Привлечение клиентов</h3>
                        <p class="text-[0.81rem] leading-[1.4] xl:text-[1.44rem] xl:leading-[1.5]">
                            Новый инструмент, с помощью которого легко получать новых клиентов из разных источников: наружная реклама, сарафаное радио, интернет реклама, так как живая реклама динамично передвигаясь по
                            городу охватывает большую адиторию.
                        </p>
                    </div>
                </div>
                <div class="md:container md:flex md:h-1/4 md:flex-row-reverse md:items-center md:gap-x-[2.6vw] lg:gap-x-[6.4vw]">
                    <div class="min-w-1/2 shrink-0">
                        <img src="/images/business_bl2_img4.jpg" alt="" class="w-full md:hidden" />
                    </div>
                    <div class="container mt-3 mb-5 md:m-0 md:p-0">
                        <h3 class="text-my-blue mb-2 text-lg font-bold md:text-xl xl:text-[2.81rem] xl:mb-8 xl:leading-[1.1]">Возврат и удержание клиентов</h3>
                        <p class="mb-2 text-[0.81rem] leading-[1.4] xl:text-[1.44rem] xl:leading-[1.5]">
                            Благодаря возможностям сервиса PRiLiPLO вернуть ушедшего клиента стало гораздо проще. Даже холодный звонок с предложением вновь воспользоваться продуктом или услугой компании
                            <span class="text-my-blue font-bold">клиент воспримет как взаимовыгодное предложение.</span> Так вы создадите прецедент для звонка и без негатива напомните о себе.
                        </p>
                        <p class="text-[0.81rem] leading-[1.4] xl:text-[1.44rem] xl:leading-[1.5]">
                            Бизнесу будет легко заинтересовывать своих клиентов не уходить к конкурентам, подпитывая интерес пользоваться товарами или услугами на специальных условиях, оплачивая их зарабо-танными бонусами.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-[3.6rem] xl:mt-[3.1rem]">
            <h2 class="text-my-yellow mb-3.5 text-center text-3xl font-black uppercase xl:text-[2.93rem]">как это работает?</h2>
            <p class="text-center text-sm lg:text-lg xl:text-[1.44rem]">Что бы начать раскручивать свой бизнес и продвигать товары или услуги в системе PRiLiPLO, достаточно:</p>
        </div>
        <PageBusinessRoad />

        <div class="container mt-[3.6rem] xl:mt-[3.1rem]">
            <h2 class="text-my-yellow mb-3.5 text-center text-3xl font-black uppercase xl:text-[2.93rem]">Остальную работу возьмёт на себя сервис PRiLiPLO</h2>
        </div>

        <div class="container mt-7 xl:flex xl:flex-row-reverse xl:mt-0 xl:items-center xl:gap-x-11">
            <ul class="space-y-3.5 text-sm md:text-lg xl:text-[1.44rem] xl:leading-normal xl:space-y-11">
                <li class="flex items-center gap-x-4 xl:gap-x-10">
                    <IconCircleCheck class="shrink-0"></IconCircleCheck>
                    <div>Подготовит макет рекламного стикера, исходя из вашего технического задания и отправленных материалов.</div>
                </li>
                <li class="flex items-center gap-x-4 md:w-[77%] xl:gap-x-10 xl:w-auto">
                    <IconCircleCheck class="shrink-0"></IconCircleCheck>
                    <div>Организует изготовление стикеров и оклеит автомобили ваших клиентов</div>
                </li>
                <li class="flex items-center gap-x-4 md:w-[77%] xl:gap-x-10 xl:w-auto">
                    <IconCircleCheck class="shrink-0"></IconCircleCheck>
                    <div>Предоставит начальный фотоотчёт оклеенного автомобиля в личный кабинет организации</div>
                </li>
            </ul>
            <img class="w-full md:-mt-[5.4rem] xl:w-[42.5rem] xl:mt-0 xl:-ml-[7.4rem]" src="/images/business_bl3_img.png" alt="" />
        </div>
        <div class="container mt-10 space-y-2.5 text-sm md:mt-5 md:space-y-5 md:text-lg xl:text-[1.44rem] xl:mt-12">
            <p>
                После оклейки авто и подтверждения участия <span class="text-my-blue font-bold">владелец автомобиля следует графику фотоотчетов</span>, загружает фото в свой аккаунт для подтверждения наличия рекламы и
                количество километров пробега.
            </p>
            <p><span class="text-my-blue font-bold">Отчет автоматически поступает рекламодателю в личный кабинет.</span> В случае принятия отчета бонусы начисляются, в случае отклонения — не начисляются.</p>
        </div>
    </div>
</template>
