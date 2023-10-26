<script setup lang="ts">
import {computed} from "vue";

type Props = {
  title?:string | null,
  logoSrc?:string
  link?:string
  asLink?:boolean
  altImg?:string
}

const props = defineProps<Props>();

const titleClass = computed(()=>{
  // debugger
  return {noTitle:!props.title}
})

</script>

<template>
  <div class="info_item">
    <img :src="logoSrc" :alt="altImg" />
    <div v-if="asLink"><a class="link" :href="link"><span>{{props.title}}</span></a></div>
    <div :class="titleClass" v-else style="line-height: 10px">{{props.title ? props.title : "no user info provided"}}</div>
  </div>
</template>

<style scoped>

.noTitle{
  color:gray;
  opacity: 0.5;
}

.link, link:visited{
  color:white;
}

.info_item{
  margin-top: 10px;
  display: flex;
  gap:10px;
  align-items: center;
}
</style>