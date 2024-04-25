<template>
  <li class="py-2 select-none px-4 border-2 border-black bg-white shadow-solid dark:shadow-solidWhite dark:border-white dark:bg-black cursor-move relative flex justify-between items-center">
    <slot/>
    <BaseTimer
    v-show="timerIsOpen"
    class="absolute -top-4 right-36 hover:z-50"
    v-model:is-expired="isExpired" 
    v-model:is-running="isRunning"
    />
    <div>
      <BaseButton
      v-if="!isExpired"
      icon="fa-clock fa-solid" 
      @@click="timerIsOpen = !timerIsOpen"
      />
      <BaseButton
      v-else
      icon="fa-pause fa-solid" 
      @@click="isExpired = false"
      />
      <BaseButton
      icon="fa-solid fa-close"
      @@click="$emit('@deleteItem')"
      />
    </div>
    <AudioTimer v-model:play-audio="isExpired" />
  </li>
</template>

<script setup lang="ts">
import AudioTimer from './AudioTimer.vue';
import BaseButton from './BaseButton.vue';
import BaseTimer from './BaseTimer.vue';
import { ref } from "vue";

const isRunning = ref<boolean>(false);
const isExpired = ref<boolean>(false);
const timerIsOpen = ref<boolean>(false);

const emit = defineEmits(['@deleteItem'])
</script>

<style scoped>

</style>