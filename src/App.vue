<template>
  <HelloWorld/>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

const colorTheme = ref<string | null>(localStorage.getItem('theme'));

colorTheme.value !== null && document.documentElement.classList.add(colorTheme.value);
</script>
