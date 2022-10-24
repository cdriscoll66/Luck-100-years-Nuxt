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
    image: {
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
    <div class="profileleft">
      <div class="profileleft__inner">
        <div class="profileleft__media">
                  <img :src="`/images/yourstories/${props.image}`" :alt=props.title />
          </div>
          <div class="profileleft__text">
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

.profileleft {
    margin: 50px 10px 30px;
}

.profileleft__inner {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 30px;
    max-width:820px;
    margin: 0 auto 0 0; 

    @media screen and (min-width: 768px) {
        flex-flow: row nowrap;
        gap: 80px;
    }
    @media screen and (min-width: 1120px) {

    }

}

.profileleft__text {
    flex: 1 0 100%;

}
.profileleft__media {
    flex: 0 1 100%;
}


</style>
