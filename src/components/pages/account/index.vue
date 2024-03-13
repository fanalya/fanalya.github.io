<script lang="ts" setup>
import { ref } from "vue";
import Dashboard from "@/components/pages/account/Dashboard.vue";
import Overview from "@/components/pages/account/Overview.vue";
import Documents from "@/components/pages/account/Documents.vue";
import Projects from "@/components/pages/account/Projects.vue";
import Followers from "@/components/pages/account/Followers.vue";

const simpleTab = ref("overview");

const simpleTabClass = `inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 dark:group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 dark:group-[.active]:border-b-custom-500 hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"`;
</script>

<template>
  <div class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
    <TCard class="mt-1 -ml-3 -mr-3 rounded-none" no-body>
      <div class="card-body !px-2.5">
        <Dashboard />
      </div>
      <div class="card-body !px-2.5 !py-0">
        <TTabs
          v-model="simpleTab"
          class="flex flex-wrap w-full text-sm font-medium text-center nav-tabs"
        >
          <TTab value="overview" :tabClass="`${simpleTabClass}`">
            Overview
          </TTab>
          <TTab value="documents" :tabClass="`${simpleTabClass}`">
            Documents
          </TTab>
          <TTab value="projects" :tabClass="`${simpleTabClass}`">
            Projects
          </TTab>
          <TTab value="follower" :tabClass="`${simpleTabClass}`">
            Followers
          </TTab>
        </TTabs>
      </div>
    </TCard>

    <div v-if="simpleTab === 'overview'">
      <Overview />
    </div>
    <div v-if="simpleTab === 'documents'">
      <Documents />
    </div>
    <div v-if="simpleTab === 'projects'">
      <Projects />
    </div>
    <div v-if="simpleTab === 'follower'">
      <Followers />
    </div>
  </div>
</template>
