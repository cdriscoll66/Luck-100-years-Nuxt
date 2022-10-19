<script setup lang="ts">

const route = useRoute()

const headerClass = computed(() => {
  if (route.path === '/') {
    return 'home'
  } else if (route.path === '/hundred-years') {
    return 'hundredyears'
  } else {
    return ''
  }
})

</script>


<template>
 <header :class="headerClass">
    <div class="wrapper">
      <div class="logo">
        <NuxtLink to="/">
          <Logo :color="headerClass" />
        </NuxtLink>
        </div> 
      <nav>
        <NuxtLink to="/hundred-years">100 Years</NuxtLink>
        <NuxtLink to="/your-stories">Your Stories</NuxtLink>
        <!-- <RouterLink to="/our-dreams">Our Dreams</RouterLink> -->
        <NuxtLink to="/four-generations">Four Generations</NuxtLink>
        <!-- <RouterLink to="/giving-back">Giving back</RouterLink> -->
      </nav>
    </div>
  </header>

  <NuxtPage/>

</template>

<style lang="scss" scoped>
header {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 1.5;
  padding: 0;
  &.hundredyears {
    display: none;
  }
  &.home {
    a {
      color: var(--color-white);
    }
  }
}

.wrapper {
  max-width: 1440px;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 42px 54px 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  a {
    margin: 0 35px;
    font-weight: 300;
    text-transform: uppercase;
  }
}

nav a.router-link-active:before {
  content: '';
  height: 12px;
  width: 20px;
  display: block;
  position: absolute;
  top: 6px;
  left: -25px;
  background-image: url('@/assets/images/arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
/* 
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

</style>
