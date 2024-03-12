<script lang="ts" setup>
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
} from "@/assets/images/small/utils";
const simpleGallery = [img1, img2, img3, img4, img5];
const galleryWithOverlay = [img6, img7, img8, img9, img10];
const gridGallery = [...galleryWithOverlay, ...simpleGallery];
</script>
<template>
  <TCard title="Gallery Content">
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
    >
      <div
        v-for="(item, index) in simpleGallery"
        :key="'simple-gallery-' + index"
        class="relative rounded-md group/gallery"
      >
        <img :src="item" :alt="'simple-gallery-' + index" class="rounded-md" />
        <div class="pt-3">
          <h5 class="mb-1 text-16">
            <a
              href="#!"
              class="transition-all duration-300 ease-linear hover:text-custom-500"
              >Cinematic Metro
            </a>
          </h5>
          <p class="text-slate-500 dark:text-zink-200">
            Artyom is depicted as a silent protagonist and a blank slate for the
            player.
          </p>
        </div>
      </div>
    </div>
  </TCard>
  <TCard title="Gallery with Overlay Content">
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
    >
      <div
        v-for="(item, index) in galleryWithOverlay"
        :key="'gallery-with-overlay-' + index"
        class="relative overflow-hidden rounded-md group/gallery"
      >
        <img
          :src="item"
          :alt="'gallery-with-overlay-' + index"
          class="rounded-md"
        />
        <div
          class="absolute inset-0 transition-all duration-300 ease-linear opacity-0 group-hover/gallery:opacity-50 bg-gradient-to-t from-gray-900 to-transparent"
        />
        <div
          class="absolute bottom-0 transition-all duration-300 ease-linear opacity-0 left-3 right-3 group-hover/gallery:opacity-100 group-hover/gallery:bottom-3"
        >
          <h5 class="font-normal text-white"><a href="#!">Image title</a></h5>
        </div>
      </div>
    </div>
  </TCard>
  <TCard title="Gallery With Animation">
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
    >
      <div
        v-for="(item, index) in simpleGallery"
        :key="'simple-gallery-' + index"
        class="relative rounded-md group/gallery"
      >
        <div class="overflow-hidden">
          <img
            :src="item"
            :alt="'simple-gallery-' + index"
            class="transition-all duration-300 ease-linear group-hover/gallery:scale-110"
          />
        </div>
        <div class="pt-3">
          <h5 class="mb-1 text-16">
            <a
              href="#!"
              class="transition-all duration-300 ease-linear hover:text-custom-500"
              >Cinematic Metro
            </a>
          </h5>
          <p class="text-slate-500 dark:text-zink-200">
            Artyom is depicted as a silent protagonist and a blank slate for the
            player.
          </p>
        </div>
      </div>
    </div>
  </TCard>
  <TCard title="Gallery with Card">
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
    >
      <div
        v-for="(item, index) in galleryWithOverlay"
        :key="'gallery-card-' + index"
        class="relative mb-0 overflow-hidden transition-all duration-300 ease-linear rounded-md group/gallery card hover:-translate-y-2"
      >
        <div class="overflow-hidden">
          <img
            :src="item"
            :alt="'gallery-card-' + index"
            class="transition-all duration-300 ease-linear group-hover/gallery:scale-110"
          />
        </div>
        <div class="card-body">
          <h5 class="mb-0 text-16">
            <a
              href="#!"
              class="transition-all duration-300 ease-linear hover:text-custom-500"
              >Cinematic Metro
            </a>
          </h5>
        </div>
      </div>
    </div>
  </TCard>
  <TCard title="Grid Gallery">
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
    >
      <div
        v-for="(item, index) in gridGallery"
        :key="'grid-gallery-' + index"
        class="relative overflow-hidden rounded-md group/gallery"
      >
        <img
          :src="item"
          :alt="'gallery-with-overlay-' + index"
          class="rounded-md"
        />
        <div
          class="absolute inset-0 transition-all duration-300 ease-linear opacity-0 group-hover/gallery:opacity-50 bg-gradient-to-t from-gray-900 to-transparent"
        />
        <div
          class="absolute bottom-0 transition-all duration-300 ease-linear opacity-0 left-3 right-3 group-hover/gallery:opacity-100 group-hover/gallery:bottom-3"
        >
          <h5 class="font-normal text-white"><a href="#!">Image title</a></h5>
        </div>
      </div>
    </div>
  </TCard>
</template>
