<script setup lang="ts">

type Props = {
  href: string;
  iconName: string;
};

defineProps<Props>();

</script>

<template>
  <a
    :href="href"
    target="_blank"
  >
    <Icon
      :name="iconName"
      size="20"
      class="transition duration-300 ease-in-out hover:text-indigo-500"
    />
  </a>
</template>
