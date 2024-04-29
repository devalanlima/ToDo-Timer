# ToDo-list with timer
This project is a to-do list with countdown timer.

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Dependencies

- [vue-uuid](https://github.com/VitorLuizC/vue-uuid)
- [vuedraggable](https://github.com/SortableJS/vue.draggable.next)

## Components

### AudioTimer
AudioTimer is a audio component.

| Props  | Required  | Type |  Description
|---|---|---|---|
| playAudio  | true  | boolean  | start or end audio playback |

##### Import
import AudioTimer from 'components/AudioTimer.vue';
##### Usage and Examples
The <AudioTimer/> tag defines a audio component.
```
<AudioTimer v-model:play-audio="false" />
```

### BaseButton
BaseButton is a clickable button.

| Props  | Required  | Type |  Description
|---|---|---|---|
| icon  | false  | string/null  | You can define icons, instead of text, from FontAwesome |

| Emit  | Required  | Description |  
|---|---|---|
| @@click  | false  | Callback to invoke when BaseButton is clicked.  | 

##### Import
import BaseButton from 'components/BaseButton.vue';
##### Usage and Examples
The <BaseButton/> tag defines a clickable button.
Inside a <BaseButton/> element you can put text and tags.
```
<BaseButton> My Button <BaseButton/>
```

##### Icons
You can define icons, instead of text, from [FontAwesome](https://fontawesome.com/).
```
<BaseButton icon="fa-solid fa-trash"/>
```

### BaseInput
BaseInput defines a single-line text or number input field

##### Import
import BaseInput from 'components/BaseInput.vue';
##### Usage and Examples
The <BaseInput/> tag defines a input.
```
<BaseInput type="text"/>
<BaseInput type="number"/>
```

### BorderlessInput
Same as BaseInput, but in a different style.
 
### BaseTimer
BaseTimer is a countdown component.

| Props  | Required  | Type |  Description
|---|---|---|---|
| isExpired  | false  | boolean  | if timer is expired |
| isRunning  | false  | boolean  | if timer is running |

##### Import
import BaseTimer from 'components/BaseTimer.vue';
##### Usage and Examples
The <BaseTimer/> tag defines a component.
```
 <BaseTimer v-model:is-expired="isExpired" v-model:is-running="isRunning"/>
```
### DarkmodeButton
DarkmodeButton  is a clickable button to change the theme.

##### Import
import DarkmodeButton from 'components/DarkmodeButton.vue';
##### Usage and Examples
The <DarkmodeButton/> tag defines a clickable button.
On click DarkmodeButton it switches the old theme to the new theme and stores it in storage.

```
<DarkmodeButton/>
```

### DraggableList
DragabbleList is a list of itens that can be dragged.

| Props  | Required  | Type |  Description
|---|---|---|---|
| itemArray  | true  | Array<{name: string, id: string}>  | Array that will be rendered in the list |


##### Import
import DraggableList from 'components/DraggableList.vue';
##### Usage and Examples
The <DraggableList> tag defines a component list for use in conjunction with <DraggableItem/> or another tag.
```
  <draggable 
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
```
For more information about <Draggable/> component visit  [vuedraggable](https://github.com/SortableJS/vue.draggable.next).

### DraggableItem
DragabbleItem is an item that will be dragged.

| Emit  | Required  | Description |  
|---|---|---|
| @@deleteItem  | false  | Callback to invoke when BaseButton is clicked for the purpose of deleting the item  | 
##### Import
import DraggableItem from 'components/DraggableItem.vue';
##### Usage and Examples
The <DraggableItem/> tag defines a component item for use in conjunction with <DraggableList/>.
```
<DraggableItem/>
```

### ListContainer
ListContainer is a container responsible for housing the entire list .

| Emit  | Required  | Description |  
|---|---|---|
| @@deleteItem  | false  | Callback to invoke when BaseButton is clicked for the purpose of deleting the list  | 
##### Import
import ListContainer from 'components/ListContainer.vue';
##### Usage and Examples
The <ListContainer/> tag defines a component list.
```
<ListContainer/>
```

