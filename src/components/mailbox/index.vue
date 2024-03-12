<script lang="ts" setup>
import { MoreHorizontal } from "lucide-vue-next";
import simplebar from "simplebar-vue";
import { mailData } from "@/components/mailbox/data.ts";
import {
  Star,
  StepForward,
  AlertOctagon,
  Tag,
  Trash2,
  RefreshCw,
  ArchiveRestore,
  Clock,
  Mail,
  Search,
  Printer,
  Mic,
  Image,
  Send
} from "lucide-vue-next";
import SidebarMail from "@/components/mailbox/sidebar.vue";
import { ref, computed } from "vue";
import { ChevronsLeft } from "lucide-vue-next";
import DeleteDialog from "@/app/common/DeleteDialog.vue";
const dropdownMenu = [
  "Show more message",
  "Important & Unread",
  "Hide section when empty",
  "All Delete"
];

const checkedMails: any = ref([]);
const searchMail = ref<any>(null);
const isCheckAll = ref(false);
const isEmailOverview = ref(false);
const deleteDialog = ref(false);

const resultQuery = computed(() => {
  if (searchMail.value) {
    const search = searchMail.value.toLowerCase();

    return mailData.filter((data) => {
      return data.subject.toLowerCase().includes(search);
    });
  } else {
    return mailData;
  }
});

const checkAll = () => {
  if (isCheckAll.value == true) {
    mailData.forEach((data) => {
      checkedMails.value.push(data.id);
    });
  } else {
    checkedMails.value = [];
  }
};
</script>
<template>
  <div class="grid grid-cols-12 xl:flex-row gap-x-5">
    <SidebarMail />
    <div class="col-span-12 lg:col-span-9 2xl:col-span-10 grow card">
      <div v-if="!isEmailOverview" id="emailList" class="block">
        <div class="card-body">
          <div class="grid items-center grid-cols-1 gap-4 2xl:grid-cols-12">
            <div class="2xl:col-span-5">
              <div
                class="flex flex-wrap items-center gap-3 divide-x rtl:divide-x-reverse divide-slate-200 dark:divide-zink-500"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex items-center gap-2"
                    id="email-topbar-actions"
                  >
                    <input
                      id="checkboxAll"
                      v-model="isCheckAll"
                      @change="checkAll"
                      class="form-check-input size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800"
                      type="checkbox"
                    />
                  </div>
                  <a
                    href="#!"
                    class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-slate-600 dark:hover:text-zink-50"
                  >
                    <RefreshCw class="size-4" />
                  </a>
                </div>
                <div class="flex items-center gap-3 ltr:pl-2 rtl:pr-2">
                  <a
                    href="#!"
                    class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
                  >
                    <ArchiveRestore class="size-4" />
                  </a>
                  <a
                    href="#!"
                    class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-orange-500 dark:hover:text-orange-500"
                  >
                    <AlertOctagon class="size-4" />
                  </a>
                  <a
                    href="#!"
                    class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500"
                    @click="deleteDialog = !deleteDialog"
                  >
                    <Trash2 class="size-4" />
                  </a>
                </div>
                <div class="flex items-center gap-3 ltr:pl-2 rtl:pr-2">
                  <a
                    href="#!"
                    class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
                    id="mark-all-read"
                  >
                    <Mail class="size-4" />
                  </a>
                  <a
                    href="#!"
                    class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-green-500 dark:hover:text-green-500"
                  >
                    <Tag class="size-4" />
                  </a>
                  <a
                    href="#!"
                    class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-sky-500 dark:hover:text-sky-500"
                  >
                    <Clock class="size-4" />
                  </a>
                </div>
                <div
                  class="px-4 py-3 text-sm unreadConversations-alert text-yellow-500 border border-transparent rounded-md bg-yellow-50 dark:bg-yellow-400/20 hidden"
                  id="unreadConversations"
                >
                  <span class="font-bold">No Unread Conversations</span>
                </div>
              </div>
            </div>
            <!--end col-->
            <div class="flex items-center gap-2 2xl:col-span-4 2xl:col-start-9">
              <div class="relative grow">
                <input
                  type="text"
                  v-model="searchMail"
                  id="searchResultList"
                  class="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Search for ..."
                  autocomplete="off"
                />
                <Search
                  class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
                />
              </div>
              <div class="relative dropdown shrink-0">
                <TList :items="dropdownMenu" placement="bottom-end">
                  <template #title>
                    <button
                      id="emailMainAction"
                      class="flex items-center justify-center w-[39px] h-[39px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                    >
                      <MoreHorizontal class="size-5" />
                    </button>
                  </template>
                </TList>
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end grid-->
        </div>
        <simplebar class="xl:max-h-[calc(100vh_-_300px)]">
          <div class="!pt-0 card-body">
            <div class="overflow-x-auto">
              <table class="w-full whitespace-nowrap">
                <tbody class="elmLoader" id="mail-list">
                  <tr
                    v-if="resultQuery"
                    v-for="(mail, index) in resultQuery"
                    :key="index"
                    class="relative before:absolute ltr:before:left-0 rtl:before:right-0 before:border [&.checked]:before:border-custom-500 before:inset-y-0 before:border-transparent group/mail"
                    :class="{
                      unread: !mail.unread,
                      checked: checkedMails.includes(mail.id)
                    }"
                  >
                    <td
                      class="px-3.5 py-2.5 border-y border-transparent first:pl-0 last:pr-0 w-20"
                    >
                      <div
                        class="flex items-center gap-3 ltr:pl-2 rtl:pr-2 checkbox-wrapper-mail"
                      >
                        <input
                          :id="`checkbox${mail.id}`"
                          :value="mail.id"
                          v-model="checkedMails"
                          class="itemCheckbox size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800"
                          type="checkbox"
                        />

                        <a
                          href="#!"
                          class="transition-all duration-200 ease-linear text-slate-500 hover:text-yellow-500 dark:text-zink-200 dark:hover:text-yellow-500"
                        >
                          <Star class="size-4" />
                        </a>
                        <a
                          href="#!"
                          class="transition-all duration-200 ease-linear text-slate-500 hover:text-yellow-500 dark:text-zink-200 dark:hover:text-yellow-500"
                        >
                          <StepForward class="size-4" />
                        </a>
                      </div>
                    </td>
                    <td
                      class="px-3.5 py-2.5 border-y border-transparent mailBox first:pl-0 last:pr-0 text-slate-500 group-[.unread]/mail:text-slate-800 dark:text-zink-200 dark:group-[.unread]/mail:text-zink-50"
                    >
                      <div
                        class="grid items-center grid-cols-12 gap-3"
                        @click="isEmailOverview = true"
                      >
                        <div class="col-span-4 lg:col-span-2">
                          <a
                            href="#!"
                            class="block truncate "
                            >{{ mail.name }}</a
                          >
                          <!-- block truncate before:inset-0 before:absolute -->
                        </div>
                        <div class="col-span-8 lg:col-span-10">
                          <p class="truncate">{{ mail.subject }}</p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="px-3.5 py-2.5 border-y border-transparent first:pl-0 last:pr-0 text-end w-20 text-slate-500 group-[.unread]/mail:text-slate-800 dark:text-zink-200 dark:group-[.unread]/mail:text-zink-50"
                    >
                      {{ mail.time }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </simplebar>
      </div>
      <div v-else id="emailOverview" class="block">
        <div class="card-body">
          <div class="flex gap-2">
            <div class="grow">
              <button
                id="closeChatRightSidebar"
                @click="isEmailOverview = false"
                class="inline-flex items-center justify-center h-8 transition-all duration-200 ease-linear rounded-md shrink-0 text-slate-500 hover:text-custom-500"
              >
                <ChevronsLeft class="size-4 mx-auto" />
              </button>
              <h6 class="mb-1 text-16">
                How Custom Software Can Solve Your Business Challenges
              </h6>
              <p class="text-slate-500 dark:text-zink-200">
                <a href="#!">infrateach@tailwick.com</a> (Aug 6, 2023, 9:04 PM)
              </p>
            </div>
            <div class="flex gap-3 shrink-0">
              <a
                href="#!"
                class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
              >
                <ArchiveRestore class="size-4" />
              </a>
              <a
                href="#!"
                class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-sky-500 dark:hover:text-sky-500"
              >
                <Printer class="size-4" />
              </a>
              <a
                href="#!"
                class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-yellow-500 dark:hover:text-yellow-500"
              >
                <Star class="size-4" />
              </a>
              <a
                href="#!"
                class="flex items-center justify-center size-6 transition-all duration-200 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500"
              >
                <Trash2 class="size-4" />
              </a>
            </div>
          </div>
        </div>
        <simplebar class="xl:max-h-[calc(100vh_-_385px)]">
          <div class="card-body !pt-0">
            <div class="flex gap-3 mt-3 first:mt-0">
              <div
                class="relative flex items-center justify-center font-semibold rounded-full text-slate-500 size-9 bg-slate-100 shrink-0 dark:text-zink-200 dark:bg-zink-600"
              >
                <img
                  src="@/assets/images/users/avatar-5.png"
                  alt=""
                  class="rounded-full h-9"
                />
              </div>
              <div class="grow">
                <div class="flex items-center">
                  <div class="grow">
                    <h6>Infra Teach</h6>
                    <p class="text-slate-500 dark:text-zink-200">
                      <a href="#!">infrateach@tailwick.com</a>
                    </p>
                  </div>
                  <div class="shrink-0">Aug 6, 2023, 9:04 PM</div>
                </div>
                <div class="p-4 mt-3 rounded-md bg-slate-100 dark:bg-zink-600">
                  <p class="mb-2 last:mb-0">Hi,</p>
                  <p class="mb-2 last:mb-0">
                    Custom software solutions are tailor-made software
                    applications designed to meet the unique needs of a specific
                    business or organization. Unlike off-the-shelf software,
                    which offers a standardized solution for a broad range of
                    users, custom software is precisely crafted to align with
                    the workflows, processes, and objectives of a particular
                    business.
                  </p>
                  <p class="mb-2 last:mb-0">
                    The key advantage of custom software lies in its ability to
                    be scalable and flexible. It can evolve alongside the
                    business, accommodating changing requirements and supporting
                    expansion. By adapting to the specific needs of the
                    organization, custom software empowers businesses to gain a
                    competitive edge, differentiate themselves in the market,
                    and deliver enhanced experiences to their customers.
                  </p>
                  <p class="mb-2 last:mb-0">Thank You</p>
                </div>
              </div>
            </div>
            <div class="flex gap-3 mt-3 first:mt-0">
              <div
                class="relative flex items-center justify-center font-semibold bg-pink-100 rounded-full text-slate-500 size-9 shrink-0 dark:bg-pink-500/20 dark:text-zink-200"
              >
                <img
                  src="@/assets/images/users/avatar-1.png"
                  alt=""
                  class="rounded-full h-9"
                />
              </div>
              <div class="grow">
                <div class="flex items-center">
                  <div class="grow">
                    <h6>Me</h6>
                    <p class="text-slate-500 dark:text-zink-200">
                      <a href="#!">paulakeenan@tailwick.com</a>
                    </p>
                  </div>
                  <div class="shrink-0">07 Nov, 2023, 10:14 PM</div>
                </div>
                <div class="p-4 mt-3 rounded-md bg-slate-100 dark:bg-zink-600">
                  <p class="mb-2 last:mb-0">Hi,</p>
                  <p class="mb-2 last:mb-0">
                    I hope this email finds you well. Let me start by saying
                    that I am a big fan of your work and it has inspired me to
                    push myself beyond what I thought were my limits!
                  </p>
                  <p class="mb-2 last:mb-0">
                    After taking a good look at [target company] I realize that
                    you could improve in [improvement area]. I have helped many
                    others improve in the same area and I‘d be more than happy
                    to talk with you about it!
                  </p>
                  <p class="mb-2 last:mb-0">
                    Would you be available for a quick call to discuss how our
                    [product/service] could help you?
                  </p>
                  <p class="mb-2 last:mb-0">Regards,</p>
                  <p class="mb-2 last:mb-0">Themesdesign</p>
                </div>
              </div>
            </div>
            <div class="flex gap-3 mt-3 first:mt-0">
              <div
                class="relative flex items-center justify-center font-semibold rounded-full text-slate-500 size-9 bg-slate-100 shrink-0 dark:text-zink-200 dark:bg-zink-600"
              >
                <img
                  src="@/assets/images/users/avatar-5.png"
                  alt=""
                  class="rounded-full h-9"
                />
              </div>
              <div class="grow">
                <div class="flex items-center">
                  <div class="grow">
                    <h6>Infra Teach</h6>
                    <p class="text-slate-500 dark:text-zink-200">
                      <a href="#!">infrateach@tailwick.com</a>
                    </p>
                  </div>
                  <div class="shrink-0">07 Nov, 2023, 10:42 PM</div>
                </div>
                <div class="p-4 mt-3 rounded-md bg-slate-100 dark:bg-zink-600">
                  <p class="mb-2 last:mb-0">Hello, Themesdesign</p>
                  <p class="mb-2 last:mb-0">
                    You are probably very busy, I totally understand that!
                  </p>
                  <p class="mb-2 last:mb-0">
                    It would be great to hear back from you. So, please let me
                    know when you find some time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </simplebar>
        <div class="card-body">
          <div class="flex items-center gap-2">
            <div class="grow">
              <input
                type="text"
                id="inputText"
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Enter Message"
                required
                autocomplete="off"
              />
            </div>
            <div class="flex gap-2 shrink-0">
              <button
                type="button"
                class="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-slate-500 btn bg-transparent border-transparent hover:text-slate-700 focus:text-slate-700 active:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50 dark:focus:text-zink-50 dark:active:text-zink-50"
              >
                <Mic class="size-4" />
              </button>
              <button
                type="button"
                class="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-slate-500 btn bg-transparent border-transparent hover:text-slate-700 focus:text-slate-700 active:text-slate-700 dark:text-zink-200 dark:hover:text-zink-50 dark:focus:text-zink-50 dark:active:text-zink-50"
              >
                <Image class="size-4" />
              </button>
              <button
                type="button"
                class="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                <Send class="inline-block size-4 mr-1 align-middle" />
                <span class="align-middle">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DeleteDialog v-if="deleteDialog" v-model="deleteDialog" />
</template>
