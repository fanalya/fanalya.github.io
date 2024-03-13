<script lang="ts" setup>
import { ref } from "vue";
import SearchBar from "@/components/chat/search.vue";
import {
  recentChat,
  allConversation,
  contactList,
  botData,
  files,
  messageData,
} from "@/components/chat/data";
import {
  MessagesSquare,
  SquareUser,
  Bot,
  UserRound,
  ScrollText,
  Settings,
  PhoneCall,
  ChevronsLeft,
  MoreVertical,
  X,
  BellRing,
  Phone,
  MapPin,
  Mail,
  Video,
  Search,
  PanelRightOpen,
  Mic,
  Image,
  Send,
} from "lucide-vue-next";
import { useRouter } from "vue-router";
import { onMounted, onUpdated } from "vue";
import Prism from "prismjs";
const iconClass =
  "mx-auto transition-all size-5 duration-200 ease-linear fill-slate-100 text-slate-500 dark:text-zink-200 dark:fill-zink-500 group-hover/item:text-custom-500 dark:group-hover/item:text-custom-500 group-[.active]/item:fill-custom-100 dark:group-[.active]/item:fill-custom-500/20 group-[.active]/item:text-custom-500 dark:group-[.active]/item:text-custom-500";

const dropdownData = ["Logout", "Switch Account"];

const contactDropdownData = ["Send Message", "Edit", "Delete"];

const chatDropdownData = ["Reply", "Forward", "Copy", "Bookmark", "Delete"];

const tab = ref("mainChatList");
const profileDetail = ref(false);
const callModal = ref(false);
const router = useRouter();

const onSelect = (data: any) => {
  if (data == "Logout") {
    router.push("/login/basic");
  } else if (data == "Switch Account") {
    router.push("/login/cover");
  }
};

onMounted(() => {
  setTimeout(() => {
    Prism.highlightAll();
  }, 1000);
});

onUpdated(() => {
  setTimeout(() => {
    Prism.highlightAll();
  }, 1000);
});

const isVisible = ref(false)
const onChatClick = () => {
  isVisible.value = true
  document.querySelector(".chat-message")?.classList.add("chat-message-show");
};
</script>

<template>
  <div class="flex gap-5 mt-5">
    <div
      class="fixed inset-x-0 bottom-12 2xl:w-20 shrink-0 xl:relative z-[9] text-center xl:bottom-auto"
    >
      <div
        class="xl:min-h-[calc(100vh_-_theme('height.header')_*_2.4)] inline-block card xl:h-[calc(100%_-_theme('spacing.5'))] shadow-lg xl:shadow-md"
      >
        <div class="flex items-center h-full p-2 2xl:p-4 xl:flex-col">
          <a href="#!" class="hidden xl:block"
            ><img src="@/assets/images/logo-sm.png" alt="" class="h-8 mx-auto"
          /></a>
          <TTabs
            v-model="tab"
            class="flex gap-2 my-auto text-center xl:pt-8 xl:flex-col nav-tabs"
            hideDetails
          >
            <TTab value="mainChatList">
              <a
                href="#!"
                class="inline-flex items-center justify-center size-12 transition-all duration-200 ease-linear rounded-md mainChatList active"
              >
                <MessagesSquare :class="iconClass" />
              </a>
            </TTab>
            <TTab value="contactList">
              <a
                href="#!"
                class="inline-flex items-center justify-center size-12 transition-all duration-200 ease-linear rounded-md"
              >
                <SquareUser :class="iconClass" />
              </a>
            </TTab>
            <TTab value="botChat">
              <a
                href="#!"
                class="inline-flex items-center justify-center size-12 transition-all duration-200 ease-linear rounded-md"
              >
                <Bot :class="iconClass" />
              </a>
            </TTab>
            <TTab value="profile">
              <a
                href="#!"
                class="inline-flex items-center justify-center size-12 transition-all duration-200 ease-linear rounded-md"
              >
                <UserRound :class="iconClass" />
              </a>
            </TTab>
            <TTab value="fileDocument">
              <a
                href="#!"
                class="inline-flex items-center justify-center size-12 transition-all duration-200 ease-linear rounded-md"
              >
                <ScrollText :class="iconClass" />
              </a>
            </TTab>
          </TTabs>
          <ul
            class="flex items-center gap-2 my-auto text-center xl:mb-0 xl:mt-auto xl:pt-4 xl:flex-col"
          >
            <li>
              <router-link
                to="pages/settings"
                class="inline-flex items-center justify-center size-12 transition-all duration-200 ease-linear rounded-md group/item"
              >
                <Settings :class="iconClass" />
              </router-link>
            </li>
            <div class="relative dropdown">
              <TList
                :items="dropdownData"
                placement="auto-start"
                @onSelect="onSelect"
              >
                <template #title>
                  <a
                    href="#!"
                    type="button"
                    class="inline-flex items-center justify-center size-12 transition-all duration-200 ease-linear bg-pink-100 rounded-md group/item dropdown-toggle dark:bg-pink-500/20"
                    id="profilDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="@/assets/images/users/avatar-1.png"
                      alt=""
                      class="h-12 rounded-md"
                    />
                  </a>
                </template>
              </TList>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class=" w-full xl:block xl:w-80 shrink-0 menu-content" :class="isVisible ?'hidden' : 'block'">
      <div
        class="h-[calc(100vh_-_theme('spacing.10')_*_6)] xl:min-h-[calc(100vh_-_theme('height.header')_*_2.4)] card xl:h-[calc(100%_-_theme('spacing.5'))]"
      >
        <div class="flex flex-col h-full">
          <div class="tab-content">
            <div class="block tab-pane" v-if="tab == 'mainChatList'">
              <div class="card-body">
                <SearchBar title="Chats" :isCloseBtn="true" />
              </div>
              <simplebar
                class="max-h-[calc(100vh_-_380px)] xl:max-h-[calc(100vh_-_300px)]"
              >
                <ul class="flex flex-col gap-1" id="chatList">
                  <li class="px-5">
                    <p class="mb-1 text-slate-500 dark:text-zink-200">
                      Recent Chats
                    </p>
                  </li>
                  <li
                    v-if="recentChat"
                    v-for="(recent, index) in recentChat"
                    :key="index"
                    @click="onChatClick"
                  >
                    <a
                      href="#!"
                      class="flex items-center gap-3 px-5 py-2 [&.active]:bg-slate-50 dark:[&.active]:bg-zink-600 group/item"
                      :class="{
                        online: recent.status == 'online',
                        active: index === 0,
                      }"
                    >
                      <div
                        class="relative flex items-center justify-center font-semibold rounded-full text-slate-500 dark:text-zink-200 size-9 bg-slate-100 dark:bg-zink-600"
                      >
                        <img
                          :src="recent.image"
                          alt=""
                          class="rounded-full h-9"
                        />
                        <span
                          class="absolute bottom-0 ltr:right-0 rtl:left-0 w-2.5 h-2.5 border-2 border-white dark:border-zink-700 rounded-full group-[.online]/item:bg-green-400 group-[.offline]/item:bg-slate-400 dark:group-[.offline]/item:bg-zink-500 bg-red-500"
                        ></span>
                      </div>
                      <div class="overflow-hidden grow">
                        <h6 class="mb-1">{{ recent.name }}</h6>
                        <p
                          class="text-xs truncate text-slate-500 dark:text-zink-200"
                        >
                          {{ recent.msg }}
                        </p>
                      </div>
                      <div
                        class="self-start shrink-0 text-slate-500 dark:text-zink-200"
                      >
                        <small>{{ recent.last_seen }}</small>
                      </div>
                    </a>
                  </li>
                  <li class="px-5">
                    <p class="mb-1 text-slate-500 dark:text-zink-200">
                      All Conversion
                    </p>
                  </li>
                  <li
                    v-if="allConversation"
                    v-for="(conversation, index) in allConversation"
                    :key="index"
                  >
                    <a
                      href="#!"
                      class="flex items-center gap-3 px-5 py-2 [&.active]:bg-slate-50 group/item dark:[&.active]:bg-zink-600"
                      :class="conversation.status == 'online' ? 'online' : ''"
                    >
                      <div
                        class="relative flex items-center justify-center font-semibold rounded-full text-slate-500 size-9 bg-slate-100 dark:bg-zink-600"
                      >
                        <img
                          v-if="conversation.image"
                          :src="conversation.image"
                          alt=""
                          class="rounded-full h-9"
                        />
                        <template v-else>
                          {{ conversation.text }}
                        </template>
                        <span
                          class="absolute bottom-0 ltr:right-0 rtl:left-0 w-2.5 h-2.5 border-2 border-white dark:border-zink-700 rounded-full group-[.online]/item:bg-green-400 group-[.offline]/item:bg-slate-400 dark:group-[.offline]/item:bg-zink-500 bg-red-500"
                        ></span>
                      </div>
                      <div class="overflow-hidden grow">
                        <h6 class="mb-1">{{ conversation.name }}</h6>
                        <p
                          class="text-xs truncate text-slate-500 dark:text-zink-200"
                        >
                          {{ conversation.role }}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </simplebar>
            </div>
            <div class="block tab-pane" v-if="tab == 'contactList'">
              <div class="card-body">
                <SearchBar title="Contacts" :isCloseBtn="true" />
              </div>
              <simplebar
                class="max-h-[calc(100vh_-_390px)] xl:max-h-[calc(100vh_-_300px)]"
              >
                <ul class="flex flex-col gap-1">
                  <li class="px-5">
                    <p class="mb-1 text-slate-500 dark:text-zink-200">
                      Contact List
                    </p>
                  </li>
                  <li
                    v-if="contactList"
                    v-for="(contact, index) in contactList"
                    :key="index"
                  >
                    <div
                      class="flex items-center gap-3 px-5 py-2 [&.active]:bg-slate-50 group/item dark:[&.active]:bg-zink-600 offline"
                    >
                      <div
                        class="relative flex items-center justify-center font-semibold rounded-full text-slate-500 dark:text-zink-200 size-9 bg-slate-100 dark:bg-zink-600"
                      >
                        <img
                          :src="contact.image"
                          alt=""
                          class="rounded-full h-9"
                        />
                        <span
                          class="absolute bottom-0 ltr:right-0 rtl:left-0 w-2.5 h-2.5 border-2 border-white dark:border-zink-700 rounded-full group-[.online]/item:bg-green-400 group-[.offline]/item:bg-slate-400 dark:group-[.offline]/item:bg-zink-500 bg-red-500"
                        ></span>
                      </div>
                      <a href="#!" class="overflow-hidden grow">
                        <h6 class="mb-1">{{ contact.name }}</h6>
                        <p
                          class="text-xs truncate text-slate-500 dark:text-zink-200"
                        >
                          {{ contact.role }}
                        </p>
                      </a>
                      <TList :items="contactDropdownData">
                        <template #title>
                          <button
                            type="button"
                            class="dropdown-toggle"
                            id="contactListDropdown1"
                            data-bs-toggle="dropdown"
                          >
                            <MoreVertical class="inline-block size-4 ml-1" />
                          </button>
                        </template>
                      </TList>
                    </div>
                  </li>
                </ul>
              </simplebar>
            </div>
            <div class="block tab-pane" v-if="tab == 'botChat'">
              <div class="card-body">
                <SearchBar title="AI Bot" />
              </div>
              <p class="mx-5 mb-2 text-slate-500 dark:text-zink-200">
                Recent Find
              </p>
              <simplebar
                class="max-h-[calc(100vh_-_410px)] xl:max-h-[calc(100vh_-_330px)]"
              >
                <ul v-if="botData" class="flex flex-col gap-1">
                  <li v-for="(bot, index) in botData" :key="index">
                    <a
                      href="#!"
                      class="flex items-center gap-3 px-5 py-2.5 [&.active]:bg-slate-50 dark:[&.active]:bg-zink-600"
                    >
                      <div
                        class="relative flex items-center justify-center font-semibold rounded-full text-slate-500 size-7 dark:text-zink-200 shrink-0"
                      >
                        <MessagesSquare class="size-4" />
                      </div>
                      <h6 class="font-medium truncate grow">{{ bot.title }}</h6>
                    </a>
                  </li>
                </ul>
              </simplebar>
            </div>
            <div class="block tab-pane" v-if="tab == 'profile'">
              <simplebar
                class="max-h-[calc(100vh_-_250px)] xl:max-h-full card-body"
              >
                <div class="flex items-center gap-3">
                  <h6 class="text-15 grow">Profile</h6>
                  <button
                    class="inline-flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md shrink-0 bg-slate-100 text-slate-500 hover:text-red-500 dark:bg-zink-600 dark:text-zink-200 dark:hover:text-red-500"
                  >
                    <X class="size-4 mx-auto" />
                  </button>
                </div>
                <div class="text-center">
                  <div
                    class="size-20 mx-auto mt-8 bg-pink-100 rounded-full dark:bg-pink-500/20"
                  >
                    <img
                      src="@/assets/images/users/avatar-1.png"
                      alt=""
                      class="h-20 rounded-full"
                    />
                  </div>
                  <h5 class="mt-4 text-16">William Heineman</h5>
                  <p class="text-slate-500 dark:text-zink-200">
                    NextJs Developer
                  </p>
                </div>
                <div class="mt-5">
                  <p class="mb-3 text-slate-500 dark:text-zink-200">Object</p>
                  <p>
                    If several languages coalesce, the grammar of the resulting
                    language is more simple and regular than that of the
                    individual.
                  </p>
                </div>
                <div class="mt-5">
                  <p class="mb-4 text-slate-500 dark:text-zink-200">
                    Personal Information
                  </p>
                  <h6 class="mb-3 font-medium">
                    <Phone
                      class="inline-block size-4 mr-1 text-slate-500 dark:text-zink-200"
                    />
                    <span class="align-middle"> +(103) 1234 567 8954</span>
                  </h6>
                  <h6 class="mb-3 font-medium">
                    <MapPin
                      class="inline-block size-4 mr-1 text-slate-500 dark:text-zink-200"
                    />
                    <span class="align-middle"> California, USA</span>
                  </h6>
                  <h6 class="font-medium">
                    <Mail
                      class="inline-block size-4 mr-1 text-slate-500 dark:text-zink-200"
                    />
                    <span class="align-middle"> william@tailwick.com</span>
                  </h6>
                </div>
                <div class="mt-5">
                  <div class="flex items-center gap-2 mb-4">
                    <p class="text-slate-500 dark:text-zink-200 grow">
                      Settings
                    </p>
                    <a
                      href="#!"
                      class="text-sm underline text-slate-500 dark:text-zink-200 shrink-0"
                      >View More</a
                    >
                  </div>
                  <div class="flex items-center mb-3">
                    <div
                      class="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2"
                    >
                      <input
                        type="checkbox"
                        name="muteNotification"
                        id="muteNotification"
                        class="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none"
                      />
                      <label
                        for="muteNotification"
                        class="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"
                      ></label>
                    </div>
                    <label
                      for="muteNotification"
                      class="inline-block text-base font-medium cursor-pointer"
                      >Mute Notifications</label
                    >
                  </div>
                  <div class="flex items-center mb-3">
                    <div
                      class="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2"
                    >
                      <input
                        type="checkbox"
                        name="blockAccount"
                        id="blockAccount"
                        class="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none"
                      />
                      <label
                        for="blockAccount"
                        class="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"
                      ></label>
                    </div>
                    <label
                      for="blockAccount"
                      class="inline-block text-base font-medium cursor-pointer"
                      >Block Account</label
                    >
                  </div>
                  <a href="#!">
                    <p class="mb-3">
                      <BellRing
                        class="inline-block size-4 mr-1 text-slate-500 dark:text-zink-200"
                      />
                      <span class="align-middle"> Custom Notification</span>
                    </p>
                  </a>
                </div>
              </simplebar>
            </div>
            <div class="block tab-pane" v-if="tab == 'fileDocument'">
              <div class="card-body">
                <SearchBar title="Documents" />
              </div>
              <simplebar
                class="max-h-[calc(100vh_-_380px)] xl:max-h-[calc(100vh_-_300px)]"
              >
                <div class="flex flex-col gap-3">
                  <a
                    v-if="files"
                    v-for="(file, index) in files"
                    :key="index"
                    href="#!"
                    class="flex items-center gap-3 !py-3 border-y border-dashed rounded-md card-body border-slate-200 dark:border-zink-500"
                  >
                    <div
                      class="flex items-center justify-center text-sm font-semibold rounded-md size-9 bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 shrink-0"
                    >
                      <img
                        v-if="file.icon.imageSrc"
                        :src="file.icon.imageSrc"
                        alt=""
                        class="object-cover rounded-md h-9"
                      />
                      <template v-else>
                        {{ file.icon.text }}
                      </template>
                    </div>
                    <div class="grow">
                      <h6>{{ file.name }}</h6>
                      <p class="text-slate-500 dark:text-zink-200">
                        {{ file.size }}
                      </p>
                    </div>
                  </a>
                </div>
              </simplebar>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="tab != 'botChat'"
      class="h-[calc(100vh_-_theme('spacing.10')_*_6)] xl:min-h-[calc(100vh_-_theme('height.header')_*_2.4)] card w-full  [&.show]:block [&.active]:xl:block active chat-content"
      :class="isVisible ? 'show' : 'hidden'"
    >
      <div class="relative flex flex-col h-full">
        <div class="card-body">
          <div class="flex items-center gap-3">
            <button
              class="inline-flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md shrink-0 bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
              @click="isVisible = false"
            >
              <ChevronsLeft class="mx-auto size-4" />
            </button>
            <a
              href="#!"
              @click="profileDetail = !profileDetail"
              class="flex items-center gap-3 ltr:mr-auto rtl:ml-auto shrink-0"
              id="userChatProfile"
            >
              <div class="size-10 rounded-full bg-slate-100 dark:bg-zink-600">
                <img
                  src="@/assets/images/users/avatar-7.png"
                  alt=""
                  class="h-10 rounded-full"
                />
              </div>
              <div>
                <h6>William Heineman</h6>
                <p class="text-sm text-slate-500 dark:text-zink-200">
                  NextJS Developer
                </p>
              </div>
            </a>
            <ul class="flex items-center">
              <li>
                <a
                  href="#!"
                  @click="callModal = !callModal"
                  class="inline-flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md group/item"
                >
                  <Phone
                    class="mx-auto transition-all size-4 duration-200 ease-linear fill-slate-100 text-slate-500 dark:fill-zink-600 dark:text-zink-200 group-hover/item:text-custom-500 dark:group-hover/item:text-custom-500 group-[.active]/item:fill-custom-100 dark:group-[.active]/item:fill-custom-500/20 group-[.active]/item:text-custom-500 dark:group-[.active]/item:text-custom-500"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  class="inline-flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md group/item"
                  ><Video
                    class="mx-auto transition-all size-4 duration-200 ease-linear fill-slate-100 text-slate-500 dark:fill-zink-600 dark:text-zink-200 group-hover/item:text-custom-500 dark:group-hover/item:text-custom-500 group-[.active]/item:fill-custom-100 dark:group-[.active]/item:fill-custom-500/20 group-[.active]/item:text-custom-500 dark:group-[.active]/item:text-custom-500"
                /></a>
              </li>
              <li>
                <a
                  href="#!"
                  id="searchChatButton"
                  class="inline-flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md group/item"
                >
                  <Search
                    class="mx-auto transition-all size-4 duration-200 ease-linear fill-slate-100 text-slate-500 dark:fill-zink-600 dark:text-zink-200 group-hover/item:text-custom-500 dark:group-hover/item:text-custom-500 group-[.active]/item:fill-custom-100 dark:group-[.active]/item:fill-custom-500/20 group-[.active]/item:text-custom-500 dark:group-[.active]/item:text-custom-500"
                  />
                </a>
              </li>
              <li class="hidden md:block">
                <a
                  href="#!"
                  @click="profileDetail = !profileDetail"
                  class="inline-flex items-center justify-center size-10 transition-all duration-200 ease-linear rounded-md group/item"
                >
                  <PanelRightOpen
                    class="size-4 mx-auto transition-all duration-200 ease-linear fill-slate-100 dark:fill-zink-600 dark:text-zink-200 text-slate-500 group-hover/item:text-custom-500 group-hover/item:fill-custom-100 dark:group-hover/item:fill-custom-500/20 dark:group-hover/item:text-custom-500 group-[.active]/item:hidden block"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative bg-slate-50 dark:bg-zink-600/50 grow">
          <div
            class="absolute inset-x-0 top-0 z-10 hidden transition-all duration-200 ease-linear bg-white border-y border-slate-200 dark:bg-zink-700 dark:border-zink-500"
            id="searchChat"
          >
            <input
              type="text"
              class="w-full px-5 py-2 focus:outline-none"
              placeholder="Search for ..."
              autocomplete="off"
            />
          </div>
          <simplebar class="h-[calc(100vh_-_410px)] xl:h-[calc(100vh_-_330px)]">
            <ul class="flex flex-col gap-5 list-none card-body">
              <li
                v-if="messageData"
                v-for="(message, index) in messageData"
                :key="index"
                class="flex chat-message group/item [&.right]:justify-end"
                :class="message.align == 'right' ? 'right' : ''"
              >
                <div class="flex gap-3">
                  <a
                    href="#!"
                    class="flex items-center self-end justify-center text-sm font-semibold rounded-full size-9 bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 shrink-0 group-[.right]/item:order-3"
                  >
                    <img
                      :src="message.avatar"
                      alt=""
                      class="object-cover rounded-full h-9"
                    />
                  </a>
                  <div
                    class="grow group-[.right]/item:order-2 flex flex-col gap-3"
                  >
                    <div
                      v-if="message.message"
                      v-for="(msg, number) in message.message"
                      :key="number"
                      class="flex gap-3"
                    >
                      <div
                        class="relative p-4 bg-white dark:bg-zink-700 rounded-md ltr:rounded-bl-none rtl:rounded-br-none shadow-sm 2xl:max-w-sm ltr:group-[.right]/item:rounded-br-none rtl:group-[.right]/item:rounded-bl-none ltr:group-[.right]/item:rounded-bl-md rtl:group-[.right]/item:rounded-br-md group-[.right]/item:order-2"
                      >
                        {{ msg.text }}
                        <div
                          v-if="msg.images"
                          class="grid grid-cols-2 gap-4 mt-4 2xl:grid-cols-3"
                        >
                          <a v-for="img in msg.images" href="#!">
                            <img :src="img" alt="" class="rounded-md" />
                          </a>
                        </div>
                      </div>
                      <div
                        class="relative transition-all duration-200 ease-linear opacity-0 dropdown shrink-0 group-hover/item:opacity-100 group-[.right]/item:order-1"
                      >
                        <TList
                          :items="chatDropdownData"
                          placement="bottom-start"
                        >
                          <template #title>
                            <button
                              type="button"
                              class="dropdown-toggle"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                            >
                              <MoreVertical class="inline-block size-4 ml-1" />
                            </button>
                          </template>
                        </TList>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </simplebar>
        </div>
        <div class="card-body">
          <div class="flex items-center gap-2">
            <div class="grow">
              <input
                type="text"
                id="inputText"
                class="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Type your message here ..."
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
                <span class="align-middle ms-1">Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="tab == 'botChat'"
      class="h-[calc(100vh_-_theme('spacing.10')_*_6)] xl:min-h-[calc(100vh_-_theme('height.header')_*_2.4)] card w-full hidden [&.show]:block [&.active]:xl:block bot-content active"
    >
      <div class="relative">
        <simplebar class="h-[calc(100vh_-_320px)] xl:h-[calc(100vh_-_250px)]">
          <div
            class="sticky top-0 flex items-center gap-3 shadow-sm bg-white/60 dark:bg-zink-700/30 backdrop-blur-sm card-body"
          >
            <div
              class="relative flex items-center justify-center size-8 font-semibold rounded-full text-slate-500 bg-slate-100 dark:text-zink-200 dark:bg-zink-600"
            >
              <img
                src="@/assets/images/users/user-2.jpg"
                alt=""
                class="h-8 rounded-full"
              />
            </div>
            <h6>What is Tailwind CSS, and what is Utility-First CSS?</h6>
          </div>
          <div class="flex gap-3 card-body bg-slate-50 dark:bg-zink-600">
            <div
              class="flex items-center justify-center size-8 font-semibold rounded-full text-slate-500 bg-slate-100 shrink-0 dark:text-zink-200 dark:bg-zink-600"
            >
              <Bot class="size-5" />
            </div>
            <div class="grow">
              <p class="mb-2">
                Tailwind CSS is a <b>utility-first</b> CSS framework designed
                for rapid UI development. Instead of providing pre-built
                components, it offers low-level utility classes that let you
                build custom designs without ever leaving your HTML.
              </p>
              <p class="mb-0">
                Utility-first CSS is an approach where you use small,
                single-purpose classes to build your user interface. These
                utility classes are composed to create complex designs directly
                in the HTML, rather than relying on custom CSS. This approach
                favors composition over inheritance, making it easier to
                maintain and scale your codebase.
              </p>
            </div>
          </div>
          <div
            class="sticky top-0 flex items-center gap-3 shadow-sm bg-white/60 backdrop-blur-sm card-body dark:bg-zink-700/30"
          >
            <div
              class="relative flex items-center justify-center size-8 font-semibold rounded-full text-slate-500 bg-slate-100"
            >
              <img
                src="@/assets/images/users/user-2.jpg"
                alt=""
                class="h-8 rounded-full"
              />
            </div>
            <h6>How to install and set up Tailwind CSS in a project?</h6>
          </div>
          <div class="flex gap-3 card-body bg-slate-50 dark:bg-zink-600">
            <div
              class="flex items-center justify-center size-8 font-semibold rounded-full text-slate-500 bg-slate-100 shrink-0 dark:text-zink-200 dark:bg-zink-600"
            >
              <Bot class="size-5" />
            </div>
            <div class="grow">
              <p class="mb-2">
                To install Tailwind CSS, you can use npm or yarn by running the
                following commands:
              </p>
              <p class="mb-2">Using npm:</p>
              <pre
                class="!mb-0"
              ><code class="!mb-0 language-js">npm install tailwindcss</code></pre>
              <p class="mt-4 mb-2">Using yarn:</p>
              <pre
                class="!mb-0"
              ><code class="!mb-0 language-js">yarn add tailwindcss</code></pre>
              <p class="mt-4 mb-2">
                After installing, create a configuration file called
                <code class="text-xs text-pink-500 select-all"
                  >tailwind.config.js</code
                >
                in your project's root directory using the following command:
              </p>
              <pre
                class="!mb-0"
              ><code class="!mb-0 language-js">npx tailwindcss init</code></pre>
              <p class="mt-4 mb-2">
                In your project's CSS file, import Tailwind's base styles,
                components, and utilities using the
                <code class="text-xs text-pink-500 select-all">@import</code>
                directive:
              </p>
              <pre
                class="!mb-0"
              ><code class="!mb-0 language-css">@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';</code></pre>
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
                placeholder="Type your message here ..."
                required
                autocomplete="off"
              />
            </div>
            <div class="flex gap-2 shrink-0">
              <TButton color="slate" variant="ghost" type="button">
                <Mic class="size-4" />
              </TButton>
              <TButton color="custom" type="button">
                <Send class="inline-block size-4 mr-1 align-middle" />
                <span class="align-middle">Send</span>
              </TButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TDrawer v-model="profileDetail">
    <template #title>
      <div class="flex items-center gap-3">
        <button
          id="closeChatRightSidebar"
          class="inline-flex items-center justify-center h-8 transition-all duration-200 ease-linear rounded-md shrink-0 text-slate-500 hover:text-custom-500"
        >
          <ChevronsLeft class="size-4 mx-auto" />
        </button>
        <h6 class="text-15 grow">Profile</h6>
      </div>
    </template>
    <template #content>
      <div class="h-full px-4 overflow-y-auto">
        <div>
          <div class="text-center">
            <div
              class="size-20 mx-auto mt-8 rounded-full bg-slate-100 dark:bg-zink-600"
            >
              <img
                src="@/assets/images/users/avatar-7.png"
                alt=""
                class="h-20 rounded-full"
              />
            </div>
            <h5 class="mt-4 text-16">William Heineman</h5>
            <p class="text-slate-500 dark:text-zink-200">NextJs Developer</p>
          </div>
          <div class="mt-5">
            <p class="mb-4 text-slate-500 dark:text-zink-200">
              Personal Information
            </p>
            <h6 class="mb-3 font-medium">
              <Phone
                class="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200"
              />
              <span class="align-middle">+(103) 1234 567 8954</span>
            </h6>
            <h6 class="mb-3 font-medium">
              <MapPin
                class="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200"
              />
              <span class="align-middle">California, USA</span>
            </h6>
            <h6 class="font-medium">
              <Mail
                class="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200"
              />
              <span class="align-middle">william@tailwick.com</span>
            </h6>
          </div>
          <div class="mt-5">
            <div class="flex items-center gap-2 mb-4">
              <p class="text-slate-500 dark:text-zink-200 grow">Settings</p>
              <a
                href="#!"
                class="text-sm underline text-slate-500 dark:text-zink-200 shrink-0"
                >View More</a
              >
            </div>
            <div class="flex items-center mb-3">
              <div
                class="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2"
              >
                <input
                  type="checkbox"
                  name="muteNotification1"
                  id="muteNotification1"
                  class="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none"
                />
                <label
                  for="muteNotification1"
                  class="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"
                ></label>
              </div>
              <label
                for="muteNotification1"
                class="inline-block text-base font-medium cursor-pointer"
                >Mute Notifications</label
              >
            </div>
            <div class="flex items-center mb-3">
              <div
                class="relative inline-block w-10 align-middle transition duration-200 ease-in ltr:mr-2 rtl:ml-2"
              >
                <input
                  type="checkbox"
                  name="blockAccount1"
                  id="blockAccount1"
                  class="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none"
                />
                <label
                  for="blockAccount1"
                  class="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"
                ></label>
              </div>
              <label
                for="blockAccount1"
                class="inline-block text-base font-medium cursor-pointer"
                >Block Account</label
              >
            </div>
            <a href="#!">
              <p class="mb-3">
                <BellRing
                  class="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200"
                />
                <span class="align-middle">Custom Notification</span>
              </p>
            </a>
          </div>
          <div class="mt-5">
            <p class="mb-4 text-slate-500 dark:text-zink-200">Recent Shares</p>

            <div>
              <div class="flex flex-col gap-3">
                <a
                  href="#!"
                  class="flex items-center gap-3 p-2 border border-dashed rounded-md border-slate-200 dark:border-zink-500"
                >
                  <div
                    class="flex items-center justify-center text-sm font-semibold rounded-md size-9 bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 shrink-0"
                  >
                    <img
                      src="@/assets/images/small/img-2.jpg"
                      alt=""
                      class="object-cover rounded-md h-9"
                    />
                  </div>
                  <div class="grow">
                    <h6>Preview-01.jpg</h6>
                    <p class="text-slate-500 dark:text-zink-200">1.2 MB</p>
                  </div>
                </a>
                <a
                  href="#!"
                  class="flex items-center gap-3 p-2 border border-dashed rounded-md border-slate-200 dark:border-zink-500"
                >
                  <div
                    class="flex items-center justify-center text-sm font-semibold rounded-md size-9 bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 shrink-0"
                  >
                    TXT
                  </div>
                  <div class="grow">
                    <h6>changelog.txt</h6>
                    <p class="text-slate-500 dark:text-zink-200">140.62 KB</p>
                  </div>
                </a>
                <a
                  href="#!"
                  class="flex items-center gap-3 p-2 border border-dashed rounded-md border-slate-200 dark:border-zink-500"
                >
                  <div
                    class="flex items-center justify-center text-sm font-semibold rounded-md size-9 bg-slate-100 text-slate-500 dark:bg-zink-600 dark:text-zink-200 shrink-0"
                  >
                    PSD
                  </div>
                  <div class="grow">
                    <h6>tailwick-design.psd</h6>
                    <p class="text-slate-500 dark:text-zink-200">97.59 MB</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TDrawer>

  <TModal v-model="callModal">
    <template #content>
      <div
        class="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full"
      >
        <div class="max-h-[calc(theme('height.screen')_-_180px)] p-8">
          <div class="text-center">
            <div
              class="size-20 mx-auto rounded-full bg-slate-100 dark:bg-zink-500"
            >
              <img
                src="@/assets/images/users/avatar-7.png"
                alt=""
                class="h-20 rounded-full"
              />
            </div>
            <h5 class="mt-4 mb-1 text-16">William Heineman</h5>
            <p class="text-green-500">Calling...</p>
          </div>
          <div class="flex items-center justify-center gap-3 mt-6">
            <a
              href="#!"
              class="flex items-center justify-center size-12 p-0 text-white bg-green-500 border-green-500 rounded-full btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10"
            >
              <PhoneCall class="size-4" />
            </a>
            <a
              href="#!"
              @click="callModal = false"
              class="flex items-center justify-center size-12 text-white bg-red-500 border-red-500 rounded-full btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-red-400/20"
            >
              <Phone />
            </a>
          </div>
        </div>
      </div>
    </template>
  </TModal>
</template>
