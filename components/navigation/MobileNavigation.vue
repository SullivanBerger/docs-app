<script setup lang="ts">

import { Sheet, SheetTrigger } from "~/components/ui/sheet";
import SideNavigation from "~/components/navigation/SideNavigation.vue";

</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <button>
        <Icon
          name="ph:list-bold"
          class="transition duration-300 ease-in-out hover:text-indigo-500"
        />
      </button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          <CompanyLogo />
        </SheetTitle>
        <SheetDescription />
      </SheetHeader>
      <ClientOnly>
        <SideNavigation />
      </ClientOnly>
    </SheetContent>
  </Sheet>
</template>

<style scoped>

</style>
