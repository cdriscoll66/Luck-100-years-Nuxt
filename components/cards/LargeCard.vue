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

const bgImage = computed(() => {
  return `url(/images/yourstories/${props.image})`
})
</script>

<template>
  <div class="largecard" :style="{ backgroundImage: bgImage }">
    <div class="largecard__text">
      <div class="eyebrow">
        <div class="watch" v-if="props.type === 'watch'">Watch</div>
        <div class="listen" v-else-if="props.type === 'listen'">Listen</div>
        <div class="read" v-else>Read</div>
      </div>
      <h3>{{ props.title }}</h3>
      <p class="subtitle">{{ props.subtitle }}</p>
      <p class="tagline">{{ props.tagline }}</p>
      <div class="link-button__wrapper">
        <NuxtLink class="link-button" :to="`/your-stories/${props.link}/`">
          <span v-if="props.type === 'watch'">Watch Story</span>
          <span v-else-if="props.type === 'listen'">Listen to the Story</span>
          <span v-else>Read the Story</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.largecard {
  margin: 126px 0;
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  padding: 35% 50px 50px;
  color: var(--color-white);
  box-shadow: 10px 14px 44px rgba(0, 0, 0, 0.15);
  @media (min-width: 768px) {
  padding: 35% 72px 72px 72px;
  }
}

.eyebrow {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  text-transform: uppercase;
}



h3 {
    color: var(--color-white);
    font-style: italic;
    font-size: 3.5rem;
    line-height: 1.07;
}

.subtitle {
    font-weight: 500;
}

.tagline {
    font-weight: 300;
}

a.link-button {
    color: var(--color-white);
}

</style>
