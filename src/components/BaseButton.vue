<template>
  <button 
  class="select-none m-1 disabled:cursor-not-allowed bg-white disabled:bg-gray-300 dark:bg-black text-black dark:text-white disabled:text-gray-500 disabled:opacity-75"
  @mousedown="handleMouseDown"
  @mouseup="handleMouseUp"
  @mouseleave="handleMouseLeave"
  >
    <div class="relative bg-inherit text-inherit">
      <span 
      :class="[
        'border-black dark:border-white border-2 bg-inherit w-full h-full relative z-10 block py-2 px-4 transition-transform duration-75',
        buttonIsPressed && 'translate-x-1 translate-y-1'
      ] "
      >
        <span v-if="props.icon === null">
          <slot v-if="$slots.default" />
          <p v-else>Button</p>
        </span>
        <span v-else>
          <component 
          is="i"
          :class="[props.icon, 'min-w-[14px]']" 
          />
        </span>
      </span>
      <span class="bg-black dark:bg-white block w-full h-full absolute -bottom-1 -right-1"/>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  icon?: string | null;
}
const props = withDefaults(defineProps<Props>(),{
  icon: null,
});
const emit = defineEmits(['@click']);

const buttonIsPressed = ref<boolean>(false);

const handleMouseDown = () => {
  buttonIsPressed.value = true;
}

const handleMouseUp = () => {
  buttonIsPressed.value = false;
  emit('@click');
}

const handleMouseLeave = () => {
  buttonIsPressed.value = false;
}
</script>
