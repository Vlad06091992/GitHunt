<script setup lang="ts">
import {computed} from "vue";

type Props = {
  title:string,
  logoSrc:string
  link:string
  asLink?:boolean
  altImg?:string
}

const {title, logoSrc,asLink,link} = defineProps<Props>();

const titleClass = computed(()=>{
  // debugger
  return {noTitle:!title}
})

</script>

<template>
  <div class="info_item">
    <img :src="logoSrc" :alt="altImg" />
    <div v-if="asLink"><a :href="link"><span>{{title}}</span></a></div>
    <div :class="titleClass" v-else style="line-height: 10px">{{title ? title : "no user info provided"}}</div>
  </div>
</template>

<style scoped>

.noTitle{
  color:gray;
  opacity: 0.5;
}

.info_item{
  margin-top: 10px;
  display: flex;
  gap:10px;
  align-items: center;
}
</style>