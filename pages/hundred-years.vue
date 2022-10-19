<script setup lang="ts">
// import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import NineteenTwenty from '../components/slidepages/1920.vue';
import NinteenThirty from '../components/slidepages//1930.vue';
import NinteenFourty from '../components/slidepages/1940.vue';
import NinteenFifty from '../components/slidepages/1950.vue';
import NinteenSixty from '../components/slidepages/1960.vue';
import NinteenSeventy from '../components/slidepages/1970.vue';
import NinteenEighty from '../components/slidepages/1980.vue';
import NinteenNinety from '../components/slidepages/1990.vue';
import TwoThousand from '../components/slidepages/2000.vue';
import TwoThousandTen from '../components/slidepages/2010.vue';
import TwoThousandTwenty from '../components/slidepages/2020.vue';

const { disablePageScroll, enablePageScroll} = require('scroll-lock');

const state = reactive({
  showIntro: true,
  showDots: false,
  activeSlide: null,
  onScreen: 0,
})

const slides = reactive([
  {
    title: '2020',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/2020.png',
    zValStart: 11000,
    zVal: 11000,
    component: shallowRef(TwoThousandTwenty),
  },
  {
    title: '2010',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/2010.png',
    zValStart: 10000,
    zVal: 10000,
    component: shallowRef(TwoThousandTen),
  },
  {
    title: '2000',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/2000.png',
    zValStart: 9000,
    zVal: 9000,
    component: shallowRef(TwoThousand),
  },
  {
    title: '1990',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/1990.png',
    zValStart: 8000,
    zVal: 8000,
    component: shallowRef(NinteenNinety),
  },
  {
    title: '1980',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/1980.png',
    zValStart: 7000,
    zVal: 7000,
    component: shallowRef(NinteenEighty),
  },
  {
    title: '1970',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/1970.png',
    zValStart: 6000,
    zVal: 6000,
    component: shallowRef(NinteenSeventy),
  },
  {
    title: '1960',
    subtitle: 'The company takes key steps to establish its approach to innovation, testing automated timecard machines for associates, and its people-first culture, offering medical benefits and launching The Cloverleaf, the associate magazine that is printed today.',
    image: '/images/1960.png',
    zValStart: 5000,
    zVal: 5000,
    component: shallowRef(NinteenSixty),
  },
  {
    title: '1950',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/1950.png',
    zValStart: 4000,
    zVal: 4000,
    component: shallowRef(NinteenFifty),
  },
  {
    title: '1940',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/1940.png',
    zValStart: 3000,
    zVal: 3000,
    component: shallowRef(NinteenFourty),
  },
  {
    title: '1930',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/1930.png',
    zValStart: 2000,
    zVal: 2000,
    component: shallowRef(NinteenThirty),
  },
  {
    title: '1920',
    subtitle: 'The Decade of the Next Generation of Leadership & Automation',
    image: '/images/1920.png',
    zValStart: 1000,
    zVal: 1000,
    component: shallowRef(NineteenTwenty),
  },
])

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (e: any) => {
  let top = document.body.scrollTop || document.documentElement.scrollTop
  Object.keys(slides).map((x, i) => {
    slides[i].zVal = slides[i].zValStart - top
  })
  state.onScreen = Math.round((top + 490) / 1000)
}

const zBind = (num: any) => {
  let zVal = slides[num].zVal
  let showHide = zVal < 0 ? 'none' : 'block'
  // let fadeOpacity = zVal < 200 ? 1 - (zVal - 100) / -100 : 1 this one was the working one. don't lose.
  let fadeOpacity
  if (zVal > 1600) {
    fadeOpacity = 0
  } else if (zVal > 1100) {
    fadeOpacity = 1 - (zVal - 1100) / 500
  } else if (zVal < 200) {
    fadeOpacity = 1 - (zVal - 100) / -100 
  } else {
    fadeOpacity = 1
  }
  let transform = 'translateZ(-' + zVal + 'px)'
  let answer = {
    transform: transform,
    display: showHide,
    opacity: fadeOpacity,
  }
  return answer
}

const scrollToSlide = (num: number) => {
  const scrollPromise: any =  new Promise((resolve, reject) => {
  let goHere = slides[num].zValStart - 100
  resolve(  
    window.scrollTo({
    top: goHere,
    behavior: 'smooth',
  }))
  return scrollPromise;
})
}

const showCase = (num: any) => {
  scrollToSlide(num);
  state.activeSlide = num;
  disablePageScroll(document.querySelector('.htmlstage')!)
  document.body.style.overflow = 'hidden'
}

const hideCase = () => {
  state.activeSlide = null
  enablePageScroll(document.querySelector('.htmlstage')!)
  document.body.style.overflow = 'auto'
}

const dotSlide = (num: number) => {
  if (state.activeSlide === null) {
    showCase(num)
  } else {
    hideCase()
    scrollToSlide(num)
  }
}

const startTheShow = () => {
  state.showIntro = false
  window.scrollTo(0, document.body.scrollHeight)
  scrollToTop(5000)
  setTimeout(() => {
    state.showDots = true
  }, 5000)
}
</script>

<template>
  <main class="htmlstage">
    <div class="background-slide"></div>
    <div id="content">
      <Dots
        :class="['dots', state.showDots ? '' : 'hide-dots']"
        :slides="slides"
        :onScreen="state.onScreen"
        @goToSlide="dotSlide"
      
      />
      <Transition>
        <IntroSlide v-show="state.showIntro" @start="startTheShow"></IntroSlide>
      </Transition>
      <div id="viewport">
        <div @click.prevent="hideCase()" class="overlay"></div>

        <div
          v-for="(slide, index) in slides"
          class="frame"
          :key="index"
          v-bind:style="zBind(index)"
        >
          <div :class="{'inner-content': String, 'inner-content__open': state.activeSlide !== null}">
            <div class="stage">
              <div v-if="state.activeSlide == index" class="content-container">
                <Content
                  :slides="slides"
                  :frameWereOn="state.activeSlide"
                  @goToSlide="showCase"
                  @hideSlide="hideCase()"
                ></Content>
              </div>

              <div v-else class="collage-container">
                <img v-bind:src="slide.image" />
              </div>
            </div>
          </div>


          <a
            v-show="!state.activeSlide"
            @click.prevent="showCase(index)"
            class="slideclick"
          ></a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.htmlstage {
  background-size: 130%;
  height: 12814px;
  text-align: center;
  scroll-behavior: smooth;
  z-index: 0;
}

.background-slide {
  position: fixed;
  background-color: var(--color-off-white);
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  outline: 1px solid var(--color-gold-light);
  outline-offset: -20px;
  background-image: url('/images/topography-tr.png'),
    url('/images/topography-bl.png');
  background-size: 50%, 50%;
  background-repeat: no-repeat, no-repeat;
  background-position: top right, bottom left;
}

#content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* if smaller content box is used and centering is needed: 
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      */
}
#viewport {
  -webkit-perspective: 300px;
  -moz-perspective: 300px;
  -webkit-perspective-origin: 50% 50%;
  -moz-perspective-origin: 50% 50%;
  -moz-transform-style: preserve-3d;
  width: 100%;
  height: 100%;
}

.frame {
  position: absolute;
  width: 100%;
  height: 100%;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

.collage-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.collage-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.slideclick,
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.slideclick {
  transform:translateZ(101px);
}


.inner-content {
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.inner-content__open {
  transform: translateZ(100px);
}

.content-container {
  background-color: var(--color-off-white);
}

.stage {
  overflow: scroll;
  height: 100vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.dots {
  transform: translateX(0);
  transition: transform 1s ease-in-out;
}

.hide-dots {
  transform: translateX(-200px);
}
</style>
