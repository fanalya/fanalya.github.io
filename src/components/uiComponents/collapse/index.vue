<script lang="ts" setup>
import { ChevronUp, ChevronDown } from "lucide-vue-next";
</script>
<template>
  <TCard title="Default">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <TCollapse>
        <template #actionBtn="{ onClick, isCollapsed }">
          <TButton @click="onClick" class="gap-3">
            Collapsible Button
            <ChevronUp v-if="isCollapsed" :size="15" />
            <ChevronDown v-else :size="15" />
          </TButton>
        </template>
        <template #content>
          For that very reason, I went on a quest and spoke to many different
          professional graphic designers and asked them what graphic design tips
          they live. You've probably heard that opposites attract. The same is
          true for fonts. Don't be afraid to combine font styles that are
          different but complementary, like sans serif with serif, short with
          tall, or decorative with simple. Qui photo booth letterpress, commodo
          enim craft beer mlkshk aliquip jean shorts ullamco.
        </template>
      </TCollapse>
      <TCollapse>
        <template #actionBtn="{ onClick, isCollapsed }">
          <TButton @click="onClick" class="gap-3">
            Collapsible Button
            <ChevronUp v-if="isCollapsed" :size="15" />
            <ChevronDown v-else :size="15" />
          </TButton>
        </template>
        <template #content>
          <p>
            For that very reason, I went on a quest and spoke to many different
            professional graphic designers and asked them what graphic design
            tips they live. You've probably heard that opposites attract. The
            same is true for fonts. Don't be afraid to combine font styles that
            are different but complementary, like sans serif with serif, short
            with tall, or decorative with simple. Qui photo booth letterpress,
            commodo enim craft beer mlkshk aliquip jean shorts ullamco.
          </p>
        </template>
      </TCollapse>
    </div>
  </TCard>
  <TCard title="Link Collapse">
    <TCollapse>
      <template #actionBtn="{ onClick, isCollapsed }">
        <TButton @click="onClick" class="gap-3" variant="link">
          Collapsible Button
          <ChevronUp v-if="isCollapsed" :size="15" />
          <ChevronDown v-else :size="15" />
        </TButton>
      </template>
      <template #content>
        <p>
          For that very reason, I went on a quest and spoke to many different
          professional graphic designers and asked them what graphic design tips
          they live. You've probably heard that opposites attract. The same is
          true for fonts. Don't be afraid to combine font styles that are
          different but complementary, like sans serif with serif, short with
          tall, or decorative with simple. Qui photo booth letterpress, commodo
          enim craft beer mlkshk aliquip jean shorts ullamco.
        </p>
      </template>
    </TCollapse>
  </TCard>
</template>
