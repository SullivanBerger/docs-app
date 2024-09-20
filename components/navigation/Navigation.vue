<script setup lang="ts">

import { useMediaQuery } from "@vueuse/core";
import MobileNavigation from "~/components/navigation/MobileNavigation.vue";

const isMobile = useMediaQuery("(max-width: 767px)");

</script>

<template>
  <nav class="border border-b-neutral-200 py-4">
    <ul class="container mx-auto flex items-center space-x-4">
      <CompanyLogo class="flex-1" />
      <li class="pt-1">
        <NavigationLinkIcon
          href="https://www.linkedin.com/in/sullivan-berger"
          icon-name="ph:linkedin-logo-bold"
        />
      </li>
      <li class="pt-1">
        <NavigationLinkIcon
          href="https://github.com/SullivanBerger/docs-app"
          icon-name="ph:github-logo-bold"
        />
      </li>
      <li class="pt-1">
        <MobileNavigation v-if="isMobile" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
