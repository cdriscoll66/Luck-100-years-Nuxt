<script setup lang="ts">

const emit = defineEmits(['start']);


</script>

<template>
<div :class="['intro']">
    <div class="intro-content">
      <img class="luck-logo" src="~/assets/images/100-logo.svg" width="506" height="211" alt="Luck 100 Years Logo" />
      <h1>Powering Possibilities</h1>
      <p>
        100 years of powering possibilities for our <br /> associates, customers and communities.
      </p>
     
      <button @click.prevent="emit('start')">Explore our History</button>
    </div>
  </div>
  </template>

<style scoped>

  .intro {
    background-image: url('/images/timeline-intro-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    outline: 1px solid var(--color-bronze);
    outline-offset: -20px;
  }
  .intro-content {
    /* width: 60vw; */
    margin: 20vh auto 0;
    color: var(--color-off-white);

  }
  .intro-content p {
    font-family: 'GothamHTF', sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 1.166667;
  }
  
  .intro-content h1 {
    color: var(--color-white);
   font-family: 'Sentinel', serif;
   font-weight: 200;
   font-style: italic;
   font-size: 5.25rem;
  }

  .intro-content button {
    background-color: transparent;
    color: var(--color-off-white);
    text-transform: uppercase;
    font-weight: 200;
    font-size: .875rem;
    line-height: 1;
    padding: 1em 2em;
    border: 1px solid var(--color-bronze);
    letter-spacing: 3px;
    margin: 20px auto 0;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s ease-in-out;
  }

  .intro-content button:after {
    content: '';
    display: flex;
    width: 20px;
    height: 12px;
    background-image: url('~/assets/images/arrow.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 10px;
  }

  .intro-content button:hover {
    background-color: var(--color-gray);
  }
</style>