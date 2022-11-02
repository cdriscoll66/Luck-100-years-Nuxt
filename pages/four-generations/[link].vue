<script lang="ts" setup>
import { Block } from '@babel/types'
import fourgenerations from '~/content/fourgenerations.json'

const route = useRoute()

const profile = computed(() => {
  return fourgenerations.find((profile) => profile.link === route.params.link)
})
</script>

<template>
  <div class="bg-wrapper__profile">
    <div class="wrapper">
      <div class="profile">
        <div class="profile__image">
          <img :src="`/images/${profile.image}`" :alt="profile.title" />
        </div>
        <div class="profile__text">
          <h2>{{ profile.title }}</h2>
          <p class="quote">{{ profile.quote }}</p>
        </div>
      </div>

      <div class="intro">
        <p v-for="paragraph in profile.intro" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div class="biography">
        <div
          v-for="(block, key) in profile.bio_blocks"
          :key="key"
          :class="['bio', block.portrait ? 'portrait' : 'landscape']"
        >
          <figure class="biography__image">
            <ZoomImage :src="`fourgens/${block.image}`" :alt="block.alt" />
            <figcaption class="caption">{{ block.caption }}</figcaption>
          </figure>
          <AudioPlayer v-if="block.audio" :audio="`/audio/${block.audio}`" />
        </div>
      </div>
      <PrefooterCta />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 20px;
  padding: 50px 20px;
  gap: 80px;
  max-width: 960px;
  @media (min-width: 900px) {
    flex-flow: row nowrap;
    width: 100%;
    margin: 120px auto 0 0;
  }
  h2 {
    font-style: italic;
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 16px;
  }
  p.quote {
    font-family: 'Professor', serif;
    font-size: 3rem;
    line-height: 1.04;
    color: var(--color-gray);
    margin-bottom: 32px;
  }
  &:nth-child(even) {
    justify-content: flex-end;
  }
}

.intro {
  width: 100%;
  max-width: 740px;

  p {
    font-weight: 200;
    line-height: 1.62;
    color: var(--color-gray-cool);
    margin-top: 16px;
  }
}

div.biography {
  display: flex;
  flex-flow: column nowrap;
  margin: 80px 10px;
}
div.bio {
  margin-top: 48px;
  &:nth-child(even) {
    align-self: flex-end;
  }
}

div.portrait {
  width: 100%;
  max-width: 466px;
}

div.landscape {
  width: 100%;
  max-width: 738px;
}

figcaption.caption {
  font-size: 0.75rem;
  font-weight: 200;
  line-height: 1.25;
  color: var(--color-gray);
  margin: 13px auto 0;
  width: 100%;
  max-width: 405px;
  text-align: center;
  &:after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url('/images/volume.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 0 0 8px;
    position: absolute;
  }
}

.bg-wrapper__profile {
  background-color: var(--color-off-white);
  background-image: 
    url('/images/topography-single.png'), url('/images/prefooter1.png'),
    url('/images/prefooter2.png');
  background-repeat: no-repeat;
  background-position:  100% 200px, 0 100%, 100% 100%;
}
</style>
