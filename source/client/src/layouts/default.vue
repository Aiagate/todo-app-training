<script setup lang="ts"></script>
<template>
  <v-layout>
    <AppHeaderMenus />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>
