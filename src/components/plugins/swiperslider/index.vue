<script lang="ts" setup>
// import { ChevronRight, ChevronLeft } from "lucide-vue-next";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

</script>
<template>
    <div class="px-4 py-3 mb-5 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
        The <a href="https://swiperjs.com/" class="font-semibold underline" target="_blank">Swiper.js documentation</a>
        provides even more options and customization possibilities for creating engaging carousels. Remember to adjust image
        URLs and content according to your project.
    </div>
    <div class="grid grid-cols-1 gap-x-5 lg:grid-cols-2 2xl:grid-cols-3">
        <TCard title="Default">
            <swiper :autoplay="{ delay: 2500, disableOnInteraction: false }" :modules="[Autoplay]" :loop="true">
                <swiper-slide>
                    <img src="@/assets/images/small/img-1.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-2.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-3.jpg" />
                </swiper-slide>
            </swiper>
        </TCard>

        <TCard title="Navigation">
            <swiper :loop="true" :modules="[Autoplay, Navigation, Pagination]"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                :pagination="{ clickable: true, el: '.swiper-pagination' }">
                <swiper-slide>
                    <img src="@/assets/images/small/img-6.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-7.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-8.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-9.jpg" alt="">
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </TCard>

        <TCard title="Pagination">
            <swiper :loop="true" :modules="[Autoplay, Pagination]" :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :pagination="{ clickable: true, el: '.swiper-pagination' }">
                <swiper-slide>
                    <img src="@/assets/images/small/img-6.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-7.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-8.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-9.jpg" alt="">
                </swiper-slide>
                <div class="swiper-pagination"></div>
            </swiper>
        </TCard>

        <TCard title="Pagination Dynamic">
            <swiper :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :pagination="{ clickable: true, el: '.swiper-pagination', dynamicBullets: true }"
                :modules="[Autoplay, Pagination]">
                <swiper-slide>
                    <img src="@/assets/images/small/img-10.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-11.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-12.jpg" alt="">
                </swiper-slide>
                <div class="swiper-pagination dynamic-pagination"></div>
            </swiper>
        </TCard>

        <TCard title="Vertical">
            <swiper :loop="true" :direction="'vertical'" :modules="[Autoplay, Pagination]"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                :pagination="{ el: '.swiper-pagination', clickable: true }" style="height: 324px">
                <swiper-slide>
                    <img src="@/assets/images/small/img-1.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-2.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-3.jpg" alt="">
                </swiper-slide>
                <div class="swiper-pagination"></div>
            </swiper>
        </TCard>

        <TCard title="Pagination progress">
            <swiper class="pagination-progress-swiper rounded" :modules="[Autoplay, Navigation, Pagination]" :loop="true"
                :autoplay="{ delay: 2500, disableOnInteraction: false }" :pagination="{ type: 'progressbar' }"
                :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }">
                <swiper-slide>
                    <img src="@/assets/images/small/img-4.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-5.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/images/small/img-6.jpg" alt="">
                </swiper-slide>
                <div class="swiper-button-next material-shadow"></div>
                <div class="swiper-button-prev material-shadow"></div>
                <div class="swiper-pagination"></div>
            </swiper>
        </TCard>
    </div>
</template>