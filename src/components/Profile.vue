<script setup lang="ts">
import {useStore} from "./../store/store.ts";
import {storeToRefs} from "pinia";
import InfoItem from "./InfoItem.vue";
const store = useStore()

const {getValidDate, user} = storeToRefs(store)


const locationIcon = "~/../public/assets/location-pin-alt-1-svgrepo-com.svg"
const twitterIcon = "~/../public/assets/twitter-3-svgrepo-com.svg"
const companyIcon = "~/../public/assets/building-user-svgrepo-com.svg"
const githubIcon = "~/../public/assets/github.svg"


</script>

<template>
  <div class="root">
    <div class="ava">
      <img :src=user?.avatar_url>
    </div>
    <div class="profileInfo">
      <div class="personalInfo">
        <h2 class="name">{{ user?.name }}</h2>
        <p class="nik">{{ `@${user?.login}` }}</p>
        <p class="bio">{{ user?.bio }}</p>
      </div>
      <div class="data">
        <h3>Joined {{ getValidDate }}</h3>
      </div>
      <div class="main">
        <div>
          <p>Repos</p>
          <p>{{ user?.public_repos }}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{{ user?.followers }}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{{ user?.following }}</p>
        </div>
      </div>
      <div class="contacts">
        <InfoItem alt-img="user location" :title="user?.location" :logoSrc="locationIcon"/>
        <InfoItem :link="user?.html_url" :as-link="true" :title="'link to github'" :logoSrc="githubIcon"/>
      </div>
      <div class=" social">
        <InfoItem :title="user?.twitter_username" :logoSrc="twitterIcon"/>
        <InfoItem :title="user?.company" :logoSrc="companyIcon"/>
      </div>
    </div>
  </div>
  <!--  <div v-else>Find user</div>-->
</template>

<style scoped lang="scss">
.root {
  gap: 10px;
  color: var(--color-primary);
  display: flex;
  align-items: start;
  width: 800px;
  background: var(--color-background-secondary);


  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }

  .ava {
    width: 100px;
    margin: 20px;
  }

  .profileInfo {
    display: grid;
    width: 75%;
    align-items: start;
    grid-template:
      "profile data" 150px
      "main  main"   auto
      "contacts social" 100px
      / auto  auto;
    gap: 7px;


    .personalInfo {
      grid-area: profile;

      .name {

      }

      .nik {
        color: var(--color-secondary);
      }

      .bio {
        color: var(--color-thertiary);
      }

    }

    .data {
      text-align: end;
      align-self: start;
      grid-area: data;
    }

    .main {
      display: flex;
      justify-content: space-around;
      grid-area: main;
      background: var(--color-background-primary);
    }

    .contacts {
      grid-area: contacts;
    }

    .info_item {
      margin-top: 10px;
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .social {
      grid-area: social;
    }

  }


}
</style>