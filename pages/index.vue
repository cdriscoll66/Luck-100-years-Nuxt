<script setup lang="ts">


</script>


<template>
    <main>
      <HomeHeader />
      <CloverEvolution />
      <div class="outline">
        <PresidentMessage />
        <TimelineHomeBlock />
        <WideQuote quote="Our business is aggregates but people are our purpose Our mission is to ignite human potential and positively impact the lives of others around the world" />
        <YourStoriesHomeBlock />
        <HundredLogoGraphic />
      </div>
    </main>
  </template>
  
  <style lang="scss" scoped>
    .outline {
      outline: 1px solid var(--color-gold-light);
      outline-offset: -20px;
      position: unset;
    }
  
    main {
      background-image: url('/images/home-page/home-topography-bg-r.png'), url('/images/home-page/home-topography-bg.png'), url('/images/home-page/home-rock-gold2.png');
      background-repeat: no-repeat;
      background-position: 100% 63%, 0 84%, 100% 99%;
    }
  </style>