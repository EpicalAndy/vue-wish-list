<template>
  <component :is="layout">
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

const route = useRoute();
const layout = computed(() => {
  const layouts = {
    MainLayout
  }

  return layouts[route?.meta?.layout];
});

</script>
