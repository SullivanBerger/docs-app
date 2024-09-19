<script setup lang="ts">

import { useMediaQuery } from "@vueuse/core";
import MobileNavigation from "~/components/navigation/MobileNavigation.vue";

const isMobileScreen = useMediaQuery("(max-width: 767px)");

</script>

<template>
  <nav class="border border-b-neutral-200 py-4">
    <ul class="mx-auto flex w-5/6 items-center space-x-4 md:w-4/6">
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
        <MobileNavigation v-if="isMobileScreen" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
