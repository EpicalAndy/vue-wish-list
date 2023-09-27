<template>
  <v-app>
    <v-app-bar></v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import HomePage from "@/pages/HomePage.vue";
</script>
