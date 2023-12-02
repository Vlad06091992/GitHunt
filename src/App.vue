<script setup lang="ts">


import SearchBar from "../src/components/SearchBar.vue";
import Profile from "../src/components/Profile.vue";
import {useStore} from "../src/store/store.ts";
import {storeToRefs} from "pinia";

const store = useStore()

const {user} = storeToRefs(store)

</script>

<template>
  <search-bar/>
  <profile v-if="user?.login"/>
</template>

<style scoped>

</style>
