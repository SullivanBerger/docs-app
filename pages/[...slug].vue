<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import Navigation from "~/components/navigation/Navigation.vue";
import SideNavigation from "~/components/navigation/SideNavigation.vue";
import PageNavigation from "~/components/navigation/PageNavigation.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const smAndLarger = breakpoints.greaterOrEqual("md");
const lg = breakpoints.greaterOrEqual("lg");

</script>

<template>
  <div>
    <Navigation />
    <main class="relative mt-16 py-8 font-display text-neutral-800 antialiased">
      <div class="container mx-auto flex md:space-x-8">
        <ClientOnly>
          <SideNavigation
            v-if="smAndLarger"
          />

          <ContentDoc
            v-slot="{ doc }"
          >
            <ContentRenderer
              :value="doc"
              class="md:w-4/6"
            />
            <div
              v-if="lg"
              class="md:w-1/6"
            >
              <PageNavigation
                :doc="doc"
              />
            </div>
          </ContentDoc>
        </ClientOnly>
      </div>
    </main>
  </div>
</template>
