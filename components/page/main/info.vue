<template>
    <!-- for car owners-->
    <div class="bg-my-gray relative">
        <div class="container grid grid-cols-2 gap-x-4 gap-y-[1.4rem] py-[3.8rem] md:px-10 lg:px-[8.7rem] xl:relative xl:grid-cols-4 xl:gap-x-5 xl:px-0 xl:pt-[3.6rem] xl:pb-[6.3rem]">
            <picture class="absolute -top-[5.5rem] right-0 sm:-top-[6.7rem] sm:-right-[1.7rem] md:right-0 xl:-top-16 xl:-right-[11.3rem]">
                <source srcset="/images/page/main/coin21-xl.png" media="(min-width: 1396px)" />
                <source srcset="/images/page/main/coin21-md.png" media="(min-width: 768px)" />
                <img src="/images/page/main/coin22.png" alt="" />
            </picture>
            <picture class="absolute top-52 left-0 hidden sm:block md:top-60 xl:hidden">
                <img src="/images/page/main/coin32.png" alt="" />
            </picture>
            <picture class="absolute top-[43.4rem] right-0 hidden sm:block xl:top-[22rem] xl:-right-16">
                <source srcset="/images/page/main/coin11-xl.png" media="(min-width: 1396px)" />
                <img src="/images/page/main/coin21-sm.png" alt="" />
            </picture>
            <h2 class="bg-my-blue rounded-1.25 relative col-span-2 mx-auto flex h-[5.25rem] w-80 max-w-full items-center justify-center gap-x-6 text-white xl:col-span-1 xl:row-span-2 xl:mt-[4.8rem]">
                <div class="bg-my-blue absolute top-0 right-full -mr-4 hidden h-full w-[100rem] xl:block"></div>
                <svg width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51.9772 37.9852C50.895 37.9852 49.8634 37.9852 48.8319 37.9852C47.9018 37.9852 46.9717 37.9704 46.0416 38.0001C45.6189 38.0149 45.4667 37.8814 45.3652 37.5254C44.8917 35.8197 44.4013 34.114 43.9109 32.4083C43.8602 32.2452 43.8094 32.0969 43.7418 31.904C31.9382 33.6097 20.1346 33.6394 8.28031 31.904C7.9421 33.1054 7.58698 34.2772 7.24877 35.4489C7.02893 36.1905 6.84291 36.9321 6.60617 37.6589C6.55543 37.8072 6.31869 37.9852 6.16649 37.9852C4.20486 38.0001 2.24324 38.0001 0.264702 37.9852C0.21397 37.9852 0.146328 37.9556 0.0448648 37.9259C0.0279542 37.7479 0.0110436 37.5699 0.0110436 37.3919C0.0110436 31.9782 -0.0227775 26.5645 0.0279542 21.1507C0.0617753 18.3623 1.27934 15.9595 3.57917 14.0164C3.73137 13.883 4.06958 13.8236 4.28942 13.8681C6.77527 14.4466 9.2273 15.1437 11.7301 15.6628C18.5788 17.0867 25.4953 17.4427 32.4963 16.8049C37.1297 16.3896 41.6618 15.5442 46.0754 14.2389C46.2953 14.1796 46.5489 14.1648 46.735 14.0758C47.851 13.5715 48.5951 14.0016 49.2884 14.7729C50.8949 16.5972 51.9434 18.6292 51.9603 20.9431C52.011 26.4903 51.9772 32.0227 51.9772 37.5699C52.011 37.6737 51.9941 37.7924 51.9772 37.9852ZM10.2081 26.6238C11.0706 26.5645 11.6793 26.5496 12.2881 26.4755C14.1314 26.253 14.2497 26.1343 14.0637 24.5028C14.013 24.1468 13.8608 23.6722 13.5733 23.509C11.747 22.4411 9.71771 21.8923 7.50243 21.8627C7.06275 21.8627 6.75836 22.0555 6.74145 22.4411C6.69072 23.42 6.67381 24.3841 6.67381 25.363C6.67381 25.9267 7.07966 26.2381 7.70535 26.3271C8.60161 26.4606 9.53169 26.5496 10.2081 26.6238ZM41.5434 26.6534C42.4904 26.5496 43.4205 26.4606 44.3336 26.342C45.0101 26.253 45.399 25.897 45.4159 25.3037C45.4497 24.4583 45.4836 23.598 45.4159 22.7526C45.3483 21.9665 45.1115 21.8182 44.1815 21.8627C42.6595 21.9072 41.2728 22.3818 39.8523 22.8267C38.4488 23.2717 37.8062 24.043 37.9415 25.3779C37.9922 25.9118 38.1951 26.2381 38.7701 26.3123C39.6663 26.4458 40.6133 26.5496 41.5434 26.6534Z"
                        fill="currentColor" />
                    <path
                        d="M49.8466 7.6089C49.8466 8.52849 49.8635 9.37393 49.8297 10.2194C49.8297 10.3232 49.6098 10.4863 49.4746 10.516C44.4859 11.5543 39.6664 13.1413 34.5425 13.7197C29.4863 14.2834 24.43 14.402 19.3737 13.9126C15.0277 13.4973 10.817 12.637 6.6739 11.4356C5.3887 11.0648 4.06967 10.8126 2.75065 10.5605C2.34479 10.4863 2.1926 10.3528 2.20951 9.98205C2.24333 9.22561 2.22642 8.46916 2.22642 7.63856C2.48008 7.62373 2.69992 7.59407 2.91975 7.59407C4.39097 7.59407 5.8791 7.57923 7.35032 7.6089C7.82382 7.62373 8.06057 7.51991 8.19585 7.08977C8.56788 5.99219 9.00756 4.90945 9.43032 3.8267C10.2928 1.54254 12.711 0.0148322 15.4843 0C22.5191 0 29.5539 0 36.5887 0C39.3451 0 41.7464 1.54254 42.6427 3.84153C43.0654 4.93911 43.5051 6.05152 43.8941 7.16393C44.0124 7.50507 44.1985 7.62373 44.6043 7.62373C46.1093 7.6089 47.5975 7.6089 49.1025 7.6089C49.3224 7.6089 49.5591 7.6089 49.8466 7.6089Z"
                        fill="currentColor" />
                </svg>
                <span class="text-3xl leading-[1.1] font-bold">АВТО-<br />ВЛАДЕЛЕЦУ</span>
            </h2>
            <div class="col-span-2 pb-7 sm:pb-0 md:px-12 xl:row-span-2 xl:px-6 xl:pt-[4.6rem]">
                <p class="mb-4 text-center text-[0.94rem] leading-[1.3] md:mt-1.5 md:mb-8 md:text-[1.44rem] xl:my-0 xl:text-left">
                    Хочешь зарабатывать на своём автомобиле бонусы и расплачиваться ими до 100% от стоимости товаров или услуг?
                </p>
                <p class="text-my-blue text-center text-3xl font-black uppercase md:mb-4 md:text-[2.5rem] xl:mt-16 xl:text-[2.8rem]">1 бонус = 1 <span class="font-bold">₽</span></p>
            </div>
            <div
                class="z-10 flex flex-col items-center bg-[url(/images/page/main/index_info_item_bg.png)] bg-size-[100%_100%] bg-center bg-no-repeat px-0.5 py-4 text-center sm:px-[1.4rem] sm:pt-8 sm:pb-10 md:py-[3.8rem] xl:px-4 xl:pb-[4.2rem]">
                <div class="text-my-blue text-3xl font-bold sm:text-[2.4rem] md:text-6xl">234 333</div>
                <div class="mt-1 text-sm md:mt-4 md:px-4 md:text-[1.44rem]">заработанных бонусных балла</div>
                <a href="#" class="text-my-blue mt-3.5 text-sm underline sm:mt-6 sm:font-medium md:mt-[2.1rem] md:text-[1.44rem]">Подробнее</a>
            </div>
            <div
                class="z-10 flex flex-col items-center bg-[url(/images/page/main/index_info_item_bg.png)] bg-size-[100%_100%] bg-center bg-no-repeat px-0.5 py-4 text-center sm:px-[1.4rem] sm:pt-8 sm:pb-10 md:py-[3.8rem] xl:px-4 xl:pb-[4.2rem]">
                <div class="text-my-blue text-3xl font-bold sm:text-[2.4rem] md:text-6xl">200 234</div>
                <div class="mt-1 text-sm md:mt-4 md:px-4 md:text-[1.44rem]">потраченных бонусных балла</div>
                <a href="#" class="text-my-blue mt-3.5 text-sm underline sm:mt-6 sm:font-medium md:mt-[2.1rem] md:text-[1.44rem]">Подробнее</a>
            </div>
            <div
                class="z-10 flex flex-col items-center bg-[url(/images/page/main/index_info_item_bg.png)] bg-size-[100%_100%] bg-center bg-no-repeat px-0.5 py-4 text-center sm:px-[1.4rem] sm:pt-8 sm:pb-10 md:py-[3.8rem] xl:px-4 xl:pb-[4.2rem]">
                <div class="text-my-blue text-3xl font-bold sm:text-[2.4rem] md:text-6xl">1 653</div>
                <div class="mt-1 text-sm md:mt-4 md:px-4 md:text-[1.44rem]">участников автомобилей</div>
                <a href="#" class="text-my-blue mt-3.5 text-sm underline sm:mt-6 sm:font-medium md:mt-[2.1rem] md:text-[1.44rem]">Подать заявку</a>
            </div>
            <div
                class="z-10 flex flex-col items-center bg-[url(/images/page/main/index_info_item_bg.png)] bg-size-[100%_100%] bg-center bg-no-repeat px-0.5 py-4 text-center sm:px-[1.4rem] sm:pt-8 sm:pb-10 md:py-[3.8rem] xl:px-4 xl:pb-[4.2rem]">
                <div class="text-my-blue text-3xl font-bold sm:text-[2.4rem] md:text-6xl">233</div>
                <div class="item__txt--cst mt-1 text-sm md:mt-4 md:px-4 md:text-[1.44rem]">автомобилей требуется для участия</div>
                <a href="#" class="text-my-blue mt-1.5 text-sm underline sm:mt-6 sm:font-medium md:mt-[2.1rem] md:text-[1.44rem]">Участвовать</a>
            </div>
            <div class="col-span-2 -mt-1 md:col-auto md:mt-5 xl:col-start-4 xl:row-start-1 xl:mt-0 xl:px-12">
                <div class="bg-my-blue rounded-1.25 px-8 py-3.5 text-center text-2xl leading-none font-medium text-white xl:px-0">
                    <span class="text-3xl font-bold">СЕЙЧАС<br /><span class="text-[2.4rem]">2 653</span></span
                    ><br />бонуса доступно для заработка
                </div>
            </div>
            <div class="col-span-2 md:col-auto md:flex md:items-center md:gap-x-8 xl:col-start-4 xl:row-start-2 xl:mb-7 xl:flex-col xl:px-12">
                <IconDownArrows class="text-my-blue relative -top-1.5 mx-auto shrink-0 md:static md:-rotate-90 xl:relative xl:-top-2.5 xl:rotate-none" />
                <a href="#" class="bg-my-yellow rounded-1.25 flex h-[4.62rem] w-full items-center justify-center text-xl md:h-[5.25rem] md:text-2xl">Подробнее</a>
            </div>
        </div>
    </div>
    <!-- for business-->
    <div class="relative bg-[url(/images/page/main/index_info_bg.png)] bg-my-blue bg-no-repeat bg-bottom bg-contain xl:bg-[url(/images/page/main/index_info_bg_xl.png)]">
        <picture class="absolute -top-[2.6rem] left-0 sm:-top-[17.8rem] md:-top-[8.8rem] xl:-top-[20.3rem]">
            <source srcset="/images/page/main/coin31-xl.png" media="(min-width: 1780px)" />
            <source srcset="/images/page/main/coin32-md.png" media="(min-width: 768px)" />
            <source srcset="/images/page/main/coin31-sm.png" media="(min-width: 480px)" />
            <img src="/images/page/main/coin31.png" alt="" />
        </picture>
        <div class="container grid grid-cols-2 gap-x-4 gap-y-[1.4rem] py-[3.8rem] md:px-10 lg:px-[8.7rem] xl:relative xl:grid-cols-4 xl:gap-x-5 xl:px-0 xl:pb-[6.3rem]">
            <picture class="absolute -top-[4.3rem] right-0 hidden sm:block md:hidden">
                <img src="/images/page/main/coin33-sm.png" alt="" />
            </picture>
            <h2 class="rounded-1.25 text-my-blue relative col-span-2 mx-auto flex h-[5.25rem] w-80 max-w-full items-center justify-center gap-x-6 bg-white xl:col-span-1 xl:row-span-2 xl:mt-[4.5rem]">
                <div class="absolute top-0 right-full -mr-4 hidden h-full w-[100rem] bg-white xl:block"></div>
                <svg width="56" height="46" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_14_12940)">
                        <path
                            d="M56 40.4656C56 34.3562 56 28.2468 56 22.1375C55.9417 22.1518 55.8979 22.1518 55.8396 22.1662C47.194 25.0125 38.5483 27.8443 29.9026 30.6906C28.6488 31.1075 27.4241 31.1218 26.1557 30.7193C17.6412 27.9162 9.11221 25.1275 0.583183 22.3243C0.40823 22.2668 0.218697 22.2093 0.0291634 22.1518C0.0145836 22.2668 0 22.3243 0 22.3818C0 28.2181 -0.014576 34.0543 0.0291634 39.8906C0.0291634 40.6956 0.247856 41.5437 0.597763 42.2768C1.82244 44.8212 3.9219 46 6.77948 46C20.9071 45.9856 35.02 46 49.1476 46C49.3955 46 49.6579 46 49.9058 45.9856C52.603 45.885 55.0378 43.9731 55.7521 41.4C55.8396 41.0837 55.9125 40.7675 56 40.4656Z"
                            fill="currentColor" />
                        <path
                            d="M56 12.4343C55.8979 12.0749 55.825 11.7012 55.7084 11.3418C54.8628 8.66807 52.4426 6.91432 49.5413 6.89995C45.7214 6.88557 41.887 6.89995 38.0672 6.89995C37.8485 6.89995 37.6444 6.89995 37.3382 6.89995C37.3382 6.0662 37.3528 5.27557 37.3382 4.49932C37.2799 2.31432 35.7928 0.560573 33.6204 0.100573C33.2997 0.0286985 32.9643 0.0143235 32.6436 0.0143235C29.5673 0.0143235 26.4764 -5.15403e-05 23.4002 0.0143235C21.0674 0.0286985 19.2596 1.49495 18.793 3.69432C18.7055 4.08245 18.7055 4.48495 18.7055 4.87307C18.691 5.51995 18.7055 6.16682 18.7055 6.89995C18.4577 6.89995 18.2536 6.89995 18.0349 6.89995C14.2588 6.89995 10.4973 6.89995 6.72117 6.89995C2.77011 6.89995 0.0291634 9.60245 0.0291634 13.5124C0.0291634 15.0074 0.0437393 16.5024 0.0145798 17.9831C0.0145798 18.3424 0.102058 18.5149 0.466549 18.6299C9.38923 21.5481 18.3119 24.4949 27.2492 27.3987C27.7011 27.5424 28.2843 27.5568 28.7217 27.4131C37.761 24.4806 46.8149 21.5049 55.8542 18.5437C55.9125 18.5293 55.9563 18.5006 56 18.4718C56 16.4593 56 14.4468 56 12.4343ZM32.6582 6.8712C29.5236 6.8712 26.4619 6.8712 23.371 6.8712C23.371 6.10932 23.371 5.3762 23.371 4.64307C26.491 4.64307 29.5673 4.64307 32.6582 4.64307C32.6582 5.40495 32.6582 6.10932 32.6582 6.8712Z"
                            fill="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_14_12940">
                            <rect width="56" height="46" fill="white" transform="matrix(-1 0 0 1 56 0)" />
                        </clipPath>
                    </defs>
                </svg>
                <span class="text-3xl leading-[1.1] font-bold">БИЗНЕСУ</span>
            </h2>
            <div class="col-span-2 md:px-4 xl:row-span-2 xl:px-6 xl:pt-[5.2rem]">
                <p class="mb-5 text-center text-[0.94rem] leading-[1.3] text-white sm:leading-[1.6] md:text-[1.44rem] xl:mb-16 xl:text-left xl:leading-8">
                    Хочешь рекламу для своего бизнеса и инструмент для работы с клиентами от которой будет результат?
                </p>
                <p class="text-my-yellow text-center text-[1.56rem] leading-[1.4] font-black uppercase md:text-3xl xl:text-left xl:font-bold">реклама про которую говорят, видят и рекомендуют!</p>
            </div>

            <div class="flex flex-col items-center bg-[url(/images/page/main/index_info_item_bg.jpg)] bg-size-[100%_100%] bg-center bg-no-repeat px-0.5 py-3 text-center sm:px-[1.4rem] sm:pt-9 sm:pb-[1.4rem] md:py-[3.8rem] xl:px-4">
                <div class="text-my-blue text-3xl font-bold sm:text-4xl sm:leading-[1.3] md:text-6xl">150</div>
                <div class="mt-1 text-sm md:px-4 md:text-[1.44rem]">компаний <br />участников</div>
                <a href="#" class="text-my-blue mt-3.5 text-sm underline sm:mt-6 sm:font-medium md:mt-[2.1rem] md:text-[1.44rem]">Подать заявку</a>
            </div>
            <div class="flex flex-col items-center bg-[url(/images/page/main/index_info_item_bg.jpg)] bg-size-[100%_100%] bg-center bg-no-repeat px-0.5 py-3 text-center sm:px-[1.4rem] sm:pt-9 sm:pb-[1.4rem] md:py-[3.8rem] xl:px-4">
                <div class="text-my-blue text-3xl font-bold sm:text-4xl sm:leading-[1.3] md:text-6xl">365</div>
                <div class="mt-1 text-sm md:text-[1.44rem]">запущено рекламных акций</div>
                <a href="#" class="text-my-blue mt-3.5 text-sm underline sm:mt-6 sm:font-medium md:mt-[2.1rem] md:text-[1.44rem]">Рекламодатели и акции</a>
            </div>
            <div class="flex flex-col items-center bg-[url(/images/page/main/index_info_item_bg.jpg)] bg-size-[100%_100%] bg-center bg-no-repeat px-0.5 py-3 text-center sm:px-[1.4rem] sm:pt-9 sm:pb-[2.8rem] md:py-[3.8rem] xl:px-4">
                <div class="text-my-blue text-3xl font-bold sm:text-4xl sm:leading-[1.3] md:text-6xl">1 434</div>
                <div class="mt-1 text-sm md:text-[1.44rem]">автомобиля оклеено рекламой</div>
                <a href="#" class="text-my-blue mt-3.5 text-sm underline sm:mt-6 sm:font-medium md:mt-[2.1rem] md:text-[1.44rem]">Смотреть участников</a>
            </div>
            <div class="flex flex-col items-center bg-[url(/images/page/main/index_info_item_bg.jpg)] bg-size-[100%_100%] bg-center bg-no-repeat px-0.5 py-3 text-center sm:px-[1.4rem] sm:pt-9 sm:pb-[2.8rem] md:py-[3.8rem] xl:px-4">
                <div class="text-my-blue text-3xl leading-none font-bold sm:leading-[2.8rem] md:text-[3.25rem] md:leading-[4.7rem]">10 тыс./км</div>
                <div class="mt-1 text-sm md:text-[1.44rem]">проехала <br />реклама</div>
                <a href="#" class="text-my-blue mt-3.5 text-sm underline sm:mt-6 sm:font-medium md:mt-[2.1rem] md:text-[1.44rem]">Подробнее</a>
            </div>

            <div class="col-span-2 -mt-1 md:col-auto md:mt-5 xl:col-start-4 xl:row-start-1 xl:mt-0 xl:px-12">
                <div class="bg-my-gray rounded-1.25 text-my-blue w-full px-8 py-3.5 text-center text-2xl leading-none font-medium xl:px-0">
                    <span class="text-3xl font-bold">СЕЙЧАС<br /><span class="text-[2.4rem]">345</span></span
                    ><br />авто свободно <br />для оклейки
                </div>
            </div>
            <div class="col-span-2 md:col-auto md:flex md:items-center md:gap-x-8 xl:col-start-4 xl:row-start-2 xl:mb-7 xl:flex-col xl:px-12">
                <IconDownArrows class="relative -top-2.5 mx-auto shrink-0 text-white md:static md:-rotate-90 xl:relative xl:-top-2.5 xl:rotate-none" />
                <a href="#" class="bg-my-yellow rounded-1.25 flex h-[4.62rem] w-full items-center justify-center text-xl md:h-[5.25rem] md:text-2xl">Подробнее</a>
            </div>
        </div>
    </div>
</template>
