<script setup lang="ts">

import { modalStore } from '~/stores/ModalStore'

const store = modalStore();

const playModal = () => {
    store.setType('video');
    store.setLink('/video/rickroll.mp4');
    store.toggleModal();
}




</script>

<template>
  <div class="president">
    <div class="president__inner">
      <div class="president__text">
        <h2>A Message From Our President</h2>
        <p>
          Morbi finibus felis ut eros facilisis, faucibus tristique felis
          elementum. Pellentesque eleifend commodo eros, non pretium augue
          suscipit
        </p>
        <p>
          Morbi finibus felis ut eros facilisis, faucibus tristique felis
          elementum. Pellentesque eleifend commodo eros, non pretium augue
          suscipit
        </p>
        <p>Sincerely,</p>
        <p class="signature">Charlie Luck IV</p>
      </div>
      <div class="president__media">
        <a @click="playModal">
          <img src="/images/home-page/video-placeholder.jpg" alt="president" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.president {
  background-image: url('/images/home-page/home-rock-gold1.png');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 45%;
}

.president__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column-reverse nowrap;
  max-width: 1120px;
  width: calc(100vw - 50px);
  margin: 0 auto;
  padding-top: 135px;
  gap: 50px;
  padding-bottom: 200px;
  @media screen and (min-width: 1170px) {
    width: 100%;
    flex-flow: row nowrap;
  }
}

.president__media {
  width: 100%;
  img {
    width: 100%;
  }
}

h2 {
  font-family: 'Sentinel', serif;
  font-size: 3.5rem;
  font-style: italic;
  font-weight: 300;
  line-height: 1.07;
  color: var(--color-green);
}

p {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.625;
  color: var(--color-gray);
  margin-top: 10px;
}

p.signature {
  font-family: 'Professor', serif;
  font-size: 2.25rem;
  line-height: 1;
  color: #220e00;
}
</style>
