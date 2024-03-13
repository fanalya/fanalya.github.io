<script lang="ts" setup>
import {
  widgets2,
  widgets,
  widgets4,
  widgets5,
  widgets6,
  widgets7
} from "@/assets/images/landing/utils.ts";
import { MoveRight } from "lucide-vue-next";
</script>

<template>
  <section class="relative py-32" id="about">
    <div class="container 2xl:max-w-[87.5rem] px-4 mx-auto">
      <div class="mx-auto text-center xl:max-w-3xl">
        <h1 class="mb-6 leading-normal capitalize">
          Why Developers Should Embrace
          <span
            class="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-sky-50 dark:before:bg-sky-500/20 before:rounded-md before:backdrop-blur-xl"
            ><span class="relative text-sky-500">Tailwick</span></span
          >
        </h1>
        <p class="text-lg text-slate-500 dark:text-zink-200">
          The purpose of developer communities is to provide the resources for
          developers to learn anything they want to.
        </p>
      </div>

      <div class="grid items-center grid-cols-1 gap-6 mt-20 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h1 class="mb-3 leading-normal capitalize">
            Craft a Complete Website Quickly with the Help of Design Blocks
          </h1>
          <p class="mb-6 text-lg text-slate-500 dark:text-zink-200">
            The block design approach basically breaks the design into small
            parts. These are built independently and then later combine into a
            customizable page which makes a website more flexible in terms of
            layout and content.
          </p>
          <TButton variant="outlined" classes="py-3 px-6">
            <span class="align-middle">Discover Now</span>
            <MoveRight
              class="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180 ms-1"
            />
          </TButton>
        </div>
        <div class="text-center lg:col-span-6">
          <!-- -->
          <img
            :src="widgets4"
            alt=""
            class="shadow-lg ltr:lg:ml-auto rtl:lg:mr-auto rounded-xl"
          />
          <img
            :src="widgets5"
            alt=""
            class="relative -mt-24 shadow-lg ltr:ml-auto ltr:mr-24 rtl:mr-auto rtl:ml-24 rounded-xl"
          />
        </div>
      </div>

      <div class="grid items-center grid-cols-1 gap-6 mt-32 lg:grid-cols-12">
        <div class="text-center lg:col-span-6">
          <!--,-->
          <img
            :src="widgets6"
            alt=""
            class="shadow-lg ltr:mr-auto rtl:ml-auto rounded-xl"
          />
          <img
            :src="widgets7"
            alt=""
            class="relative -mt-24 shadow-lg ltr:ml-auto ltr:mr-24 rtl:mr-auto rtl:ml-24 rounded-xl"
          />
        </div>
        <div class="lg:col-span-5">
          <h1 class="mb-3 leading-normal capitalize">
            Boost Your Business Using Our Potent Tools
          </h1>
          <p class="mb-6 text-lg text-slate-500 dark:text-zink-200">
            The block design approach basically breaks the design into small
            parts. These are built independently and then later combine into a
            customizable page which makes a website more flexible in terms of
            layout and content.
          </p>
          <TButton variant="outlined" classes="py-3 px-6">
            <span class="align-middle">Discover Now</span>
            <MoveRight
              class="inline-block size-4 align-middle rtl:rotate-180 ms-2"
            />
          </TButton>
        </div>
      </div>

      <div class="grid items-center grid-cols-1 gap-5 mt-32 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h1 class="mb-3 leading-normal capitalize">
            Building a User-Friendly Website is Effortless
          </h1>
          <p class="mb-4 text-lg text-slate-500 dark:text-zink-200">
            With a user-friendly interface and easy navigation, the user
            decreases search time and increases satisfaction, fulfilling his
            needs in a fast and efficient way.
          </p>
          <ul class="flex flex-col gap-3 mb-6 text-lg list-disc list-inside">
            <li>6+ Ready touse Dashboard</li>
            <li>Light, Dark & RTL Mode Support</li>
            <li>Multiple Layouts Support</li>
          </ul>
          <TButton variant="outlined" classes="py-3 px-6">
            <span class="align-middle">Discover Now</span>
            <MoveRight
              class="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180 ms-1"
            />
          </TButton>
        </div>
        <div class="text-center lg:col-span-6">
          <!--,-->
          <img
            :src="widgets2"
            alt=""
            class="shadow-lg ltr:ml-auto rtl:mr-auto rounded-xl"
          />
          <img
            :src="widgets"
            alt=""
            class="relative -mt-24 shadow-lg ltr:ml-auto rtl:mr-auto ltr:mr-24 rtl:ml-24 rounded-xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
