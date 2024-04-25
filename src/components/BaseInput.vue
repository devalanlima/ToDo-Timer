<template>
  <input class="outline-none focus:bg-gray-300 grow shadow-solid border-2 bg-white dark:bg-black dark:border-white border-black text-black dark:text-white dark:shadow-solidWhite dark:focus:bg-gray-800 py-2 px-4 m-1" v-model="inputValue">
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: any | undefined;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: typeof props.modelValue];
}>()

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(inputValue) {
    emit('update:modelValue', inputValue);
  }
})

</script>
