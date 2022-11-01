<script setup lang="ts">
import yourstories from '~/content/yourstories.json'

const route = useRoute()

const profile = computed(() => {
  return yourstories.find((profile) => profile.link === route.params.link)
})

const nextlink = computed(() => {
  const index = yourstories.findIndex(
    (profile) => profile.link === route.params.link,
  )
  const link = '/your-stories/'
  if (index === yourstories.length - 1) {
    return link + yourstories[0].link
  } else {
    return link + yourstories[index + 1].link
  }
})

const imglink = ((img) => {
  return '/images/yourstories/' + img
})

</script>

<template>
  <div class="story-wrapper">
    <div class="story">
      <div class="title-block">
        <div class="title-block__inner">
          <div v-if="profile.type == 'listen'" class="title-block__image">
            <img :src="imglink(profile.image)" :alt="profile.title" />
          </div>
          <div class="title-block__text">
            <div class="eyebrow">
              <div v-if="profile.type == 'watch'" class="watch">Watch</div>
              <div v-else-if="profile.type == 'listen'" class="listen">
                Listen
              </div>
              <div v-else class="read">Read</div>
            </div>
            <h1>{{ profile.title }}</h1>
            <p class="subtitle">{{ profile.subtitle }}</p>
            <p class="tagline">{{ profile.tagline }}</p>
          </div>
        </div>
      </div>

      <div v-if="profile.bigImage" class="big-image">
        <img :src="imglink(profile.bigImage)" :alt="profile.title" />
      </div>

      <AudioPlayer v-if="profile.audio" :audio=profile.audio />

      <div class="story__content">
        <p v-for="line in profile.content.p">
            {{ line }}
        </p>
      </div>

      <div v-if="profile.content.quote" class="story__content story__statement">
        <p v-for="line in profile.content.quote" class="statement">
            {{ line }}
        </p>
      </div>

      <PrefooterCta />
    </div>
    <div class="pagination-links">
      <NuxtLink to="/your-stories" class="prev">
        <span>Back To All Stories</span>
      </NuxtLink>
      <NuxtLink class="next" :to="nextlink">
        <span>Next Story</span>
      </NuxtLink>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.story__statement {
    p:first-of-type:before {
        content: '"';
    }
    p:last-of-type:after {
        content: '"';
    }
}
</style>
