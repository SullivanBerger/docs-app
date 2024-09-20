<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import Navigation from "~/components/navigation/Navigation.vue";
import SideNavigation from "~/components/navigation/SideNavigation.vue";
import PageNavigation from "~/components/navigation/PageNavigation.vue";

const isTabletOrDesktop = useMediaQuery("(min-width: 768px)");
const isDesktop = useMediaQuery("(min-width: 1024px)");

</script>

<template>
  <div>
    <Navigation />
    <main class="relative py-8 font-display text-neutral-800 antialiased">
      <div class="container mx-auto flex md:space-x-8">
        <SideNavigation
          v-if="isTabletOrDesktop"
        />
        <ContentDoc
          v-slot="{ doc }"
        >
          <ContentRenderer
            :value="doc"
            class="md:w-4/6"
          />
          <div
            v-if="isDesktop"
            class="md:w-1/6"
          >
            <PageNavigation
              :doc="doc"
            />
          </div>
        </ContentDoc>
      </div>
    </main>
  </div>
</template>
