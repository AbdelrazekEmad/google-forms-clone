<template>
    <div class="hero py-10">
        <v-container>
            <v-row align="center">
                <v-col cols="12" md="5" class="text-center text-md-start">
                    <h2 class="hero__headding">Get insights quickly, with Google Forms</h2>
                    <p class="hero__pragraph">Easily create and share online forms and surveys, and analyze responses in
                        real-time.</p>
                    <router-link class="hero__btn" to="/login">Go To Forms</router-link>
                    <p class="hero__signUp">
                        Don't have an account?
                        <router-link to="/signup">Sign up for free</router-link>
                    </p>
                </v-col>
                <v-col cols="12" md="7">
                    <v-img src="src/assets/images/hero.png"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="land-section py-6 py-md-16">
        <v-container>
            <v-row align="center">
                <v-col cols="12" md="6" class="order-2 order-md-1">
                    <v-img src="src/assets/images/section2-img.jpg"></v-img>
                </v-col>
                <v-col cols="12" md="6" class="order-1 order-md-2">
                    <h2 class="land-section__headding">Create an online form as easily as creating a document</h2>
                    <p class="land-section__pragraph">Select from multiple question types, drag-and-drop to reorder
                        questions, and customize values as easily as pasting a list.</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="land-section py-6 py-md-16">
        <v-container>
            <v-row align="center">
                <v-col cols="12" md="6">
                    <h2 class="land-section__headding">Send polished surveys and forms</h2>
                    <p class="land-section__pragraph">Customize colors, images, and fonts to adjust the look and feel or
                        reflect your organization’s branding. And add custom logic that shows questions based on answers,
                        for a more seamless experience.</p>
                </v-col>
                <v-col cols="12" md="6">
                    <v-img src="src/assets/images/section3-img.jpg"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="land-section py-6 py-md-16">
        <v-container>
            <v-row align="center">
                <v-col cols="12" md="6" class="order-2 order-md-1">
                    <v-img src="src/assets/images/section4-img.jpg"></v-img>
                </v-col>
                <v-col cols="12" md="6" class="order-1 order-md-2">
                    <h2 class="land-section__headding">Analyze responses with automatic summaries</h2>
                    <p class="land-section__pragraph">See charts with response data update in real-time. Or open the raw
                        data with Google Sheets for deeper analysis or automation.</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "LandingPage",
}
</script>

<style lang="scss" scoped>
.hero,
.land-section {

    &__headding {
        color: #202124;
        font-size: 60px;
        font-weight: 300;
        letter-spacing: -0.5px;
        line-height: 100%;
    }

    &__pragraph {
        color: #5f6368;
        font-size: 20px;
        margin-block: 24px;
    }

    &__btn {
        background-color: #fff;
        border: 1px solid #dadce0;
        color: #1a73e8;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 400;
        padding: 12px 24px;
        transition: all 0.3s ease-in-out;
        text-decoration: none;

        &:hover {
            border-color: #1a73e8;
        }
    }

    &__signUp {
        margin-top: 32px;
        color: #5f6368;

        a {
            display: inline-block;
            margin-inline-start: 1rem;
            color: #174ea6;
            text-decoration: none;
        }
    }
}

.land-section {
    &__headding {
        font-size: 36px;
    }

    &__pragraph {
        font-size: 18px;
    }
}
</style>
