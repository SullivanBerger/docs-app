<script setup lang="ts">

</script>

<template>
  <nav class="py-8 md:w-1/6">
    <ContentNavigation v-slot="{ navigation }">
      <div
        v-for="directory of navigation"
        :key="directory._path"
        class="mb-2 font-decorative"
      >
        <p class="mb-1 font-decorative font-semibold">
          {{ directory.title }}
        </p>
        <ul>
          <li
            v-for="children in directory.children"
            :key="children._path"
            class="py-1 text-neutral-500"
          >
            <NavigationSideNavigationLink
              :to="children._path"
              class="transition duration-300 ease-in-out hover:text-indigo-500"
            >
              {{ children.title }}
            </NavigationSideNavigationLink>
          </li>
        </ul>
      </div>
    </ContentNavigation>
  </nav>
</template>
