<template>
  <section class="border-2 border-black px-2 py-4 shadow-solid bg-white dark:bg-black dark:shadow-solidWhite dark:border-white flex flex-col gap-5">
    <div class="w-full flex">
      <BaseButton icon="fa-solid fa-close" class="max-w-[50px]" @@click="$emit('@delItem')" />
      <BorderlessInput placeholder="Edit Title..." class="m-2 mr-14" type="text" v-model="inputTitle"/>
    </div>
    <div class="w-full flex">
      <BaseInput placeholder="New Item" v-model="inputValue" />
      <BaseButton 
      icon="fa-solid fa-plus" 
      @@click="addItem"
      />
    </div>
    <DraggableList 
    v-model:item-array="myArray"
    />
  </section>
</template>

<script setup lang="ts">
import DraggableList from "../components/DraggableList.vue"; 
import { v4 } from 'uuid';
import { ref } from "vue"; 
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";
import BorderlessInput from "./BorderlessInput.vue";

const inputValue = ref<string>("")
const inputTitle = ref<string>("")

interface Item {
  name: string;
  id: string;
};

const emit = defineEmits(['@delItem']);

const addItem = () => {
  myArray.value.push({
      name: inputValue.value,
      id: v4(),
  })
  inputValue.value = ""
}

const myArray = ref<Array<Item>>([
  {
    name: '',
    id: v4(),
  },
]);

</script>

