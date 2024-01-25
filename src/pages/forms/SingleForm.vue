<template>
    <div class="singleForm">
        <div class="singleForm__wrapper">
            <div class="singleForm__cover">
                <img src="../../assets/images/forms/form-cover.png" alt="">
            </div>

            <SignleQuetion></SignleQuetion>
        </div>
    </div>
</template>

<script>
import SignleQuetion from "./SignleQuetion.vue"

export default {
    name: 'single-forms',
    components: {
        SignleQuetion,
    },
}
</script>

<style lang="scss" scoped>
.singleForm {
    min-height: 100vh;
    background-color: #E2EEE0;
    display: flex;
    justify-content: center;



    &__wrapper {
        min-height: 100vh;
        width: auto;
        max-width: 770px;
    }

    &__cover {
        width: auto;
        height: 200px;
        border-radius: 8px;
        margin-block: 12px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

}
</style>