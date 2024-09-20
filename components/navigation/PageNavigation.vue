<script setup lang="ts">

import type { ParsedContent } from "@nuxt/content";
import { clsx } from "clsx";

type Props = {
  doc: ParsedContent;
};

defineProps<Props>();

</script>

<template>
  <div
    class="fixed"
  >
    <span class="font-decorative font-semibold">On this page</span>
    <ul
      v-for="children in doc.body!.children"
      :key="children.props!.id"
      class="pb-1"
    >
      <li v-if="children.tag === 'h2' || children.tag === 'h3'">
        <NavigationSideNavigationLink
          :to="`#${children.props!.id}`"
          :class="clsx(children.tag === 'h3' && 'ml-4')"
        >
          {{ children.children![0].value }}
        </NavigationSideNavigationLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
