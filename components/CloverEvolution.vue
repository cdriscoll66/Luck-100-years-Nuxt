<script setup lang="ts"></script>

<template>
  <div class="clover-evo">
    <div class="clover-evo__inner">
      <div class="clover-evo__title">
        <h2>
          <span>The Evolution&nbsp;</span>
          <span>of the Clover</span>
        </h2>
      </div>
      <div class="clover-evo__showcase">
        <div v-for="key in 6" class="clover-evo__clover">
          <img
            :src="'/images/home-page/clover' + key + '.svg'"
            :alt="'clover' + key"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clover-evo {
  width: 100%;
  max-width: 1280px;
  margin: 28px auto 0;
}
.clover-evo__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  @media screen and (min-width: 1280px) {
    flex-flow: row nowrap;
  }
}


.clover-evo__showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
}

h2 {
  display: flex;
  flex-flow: row nowrap;
  @media screen and (min-width: 1280px) {
    flex-flow: column nowrap;
  }
  span {
    font-family: 'Sentinel', serif;
    font-size: 1.5rem;
    line-height: 1.166667;
    font-weight: 300;
    text-align: left;
    color: var(--color-gold);
    font-style: italic;
  }
}
</style>
