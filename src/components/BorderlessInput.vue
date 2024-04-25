<template>
  <input class="cursor-text outline-none focus:border-b-2 bg-white dark:bg-black text-black dark:text-white border-black grow text-center text-xl px-2" v-model="inputValue" />
</template>

<script setup lang="ts">

import { computed } from "vue";

interface Props {
  modelValue: any;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:modelValue': [value: typeof props.modelValue]
}>()

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(inputValue) {
    emit('update:modelValue', inputValue)
  }
})

</script>
