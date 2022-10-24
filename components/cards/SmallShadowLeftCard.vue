<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        required: true,
        },
    type: {
        type: String,
        required: true,
        },
    subtitle: {
        type: String,
        required: true,
        },
    tagline: {
        type: String,
        required: true,
        },
    link: {
        type: String,
        required: true,
        }
    })



</script>

<template>
    <div class="smallleft">
      <div class="smallleft__inner">
          <div class="smallleft__text">
              <div class="eyebrow">
              <div class="watch" v-if="props.type === 'watch'">Watch</div>
              <div class="listen" v-else-if="props.type === 'listen'">Listen</div>
              <div class="read" v-else>Read</div>
              </div>
              <NuxtLink class="titlelink" :to="`/your-stories/${props.link}/`">
              <h3>{{ props.title }}</h3>
              </NuxtLink>
              <p class="subtitle">{{ props.subtitle }}</p>
              <p class="tagline">{{ props.tagline }}</p>
          </div>

      </div>
  </div>
  </template>

<style lang="scss" scoped>


.smallleft {
    margin: 20px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 40px 16px 40px 50px;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 41.5%;
    }
    @media screen and (min-width: 1140px) {
        margin: -72px auto 0 0;
    }
       
}

.smallleft__inner {
    max-width:820px;
    margin: 0 auto 0 0; 
}

.smallleft__text {
    flex: 1 0 100%;

}
.smallleft__media {
    flex: 0 1 100%;
}


</style>
