<script setup lang="ts">

type Props = {
  title: string;
  description?: string;
  content: string;
};

defineProps<Props>();

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        {{ title }}
      </CardTitle>
      <CardDescription>
        {{ description }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      {{ content }}
    </CardContent>
  </Card>
</template>
