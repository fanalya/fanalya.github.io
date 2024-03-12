<script lang="ts" setup>
import { ref } from "vue";
import {
  uersData,
  listItems,
  listItems1,
  listItems2,
  listItemsData
} from "@/components/dashboard/social-media/utils.ts";
import {
  Plus,
  Video,
  Image,
  CalendarDays,
  AtSign,
  MoreHorizontal,
  UserX2,
  GitPullRequest,
  MessagesSquare,
  HelpCircle,
  CheckCircle
} from "lucide-vue-next";
import {
  avatar1,
  avatar8,
  avatar5,
  avatar7
} from "@/assets/images/users/utils";
import { img6, img3, img5 } from "@/assets/images/small/utils";
import ImagesVideoDailog from "@/components/dashboard/social-media/ImagesVideoDailog.vue";
import EventDailog from "@/components/social/event/EventDailog.vue";
import EasyLightbox from "vue-easy-lightbox";
const dropdownData = [
  { title: "Create a poll", icon: GitPullRequest },
  { title: "Ask a question", icon: MessagesSquare },
  { title: "Help", icon: HelpCircle }
];

const isActive = ref(false);
const imagesVideoPostModal = ref(false);
const eventModal = ref(false);

const toggleButton = () => {
  isActive.value = !isActive.value;
};

const visibleRef1 = ref(false);
const indexRef1 = ref(0);
const imgs1 = [{ src: img6 }, { src: img3 }, { src: img5 }];

const showImg1 = (index: any) => {
  indexRef1.value = index;
  visibleRef1.value = true;
};
</script>

<template>
  <div class="col-span-12 lg:col-span-7 xl:col-span-9 2xl:col-span-6">
    <TCard>
      <simplebar>
        <div class="flex gap-4">
          <a
            v-for="(item, index) in uersData"
            :key="index"
            href="#inline-example"
            :class="`block w-20 px-1 py-2 group highlight-story ${item.class}`"
          >
            <div :class="item.content.divClass">
              <img
                v-if="item.content.imgSrc"
                :src="item.content.imgSrc"
                :alt="item.content.h6Text"
                :class="item.content.imgClass"
              />
              <div
                v-if="item.content.badge"
                :class="item.content.badge.divClass"
              >
                <Plus class="size-4" />
              </div>
            </div>
            <h6 :class="item.content.h6Class">{{ item.content.h6Text }}</h6>
          </a>
        </div>
      </simplebar>
    </TCard>
    <TCard>
      <div class="flex gap-3">
        <ul class="flex gap-3 grow flex-wrap">
          <li>
            <a href="#!"
              ><Video
                class="inline-block size-4 text-red-500 ltr:mr-1 rtl:ml-1"
              />
              <span class="align-middle text-slate-500 dark:text-zink-200 ms-1"
                >Live Video</span
              ></a
            >
          </li>
          <li>
            <TButton
              variant="link"
              classes="p-0"
              @click="imagesVideoPostModal = !imagesVideoPostModal"
            >
              <Image
                class="inline-block size-4 ltr:mr-1 text-custom-600 rtl:ml-1"
              /><span
                class="align-middle text-slate-500 dark:text-zink-200 ms-1"
                >Image/Video</span
              >
            </TButton>
          </li>
          <li>
            <TButton
              variant="link"
              classes="p-0"
              @click="eventModal = !eventModal"
            >
              <CalendarDays
                class="inline-block size-4 text-green-500 ltr:mr-1 rtl:ml-1"
              /><span
                class="align-middle text-slate-500 dark:text-zink-200 ms-1"
                >Event</span
              >
            </TButton>
          </li>
          <li>
            <a href="#!">
              <AtSign
                class="inline-block size-4 ltr:mr-1 text-sky-500 rtl:ml-1"
              /><span
                class="align-middle text-slate-500 dark:text-zink-200 ms-1"
                >Mention</span
              >
            </a>
          </li>
        </ul>
        <TList :items="dropdownData" placement="bottom-start">
          <template #title>
            <TButton variant="soft" color="slate" classes="px-2 py-2 text-xs">
              <MoreHorizontal class="size-3" />
            </TButton>
          </template>
          <template #default="{ data }">
            <div class="flex">
              <component :is="data.icon" class="me-2 size-4" />
              {{ data.title }}
            </div>
          </template>
        </TList>
      </div>
      <form action="#!">
        <div class="flex gap-3 mt-4">
          <div
            class="bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20"
          >
            <img :src="avatar1" alt="" class="rounded-full size-9" />
          </div>
          <div class="grow">
            <TTextarea placeholder="Share your thoughts ..." />
          </div>
        </div>
        <div class="mt-4 text-right flex ltr:justify-end rtl:justify-start">
          <TButton color="custom" classes="text-white "> Share Post </TButton>
        </div>
      </form>
    </TCard>
    <TCard no-body>
      <div class="card-body">
        <div class="flex flex-wrap items-center gap-3 mb-5">
          <div
            class="size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green-500/20"
          >
            <img :src="avatar8" alt="" class="size-12 rounded-full" />
          </div>
          <div class="grow">
            <h6 class="mb-1 text-15">
              <a
                href="#!"
                class="transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500"
                >Frances Zboncak</a
              >
              -<small class="ml-1 font-normal text-slate-500 dark:text-zink-200"
                >25 min</small
              >
            </h6>
            <p class="text-slate-500 dark:text-zink-200">
              Web Developer at <a href="#!" class="underline">Themesdesign</a>
            </p>
          </div>
          <div class="flex items-center gap-2 mt-4 shrink-0 md:mt-4">
            <TButton
              variant="dashed"
              color="sky"
              classes="px-2 py-1.5 text-xs"
              @click="toggleButton"
            >
              <span v-if="isActive" class="group-[.active]/item:hidden block">
                <Plus class="inline-block size-3 mr-1" /> Follow
              </span>
              <span v-else>
                <UserX2 class="inline-block size-3 mr-1" /> Unfollow
              </span>
            </TButton>
            <div class="relative dropdown">
              <TList :items="dropdownData" placement="bottom-start">
                <template #title>
                  <TButton
                    variant="ghost"
                    color="sky"
                    classes="px-2 py-2 text-xs"
                  >
                    <MoreHorizontal
                      class="lucide lucide-more-horizontal size-4"
                    />
                  </TButton>
                </template>
                <template #default="{ data }">
                  <div class="flex">
                    <component :is="data.icon" class="me-2 size-4" />
                    {{ data.title }}
                  </div>
                </template>
              </TList>
            </div>
          </div>
        </div>
        <p>
          Our newly established office serves as a clear representation of our
          unwavering commitment to nurturing a vibrant and dynamic work
          atmosphere, where innovation thrives and creativity knows no bounds.
        </p>
      </div>
      <div class="border-y border-slate-200 card-body dark:border-zink-500">
        <ul class="flex items-center gap-4 mb-0">
          <li
            v-for="(item, index) in listItems"
            :key="index"
            :class="`${item.class}`"
          >
            <a href="#" class="text-slate-500 dark:text-zink-200">
              <component
                :is="item.icon"
                class="inline-block size-4 ltr:mr-1 rtl:ml-1"
              />
              <span class="align-middle ms-1">{{ item.text }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <form action="#!">
          <div class="flex gap-3">
            <div
              class="bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20"
            >
              <img :src="avatar1" alt="" class="rounded-full size-9" />
            </div>
            <div class="grow">
              <TInputField
                required
                hide-details
                placeholder="Write your comment ..."
              />
            </div>
            <div class="shrink-0">
              <TButton color="custom" classes="px-4 py-2"> Send </TButton>
            </div>
          </div>
        </form>
        <div class="mt-5">
          <div class="flex gap-3">
            <div
              class="bg-yellow-100 rounded-full size-9 shrink-0 dark:bg-yellow-500/20"
            >
              <img :src="avatar5" alt="" class="rounded-full size-9" />
            </div>
            <div class="grow">
              <div class="p-3 rounded-md bg-slate-100 dark:bg-zink-600">
                <h6 class="mb-3 text-15">
                  <a href="#!">@bertha34</a> -
                  <span
                    class="text-sm font-normal text-slate-500 dark:text-zink-200"
                    >14 June, 2023</span
                  >
                </h6>
                <p>
                  Do you have a date or timeline when do you release the Laravel
                  + Vite + Jetstream + Pest + Vue (Full Stack) version of this
                  item ?
                </p>
                <div class="flex items-center gap-2 mt-4">
                  <a
                    href="#!"
                    class="px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500"
                    >Like (3)</a
                  >
                  <a
                    href="#!"
                    class="px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500"
                    >Reply</a
                  >
                </div>
              </div>
              <div class="flex gap-3 mt-4">
                <div
                  class="bg-green-100 rounded-full size-9 shrink-0 dark:bg-green-500/20"
                >
                  <img :src="avatar8" alt="" class="rounded-full size-9" />
                </div>
                <div class="grow">
                  <div class="p-3 rounded-md bg-slate-100 dark:bg-zink-600">
                    <h6 class="mb-3 text-15">
                      <a href="#!">@frances_zboncak</a> -
                      <span
                        class="text-sm font-normal text-slate-500 dark:text-zink-200"
                        >14 June, 2023</span
                      >
                    </h6>
                    <p class="mb-1">
                      Sorry not at the moment. But Laravel + Interia + Vue will
                      be ready next week hopefully. FYI: There will be no
                      backend-related functionality with this template.
                    </p>
                    <p>Thank you</p>
                    <div class="flex items-center gap-2 mt-4">
                      <a
                        href="#!"
                        class="px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500"
                        >Like (6)</a
                      >
                      <a
                        href="#!"
                        class="px-2.5 py-0.5 text-xs font-medium rounded border bg-white border-slate-200 text-slate-500 transition hover:bg-slate-200 dark:text-zink-200 dark:bg-slate-700 dark:border-zink-500"
                        >Reply</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TCard>
    <TCard no-body>
      <div class="card-body">
        <div class="flex flex-wrap items-center gap-3 mb-5">
          <div
            class="size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green=500/20"
          >
            <img :src="avatar7" alt="" class="size-12 rounded-full" />
          </div>
          <div class="grow">
            <h6 class="mb-1 text-15">
              <a
                href="#!"
                class="transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500"
                >Stephen Tillman</a
              >
              -<small class="ml-1 font-normal text-slate-500 dark:text-zink-200"
                >25 min</small
              >
            </h6>
            <p class="text-slate-500 dark:text-zink-200">
              React Developer at <a href="#!" class="underline">Webfox Info</a>
            </p>
          </div>
          <div class="flex flex-wrap items-center mt-4 shrink-0 md:mt-4">
            <TButton
              variant="dashed"
              color="sky"
              classes="px-2 py-1.5 text-xs"
              @click="toggleButton"
            >
              <span v-if="isActive" class="group-[.active]/item:hidden block">
                <Plus class="inline-block size-3 mr-1" /> Follow
              </span>
              <span v-else>
                <UserX2 class="inline-block size-3 mr-1" /> Unfollow
              </span>
            </TButton>
            <div class="relative dropdown">
              <TList :items="dropdownData" placement="bottom-start">
                <template #title>
                  <TButton
                    variant="ghost"
                    color="sky"
                    classes="px-2 py-2 text-xs"
                  >
                    <MoreHorizontal
                      class="lucide lucide-more-horizontal size-4"
                    />
                  </TButton>
                </template>
                <template #default="{ data }">
                  <div class="flex">
                    <component :is="data.icon" class="me-2 size-4" />
                    {{ data.title }}
                  </div>
                </template>
              </TList>
            </div>
          </div>
        </div>
        <p>
          Product design is the process of developing a usable product that
          meets customer's needs by defining the users' problems and finding
          creative solutions for these problems. The term is also used to refer
          to the result of this process, the design qualities of an existing
          product.
        </p>
        <div class="grid gap-4 mt-4 md:grid-cols-3">
          <div
            v-for="(src, index) in imgs1"
            :key="index"
            @click="showImg1(index)"
          >
            <img :src="src.src" class="rounded-md" />
          </div>
          <EasyLightbox
            :visible="visibleRef1"
            :imgs="imgs1"
            :index="indexRef1"
            @hide="visibleRef1 = false"
          >
          </EasyLightbox>
        </div>
      </div>
      <div class="border-y border-slate-200 card-body dark:border-zink-500">
        <ul class="flex items-center gap-4 mb-0">
          <li
            v-for="(item, index) in listItems1"
            :key="index"
            :class="`${item.class}`"
          >
            <a href="#" class="text-slate-500 dark:text-zink-200">
              <component
                :is="item.icon"
                class="inline-block size-4 ltr:mr-1 rtl:ml-1"
              />
              <span class="align-middle ms-1">{{ item.text }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <form action="#!">
          <div class="flex gap-3">
            <div
              class="bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20"
            >
              <img :src="avatar1" alt="" class="rounded-full size-9" />
            </div>
            <div class="grow">
              <TInputField
                required
                hide-details
                placeholder="Write your comment ..."
              />
            </div>
            <div class="shrink-0">
              <TButton color="custom" classes="px-4 py-2"> Send </TButton>
            </div>
          </div>
        </form>
      </div>
    </TCard>
    <TCard no-body>
      <div class="card-body">
        <div class="flex flex-wrap items-center gap-3 mb-5">
          <div
            class="size-12 bg-green-100 rounded-full outline-1 outline outline-transparent outline-offset-[3px] [&.active]:outline-custom-500 shrink-0 dark:bg-green-500/20"
          >
            <img :src="avatar7" alt="" class="size-12 rounded-full" />
          </div>
          <div class="grow">
            <h6 class="mb-1 text-15">
              <a
                href="#!"
                class="transition-all duration-200 ease-linear hover:text-custom-500 dark:hover:text-custom-500"
                >Stephen Tillman</a
              >
              -<small class="ml-1 font-normal text-slate-500 dark:text-zink-200"
                >25 min</small
              >
            </h6>
            <p class="text-slate-500 dark:text-zink-200">
              React Developer at <a href="#!" class="underline">Webfox Info</a>
            </p>
          </div>
          <div class="flex items-center gap-2 mt-4 shrink-0 md:mt-4">
            <TButton
              variant="dashed"
              color="sky"
              classes="px-2 py-1.5 text-xs"
              @click="toggleButton"
            >
              <span v-if="isActive" class="group-[.active]/item:hidden block">
                <Plus class="inline-block size-3 mr-1" /> Follow
              </span>
              <span v-else>
                <UserX2 class="inline-block size-3 mr-1" /> Unfollow
              </span>
            </TButton>
            <div class="relative dropdown">
              <TList :items="dropdownData" placement="bottom-start">
                <template #title>
                  <TButton
                    variant="ghost"
                    color="sky"
                    classes="px-2 py-2 text-xs"
                  >
                    <MoreHorizontal
                      class="lucide lucide-more-horizontal size-4"
                    />
                  </TButton>
                </template>
                <template #default="{ data }">
                  <div class="flex">
                    <component :is="data.icon" class="me-2 size-4" />
                    {{ data.title }}
                  </div>
                </template>
              </TList>
            </div>
          </div>
        </div>
        <p>Add a 'Different Languages' option to the poll.</p>
        <ul
          class="inline-flex flex-col gap-3 p-4 mt-4 rounded-md w-full bg-slate-100 max-w-7xl dark:bg-zink-600"
        >
          <li v-for="(item, index) in listItemsData" :key="index">
            <a
              href="#"
              class="relative flex gap-3 group"
              :class="{ active: item.active }"
            >
              <div class="absolute top-1 ltr:right-1 rtl:left-1">
                <CheckCircle
                  v-if="item.active"
                  class="size-4 text-green-500 fill-green-200 group-[&.active]:block hidden"
                />
              </div>
              <h6 class="shrink-0">{{ item.order }}.</h6>
              <div class="grow">
                <h6 href="#!">{{ item.title }}</h6>
                <div
                  class="w-full h-1.5 rounded-full bg-white dark:bg-zink-700 mt-2"
                >
                  <TProgressBar
                    :width="item.progress"
                    :height="1.5"
                    rounded-full
                  />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="border-y border-slate-200 card-body dark:border-zink-500">
        <ul class="flex items-center gap-4 mb-0">
          <li
            v-for="(item, index) in listItems2"
            :key="index"
            :class="`${item.class}`"
          >
            <a href="#" class="text-slate-500 dark:text-zink-200">
              <component
                :is="item.icon"
                class="inline-block size-4 ltr:mr-1 rtl:ml-1"
              />
              <span class="align-middle ms-1">{{ item.text }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <form action="#!">
          <div class="flex gap-3">
            <div
              class="bg-pink-100 rounded-full size-9 shrink-0 dark:bg-pink-500/20"
            >
              <img :src="avatar1" alt="" class="rounded-full size-9" />
            </div>
            <div class="grow">
              <TInputField
                required
                hide-details
                placeholder="Write your comment ..."
              />
            </div>
            <div class="shrink-0">
              <TButton color="custom" classes="px-4 py-2"> Send </TButton>
            </div>
          </div>
        </form>
      </div>
    </TCard>
    <div class="flex justify-center mb-5">
      <TButton>
        <svg
          class="size-4 ltr:mr-2 rtl:ml-2 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Load More
      </TButton>
    </div>
  </div>

  <ImagesVideoDailog v-model="imagesVideoPostModal" />

  <EventDailog v-model="eventModal" />
</template>
