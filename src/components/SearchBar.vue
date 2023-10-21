<script setup lang="ts">

import iconSearch from '../assets/icons8-search.svg'
import {computed, ref} from "vue";
import Button from "../components/ui/Button.vue";
import {useStore} from "./../store/store.ts";

import { ElLoading } from 'element-plus'
const store = useStore()


let value = ref('')

const isdisabledButton = computed(()=> value.value.length < 1)
const findUser = () => {
  const loadingInstance =  ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  store.fetchUsers(value.value).then((res)=>{
    console.log(res)
    loadingInstance.close()
  })
}


import { ElNotification } from 'element-plus'





</script>

<template>
  <div class="text-field-root">
    <img :src="iconSearch" alt="search" class="icon">
    <input class="input" placeholder="Search GitHub username..." type='text' v-model="value">
    <div class="buttonContainer">
      <Button :disabled="isdisabledButton" title="Search" width="100" @click="findUser" height="42"/>
    </div>
  </div>
</template>

<style scoped>

.text-field-root {
  font-family: inherit;
  position: relative;
}

.input {
  font-family: unset;
  font-size: 20px;
  padding-left: 60px;
  padding-right: 200px;
  background: var(--color-background-secondary);
  outline: none;

  &::placeholder {
    color: var(--color-primary)
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
  color: var(--color-primary);
}


input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.buttonContainer {
  position: absolute;
  top: 10px;
  left: 688px;
}

</style>