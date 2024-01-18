<template>
    <div class="signup">
        <div class="signup__wrapper">
            <h3 class="mb-3 text-center">Sign up</h3>
            <form action="" @submit.prevent="signup()">

                <!-- Name input  -->
                <v-text-field v-model="v$.name.$model" :error-messages="v$.name.$errors.map(e => e.$message)"
                    label="Your Name" @input="v$.name.$touch" @blur="v$.name.$touch" variant="outlined"
                    type="text"></v-text-field>

                <!-- Email input  -->
                <v-text-field v-model="v$.email.$model" :error-messages="v$.email.$errors.map(e => e.$message)"
                    label="E-mail" @input="v$.email.$touch" @blur="v$.email.$touch" variant="outlined"
                    type="email"></v-text-field>

                <!-- Password input -->
                <v-text-field v-model="v$.password.$model" :error-messages="v$.password.$errors.map(e => e.$message)"
                    label="Password" @input="v$.password.$touch" @blur="v$.password.$touch" variant="outlined"
                    type="password" :counter="6"></v-text-field>

                <!-- Confermed Password input -->
                <v-text-field v-model="v$.confirmedPassword.$model"
                    :error-messages="v$.confirmedPassword.$errors.map(e => e.$message)" label="Confirm Password"
                    @input="v$.confirmedPassword.$touch" @blur="v$.confirmedPassword.$touch" variant="outlined"
                    type="password"></v-text-field>

                <!-- File input
                <input type="file" @change="handleFile" />
                <span>{{ v$.img.$error }}</span> -->

                <div class="d-flex align-center justify-space-between">
                    <v-btn type="submit" variant="tonal" :disabled="this.v$.$invalid">
                        Sign Up
                    </v-btn>
                    <router-link class="create__account" to="/login">Alredy have an account</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'

export default {
    name: 'SignUp',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmedPassword: '',
            // img: null,
            // file: null
        }
    },
    validations() {
        return {
            name: {
                required,
                minLengthValue: minLength(3),
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLengthValue: minLength(6),
            },
            confirmedPassword: {
                required,
                sameAsPassword: helpers.withMessage('Passwords do not match.', sameAs(this.password))
            },
            // img: {
            //     required
            // }
        }
    },

    methods: {
        // handleFile(e) {
        //     console.log(e.target.files[0])
        //     this.img = e.target.files[0]
        // },
        signup() {
            if (this.v$.$invalid) {
                alert('error')
            } else {
                this.$store.dispatch('signup', {
                    email: this.email,
                    password: this.password,
                    nextRoute: '/forms',
                });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.signup {
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
