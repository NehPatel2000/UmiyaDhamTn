<script setup>
import TopNavBar from 'components/TopNavBar.vue'
import BottomNavBar from 'components/BottomNavBar.vue'
</script>

<template>
  <q-layout view="lHh lpr lFf">
    <top-nav-bar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <bottom-nav-bar />
  </q-layout>
</template>

<style scoped>
/* Add any additional styles here */
</style>
