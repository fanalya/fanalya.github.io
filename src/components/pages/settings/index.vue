<script lang="ts" setup>
import { ref } from "vue";
import Dashboard from "@/components/pages/account/Dashboard.vue";
import PersonalInfo from "@/components/pages/settings/PersonalInfo.vue";
import Integration from "@/components/pages/settings/Integration.vue";
import ChangePassword from "@/components/pages/settings/ChangePassword.vue";
import PrivacyPolicy from "@/components/pages/settings/PrivacyPolicy.vue";

const simpleTab = ref("personal info");
const simpleTabClass = `inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 dark:group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"`;
</script>

<template>
  <div class="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
    <TCard no-body>
      <div class="card-body">
        <Dashboard />
      </div>
      <div class="card-body !py-0">
        <TTabs
          v-model="simpleTab"
          class="flex flex-wrap w-full text-sm font-medium text-center nav-tabs"
        >
          <TTab value="personal info" :tabClass="`${simpleTabClass}`">
            Personal Info
          </TTab>
          <TTab value="integration" :tabClass="`${simpleTabClass}`">
            Integration
          </TTab>
          <TTab value="change password" :tabClass="`${simpleTabClass}`">
            Change Password
          </TTab>
          <TTab value="privacy policy" :tabClass="`${simpleTabClass}`">
            Privacy Policy
          </TTab>
        </TTabs>
      </div>
    </TCard>

    <div v-if="simpleTab === 'personal info'">
      <PersonalInfo />
    </div>
    <div v-if="simpleTab === 'integration'">
      <Integration />
    </div>
    <div v-if="simpleTab === 'change password'">
      <ChangePassword />
    </div>
    <div v-if="simpleTab === 'privacy policy'">
      <PrivacyPolicy />
    </div>
  </div>
</template>
