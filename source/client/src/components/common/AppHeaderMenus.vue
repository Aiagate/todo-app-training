<script setup>
const isShowNavigation = ref(false);

function toggleNavigationMenu() {
  isShowNavigation.value = !isShowNavigation.value;
}
</script>
<template>
  <AppHeader @click-nav-icon="toggleNavigationMenu()" />
  <AppNavigation v-model="isShowNavigation" />
</template>
