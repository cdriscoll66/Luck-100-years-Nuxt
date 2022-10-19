<script setup lang="ts">

</script>


<template>
    <main>
      <HomeHeader />
      <CloverEvolution />
      <div class="outline">
        <PresidentMessage />
        <TimelineHomeBlock />
        <WideQuote quote="We will ignite human potential through Values Based Leadership and positively impact the lives of others around the world." />
        <YourStoriesHomeBlock />
        <HundredLogoGraphic />
      </div>
      <Footer />
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
      background-position: 100% 2150px, 0 2400px, 100% 3200px;
    }
  </style>