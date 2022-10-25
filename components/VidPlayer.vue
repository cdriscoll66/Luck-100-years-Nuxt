<script setup lang="ts">

const props = defineProps({
  vid: {
    type: String,
    required: true,
  }
})

</script>

<template>

<div class="video">
      <video id="vid" ref="vid" controls autoplay playsinline preload="auto">
        <source :src="props.vid" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>



</template>


<style scoped lang="scss">


.video {
  margin-top: 56px;
  video {
    width: 100%;
  }
}


</style>
