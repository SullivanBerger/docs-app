<script setup lang="ts">

</script>

<template>
  <nav class="w-1/6">
    <ContentNavigation v-slot="{ navigation }">
      <ul class="flex flex-col space-y-2">
        <li
          v-for="link of navigation"
          :key="link._path"
        >
          <NuxtLink :to="link._path">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>
