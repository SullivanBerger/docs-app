<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import Navigation from "~/components/navigation/Navigation.vue";
import SideNavigation from "~/components/navigation/SideNavigation.vue";

const isDesktopScreen = useMediaQuery("(min-width: 768px)");

</script>

<template>
  <main class="font-display text-neutral-600">
    <Navigation />
    <div class="container mx-auto flex">
      <SideNavigation v-if="isDesktopScreen" />
      <ContentDoc />
    </div>
  </main>
</template>
