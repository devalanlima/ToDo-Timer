<template>
  <audio class="sr-only" ref="soundAlarm" :src="`/digital_alarm_sound.webm`" preload="auto"/>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

interface Props {
  playAudio: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:playAudio': [value: typeof props.playAudio];
}>()

const soundAlarm = ref<HTMLAudioElement>();

const soundIsPlaying = computed({
  get() {
    return props.playAudio;
  },
  set(soundIsPlaying) {
    emit('update:playAudio', soundIsPlaying);
  }
})

let intervalSoundAlarm: number;
watch(() => soundIsPlaying.value, (newValue) => {
  if (newValue) {
    intervalSoundAlarm = setInterval(()=> soundAlarm.value?.play(), soundAlarm.value?.duration && soundAlarm.value.duration / 1000);
  } else {      
    soundAlarm.value?.pause();
    clearInterval(intervalSoundAlarm);
  }
})

</script>