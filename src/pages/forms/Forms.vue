<template>
    <div>
        <div class="create__form">
            <v-container class="py-8">
                <h3 class="font-weight-light">Start a new form</h3>
                <div class="templates__wrapper">
                    <div class="templates__wrapper__item">
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
                    <div class="recent__forms__wrapper__item">
                        <div class="recent__forms__wrapper__item__img">
                            <img src="../../assets/images/forms/form-temp.png" alt="">
                        </div>
                        <div class="recent__forms__wrapper__item__content">
                            <h5 class="recent__forms__wrapper__item__content__title">
                                Feedback Form Feedback Form Feedback Form
                            </h5>
                            <div class="recent__forms__wrapper__item__content__date">
                                <img src="../../assets/images/share/icons/form-sheet-icon.png" alt=""
                                    class="recent__forms__wrapper__item__content__date__img">
                                <div class="">
                                    <span>
                                        Opened
                                    </span>
                                    <span>
                                        11:08 AM
                                    </span>
                                </div>
                                <div class="recent__forms__wrapper__item__content__dots">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'forms'
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
        gap: 10px;

        &__item {
            width: 200px;
            border: 1px solid #e0e0dc;
            transition: border 0.2s ease-in-out;

            &:hover {
                border-color: #673ab7;
            }


            &__img {
                background-color: #e8f2f0;


                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            &__content {
                background-color: #fff;
                padding: 14px;

                &__title {
                    font-weight: 600;
                    font-size: 14px;
                    color: #333333;
                    margin-bottom: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                &__date {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    &__img {
                        width: 25px;
                        height: 25px;
                        object-fit: contain;
                    }

                    span {
                        font-size: 14px;
                        color: #80868b;
                    }
                }

                &__dots {}
            }
        }
    }
}
</style>