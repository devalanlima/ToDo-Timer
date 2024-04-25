<template>
  <div class="flex flex-col gap-1 border-2 shadow-solid border-black bg-white dark:bg-black py-3 px-4 z-20 dark:shadow-solidWhite dark:border-white">      
    <div class="flex pt-2 justify-between">
      <span class="relative">
        <p class="absolute text-sm text-black dark:text-white -top-[17px] m-1">days</p>
        <BaseInput
        class="max-w-[44px] px-[2px] max-h-[28px] text-center font-semibold"
        id="days"
        min="0"
        v-model="days"
        type="number"
        @wheel="handleWheel"
        @input="pauseTimer"
        
        />
      </span>   
      <span class="relative">
        <p class="absolute text-sm text-black dark:text-white -top-[17px] m-1">hours</p>
        <BaseInput
        class="max-w-[44px] px-[2px] max-h-[28px] text-center font-semibold"
        id="hours"
        min="0"
        max="60"
        v-model="hours"
        type="number"
        @wheel="handleWheel"
        @input="pauseTimer"
        
        />
      </span>
      <span class="relative">
        <p class="absolute text-sm text-black dark:text-white -top-[17px] m-1">min</p>
        <BaseInput
        class="max-w-[44px] px-[2px] max-h-[28px] text-center font-semibold"
        id="minutes"
        min="0"
        max="60"
        v-model="minutes"
        type="number"
        @wheel="handleWheel"
        @input="pauseTimer"
        
      />
      </span>
      <span class="relative">
        <p class="absolute text-sm text-black dark:text-white -top-[17px] m-1">sec</p>
        <BaseInput
          class="max-w-[44px] px-[2px] max-h-[28px] text-center font-semibold"
          id="seconds"
          min="0"
          max="60"
          v-model="seconds"
          type="number"
          @wheel="handleWheel"
          @input="pauseTimer"
          
        />
      </span>
    </div>
    <div class="flex justify-between">      
      <BaseButton title="Add +5 minutes" @@click="addTime(300)">
        <p class="font-semibold">+5min</p>
      </BaseButton>    
      <BaseButton title="Clear Alarm" @@click="clearTimer()" icon="fa-solid fa-trash"/>

      <BaseButton title="Restart Alarm" @@click="restartTimer()" icon="fa-solid fa-arrows-rotate"/>    
      <BaseButton :title="isRunning ? 'Pause Alarm' : 'Start Alarm'" @@click="isRunning ? pauseTimer() : startTimer()" :icon="!isRunning? 'fa-solid fa-play': 'fa-solid fa-pause'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch, watchEffect } from "vue";
import BaseInput from "../components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";

interface Props { 
  isExpired?: boolean | undefined,
  isRunning?: boolean | undefined,
}

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const totalTimeTimer = ref(0);

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:isExpired': [value: typeof props.isExpired],
  'update:isRunning': [value: typeof props.isRunning],
}>()

const initialDays = ref(0);
const initialHours = ref(0);
const initialMinutes = ref(0);
const initialSeconds = ref(0);

const isRunning = ref(false);
const isExpired = computed({
  get() {
    return props.isExpired
  },
  set(isExpired) {
    emit("update:isExpired", isExpired)
  }
});
const isPaused = ref(false);

let timerInterval: number;

watch(()=> totalTimeTimer.value, ()=>convertToTime());

const convertToTime = () => {
  days.value = Math.floor(totalTimeTimer.value / 86400);
  hours.value = Math.floor((totalTimeTimer.value % 86400) / 3600);
  minutes.value = Math.floor((totalTimeTimer.value % 3600) / 60);
  seconds.value = totalTimeTimer.value % 60; 
}

const convertToSeconds = (days: number, hours: number, minutes: number, seconds: number): number => {
  let daysTimer =  days * 86400;
  let hoursTimer =  hours * 3600;
  let minutesTimer = minutes * 60;
  let secondsTimer = seconds;

  return daysTimer + hoursTimer + minutesTimer + secondsTimer;
}

const setInitialTimer = () => {
  initialDays.value = days.value;
  initialHours.value = hours.value;
  initialMinutes.value = minutes.value;
  initialSeconds.value = seconds.value;
}

const startTimer = () => {
  isRunning.value = true;
  clearInterval(timerInterval);

  if (!isPaused.value) {
    setInitialTimer();
  }
  isPaused.value = false;

  totalTimeTimer.value = convertToSeconds(days.value, hours.value, minutes.value, seconds.value);

  timerInterval = setInterval(() => {     
    if (totalTimeTimer.value > 0) {
      totalTimeTimer.value--;
    } else {
      clearInterval(timerInterval);
      isRunning.value = false;
      isExpired.value = true;
    }
  }, 1000);
}

const pauseTimer = () => {
  if (isRunning.value) {
    clearInterval(timerInterval);
    isRunning.value = false;
    isPaused.value = true;
  }
}

const restartTimer = () => {
  totalTimeTimer.value = convertToSeconds(initialDays.value, initialHours.value, initialMinutes.value, initialSeconds.value);
  pauseTimer();
}

const clearTimer = () => {
  totalTimeTimer.value = 0;
}

const addTime = (seconds: number) => {
  totalTimeTimer.value += seconds;
  convertToTime();
  setInitialTimer();
}

const handleWheel = (event: WheelEvent) => {  
  event.preventDefault();
  const direction = event.deltaY > 0 ? -1 : 1;
  pauseTimer();

  const incrementOrDecrement = (variable: number) => {
    let finalValue = variable;
    if (finalValue === 0 ) {
      if (direction !== -1) {
        finalValue += direction;
      }
    } else if (finalValue === 59 ){
      if (direction !== 1) {
        finalValue += direction;
      }
    } else {
      finalValue += direction;
    }
    return finalValue;
  }

  if (event.target instanceof HTMLElement) {
    switch (event.target.id) {
    case 'days':
      days.value = incrementOrDecrement(days.value)
      break;
    case 'hours':
      hours.value = incrementOrDecrement(hours.value)
      break;
    case 'minutes':
      minutes.value = incrementOrDecrement(minutes.value)
      break;
    case 'seconds':
      seconds.value = incrementOrDecrement(seconds.value)
      break;
    default:
      break;
    }
  }
}

onMounted(()=>{
  watchEffect(()=>{
    emit('update:isExpired', isExpired.value);    
  });
  watchEffect(()=>{
    emit('update:isRunning', isRunning.value)
  });
})
</script>