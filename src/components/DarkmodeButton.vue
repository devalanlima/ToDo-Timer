<template>
    <BaseButton
    icon="fa-solid fa-moon"
    @@click="darkMode"
    />
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";

const darkMode = () => {
  if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
  } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
  }
}

</script>
