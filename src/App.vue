<template>
  <div class="pt-10 relative">
    <DarkmodeButton class="absolute top-1 left-4" />
    <ul class="gap-5 grid grid-cols-[repeat(auto-fill,_minmax(500px,_1fr))] justify-items-center m-5">
      <template v-for="item in allLists" :key="item.id">
        <li :id="item.id" class="grow w-full">
          <ListContainer @@deleteItem="deleleteItem(item.id)" />
        </li>
      </template>
    </ul>
    <BaseButton class="fixed my-auto bottom-5 w-14 left-1/2 -translate-x-1/2" icon="fa-solid fa-plus" @@click="allLists.push({
        name: 'Edit Title...',
        id: v4(),
    })"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ListContainer from "./components/ListContainer.vue";
import { v4 } from "uuid";
import BaseButton from "./components/BaseButton.vue";
import DarkmodeButton from "./components/DarkmodeButton.vue";

const allLists = ref([{
  name: 'Edit Title...',
  id: v4(),
}]);

const deleleteItem = (id: string) => {
  allLists.value = allLists.value.filter(item => item.id !== id);
}

const colorTheme = ref<string | null>(localStorage.getItem('theme'));

colorTheme.value !== null && document.documentElement.classList.add(colorTheme.value);
</script>
