<script setup lang="ts">

import {onMounted} from 'vue'
import { modalStore } from '~/stores/ModalStore'

const store = modalStore();

const closeModal = () => {
    store.toggleModal();
    document.body.classList.remove('paused')
}


onMounted(() => {
  document.body.classList.add('paused')
});


</script>

<template>
  <div class="modal">
    <div class="modal__offclick" @click="closeModal"></div>
    <div class="modal__header">
        <a @click="closeModal">X</a>
    </div>
    <div v-if="store.mediatype === 'image'" class="modal__inner">
        <img :src="store.medialink" :alt="store.mediaalt" /> 
    </div>
    <div v-else class="modal__inner">
        <video id="vid" ref="vid" controls autoplay preload="auto">
        <source :src='store.medialink' type="video/mp4">
            Your browser does not support the video tag.
        </video>    
      </div>
  </div>
</template>

<style lang="scss" scoped>


.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
}

.modal__offclick {
    background-color: rgba(0,0,0,0.75);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
}

.modal__header {
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 1;
  a {
    color: var(--color-white);
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
  }
}

.modal__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
  pointer-events: none;
  img, video {
    pointer-events: all;
    max-width: 90vh;
    max-height: 90vh;
  }
}
</style>