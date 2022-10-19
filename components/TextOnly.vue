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
  year: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="text-only content-block">
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
</template>

<style lang="scss" scoped>


.text-only {
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - 50px);
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  text-align: left;
  @media (min-width: 768px) {
    width: 90%;
    flex-flow: row nowrap;
    gap: 30px;
  }
  @media (min-width: 1120px) {
    gap: 62px;
    width: 71.5%;
  }
}

.block-title, .block-text {
  width: 100%; 
}

.align-w-title {
  margin-top: 5px;
    @media (min-width: 768px) {
      margin-top: 34px;
  }
}

</style>
