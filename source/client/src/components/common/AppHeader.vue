<script setup>
const emit = defineEmits(["click-nav-icon"]);

function clickNavIcon() {
  emit("click-nav-icon");
}

function pushToHome() {
  console.log("pushToHome");
  return navigateTo({
    path: "/",
  });
}
</script>
<template>
  <v-app-bar color="primary" :elevation="2" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="clickNavIcon()" />
    </template>
    <v-toolbar-title text="Todo App" @click="pushToHome()" />
  </v-app-bar>
</template>
