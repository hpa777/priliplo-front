<template>
    <div class="bg-my-gray mt-6 sm:mt-16 xl:mt-[6.5rem]">
        <div>
            <picture>
                <source srcset="/images/footer-xl.png" media="(min-width: 1396px)" />
                <source srcset="/images/footer-lg.png" media="(min-width: 960px)" />
                <source srcset="/images/footer-md.png" media="(min-width: 768px)" />
                <source srcset="/images/footer-sm.png" media="(min-width: 480px)" />
                <img src="/images/footer-mob.png" alt="" class="w-full" />
            </picture>
        </div>
        <footer class="relative container pt-[1.7rem] pb-[3.8rem] sm:pt-10 md:pt-[3.7rem] lg:pt-8 xl:flex xl:gap-x-7 xl:pt-3.5 xl:pb-[4.6rem] xl:pl-[8.8rem]">
            <div class="flex-col-reverse sm:flex xl:flex-row xl:gap-x-[8.8rem]">
                <a href="" class="float-right w-24 sm:float-none md:w-auto xl:shrink-0">
                    <img src="/images/logo-footer.png" alt="" />
                </a>
                <ul class="mb-[1.9rem] space-y-[0.5rem] text-lg sm:w-[22rem] sm:columns-2 md:w-[36rem] md:columns-3 md:text-xl xl:w-auto xl:columns-2 xl:pt-[1.1rem]">
                    <li><a href="">Наша команда</a></li>
                    <li><a href="">Документы</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">Работа</a></li>
                    <li><a href="">Сотрудничество</a></li>
                    <li><a class="sm:whitespace-nowrap xl:whitespace-normal" href="">Часто задаваемые вопросы</a></li>
                </ul>
            </div>
            <div class="sm:absolute sm:right-9 sm:bottom-16 sm:w-1/2 md:right-auto md:bottom-20 md:left-52 md:w-auto xl:static xl:w-[26.5rem] xl:shrink-0 xl:pt-[1.1rem]">
                <a href="" class="text-2xl font-medium md:text-3xl">+7 920 225-18-35</a>
                <div class="mt-3 text-lg leading-[1.4] font-medium md:text-xl xl:mt-5">
                    <p>Адреса пунктов оклейки:</p>
                    <ul>
                        <li>г. Воронеж, Ленинский проспект, д. 174</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>
