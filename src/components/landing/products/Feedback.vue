<script lang="ts" setup>
import { ref } from "vue";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { testimonials } from "@/components/landing/products/utils.ts";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const breakpoints = ref({
  425: {
    slidesPerView: 1,
    spaceBetween: 40
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50
  }
});
</script>

<template>
  <section class="relative py-24 xl:py-32" id="feedback">
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="mx-auto mb-8 text-center xl:max-w-3xl">
        <h1 class="mb-0 leading-normal capitalize">What Our Customer Says</h1>
      </div>
      <div class="pb-6 swiper feedback-slider">
        <div class="swiper-wrapper">
          <swiper
            :loop="true"
            :modules="[Autoplay, Pagination]"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :pagination="{ clickable: true, el: '.swiper-pagination' }"
            :slides-per-view="3"
            :breakpoints="breakpoints"
          >
            <swiper-slide
              v-for="testimonial in testimonials"
              :key="testimonial.id"
            >
              <div
                class="p-5 text-center"
                data-aos="fade-up"
                data-aos-easing="linear"
              >
                <div class="flex justify-center">
                  <TAvatar
                    :src="testimonial.avatar"
                    :height="20"
                    :width="20"
                    rounded
                    :color="testimonial.avatarColor"
                  />
                </div>
                <p class="mt-6 text-16">{{ testimonial.message }}</p>
                <h6 class="mt-4 mb-1 text-15">
                  <a
                    v-if="testimonial.usernameLink"
                    :href="testimonial.usernameLink"
                    >{{ testimonial.username }}</a
                  >
                  <span v-else>{{ testimonial.username }}</span>
                </h6>
                <div class="text-yellow-500">
                  <i
                    v-for="star in testimonial.stars"
                    :key="star"
                    class="ri-star-fill"
                  ></i>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination pt-2"></div>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
