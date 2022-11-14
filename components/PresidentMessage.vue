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
          As we mark our 100th year in business, I'm humbled by the dedication of so many who have made this milestone possible. Together, we have built this company on a simple idea: people are our purpose, and every one of us has the potential to make a positive impact.
        </p>
        <p>
          Thank you for joining us to reflect on our shared history, celebrate the impact we've made together and look ahead to a future woven with possibilities. We're so glad you're here.
        </p>
        <p>Many thanks,</p>
        <p class="signature">Charlie Luck IV</p>
        <p>President and CEO<br />Luck Companies</p>
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
  @media screen and (min-width: 1210px) {
    width: 100%;
    flex-flow: row nowrap;
  }
}

.president__media {
  width: 100%;
  flex: 1 0 52%;
  img {
    width: 100%;
  }
}

.president__text {
  flex: 0 1 48%;
  /* padding: 0 20px; */
  @media screen and (min-width: 1120px) {
    /* padding: 0; */
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
  margin-top: 30px; 
}
</style>
