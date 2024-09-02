<template>
    <div>
        <h1>Login</h1>
        <input type="text" placeholder="email" v-model="email" id="email"><br>
        <input type="password" placeholder="password" v-model="password" id="password"><br>
        <button @click="login">Login</button>
        <p>{{ feedback }}</p>
        <div v-if="error">
            <p>Wrong email or password</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref, Ref } from 'vue'
import { useAuth } from '@/store/useAuth';
import router from '@/router';

const store = useAuth()
const email: Ref<string> = ref('')
const password: Ref<string> = ref('')
const feedback: Ref<string> = ref('')
const error: Ref<boolean> = ref(false)

const login = () => {
    const loginSuccess = store.login(email.value, password.value)
    error.value = !loginSuccess
    if (store.is_auth) {
        router.push('/')
    }
}

</script>

<style lang="scss" scoped></style>