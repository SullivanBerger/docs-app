<script setup lang="ts">
import Navigation from "~/components/navigation/Navigation.vue";
import SideNavigation from "~/components/navigation/SideNavigation.vue";
</script>

<template>
  <main class="font-display text-neutral-600">
    <Navigation />
    <div class="container mx-auto flex">
      <SideNavigation />
      <ContentDoc />
    </div>
  </main>
</template>
