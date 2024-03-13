<script lang="ts" setup>
import { colors } from "@/app/utils";
import {
  AlertCircle,
  AlertOctagon,
  MoveRight,
  AlertTriangle,
  CheckCircle
} from "lucide-vue-next";
import { alertsWithImg } from "@/components/uiComponents/alerts/utils";
</script>
<template>
  <TCard title="Basic Alerts">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div v-for="item in colors" :key="item.value" class="flex flex-col gap-3">
        <TAlert :color="item.value">
          <span class="font-bold">{{ item.title }}</span>
          alert! You should check in on some of those fields below.
        </TAlert>
      </div>
    </div>
  </TCard>
  <TCard title="Outline Alerts">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div v-for="item in colors" :key="item.value" class="flex flex-col gap-3">
        <TAlert :color="item.value" outlined>
          <span class="font-bold">{{ item.title }}</span>
          alert! You should check in on some of those fields below.
        </TAlert>
      </div>
    </div>
  </TCard>
  <TCard title="Bordered Alerts">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div v-for="item in colors" :key="item.value" class="flex flex-col gap-3">
        <TAlert :color="item.value" bordered>
          <span class="font-bold">{{ item.title }}</span>
          alert! You should check in on some of those fields below.
        </TAlert>
      </div>
    </div>
  </TCard>
  <TCard title="Dismiss Alerts">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div v-for="item in colors" :key="item.value" class="flex flex-col gap-3">
        <TAlert :color="item.value" dismissible>
          <span class="font-bold">{{ item.title }}</span>
          alert! You should check in on some of those fields below.
        </TAlert>
      </div>
    </div>
  </TCard>
  <TCard with Icon title="Alerts with icon">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div v-for="item in colors" :key="item.value" class="flex flex-col gap-3">
        <TAlert :color="item.value">
          <AlertCircle class="h-4" />
          <span class="font-bold">{{ item.title }}</span>
          alert! You should check in on some of those fields below.
        </TAlert>
      </div>
    </div>
  </TCard>
  <TCard with Icon title="Alerts with Images">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div
        v-for="item in alertsWithImg"
        :key="item.value"
        class="flex flex-col gap-3"
      >
        <TAlert :color="item.value">
          <span class="flex gap-2 items-center">
            <img :src="item.src" alt="" class="size-8 rounded-full" />
            <span class="font-bold">{{ item.title }}</span>
            alert! You should check in on some of those fields below.
          </span>
        </TAlert>
      </div>
    </div>
  </TCard>
  <TCard title="Top Border Alerts">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div v-for="item in colors" :key="item.value" class="flex flex-col gap-3">
        <TAlert :color="item.value" border-top>
          <span class="font-bold">{{ item.title }}</span>
          alert! You should check in on some of those fields below.
        </TAlert>
      </div>
    </div>
  </TCard>
  <TCard title="Content Alerts">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div class="flex flex-col gap-3">
        <TAlert color="custom">
          <AlertCircle class="inline-block size-4 mt-0.5 shrink-0" />
          <div>
            <div class="mb-1 font-bold text-15">
              Hi! A simple Primary alert —check it out!
            </div>
            <ul class="ml-2 list-disc list-inside">
              <li>Send the billing agreement</li>
              <li>Send over all the documentation.</li>
              <li>Meeting with daron to review the intake form</li>
            </ul>
          </div>
        </TAlert>
      </div>
      <div class="flex flex-col gap-3">
        <TAlert color="yellow">
          <AlertOctagon class="inline-block size-4 mt-0.5 shrink-0" />
          <div>
            <div class="mb-1 font-bold text-15">
              Uh oh, something went wrong!
            </div>
            <p>
              Better check yourself, you're not looking too good. Whenever you
              need to, be sure to use margin utilities to keep things nice and
              tidy. If your device is running an outdated version of Android,
              this could be causing the issue. To check for updates, open your
              device's Settings app, go to System, and then tap System update.
            </p>
          </div>
        </TAlert>
      </div>
      <div class="flex flex-col gap-3">
        <TAlert color="green">
          <CheckCircle class="inline-block size-4 mt-0.5 shrink-0" />
          <div>
            <div class="mb-1 font-bold text-15">
              Hi! A simple Primary alert —check it out!
            </div>
            <ul class="ml-2 list-disc list-inside">
              <li>Send the billing agreement</li>
              <li>Send over all the documentation.</li>
              <li>Meeting with daron to review the intake form</li>
            </ul>
          </div>
        </TAlert>
      </div>
      <div class="flex flex-col gap-3">
        <TAlert color="red">
          <AlertTriangle class="inline-block size-4 mt-0.5 shrink-0" />
          <div>
            <div class="mb-1 font-bold text-15">Something is very wrong!</div>
            <p class="mb-2">
              Change a few things up and try submitting again. A few informal
              nouns for a mistake are a blooper, boo-boo, and blunder. We also
              have hiccup, which means a minor problem/mistake that was
              corrected.
            </p>
            <a
              href="#!"
              class="font-semibold text-red-600 transition hover:text-red-700"
              >Read More <MoveRight class="inline-block h-4 align-middle"
            /></a>
          </div>
        </TAlert>
      </div>
    </div>
  </TCard>
  <TCard title="Fill Solid Alerts">
    <div class="grid grid-cols-1 gap-3 xl:grid-cols-2">
      <div v-for="item in colors" :key="item.value" class="flex flex-col gap-3">
        <TAlert :color="item.value" solid>
          <span class="font-bold">{{ item.title }}</span>
          alert! You should check in on some of those fields below.
        </TAlert>
      </div>
    </div>
  </TCard>
</template>
