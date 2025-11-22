<template>
    <div>
        <UiBreadCrumb :chain="[{ name: 'Автовладельцам' }]"></UiBreadCrumb>

        <!--block1-->
        <div class="container mt-5 md:mt-7">
            <div class="flex flex-col gap-y-4 lg:w-[36rem] lg:gap-y-10 xl:w-[34.4vw] xl:max-w-[660px]">
                <h1 class="bg-my-yellow rounded-1.25 px-[3.1rem] py-[0.7rem] text-center text-[1.94rem] leading-[1.2] font-bold uppercase sm:px-4 sm:py-3 md:px-0 md:py-3.5 md:text-[2.5rem] xl:py-5">
                    Не купил, <br class="md:hidden" />а НАКАТАЛ!
                </h1>
                <p class="text-sm md:text-lg md:leading-normal lg:w-[27.5rem] xl:w-auto xl:text-[1.44rem] xl:leading-[1.52]">
                    Автомобиль теперь можно использовать не только как средство передвижения, но и как источник дополнительного дохода с сервисом PriLiPLO. Владельцы автомобилей могут зарабатывать бонусные баллы, участвуя
                    в рекламных акциях, и использовать их для оплаты до 100% от стоимости товаров или услуг. <span class="text-my-blue font-bold">1 бонус = 1 ₽</span> <br />Баллы не сгорают с течением времени так как
                    заработок происходит по бартерной системе.
                </p>
            </div>
        </div>
        <div class="bg-[linear-gradient(180deg,rgba(223,223,223,0)_22.4%,#dfdfdf_100%)] md:relative">
            <picture>
                <source srcset="/images/page/driver/bl1-xl.png" media="(min-width: 1396px)" />
                <source srcset="/images/page/driver/bl1-lg.png" media="(min-width: 960px)" />
                <source srcset="/images/page/driver/bl1-md.png" media="(min-width: 768px)" />
                <source srcset="/images/page/driver/bl1-sm.png" media="(min-width: 480px)" />
                <img class="mx-auto lg:absolute lg:right-0 lg:bottom-0 xl:w-[61vw] xl:max-w-[1017px]" src="/images/page/driver/bl1.png" alt="" />
            </picture>
            <div class="pb-[3.7rem] md:absolute md:inset-0 md:pb-0 lg:static lg:pb-16">
                <div class="container md:pt-[15.6rem] lg:pt-7 xl:pt-14">
                    <div class="md:w-1/2 lg:flex lg:w-auto lg:items-center lg:gap-x-4 xl:flex-col xl:items-start xl:gap-y-12">
                        <a href="#" class="rounded-1.25 bg-my-yellow flex h-[4.62rem] w-full items-center justify-center text-xl md:text-[1.56rem] lg:h-[5.25rem] lg:w-[22.5rem]">Зарегистрировать ТС</a>
                        <p
                            class="text-my-blue mt-4 text-center leading-[1.2] font-bold md:text-lg md:whitespace-nowrap lg:mt-0 lg:w-[19rem] lg:text-left lg:text-[1.56rem] lg:leading-[1.2] lg:whitespace-normal xl:w-auto xl:text-[2.81rem]">
                            Мой автомобиль работает<br class="sm:hidden" />
                            на меня 24/7
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--/block1-->

        <!--block2-->
        <UiSectionTitle class="text-center">ПОЧЕМУ ЭТО ВЫГОДНО?</UiSectionTitle>

        <div class="container md:mt-8 md:grid md:grid-cols-2 md:gap-x-5 lg:relative xl:grid-cols-[1fr_35.2rem] xl:gap-x-16">
            <div class="mt-7 md:mt-0">
                <div class="xl:pr-11">
                    <img class="w-full" src="/images/page/driver/bl2-car-xl.png" alt="" />
                </div>
                <div class="mt-4 flex gap-x-[1.1rem] xl:-mt-4">
                    <div class="rounded-1.88 basis-1/3 overflow-hidden">
                        <img src="/images/page/driver/bl2-act1-xl.png" alt="" />
                    </div>
                    <div class="rounded-1.88 basis-1/3 overflow-hidden">
                        <img src="/images/page/driver/bl2-act2-xl.png" alt="" />
                    </div>
                    <div class="rounded-1.88 basis-1/3 overflow-hidden">
                        <img src="/images/page/driver/bl2-act3-xl.png" alt="" />
                    </div>
                </div>
                <div class="mt-[1.1rem] flex lg:absolute lg:right-[3.3rem] lg:-bottom-3.5 lg:w-[48.4%] xl:right-0 xl:-bottom-0.5">
                    <div class="basis-1/2 pl-[1.6rem] sm:pl-[4.7rem] md:pl-12 xl:pl-20">
                        <svg class="-translate-y-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2.53 66.66 182.74 56.61">
                            <path
                                stroke="#1d70b8"
                                stroke-dasharray="4.98 4.98"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M184.275 122.273c-8.935-7.333-31.203-24.156-42.578-27.511-4.503-1.287-21.996-7.725-33.646.743-19.366 14.149 2.784 30.6 8.987 13.243 2.749-7.759 2.177-16.451-2.116-23.945-5.374-9.34-13.932-12.677-16.185-13.475-14.322-5.147-22.58 3.648-40.962 8.6-7.824 2.089-28.33 7.781-47.607-6.505" />
                            <path stroke="#1d70b8" stroke-miterlimit="10" stroke-width="2" d="m8.941 72.558-1.15-.928" />
                            <path fill="#1d70b8" d="M2.532 66.66c3.174 1.526 7.375 3.062 10.462 3.406L8.52 72.28l-1.478 4.984c-.714-3.248-2.694-7.486-4.51-10.604" />
                        </svg>
                    </div>
                    <div class="text-my-blue mt-auto basis-1/2 pb-4 pl-2.5 leading-none sm:whitespace-nowrap md:whitespace-normal lg:text-xl xl:basis-auto xl:pb-0 xl:text-[1.88rem] xl:whitespace-nowrap">
                        Пример рекламной акции
                    </div>
                </div>
            </div>
            <div class="mt-1 text-sm md:mt-0 md:text-base xl:text-[1.44rem]">
                <p class="mb-2.5 md:mb-8">
                    Вся система – это <span class="text-my-blue font-bold">взаимовыгодная бартерная основа.</span> Компания предлагает автовладельцу бонусные баллы за размещение рекламной наклейки на заднем стекле
                    автомобиля. А автовладелец разместивший рекламный стикер получает <span class="text-my-blue font-bold">вознаграждения каждые 2 недели</span> в виде бонусных балов на свой счет внутри платформы.
                </p>
                <p>Автовладелец становится для бизнеса не просто клиентом, а полноценным партнером, который вносит свой весомый вклад в развиватие компании.</p>
            </div>
        </div>

        <!--/block2-->

        <!--block-map-->
        <UiSectionTitle class="text-center">
            <template #default>как это работает?</template>
            <template #subtitle>Что бы начать получать бонусные балы автовладельцу необходимо:</template>
        </UiSectionTitle>
        <PageDriverRoad />
        <!--/block-map-->

        <!--block reasons-->
        <UiSectionTitle class="text-center">5 ПРИЧИН ПОЧЕМУ АВТОВЛАДЕЛЬЦЫ ВЫБИРАЮТ нас</UiSectionTitle>

        <div class="mt-7 bg-[url(/images/page/driver/bg-reasons-md.png)] bg-cover bg-bottom bg-no-repeat pb-[3.8rem] md:bg-[url(/images/page/driver/bg-reasons-xl.png)]">
            <div class="container grid gap-y-4 md:pr-24 xl:gap-y-7 xl:pr-48 xl:pl-40">
                <div class="border-my-blue rounded-1.25 border-2 p-2.5 xl:rounded-[2.8rem]">
                    <div class="rounded-1.25 relative bg-gradient-to-r from-white to-white/0 px-3.5 py-4 md:pr-24 lg:pr-60 xl:rounded-[2.8rem] xl:pt-2.5 xl:pr-36 xl:pl-16">
                        <div
                            class="absolute top-1.5 right-1.5 grid aspect-square w-[3.15rem] place-content-center rounded-xl bg-gradient-to-r from-[#748595] to-[#aebfcf] text-[1.75rem] font-bold text-white md:top-1/2 md:-right-[5.5rem] md:w-[10.81rem] md:-translate-y-1/2 md:rounded-[2.4rem] md:text-[5.62rem]">
                            01
                        </div>
                        <div class="text-my-blue mb-4 pr-14 text-lg leading-[1.2] font-bold md:pr-0 md:text-3xl xl:text-[2.81rem] xl:leading-none">Начисление бонусных баллов четко и в срок</div>
                        <p class="text-sm md:text-base xl:text-[1.44rem] xl:leading-[1.3]">
                            <span class="text-my-blue font-bold">Бонусы приходят каждые 14 дней</span> после загрузки фотоотчета на платформу из двух фотографий (вашей наклейки и текущих показаний одометра автомобиля)
                        </p>
                    </div>
                </div>

                <div class="border-my-blue rounded-1.25 border-2 p-2.5 xl:rounded-[2.8rem]">
                    <div class="rounded-1.25 relative bg-gradient-to-r from-white to-white/0 px-3.5 py-4 md:pr-24 lg:pr-60 xl:rounded-[2.8rem] xl:pt-2.5 xl:pr-36 xl:pl-16">
                        <div
                            class="absolute top-1.5 right-1.5 grid aspect-square w-[3.15rem] place-content-center rounded-xl bg-gradient-to-r from-[#1d70b8] to-[#89c5f2] text-[1.75rem] font-bold text-white md:top-1/2 md:-right-[5.5rem] md:w-[10.81rem] md:-translate-y-1/2 md:rounded-[2.4rem] md:text-[5.62rem]">
                            02
                        </div>
                        <div class="text-my-blue mb-4 pr-14 text-lg leading-[1.2] font-bold md:pr-0 md:text-3xl xl:text-[2.81rem] xl:leading-none">Понятная система начислений бонусных баллов</div>
                        <p class="text-sm md:text-base xl:text-[1.44rem] xl:leading-[1.3]">В экосистеме Priliplo.ru <span class="text-my-blue font-bold">1 бонус = 1 рублю</span> для всех видов программ лояльности</p>
                    </div>
                </div>

                <div class="border-my-blue rounded-1.25 border-2 p-2.5 xl:rounded-[2.8rem]">
                    <div class="rounded-1.25 relative bg-gradient-to-r from-white to-white/0 px-3.5 py-4 md:pr-24 lg:pr-60 xl:rounded-[2.8rem] xl:pt-2.5 xl:pr-36 xl:pl-16">
                        <div
                            class="absolute top-1.5 right-1.5 grid aspect-square w-[3.15rem] place-content-center rounded-xl bg-gradient-to-r from-[#b32079] to-[#ef5cb5] text-[1.75rem] font-bold text-white md:top-1/2 md:-right-[5.5rem] md:w-[10.81rem] md:-translate-y-1/2 md:rounded-[2.4rem] md:text-[5.62rem]">
                            03
                        </div>
                        <div class="text-my-blue mb-4 pr-14 text-lg leading-[1.2] font-bold md:pr-0 md:text-3xl xl:text-[2.81rem] xl:leading-none">Монетизация Вашего авто без лишних денежных затрат и времени</div>
                        <p class="text-sm md:text-base xl:text-[1.44rem] xl:leading-[1.3]">
                            Система размещения рекламы на автомобилях <span class="text-my-blue font-bold">абсолютно бесплатна</span>. Водители могут получать баллы и использовать их для посещения различных заведений и
                            получения товаров и услуг от разных компаний.
                        </p>
                    </div>
                </div>

                <div class="border-my-blue rounded-1.25 border-2 p-2.5 xl:rounded-[2.8rem]">
                    <div class="rounded-1.25 relative bg-gradient-to-r from-white to-white/0 px-3.5 py-4 md:pr-24 lg:pr-60 xl:rounded-[2.8rem] xl:pt-2.5 xl:pr-36 xl:pl-16">
                        <div
                            class="absolute top-1.5 right-1.5 grid aspect-square w-[3.15rem] place-content-center rounded-xl bg-gradient-to-r from-[#693f8b] to-[#8f7bc9] text-[1.75rem] font-bold text-white md:top-1/2 md:-right-[5.5rem] md:w-[10.81rem] md:-translate-y-1/2 md:rounded-[2.4rem] md:text-[5.62rem]">
                            04
                        </div>
                        <div class="text-my-blue mb-4 pr-14 text-lg leading-[1.2] font-bold md:pr-0 md:text-3xl xl:text-[2.81rem] xl:leading-none">Стикер-наклейка занимает мало места и стильно смотрится на авто</div>
                        <p class="text-sm md:text-base xl:text-[1.44rem] xl:leading-[1.3]">
                            Мы используем <span class="text-my-blue font-bold">до 40-50% площади заднего стекла</span> Вашего автомобиля для размещения наклейки, согласовывая концепцию размещения, чтобы сохранить обзор и
                            удобство вождения.
                        </p>
                    </div>
                </div>

                <div class="border-my-blue rounded-1.25 border-2 p-2.5 xl:rounded-[2.8rem]">
                    <div class="rounded-1.25 relative bg-gradient-to-r from-white to-white/0 px-3.5 py-4 md:pr-24 lg:pr-60 xl:rounded-[2.8rem] xl:pt-2.5 xl:pr-36 xl:pl-16">
                        <div
                            class="absolute top-1.5 right-1.5 grid aspect-square w-[3.15rem] place-content-center rounded-xl bg-gradient-to-r from-[#239db5] to-[#5dd7ef] text-[1.75rem] font-bold text-white md:top-1/2 md:-right-[5.5rem] md:w-[10.81rem] md:-translate-y-1/2 md:rounded-[2.4rem] md:text-[5.62rem]">
                            05
                        </div>
                        <div class="text-my-blue mb-4 pr-14 text-lg leading-[1.2] font-bold md:pr-0 md:text-3xl xl:text-[2.81rem] xl:leading-none">Безопасно для Вашего автомобиля</div>
                        <p class="text-sm md:text-base xl:text-[1.44rem] xl:leading-[1.3]">
                            Наклейки выполнены из материалов, которые <span class="text-my-blue font-bold">не портят стекло</span> и лакокрасочное покрытие, а клеевая основа позволяет размещать и снимать стикер-наклейку за
                            15 минут!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--/block reasons-->

        <!--block3-->
        <UiSectionTitle class="text-center">Остальную работу возьмёт на себя сервис PRiLiPLO</UiSectionTitle>

        <div class="container mt-7 pb-8 md:relative xl:flex xl:flex-row-reverse xl:gap-x-[5.3rem]">
            <ul class="space-y-3.5 text-sm md:text-lg xl:space-y-11 xl:text-[1.44rem] xl:leading-normal">
                <li class="flex gap-x-4 md:w-[29rem] xl:w-auto xl:gap-x-10">
                    <IconCircleCheck class="shrink-0"></IconCircleCheck>
                    <div>
                        <p class="font-bold">Использование бонусных балов без ограничений:</p>
                        <p>Оплата бонусами до 100% услуги или товара в зависимости от выбора компании.</p>
                    </div>
                </li>
                <li class="flex gap-x-4 md:w-[26rem] xl:w-auto xl:gap-x-10">
                    <IconCircleCheck class="shrink-0"></IconCircleCheck>
                    <div>
                        <p class="font-bold">Всего 2 фоторафии и бонусы на счёте:</p>
                        <p>Простые и понятые условия. Загружай в личный кабинет две фотографии по графику (1 раз в 14 днней) и получай бонусы.</p>
                    </div>
                </li>
                <li class="flex gap-x-4 xl:w-auto xl:gap-x-10">
                    <IconCircleCheck class="shrink-0"></IconCircleCheck>
                    <div>
                        <p class="font-bold">Конфедециальность и безопасность:</p>
                        <p>Персональные данные и загружаемые фотоотчёты видят только те компании, в которых учавствует автовладелец и оператор системы Priliplo.ru.</p>
                    </div>
                </li>
                <li class="flex gap-x-4 xl:w-auto xl:gap-x-10">
                    <IconCircleCheck class="shrink-0"></IconCircleCheck>
                    <div>
                        <p class="font-bold">Добавь несколько машин и получай ещё больше бонусов:</p>
                        <p>Чем больше автомобилей – тем больше бонусов!Регистрируй второй автомобиль, и получай бонусы за дополнительную наклейку в своём профиле!</p>
                    </div>
                </li>
                <li class="flex gap-x-4 xl:w-auto xl:gap-x-10">
                    <IconCircleCheck class="shrink-0"></IconCircleCheck>
                    <div>
                        <p class="font-bold">Не сгорают даже через год!</p>
                        <p>Бонусы Priliplo остаются на счёте навсегда в знак благодаронсти компании за доверие и участие в программе выбранной компании. Используй бонусы когда удобно!</p>
                    </div>
                </li>
            </ul>
            <picture class="xl:shrink-0 xl:pt-14">
                <source srcset="/images/page/driver/bl3-xl.png" media="(min-width:1396px)" />
                <img class="mt-5 w-full md:absolute md:top-1 md:right-6 md:m-0 md:w-auto xl:static" src="/images/page/driver/bl3-sm.png" alt="" />
            </picture>
        </div>
    </div>
</template>
