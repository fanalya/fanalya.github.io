<script lang="ts" setup>
import { ref } from "vue";
import {
  img2,
  img3,
  img4,
  img5,
  img7,
  img8,
  img9,
  img10
} from "@/assets/images/small/utils";
import EasyLightbox from "vue-easy-lightbox";

const visibleRef = ref(false);
const indexRef = ref(0);
const imgs = [img2, img3, img4, img5];

const showImg = (index: any) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const visibleRef1 = ref(false);
const indexRef1 = ref(0);
const imgs1 = [
  {
    src: img7,
    title: "Description Bottom",
    description: "You can set the position of the description"
  },
  { src: img8, title: "Caption 1" },
  { src: img9, title: "Caption 1" },
  { src: img10, title: "Caption 1" }
];

const showImg1 = (index: any) => {
  indexRef1.value = index;
  visibleRef1.value = true;
};

const visibleRef2 = ref(false);
const indexRef2 = ref(0);
const imgs2 = [
  "https://i.ytimg.com/vi/qYgogv4R8zg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcI9Cw0yBtGv_ashbS-ogqh1OGpQ",
  "https://i.ytimg.com/vi/waoOK5s9ypc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkSGeAQ17_LFepTKdEByyVTZkeVw",
  "https://i.ytimg.com/vi/waoOK5s9ypc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkSGeAQ17_LFepTKdEByyVTZkeVw",
  "https://i.ytimg.com/vi/TrftauE2Vyk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm6UjEfDC3R5dJik1gEW__HEnaAA"
];

const showImg2 = (index: any) => {
  indexRef2.value = index;
  visibleRef2.value = true;
};
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-1">
    <TCard title="Simple Image Gallery">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div v-for="(src, index) in imgs" :key="index" @click="showImg(index)">
          <img :src="src" class="rounded-md" />
        </div>
      </div>
      <EasyLightbox
        :visible="visibleRef"
        :imgs="imgs"
        :index="indexRef"
        @hide="visibleRef = false"
      ></EasyLightbox>
    </TCard>

    <TCard title="Images with Description">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(src, index) in imgs1"
          :key="index"
          @click="showImg1(index)"
        >
          <img :src="src.src" class="rounded-md" />
        </div>
      </div>
      <EasyLightbox
        :visible="visibleRef1"
        :imgs="imgs1"
        :index="indexRef1"
        @hide="visibleRef1 = false"
      ></EasyLightbox>
    </TCard>

    <TCard title="Videos Gallery">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="(src, index) in imgs2"
          :key="index"
          @click="showImg2(index)"
        >
          <a class="video">
            <img :src="src" class="object-cover w-full rounded-md h-30" />
          </a>
        </div>
      </div>
      <EasyLightbox
        :visible="visibleRef2"
        :imgs="imgs2"
        :index="indexRef2"
        @hide="visibleRef2 = false"
        :maxZoom="1"
      ></EasyLightbox>
    </TCard>
  </div>
</template>
