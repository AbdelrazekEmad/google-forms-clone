<template>
    <header>
        <v-container>
            <div class="header__wrapper">
                <router-link :to="isLogedin ? '/' : 'about'">
                    <h1>Google Forms</h1>
                </router-link>
                <div class="buttons" v-if="!isLogedin">
                    <router-link to="/login">
                        <v-btn variant="tonal">
                            Login
                        </v-btn>
                    </router-link>
                    <router-link to="/signup">
                        <v-btn variant="tonal">
                            Signup
                        </v-btn>
                    </router-link>
                </div>
                <div class="d-flex align-center ga-3" v-else>
                    <div class="user__img">
                        <img :src="userAvatar" alt="">
                    </div>
                    {{ userName }}
                    <v-btn variant="tonal" @click="logout">
                        Logout
                    </v-btn>
                </div>
            </div>
        </v-container>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.replace('/login');
        }
    },
    computed: {
        isLogedin() {
            return this.$store.getters.isAuthenticated;
        },
        userName() {
            return this.$store.getters.userName;
        },
        userAvatar() {
            return this.$store.getters.userAvatar;
        },
    },
}
</script>

<style lang="scss" scoped>
header {
    box-shadow: 5px 0 5px 5px rgb(0, 0, 0, 0.4);
    padding-block: 0.5rem;

    .header__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        text-decoration: none;
    }

    h1 {
        color: #000;
        font-size: 24px;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .user__img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>