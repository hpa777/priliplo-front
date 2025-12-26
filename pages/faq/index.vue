<template>
    <div>
        <UiBreadCrumb :chain="[{ name: 'Вопрос/ответ' }]"></UiBreadCrumb>
        <UiPageTitle>Ответы на Часто задаваемые вопросы</UiPageTitle>

        <div class="container mt-8 sm:mt-[3.2rem] lg:mt-[4.7rem] xl:mt-12">
            <div class="grid gap-y-[1.1rem] sm:gap-y-9 md:grid-cols-2 md:grid-rows-[12.5rem] md:gap-x-5 lg:grid-rows-[15rem] xl:gap-x-[3.7rem] xl:px-[8.7rem]">
                <a
                    href="#driver"
                    class="border-my-blue text-my-blue relative flex h-[10.7rem] flex-col justify-center rounded-4xl border-2 bg-[url(/images/page/faq/car.png)] bg-size-[54%] bg-right bg-no-repeat pl-4 sm:bg-size-[38%] sm:bg-[68%_64%] md:h-full md:bg-size-[53%] md:bg-[96%_77%] lg:bg-right lg:bg-auto xl:pl-10">
                    <IconCar class="w-14" />
                    <div class="mt-4 text-xl leading-[1.2] font-bold uppercase lg:text-3xl xl:relative xl:-top-4">авто-<br />владельцу</div>
                    <img src="/images/page/faq/woman.png" alt="" class="absolute -top-2 right-[27%] h-[113%] sm:-top-[1.6rem] sm:right-[14.6%] sm:h-[135%] md:-top-5 md:right-[31%] md:h-[126%] lg:-top-[2.8rem] lg:h-[137%] lg:right-[27%] xl:right-[33%]" />
                </a>
                <a
                    href="#busisness"
                    class="border-my-blue text-my-blue relative flex h-[10.7rem] flex-col justify-center rounded-4xl border-2 bg-[url(/images/page/faq/city.png)] bg-contain bg-bottom-right bg-no-repeat pl-4 md:h-full xl:pl-10">
                    <IconBriefcase class="w-14" />
                    <div class="mt-4 text-xl leading-[1.2] font-bold uppercase lg:text-3xl xl:relative xl:-top-4">БИЗНЕСУ</div>
                    <img src="/images/page/faq/man.png" alt="" class="absolute -top-2 right-[37%] h-[113%] sm:-top-7 sm:right-[42%] sm:h-[135%] md:-top-5 md:right-[16%] md:h-[125%] lg:-top-12 lg:right-[23.8%] lg:h-[137.5%] xl:right-[33%]" />
                </a>
            </div>

            <h2 id="driver" class="bg-my-blue rounded-1.25 mt-[4.2rem] flex h-[5.25rem] items-center justify-center gap-x-[1.4rem] text-white sm:mt-[5.2rem] md:mx-auto md:w-fit md:px-9 xl:mx-0 xl:mt-10 xl:pl-[3.3rem] xl:pr-[1.6rem] xl:relative xl:rounded-l-none xl:before:absolute xl:before:top-0 xl:before:right-full xl:before:h-full xl:before:w-lvw xl:before:bg-my-blue">
                <IconCar class="w-14 shrink-0" />
                <span class="text-3xl font-bold">АВТО-<br class="md:hidden xl:inline" />ВЛАДЕЛЕЦУ</span>
            </h2>
            <PageFaqList :src="data?.filter((el) => el.type === 0)"></PageFaqList>

            <!--Business-->
            <h2 id="busisness" class="bg-my-blue rounded-1.25 mt-[4.2rem] flex h-[5.25rem] items-center justify-center gap-x-[1.4rem] text-white md:mx-auto md:w-fit md:px-28 xl:mx-0 xl:mt-10 xl:pl-[3.3rem] xl:pr-[1.6rem] xl:relative xl:rounded-l-none xl:before:absolute xl:before:top-0 xl:before:right-full xl:before:h-full xl:before:w-lvw xl:before:bg-my-blue">
                <IconBriefcase class="w-14 shrink-0" />
                <span class="text-3xl font-bold">БИЗНЕСУ</span>
            </h2>
            <PageFaqList :src="data?.filter((el) => el.type === 1)"></PageFaqList>
        </div>
    </div>
</template>
<script lang="ts" setup>
const pageRepo = pageRepository($fetch)
const { data } = await useAsyncData('faq', () => pageRepo.getFaq())
</script>
<style lang="scss">
@media (width >= 768px) {
    .answer-title2col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 1rem;
        margin-top: 1.5rem;
        h3 { margin: 0; }
    }
    .answer {        
        &::after {
            content: '';
            display: block;
            background-repeat: no-repeat;
            background-size: contain;
            position: absolute;
        }
        &--1 {
            overflow: inherit;
            p {
                &:last-child {
                    padding-right: 1rem;
                }
            }
            &::after {
                width: 8.18rem;
                height: 5.5rem;
                background-image: url('/public/images/page/faq/sticker1.png');
                right: -1.3rem;
                bottom: 0.5rem;
            }
        }
        &--4 {
            &::after {
                width: 8.18rem;
                height: 5.5rem;
                background-image: url('/public/images/page/faq/sticker2.png');
                right: 4.2rem;
                top: 8.1rem;
            }
        }
        &--15 {
            &::after {
                width: 9.5rem;
                height: 4.75rem;
                background-image: url('/public/images/page/faq/sticker3.png');
                right: 2.2rem;
                bottom: 12.9rem;
            }
        }
        &--17 {
            &::after {
                width: 11.69rem;
                height: 8.31rem;
                background-image: url('/public/images/page/faq/sticker4.png');
                right: 1.9rem;
                top: 10.3rem;
            }
        }
    }
}
@media (width >= 960px) {
    .answer {                
        &--1 {            
            p {
                &:last-child {
                    padding-right: 0;
                }
            }
            &::after {                              
                right: -2.7rem;
                bottom: 3rem;
            }
        }
        &--4 {
            &::after {                
                right: 1.3rem;
                top: 10rem;
            }
        }
        &--15 {
            &::after {
                width: 12.3rem;
                height: 6.15rem;                
                right: 2.2rem;
                bottom: 14rem;
            }
        }
        &--17 {
            &::after {
                width: 16.19rem;
                height: 11.61rem;                
                right: 2.1rem;
                top: 12rem;
            }
        }
    }
}
@media (width >= 1396px) {
    .answer-ol {
        display: grid;
        grid-template-columns: .7fr 1fr 1fr;
        margin-bottom: 0.9rem;
        li {
            margin: 0;
        }
    }
    .answer-title2col {
        align-items: flex-start;
        grid-template-columns: 26.4rem 1fr;
        column-gap: 3rem;
        p {
            margin-bottom: .1rem!important;
        }
        span {
            font-size: 2rem;
        }
    }
    .answer {                
        &--1 {
            p {
                padding-right: 5rem!important;
            } 
            &::after {
                width: 14.5rem;
                height: 9.81rem;                              
                right: -3.4rem;
                bottom: 1rem;
            }
        }
        &--4 {
            padding-right: 1rem;
            overflow: inherit;
            > div {
                padding-left: 8rem;
            }
            &::after {
                width: 14.56rem;
                height: 9.81rem;                
                right: auto;
                top: 2rem;
                left: -2.7rem;
            }
        }
        &--15 {
            &::after {
                width: 16.3rem;
                height: 8.15rem;                
                right: 3.2rem;
                bottom: 10.5rem;
            }
        }
        &--17 {
            ul {
                column-count: 2;
                padding-right: 3rem;
                li {
                    &:last-child {
                        padding-right: 10rem;
                    }
                }
            }
            &::after {                
                top: auto;
                bottom: 0;
            }
        }
    }
}
</style>
