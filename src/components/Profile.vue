<script setup lang="ts">
import {build} from "vite";
import {useStore} from "./../store/store.ts";
import {storeToRefs} from "pinia";
const store = useStore()

const{getValidDate,user} = storeToRefs(store)

</script>

<template>



  <div class="root">
    <div class="ava">
      <img :src=user.avatar_url>
    </div>
    <div class="profileInfo">
      <div class="personalInfo">
        <h2 class="name">{{store.user.login}}</h2>
        <p class="nik">@octocat</p>
        <p class="bio"> This profile has no bio</p>
      </div>
      <div class="data">
        <h3>Joined {{getValidDate}}</h3>
      </div>
      <div class="main">
        <div>
          <p>Repos</p>
          <p>{{user.public_repos}}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{{user.followers}}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{{user.following}}</p>
        </div>
      </div>
      <div class="contacts">
        <div>
          <img src="../assets/location-pin-alt-1-svgrepo-com.svg" alt="location"/>
          <span>{{user.location}}</span>
        </div>

        <div>
          <img src="../assets/web-link-svgrepo-com.svg" alt="location"/>
          <span>https://github.com</span>
        </div>
      </div>
      <div class="social">
        <div>
          <img src="../assets/twitter-3-svgrepo-com.svg" alt="location"/>
          <span>{{user.twitter_username}}</span>
        </div>
        <div>
          <img src="../assets/building-user-svgrepo-com.svg" alt="location"/>
          <span>{{user.company}}</span>
        </div>
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
    grid-gap: 20px;
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

    .social {
      grid-area: social;
    }

  }


}
</style>