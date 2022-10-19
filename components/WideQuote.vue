<script setup lang="ts">

const props = defineProps({
  quote: {
    type: String,
    required: true,
  }
});
  
  
  </script>

<template>
  <div class="widequote">
    <div class="widequote__inner">
        <h2>{{ quote }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.widequote {
    width: 100%;
    max-width: 700px;  
    margin: 0 auto;
    text-align: center;
    margin-top: 170px;
    width: calc(100vw - 50px);
}
h2 {
    font-family: 'Professor', serif;
    font-size: 3.125rem;
    line-height: .96;
    color: var(--color-gold-darker);
}

</style>
