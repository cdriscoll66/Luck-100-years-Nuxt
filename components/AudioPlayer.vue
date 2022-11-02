<script setup lang="ts">

const props = defineProps({
  audio: {
    type: String,
    required: true,
  }
})

</script>

<template>
<div class="audio">
    <audio controls>
        <source :src="props.audio" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</div>
</template>

<style scoped lang="scss">
.audio {
  margin: 20px;
  box-shadow: 3px 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  audio {
    width: 100%;
  }
}

audio::-webkit-media-controls-panel {
  background-color: #fff;
}


/* 
audio::-webkit-media-controls-mute-button
audio::-webkit-media-controls-play-button
audio::-webkit-media-controls-timeline-container
audio::-webkit-media-controls-current-time-display
audio::-webkit-media-controls-time-remaining-display
audio::-webkit-media-controls-timeline
audio::-webkit-media-controls-volume-slider-container
audio::-webkit-media-controls-volume-slider
audio::-webkit-media-controls-seek-back-button
audio::-webkit-media-controls-seek-forward-button
audio::-webkit-media-controls-fullscreen-button
audio::-webkit-media-controls-rewind-button
audio::-webkit-media-controls-return-to-realtime-button
audio::-webkit-media-controls-toggle-closed-captions-button */

</style>