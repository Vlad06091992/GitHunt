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
  <profile v-if="user.login"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
