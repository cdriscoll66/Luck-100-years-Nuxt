<script setup lang="ts">

import { modalStore } from '~/stores/ModalStore'

const store = modalStore();

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
    alt: {
    type: String,
    required: true,
} 
});

const openImage = () => {
    store.setType('image');
    store.setLink(`/images/content-images/${props.src}`);
    store.setAlt(props.alt);
    store.toggleModal();
}
</script>

<template>
  <div class="zoom-image">
    <img :src="`/images/content-images/${src}`" :alt="alt" class="primary-image" a/>
    <a class="open-modal" @click="openImage"><img src="~/assets/images/viewmodal.png" width="44" height="44" alt="open" /></a>
  </div>
</template>

<style lang="scss" scoped>
  img.primary-image {
    width: 100%;
  }

  a.open-modal {
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
  }
</style>