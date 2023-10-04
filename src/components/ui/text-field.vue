<script setup lang="ts">

import {ref} from "vue";

let value = ref('')

</script>

<template>
  <div>
    <input class="input" type='text' v-model="value">
  </div>
</template>

<style scoped>
.input{
  background: var(--color-background-secondary);
}
</style>