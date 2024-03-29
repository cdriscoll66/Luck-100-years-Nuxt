<script setup lang="ts">
const emit = defineEmits(['goToSlide', 'hideSlide'])

const props = defineProps(['slides', 'frameWereOn'])

const component = markRaw(props.slides[props.frameWereOn].component)

const nextSlide: any = computed(() => {
  let next = props.frameWereOn - 1
  return next
})

const prevSlide: any = computed(() => {
  let prev = props.frameWereOn + 1
  return prev
})
</script>

<template>
  <div class="content-wrapper">
    <div class="timeline-button">
      <NuxtLink @click.prevent="emit('hideSlide')">Timeline</NuxtLink>
    </div>
    <div class="content__title">
      <h2 class="title">{{ props.slides[frameWereOn].title }}s</h2>
      <h4 class="subtitle">{{ props.slides[frameWereOn].subtitle }}</h4>
      <p class="subcontent">{{ props.slides[frameWereOn].content }}</p>
    </div>
    <div class="pt-50">
      <component :is="component" />
    </div>
    <div class="decade-pagination">
      <a
        v-if="props.frameWereOn === props.slides.length - 1"
        class="prev"
        @click="emit('hideSlide')"
      >
        <span>Return to Timeline</span>
      </a>
      <a v-else class="prev" @click="emit('goToSlide', prevSlide)">
        <span>Previous Decade: {{ props.slides[prevSlide].title }}</span>
      </a>
      <a v-if="props.frameWereOn === 0" class="next" @click="emit('hideSlide')">
        <span>Return to Timeline</span>
      </a>
      <a v-else class="next" @click="emit('goToSlide', nextSlide)">
        <span>Next Decade: {{ props.slides[nextSlide].title }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.content-wrapper {
  padding: 100px 25px 200px;
  min-height: 100vh;
  background-color: var(--color-off-white);
  background-image: url('/images/topography-tr.png'),
    url('/images/rock-gold-light.png'), url('/images/rock-gold-light2.png'),
    url('/images/topography-mid-left.png'), url('/images/rock-gold-light3.png'),
    url('/images/rock-gold-light4.png'), url('/images/topography-br.png');
  background-size: 50%, 100%, 100%, 30%, 100%, 100%, 45%;
  background-repeat: no-repeat;
  background-position: top right, 0 1.56%, 100% 23.01%, 0 50.5%, 100% 60.36%, 0 92.16%, bottom right; 
  outline: 1px solid var(--color-gold-light);
  outline-offset: -20px;
  @media (min-width: 1120px) {
    padding: 100px 100px 200px;
  }

}

.timeline-button {
  display: flex;
  position: fixed;
  top: 25px;
  left: 60px;
  z-index: 100;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  @media (min-width: 1120px) {
    display: none;
  }
  &:before {
    content: '';
    height: 12px;
    width: 20px;
    margin-left: -28px;
    top: 8px;
    transform: rotate(180deg);
    position: absolute;
    transition: margin-left 0.3s ease-in-out;
    background-image: url('@/assets/images/arrow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

h2.title {
  font-size: 6rem;
  line-height: 0.8;
  font-family: 'Sentinel', serif;
  color: var(--color-green);
  font-weight: 500;
  font-style: italic;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 12rem;
  }
  @media (min-width: 1120px) {
    font-size: 15.625rem;
  }
}

h4.subtitle {
  font-family: 'GothamHTF', sans-serif;
  color: var(--color-gray);
  font-size: 1.25rem;
  line-height: 1.3333;
  font-weight: 300;
  letter-spacing: -0.01em;
}

p.subcontent {
  font-weight: 200;
}

.content__title {
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - 50px);
  margin: 0 auto;
  text-align: left;
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1120px) {
    width: 50%;
  }
}

.decade-pagination {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 200px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
}

.decade-pagination a.next,
.decade-pagination a.prev {
  border: 1px solid var(--color-gold-light);
  width: 100%;
  padding: 50px 10px;
  color: var(--color-green);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  background-color: var(--color-off-white);
  span {
    position: relative;
  }
}
.decade-pagination a.next span:after,
.decade-pagination a.prev span:before {
  content: '';
  height: 12px;
  width: 20px;
  margin-left: 12px;
  top: 3px;
  position: absolute;
  transition: margin-left 0.3s ease-in-out;
  background-image: url('@/assets/images/arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display:none;
  @media (min-width: 768px) {
    display: inline-block;
  }
}

.decade-pagination a.prev span:before {
  transform: rotate(180deg);
  margin-left: -32px;
}
.decade-pagination a.next:hover span:after {
  margin-left: 20px;
}

.decade-pagination a.prev:hover span:before {
  margin-left: -40px;
}

.decade-pagination a.next:hover,
.decade-pagination a.prev:hover {
  background-color: var(--color-gold-light);
}

.pt-50 {
  padding-top: 50px;
}

.content-block {
  margin: 200px auto 0;
}

.content-block:first-child {
  margin-top: 100px;
}

.block__year {
  font-family: 'GothamHTF', sans-serif;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-bronze);
  margin-bottom: 10px;
}

.block__title {
  font-family: 'Sentinel', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 1.1667;
  color: var(--color-green);
  margin-bottom: 5px;
}

.block__text {
  font-weight: 300;
}
</style>
