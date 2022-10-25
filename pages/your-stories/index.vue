<script setup lang="ts">
import yourstories from '~/content/yourstories.json'
</script>

<template>
  <div class="wrapper">
    <YourStoriesHero />
    <div class="yourstories__archive">
      <div
        v-for="(story, key) in yourstories"
        class="yourstories__card"
        :key="key"
      >
        <CardsLargeCard
          v-if="story.cardtype === 'full'"
          :title="story.title"
          :type="story.type"
          :image="story.image"
          :subtitle="story.subtitle"
          :tagline="story.tagline"
          :link="story.link"
        />
        <CardsTextMediaCard
          v-else-if="story.cardtype === 'textmedia'"
          :title="story.title"
          :type="story.type"
          :image="story.image"
          :subtitle="story.subtitle"
          :tagline="story.tagline"
          :link="story.link"
        />
        <CardsProfileImageCenterCard
          v-else-if="story.cardtype === 'profileimagecenter'"
          :title="story.title"
          :type="story.type"
          :image="story.image"
          :subtitle="story.subtitle"
          :tagline="story.tagline"
          :link="story.link"
        />
        <CardsProfileImageLeftCard
          v-else-if="story.cardtype === 'profileimageleft'"
          :title="story.title"
          :type="story.type"
          :image="story.image"
          :subtitle="story.subtitle"
          :tagline="story.tagline"
          :link="story.link"
        />
        <CardsSmallShadowLeftCard
          v-else-if="story.cardtype === 'smallshadowleft'"
          :title="story.title"
          :type="story.type"
          :subtitle="story.subtitle"
          :tagline="story.tagline"
          :link="story.link"
        />
        <CardsSmallShadowRightCard
          v-else-if="story.cardtype === 'smallshadowright'"
          :title="story.title"
          :type="story.type"
          :subtitle="story.subtitle"
          :tagline="story.tagline"
          :link="story.link"
        />
        <div v-else>{{ story.title }}</div>
      </div>
    </div>

    <NuxtPage />
    <PrefooterCta />
  </div>
</template>

<style lang="scss">
.wrapper {
  padding-top: 79px;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
}

.eyebrow {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  text-transform: uppercase;
  margin-bottom: 24px;
}

.eyebrow div {
  &:before {
    content: '';
    display: inline-block;
    margin-right: 5px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 14px;
  }
  &.watch:before {
    background-image: url('~/assets/images/camera-movie.svg');
  }
  &.listen:before {
    background-image: url('~/assets/images/volume.svg');
  }
  &.read:before {
    background-image: url('~/assets/images/book.svg');
  }
}

.subtitle {
  font-weight: 500;
}

.tagline {
  font-weight: 300;
}

a.titlelink {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  h3 {
    font-style: italic;
    font-size: 3rem;
    line-height: 1.1666666666666667;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--color-green-dark);
    }
  }
  &:after {
    content: '';
    display: inline-block;
    margin-left: 12px;
    height: 12px;
    width: 20px;
    background-image: url('/images/arrow.svg');
    background-repeat: no-repeat;
    background-size: contain;
    transition: margin-left 0.2s ease-in-out;
  }
  &:hover:after {
    margin-left: 20px;
  }
}

.story__content {
  width: 100%;
  max-width: 740px;
  margin: 50px auto 50px 50px;
  p {
    margin-top: 26px;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.62;
    color: #595959;
  &.statement {
    font-family: 'Sentinel', serif;
    font-size: 2rem;
    line-height: 1.4375;
    color: var(--color-gray);
    font-style: italic;
  }
  }
}

.story__statement {
  margin: 50px auto;
  max-width: 920px;
}



.story {
  min-height: 100vh;
  padding:  80px 0 160px;
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
}

.title-block {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.title-block__inner {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 80px;
}
.pagination-links {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 200px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  text-align: center;
}

.pagination-links a.next,
.pagination-links a.prev {
  border: 1px solid var(--color-gold-light);
  width: 100%;
  padding: 50px 10px;
  color: var(--color-green);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  background-color: var(--color-off-white);
}

.pagination-links a.next:hover,
.pagination-links a.prev:hover {
  background-color: var(--color-gold-light);
}
</style>
