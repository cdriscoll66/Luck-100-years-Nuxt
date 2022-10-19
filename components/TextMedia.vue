<script setup lang="ts">
import ZoomImage from './ZoomImage.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});


</script>

<template>
  <div class="text-media content-block">
    <div class="text-media__content">
      <div class="block-content">
        <div class="block__year">
            {{ year }}
        </div>
        <div class="block__title">
            {{ title }}
            </div>
            <div class="block__text">
            {{ text }}
            </div>

      </div>
    </div>
    <div class="text-media__image">
      <div class="block-image">
        <ZoomImage :src="image" :alt="title"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-media {
  display: flex;
  flex-flow: column-reverse nowrap;
  width: calc(100% - 50px);
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media (min-width: 768px) {
    width: 90%;
    flex-flow: row nowrap;
    gap: 30px;
  }
  @media (min-width: 1120px) {
    gap: 50px;
    width: 66.667%
  }
}

.text-media__image, .text-media__content {
  width: 100%;
}

.block-content {
  text-align: left;
  flex: 0 1 55% 
}

.block-image {
  flex: 0 1 45%;
  img {
    width: 100%;
  }
}
</style>

