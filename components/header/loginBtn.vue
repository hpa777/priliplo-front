<template>
	<NuxtLink
		to="/user/login"		
	>
		<div
			class="bg-my-yellow flex aspect-square  items-end justify-center rounded-[0.31rem]"
		>
			<IconMan />
		</div>
		{{ $t('header_login_btn') }}
	</NuxtLink>
</template>
<style scoped>
@reference "@/assets/css/global.css";
 .md-login-btn {
    @apply hidden flex-col items-center gap-x-[0.7rem] gap-y-1 text-sm sm:flex md:flex-row;
 }
 .md-login-btn div {
    @apply h-10 md:h-[1.56rem];
 }
 .md-login-btn svg {
    @apply h-8 w-8 md:h-5 md:w-5;
 }
 .sm-login-btn {
    @apply flex items-center gap-x-[0.7rem] gap-y-1 text-white sm:hidden;
 }
 .sm-login-btn div {
    @apply h-[1.56rem];
 }
 .sm-login-btn svg {
    @apply h-5 w-5;
 }
</style>