<template>
    <div class="mx-auto max-w-md">
        <h1 class="mb-4 text-xl font-bold">{{ $t('login_form_title') }}</h1>
        <form class="space-y-4" @submit.prevent="submitForm">
            <label class="floating-label">
                <span>{{ $t('login_form_login') }}</span>
                <input 
                    v-model="form.username" 
                    type="text" 
                    :placeholder="$t('login_form_login')" 
                    class="input input-md w-full" 
                    :class="{'input-error': has('username')}" >
            </label>

            <label class="floating-label">
                <span>{{ $t('login_form_password') }}</span>
                <input 
                    v-model="form.password" 
                    type="password" 
                    :placeholder="$t('login_form_password')" 
                    class="input input-md w-full" 
                    :class="{'input-error': has('password')}" >
            </label>
            <div v-if="has('_general')" class="mb-6 rounded-xl bg-rose-400 px-6 py-4 text-white" >
                <p>
                    {{ first('_general') }}
                </p>
            </div>
            <button :disabled="status === 'pending'" class="btn btn-primary" type="submit">{{ $t('login_form_submit') }}</button>
        </form>
        <div class="mt-4">
            <nuxt-link to="/" class="link link-primary">
                {{ $t('login_form_register') }}
            </nuxt-link>
        </div>       
    </div>
</template>

<script setup lang="ts">

const form = reactive({
    username: '',
    password: '',
})

const { has, first, setFromApi, clear } = useFormErrors()

const tokenRepo = tokenRepository($fetch)

const { data, error, execute, status} = useAsyncData('token', 
    () => tokenRepo.getTokens(form), {
        immediate: false,
    }
)

const auth = useAuthStore()
const router = useRouter()

async function submitForm() {
    clear()   
    await execute()
    if (data.value) {
        auth.setTokens(data.value)
        router.push('/')
    } else if (error.value) {
        setFromApi(error.value?.data as ApiError)
    }
    
}
</script>
