<script setup lang="ts">

import { Sheet, SheetTrigger } from "~/components/ui/sheet";
import SideNavigation from "~/components/navigation/SideNavigation.vue";

</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Icon
        name="ph:list-bold"
        class="transition duration-300 ease-in-out hover:text-indigo-500"
      />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          <CompanyLogo />
        </SheetTitle>
      </SheetHeader>
      <SideNavigation />
    </SheetContent>
  </Sheet>
</template>

<style scoped>

</style>
