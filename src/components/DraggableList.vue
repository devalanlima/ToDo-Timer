<template>
  <draggable 
  class="flex flex-col gap-3 m-1" 
  v-model="myArray" 
  item-key="id" 
  tag="ul"
  v-bind="dragOptions"
  >
  <template #item="{element}">
    <DraggableItem :id="element.id" @@delete-item="handleDeleteItem(element.id)" >
      <BorderlessInput type="text" placeholder="Edit here..." v-model="element.name"/>
    </DraggableItem>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import draggable from 'vuedraggable';
import DraggableItem from "../components/DraggableItem.vue";
import BorderlessInput from "./BorderlessInput.vue";

interface Item {
  name: string;
  id: string;
}

interface Props {
  itemArray: Array<Item>;
}

const emit = defineEmits<{
  'update:itemArray': [value: typeof props.itemArray],
}>()

const props = defineProps<Props>();

const myArray = computed({
  get() {
    return props.itemArray
  },
  set(myArray) {
    emit('update:itemArray', myArray);
  }
})

const handleDeleteItem = (id: string) => {
  myArray.value = myArray.value.filter(item => item.id !== id);
}

const dragOptions = ref({
  animation: 150,
  group: "description",
  disabled: false,
  ghostClass: "ghost",
})
</script>
