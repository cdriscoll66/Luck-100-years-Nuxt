<script setup lang="ts">


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
})
</script>

<template>
  <div class="big-media-text content-block">
    <div class="big-media-text__image">
      <ZoomImage :src="image" :alt="title"/>
    </div>
    <div class="big-media-text__text">
      <div class="block-title">
        <div class="block__year">
          {{ year }}
        </div>
        <div class="block__title">
          {{ title }}
        </div>
      </div>
      <div class="block-text">
        <div class="block__text align-w-title">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.big-media-text {
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - 50px);
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: left;
  @media (min-width: 768px) {
    width: 90%;
    gap: 30px;
  }
  @media (min-width: 1120px) {
    gap: 50px;
    width: 71.5%;
  }
}

.big-media-text__text {
    display:flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    @media (min-width: 768px) {
      flex-flow: row nowrap;
    }
}

.big-media-text__image {
  width: 100%;
  img {
    width: 100%;
  }
}

.block-title,
.block-text {
  width: 100%;
}

.align-w-title {
    margin-top: 5px;
    @media (min-width: 768px) {
      margin-top: 34px;
    }
    
}
</style>
