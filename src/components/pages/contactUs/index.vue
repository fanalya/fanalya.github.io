<script lang="ts" setup>
import { widgets, socialMedia } from "@/components/pages/contactUs/utils.ts";
import { MoveRight } from "lucide-vue-next";
</script>

<template>
  <div class="mx-auto mb-16 text-center xl:w-2/5">
    <h4 class="mb-2">Contact Us</h4>
    <p class="text-slate-500 dark:text-zink-200">
      Fill out the form and a member from our sales team will get back to you
      within 2 working days, or scroll down for more ways to get in touch.
    </p>
  </div>

  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
    <div v-for="item in widgets" class="card">
      <div class="!px-6 card-body flex flex-col h-full">
        <div
          class="flex items-center justify-center size-16 mx-auto text-xl bg-white rounded-full shadow dark:bg-zink-600 -mt-14"
        >
          <component :is="item.icon" :class="item.iconClass" />
        </div>
        <div class="mt-5 text-center">
          <h6 class="mb-2 text-16">{{ item.title }}</h6>
          <div
            class="mb-5 text-slate-500 dark:text-zink-200"
            v-html="item.caption"
          />
        </div>
        <div class="mt-auto text-center">
          <a
            href="#!"
            class="transition-all duration-200 ease-linear text-custom-500 hover:text-custom-800 dark:hover:text-custom-400"
          >
            {{ item.link }}
            <MoveRight
              class="inline-block size-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180"
          /></a>
        </div>
      </div>
    </div>
  </div>
  <TCard>
    <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
      <div class="xl:col-span-3 bg-custom-900 card !mb-0 dark:bg-custom-950">
        <div class="flex flex-col h-full card-body">
          <div class="mb-6">
            <h5 class="mb-2 text-white">
              Reach out to our business solution support team for assistance
            </h5>
            <p class="text-custom-200">
              Are you an existing customer or do you require further assistance
              with support for <b>additional inquiries</b>?
            </p>
          </div>
          <div class="mt-auto">
            <ul class="flex flex-wrap items-center justify-center gap-2">
              <li v-for="item in socialMedia">
                <a
                  href="#!"
                  class="flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md bg-custom-800/50 text-custom-300 hover:text-white dark:bg-custom-900/50"
                >
                  <component :is="item" class="size-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--end col-->
      <div class="xl:col-span-9">
        <form action="#!">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <TInputField
              placeholder="Enter your First Name"
              label="First Name"
              hide-details
              required
            />
            <TInputField
              placeholder="Enter your Last Name"
              label="Last Name"
              hide-details
              required
            />
            <TInputField
              placeholder="Enter your Email"
              label="Email"
              hide-details
              required
              type="email"
            />
            <TInputField
              placeholder="Phone no"
              label="Phone"
              hide-details
              required
              type="number"
            />
            <TInputField
              placeholder="Company Name"
              label="Company Name"
              hide-details
              required
            />

            <TInputField
              placeholder="Subject"
              label="Subject"
              hide-details
              required
            />

            <div class="md:col-span-2">
              <TTextarea
                label="Comments"
                rows="5"
                placeholder="Enter comments"
              ></TTextarea>
            </div>
          </div>
          <div class="mt-5 flex ltr:justify-end rtl:justify-start">
            <TButton type="submit"> Send Message </TButton>
          </div>
        </form>
      </div>
    </div>
  </TCard>
</template>
