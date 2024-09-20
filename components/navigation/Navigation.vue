<script setup lang="ts">

import { breakpointsTailwind } from "@vueuse/core";
import MobileNavigation from "~/components/navigation/MobileNavigation.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const mdAndSmaller = breakpoints.smaller("md");

</script>

<template>
  <nav class="fixed top-0 z-10 w-full border border-b-neutral-200 bg-white/80 py-4 backdrop-blur-sm ">
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
      <ClientOnly>
        <li class="pt-1">
          <MobileNavigation v-if="mdAndSmaller" />
        </li>
      </ClientOnly>
    </ul>
  </nav>
</template>

<style scoped>

</style>
