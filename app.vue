<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const title = ref('Nuxt3');
const description = ref('Nuxt3 Example Project');
// useHead({
//   title,
//   meta: [
//     {
//       name: 'description',
//       content: description,
//     },
//   ],
// });
useSeoMeta({
  title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Vue & Nuxt` : 'Vue & Nuxt';
  },
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.png',
});
</script>
