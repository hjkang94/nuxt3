<template>
  <div>
    <div class="text-h2 q-mt-xl q-mb-md">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped></style>
