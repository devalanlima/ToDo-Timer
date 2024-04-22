<template>
  <input class="outline-none focus:bg-gray-300 grow shadow-solid border-2 border-black py-2 px-4 m-1" v-model="inputValue">
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
