<template>
    <div>
        <div class="create__form">
            <v-container class="py-8">
                <h3 class="font-weight-light">Start a new form</h3>
                <div class="templates__wrapper">
                    <div class="templates__wrapper__item" @click="addNewForm">
                        <div class="templates__wrapper__item__img">
                            <img src="../../assets/images/forms/add-form.png" alt="">
                        </div>
                        <h5 class="templates__wrapper__item__title">Blank Form</h5>
                    </div>
                    <div class="templates__wrapper__item">
                        <div class="templates__wrapper__item__img">
                            <img src="../../assets/images/forms/form-temp.png" alt="">
                        </div>
                        <h5 class="templates__wrapper__item__title">Feedback Form</h5>
                    </div>
                    <div class="templates__wrapper__item">
                        <div class="templates__wrapper__item__img">
                            <img src="../../assets/images/forms/form-temp.png" alt="">
                        </div>
                        <h5 class="templates__wrapper__item__title">Feedback Form</h5>
                    </div>
                </div>
            </v-container>
        </div>
        <div class="recent__forms">
            <v-container>
                <h3 class="font-weight-regular">Recent forms</h3>
                <div class="recent__forms__wrapper">
                    <RecentForm></RecentForm>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
import RecentForm from '../../components/forms/RecentForm.vue';

export default {
    name: 'forms',
    components: {
        RecentForm,
    },
    mounted() {
        this.$store.dispatch('forms/getForms');
    },
}
</script>

<style lang="scss" scoped>
.create__form {
    background-color: #f1f3f4;

    .templates__wrapper {
        display: flex;
        align-items: center;
        gap: 19px;
        padding-block: 0.5rem;

        &__item {

            &__img {
                height: 128px;
                width: 171px;
                background-color: #e8f2f0;
                border-radius: 6px;
                overflow: hidden;
                cursor: pointer;
                border: 1px solid #e0e0dc;
                transition: border 0.2s ease-in-out;

                &:hover {
                    border-color: #673ab7;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            &__title {
                margin-top: 0.5rem;
            }
        }
    }
}

.recent__forms {
    .recent__forms__wrapper {
        padding-block: 1rem;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 10px;
    }
}
</style>