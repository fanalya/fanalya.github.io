<script lang="ts" setup>
import {
  ShoppingCart,
  Facebook,
  ChevronUp,
  Linkedin,
  Instagram,
  Twitter,
  Youtube
} from "lucide-vue-next";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { contactData } from "@/components/landing/onePage/utils.ts";
import us from "@/assets/images/flags/us.svg";
import es from "@/assets/images/flags/es.svg";
import de from "@/assets/images/flags/de.svg";
import fr from "@/assets/images/flags/fr.svg";
import jp from "@/assets/images/flags/jp.svg";
import it from "@/assets/images/flags/it.svg";
import ru from "@/assets/images/flags/ru.svg";
import ae from "@/assets/images/flags/ae.svg";
const dropdownData = [
  { title: "English", src: us },
  { title: "Spainsh", src: es },
  { title: "German", src: de },
  { title: "French", src: fr },
  { title: "Japaneses", src: jp },
  { title: "Italian", src: it },
  { title: "Russian", src: ru },
  { title: "Arabic", src: ae }
];
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const currentYear = ref<number>(0);
const isBactToTopEle = ref(false);
const handleScroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    isBactToTopEle.value = true;
  } else {
    isBactToTopEle.value = false;
  }
};
onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  currentYear.value = new Date().getFullYear();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section class="relative py-20 bg-custom-600 dark:bg-custom-800" id="contact">
    <div
      class="absolute rotate-45 border border-dashed size-[500px] border-t-custom-500 border-l-custom-500 border-r-slate-700 border-b-slate-700 -bottom-[250px] rounded-full ltr:right-40 rtl:left-40 z-10 hidden lg:block"
    ></div>
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="grid items-center grid-cols-1 gap-5 lg:grid-cols-12">
        <div class="lg:col-span-9">
          <h1 class="mb-4 leading-normal capitalize text-custom-50">
            Ready to get started with Tailwick
          </h1>
          <p class="text-lg text-custom-200">
            Tell us which describes you, and we'll get in touch with next steps.
          </p>
        </div>
        <!-- ,  -->
        <div class="flex lg:justify-end lg:col-span-3">
          <TButton class="py-2.5 px-6" variant="ghost">
            <ShoppingCart
              class="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1"
            />
            <span class="align-middle">Purchase Now</span>
          </TButton>
        </div>
      </div>
    </div>
  </section>

  <footer class="relative pt-20 pb-12 bg-slate-800 dark:bg-zink-700">
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="relative z-10 grid grid-cols-12 gap-5 xl:grid-cols-12">
        <div
          v-for="section in contactData"
          :key="section.title"
          :class="`col-span-12 md:col-span-6 lg:col-span-4 ${section.class}`"
        >
          <h5
            class="mb-4 font-medium tracking-wider text-slate-50 dark:text-zink-50"
          >
            {{ section.title }}
          </h5>
          <ul class="flex flex-col gap-3 text-15">
            <li v-for="item in section.items" :key="item.name">
              <a
                href="#!"
                class="relative inline-block transition-all duration-200 ease-linear text-slate-400 dark:text-zink-200 hover:text-slate-300 dark:hover:text-zink-50 before:absolute before:border-b before:border-slate-500 dark:before:border-zink-500 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-4">
          <form action="#!" class="relative mb-6">
            <input
              type="email"
              id="subscribeInput"
              class="py-3 ltr:pr-40 rtl:pl-40 bg-slate-700/60 dark:bg-zink-600/40 form-input text-slate-200 border-slate-700 dark:border-zink-500 focus:outline-none focus:border-custom-500 dark:focus:border-custom-500 placeholder:text-slate-500 dark:placeholder:text-zink-200 backdrop-blur-md"
              autocomplete="off"
              placeholder="tailwick@themesdesign.com"
              required
            />
            <button
              type="submit"
              class="absolute px-6 py-2 text-base transition-all duration-200 ease-linear border-custom-500 bg-custom-500 ltr:right-1 rtl:left-1 text-custom-50 btn hover:text-custom-50 hover:bg-custom-600 hover:border-custom-600 top-1 bottom-1"
            >
              Subscribe Now
            </button>
            <!-- <TInputField placeholder="tailwick@themesdesign.com" required type="email" inputClass="pl-auto">
                        <template #suffix>
                            <TButton>
                                Subscribe Now
                            </TButton>
                        </template>
                    </TInputField> -->
          </form>

          <p class="mb-1 text-slate-500 dark:text-zink-200 text-15">
            Support Email
          </p>
          <h5 class="text-lg !font-normal text-slate-200 dark:text-zink-50">
            support@themesdesign.com
          </h5>

          <p class="mt-6 mb-1 text-slate-500 dark:text-zink-200 text-15">
            Contact Us
          </p>
          <h5 class="text-lg !font-normal text-slate-200 dark:text-zink-50">
            +(012) 1202 012 4567
          </h5>
        </div>
      </div>

      <div class="py-5 mt-20 border-y border-slate-700">
        <div class="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-12">
          <div class="md:col-span-2">
            <TList :items="dropdownData" placement="auto">
              <template #title>
                <TButton color="slate" variant="plain-fill">
                  <img :src="us" alt="" class="object-cover h-5 rounded-full" />
                  <h6
                    class="text-base ms-2 font-medium transition-all duration-200 ease-linear text-slate-300 group-hover/items:text-custom-500"
                  >
                    English
                  </h6>
                </TButton>
              </template>
              <template #default="{ data }">
                <div class="flex">
                  <img
                    :src="data.src"
                    alt=""
                    class="object-cover h-4 rounded-full"
                  />
                  <h6
                    class="ms-2 text-sm font-medium transition-all duration-200 ease-linear text-slate-600 dark:text-zink-100 group-hover/items:text-custom-500 dark:group-hover/items:text-custom-500"
                  >
                    {{ data.title }}
                  </h6>
                </div>
              </template>
            </TList>
          </div>
          <div class="md:col-span-3 md:col-start-10">
            <ul class="flex items-center gap-3 md:justify-end">
              <li>
                <a
                  href="#!"
                  class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500"
                >
                  <Facebook class="size-4" />
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500"
                >
                  <Linkedin class="size-4" />
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500"
                >
                  <Instagram class="size-4" />
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500"
                >
                  <Twitter class="size-4" />
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  class="flex items-center justify-center size-10 transition-all duration-200 ease-linear border rounded-full text-slate-400 border-slate-700 hover:text-custom-500"
                >
                  <Youtube class="size-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center text-slate-400 dark:text-zink-200 text-16">
        <p>
          {{ currentYear }}
          © Tailwick. Design & Develop by
          <a href="#!" class="underline text-slate-300 dark:text-zink-100"
            >Themesdesign</a
          >
        </p>
      </div>
    </div>
  </footer>

  <TButton
    v-if="isBactToTopEle"
    id="back-to-top"
    @click="topFunction"
    color="purple"
    icon
    class="fixed !w-10 !h-10 p-0 bottom-10 right-10"
  >
    <ChevronUp class="animate animate-icons right-3" />
  </TButton>
</template>
