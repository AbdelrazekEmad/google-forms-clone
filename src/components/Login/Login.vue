<template>
    <div class="login">
        <div class="login__wrapper">
            <h3 class="mb-3 text-center">Login</h3>
            <form action="" @submit.prevent="login()">

                <!-- Email input  -->
                <v-text-field v-model="v$.email.$model" :error-messages="v$.email.$errors.map(e => e.$message)"
                    label="E-mail" @input="v$.email.$touch" @blur="v$.email.$touch" variant="outlined"
                    type="email"></v-text-field>

                <!-- Password input -->
                <v-text-field v-model="v$.password.$model" :error-messages="v$.password.$errors.map(e => e.$message)"
                    label="Password" @input="v$.password.$touch" @blur="v$.password.$touch" variant="outlined"
                    type="password"></v-text-field>

                <div class="d-flex align-center justify-space-between">
                    <v-btn type="submit" variant="tonal" :disabled="this.v$.$invalid">
                        Login
                    </v-btn>
                    <router-link class="create__account" to="/signUp">Don't have an account?</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'


export default {
    name: 'Login',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    validations() {
        return {
            email: {
                required,
                email
            },
            password: {
                required,
            },
        }
    },

    methods: {
        login() {
            if (this.v$.$invalid) {
                alert('error')
            } else {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                    nextRoute: "/forms",
                });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.login {
    height: calc(100vh - 52px);
    display: flex;
    justify-content: center;
    align-items: center;

    &__wrapper {
        width: 450px;
        border: 1px solid #dadce0;
        border-radius: 8px;
        padding: 48px 40px 36px;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .v-input {
        padding-bottom: 4px !important;
    }

    .create__account {
        text-decoration: none;
        color: rgb(26, 115, 232);
        padding: 8px 12px;
        border-radius: 4px;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #ebf0f5;
        }
    }
}
</style>