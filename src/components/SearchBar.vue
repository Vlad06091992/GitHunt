<script setup lang="ts">

import iconSearch from 'src/assets/icons8-search.svg'

type Props = {
  placeholder: string,
}

const {placeholder} = defineProps<Props>();

import {ref} from "vue";
import Button from "src/components/ui/button.vue";

let value = ref('')

</script>

<template>
  <div class="text-field-root">
    <img :src="iconSearch" alt="search" class="icon">
    <input class="input" placeholder="Search GitHub username..." type='text' v-model="value">
    <div class="buttonContainer">
      <Button title="Search" width="100" height="42"/>
    </div>
  </div>
</template>

<style scoped>

.text-field-root {
  position: relative;
}

.input {
  font-size: 20px;
  padding-left: 60px;
  padding-right: 200px;
  background: var(--color-background-secondary);
  outline: none;

  &::placeholder {
    color: var(--color-text)
  }

}

.icon {
  position: absolute;
  top: 25%;
  left: 20px;
  width: 30px;
  height: 30px;
}

input {
  width: 540px;
  height: 60px;
  border-radius: 4px;
  border: none;
  color: var(--color-text);
}


input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.buttonContainer{
  position: absolute;
  top:10px;
  left: 688px;
}

</style>