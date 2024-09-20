<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import Navigation from "~/components/navigation/Navigation.vue";
import SideNavigation from "~/components/navigation/SideNavigation.vue";

const isDesktopScreen = useMediaQuery("(min-width: 768px)");

</script>

<template>
  <main class="font-display text-neutral-800 antialiased">
    <Navigation />
    <div class="container mx-auto flex md:space-x-8">
      <SideNavigation
        v-if="isDesktopScreen"
        class="w-1/6"
      />
      <ContentDoc class="md:w-4/6" />
    </div>
  </main>
</template>
