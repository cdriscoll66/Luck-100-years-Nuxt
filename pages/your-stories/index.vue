<script setup lang="ts">

 import yourstories from '~/content/yourstories.json'
</script>

<template>
  <div class="wrapper">
    <div class="hero-yourstories">
      <div class="hero-yourstories__content">
        <h1 class="hero-yourstories__title">Your Stories</h1>
        <p class="hero-yourstories__text">
          For 100 years, Luck Companies has been about people. Our business is
          built on the idea that every one of us has the potential to be a
          leader, that if we live and lead in alignment with core values, we can
          all make a positive impact on the lives of other people. The Luck
          Companies story is best told in the voices of the customers and
          community partners who inspire us every day. Hear from the people who
          have made this milestone possible.
        </p>
      </div>
      <div class="yourstories__archive">
        <div v-for="story, key in yourstories" class="yourstories__card" :key="key">
            <CardsLargeCard v-if="story.cardtype === 'full'" title="story.title" type="story.type" image="story.image" subtitle="story.subtitle" tagline="story.tagline" link="story.link"  />
            <CardsTextMediaCard v-else-if="story.cardtype === 'textmedia'" title="story.title" type="story.type" image="story.image" subtitle="story.subtitle" tagline="story.tagline" link="story.link"  />
            <CardsProfileImageCenterCard v-else-if="story.cardtype === 'profileimagecenter'" title="story.title" type="story.type" image="story.image" subtitle="story.subtitle" tagline="story.tagline" link="story.link"  />
            <CardsProfileImageLeftCard v-else-if="story.cardtype === 'profileimageleft'" title="story.title" type="story.type" image="story.image" subtitle="story.subtitle" tagline="story.tagline" link="story.link"  />
            <CardsSmallShadowLeftCard v-else-if="story.cardtype === 'smallshadowleft'" title="story.title" type="story.type" image="story.image" subtitle="story.subtitle" tagline="story.tagline" link="story.link"  />
            <CardsSmallShadowRightCard v-else-if="story.cardtype === 'smallshadowright'" title="story.title" type="story.type" image="story.image" subtitle="story.subtitle" tagline="story.tagline" link="story.link"  />
            <div v-else>{{ story.title }}</div>
        </div>
      </div>
    </div>

    <NuxtPage></NuxtPage>
  </div>
</template>

<style lang="scss" scoped></style>
