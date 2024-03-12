<script lang="ts" setup>
import { ref } from "vue";
import { Rocket, User2, MapPin, PartyPopper } from "lucide-vue-next";
import Account from "@/components/forms/wizard/Account.vue";
import Personal from "@/components/forms/wizard/Personal.vue";
import Address from "@/components/forms/wizard/Address.vue";
import Completed from "@/components/forms/wizard/Completed.vue";

const activeTab = ref("account");
const tabClass =
  "block px-4 py-5 text-center rounded-md text-slate-500 bg-slate-50 dark:text-zink-200 dark:bg-zink-600 group-[.active]/item:bg-custom-500 group-[.active]/item:text-custom-50 pointer-events-none cursor-default";

const iconClass =
  "block h-6 mx-auto fill-slate-200 dark:fill-zink-400 group-[.active]/item:fill-slate-200 dark:group-[.active]/item:fill-custom-500";

const onStepChange = (step: string) => {
  activeTab.value = step;
};
</script>
<template>
  <div class="grid grid-cols-1 2xl:grid-cols-12">
    <div class="col-span-12 2xl:col-start-3 2xl:col-span-8">
      <TCard>
        <TTabs
          v-model="activeTab"
          class="grid grid-cols-1 gap-3 lg:grid-cols-4 nav-tabs form-wizard"
        >
          <TTab value="account" :tabClass="tabClass">
            <Rocket :class="iconClass" />
            <span class="block mt-3 font-medium text-15">1. Account Info</span>
          </TTab>
          <TTab :tabClass="tabClass" value="personal">
            <User2 :class="iconClass" />
            <span class="block mt-3 font-medium text-15">2. Personal Info</span>
          </TTab>
          <TTab :tabClass="tabClass" value="address">
            <MapPin :class="iconClass" />
            <span class="block mt-3 font-medium text-15">
              3. Address Info
            </span>
          </TTab>
          <TTab :tabClass="tabClass" value="completed">
            <PartyPopper :class="iconClass" />
            <span class="block mt-3 font-medium text-15">4. Completed</span>
          </TTab>
        </TTabs>
        <div class="mt-5 tab-content">
          <div v-show="activeTab === 'account'" class="tab-pane">
            <Account @onStepChange="onStepChange" />
          </div>
          <div v-show="activeTab === 'personal'" class="tab-pane">
            <Personal @onStepChange="onStepChange" />
          </div>
          <div v-show="activeTab === 'address'" class="tab-pane">
            <Address @onStepChange="onStepChange" />
          </div>
          <div v-show="activeTab === 'completed'" class="tab-pane">
            <Completed @onStepChange="onStepChange" />
          </div>
        </div>
      </TCard>
    </div>
  </div>
</template>
