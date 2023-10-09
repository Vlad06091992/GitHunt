<script setup lang="ts">
import {computed} from "vue";

type Props = {
  title: string,
  width: string;
  height:string;
}

// debugger

const {title,height,width} = defineProps<Props>();
const buttonSize = computed(()=>{
  return {
    "width": `${width}px`,
    "height": `${height}px`,
  }
})

</script>

<template>
  <button class="button" :style="buttonSize">{{ title }}</button>
</template>

<style scoped>

button {
  font-family: unset;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-primary);
  transition: transform 0.2s;
  background: var(--color-secondary);
  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(0.95);
  }
}

</style>