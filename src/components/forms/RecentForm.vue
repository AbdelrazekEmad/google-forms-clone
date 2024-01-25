<template>
    <router-link :to='"forms/" + form.form_id + "/edit"' v-for="form in getForms" :key="form.form_id" :form-data="form">
        <div class="recent__forms__wrapper__item">
            <div class="recent__forms__wrapper__item__img">
                <img :src="form.form_image" alt="">
            </div>
            <div class="recent__forms__wrapper__item__content">
                <h5 class="recent__forms__wrapper__item__content__title">
                    {{ form.form_title }}
                </h5>
                <div class="recent__forms__wrapper__item__content__date">
                    <img src="../../assets/images/share/icons/form-sheet-icon.png" alt=""
                        class="recent__forms__wrapper__item__content__date__img">
                    <div class="">
                        <span>
                            Created At
                        </span>
                        <span>
                            {{ getTime(form.created_at) }}
                        </span>
                    </div>
                    <div class="recent__forms__wrapper__item__content__dots" @click="stop">
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <i v-bind="props" class="fa-solid fa-ellipsis-vertical"></i>
                            </template>

                            <v-list>
                                <v-list-item v-for="(item, index) in items" :key="index">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "RecentForm",
    created() {
        this.$store.dispatch('forms/getForms');
    },
    computed: {
        ...mapGetters({
            getForms: 'forms/getForms'
        }),
    },
    methods: {
        getTime(timestamp) {
            const dateObject = new Date(timestamp);
            const hours = dateObject.getUTCHours();
            const minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');

            let period = 'AM';

            if (hours >= 12) {
                period = 'PM';
                if (hours > 12) {
                    hours -= 12;
                }
            }

            const formattedHours = hours.toString().padStart(2, '0');

            return `${formattedHours}:${minutes} ${period}`;
        },
        stop(event) {
            event.stopPropagation();
        }
    },
}
</script>

<style lang="scss" scoped>
.recent__forms__wrapper {
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
            position: relative;
            z-index: 1;

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

                &__img {
                    width: 20px;
                    height: 20px;
                    object-fit: contain;
                    margin-right: 5px;
                }

                span {
                    font-size: 14px;
                    color: #80868b;
                }
            }

            &__dots {
                position: absolute;
                bottom: 20%;
                right: 0;
                z-index: 2000;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20px;
                height: 20px;
                background-color: red;
            }
        }
    }
}
</style>
