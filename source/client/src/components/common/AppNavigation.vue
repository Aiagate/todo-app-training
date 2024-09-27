<script setup lang="ts">
interface Menu {
  icon: string;
  title: string;
  path: string;
}

const menus = ref<Array<Menu>>([
  { icon: "mdi-home", title: "Home", path: "/" },
  { icon: "mdi-cog", title: "Settings", path: "/settings" },
  { icon: "mdi-information", title: "About", path: "/about" },
]);
</script>
<template>
  <v-navigation-drawer permanent>
    <v-list-item
      v-for="menu in menus"
      :key="menu.title"
      :title="menu.title"
      @click="navigateTo({ path: menu.path })"
    >
      <template v-slot:prepend>
        <v-icon :icon="menu.icon" />
      </template>
    </v-list-item>
  </v-navigation-drawer>
</template>
