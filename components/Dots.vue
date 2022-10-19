<script setup lang="ts">

import { onBeforeRouteLeave } from 'vue-router'

import pkg from 'scroll-lock/dist/scroll-lock.js';
const { enablePageScroll } = pkg;

const props = defineProps({
  slides: {
    type: Object,
    required: true,
  },
  onScreen: {
    type: Number,
    required: true,
  },
})

// const router = u seRouter();
onBeforeRouteLeave((to, from) => {
  enablePageScroll(document.querySelector('.htmlstage')!);
  document.body.style.overflow = 'auto'
})


const emit = defineEmits(['goToSlide'])

const activeDot: any = computed(() => {
  return props.slides.length - props.onScreen
})
</script>

<template>
  <div class="nav-bar-container">
    <NuxtLink to="/">
      <img class="luck-logo" src="~/assets/images/logo.svg"  alt="Luck Logo" />
    </NuxtLink>
    <ul class="dotnav">
      <li v-for="(slide, index) in props.slides">
        <button @click="emit('goToSlide', index)">
          <span v-if="activeDot === index"></span>
          {{ slide.title }}s
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav-bar-container {
  position: fixed;
  left: 0;
  top: 0;
  padding: 40px 0 40px 40px;
  z-index: 10000;
}

ul.dotnav {
  position: relative;
  padding: 0;
  width: 100%;
  align-items: center;
  height: 100%;
  flex-flow: column-reverse nowrap;
  justify-content: flex-end;
  list-style: none;
  display: none;
  @media (min-width: 1120px) {
    display: flex;
  }
}

ul.dotnav li button {
  display: flex;
  margin-top: 30px;
  border: none;
  background: transparent;
  position: relative;
  font-size: 14px;
  color: var(--color-gold);
}

ul.dotnav li button span {
  height: 8px;
  width: 13px;
  position: absolute;
  bottom: 5px;
  left: -18px;
  display: block;
  background-image: url('~/assets/images/arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
