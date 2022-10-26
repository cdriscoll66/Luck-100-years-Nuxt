<script setup lang="ts">
import { modalStore } from '~/stores/ModalStore'

const store = modalStore()
const route = useRoute()
const router = useRouter();

const state = reactive({
  menuOpen: false,
  siteWidth: null
})

onMounted(() => {
  state.siteWidth = window.innerWidth;
    window.addEventListener("resize", () => {
        state.menuOpen = false;
        state.siteWidth = window.innerWidth;
  })});


router.afterEach((to, from, next) => {
  state.menuOpen = false;
  next;
})

const headerClass = computed(() => {
  if (route.path === '/') {
    return 'home'
  } else if (route.path === '/hundred-years') {
    return 'hundredyears'
  } else {
    return ''
  }
})

const ToggleMenu = () => {
  state.menuOpen = !state.menuOpen
}
</script>

<template>
  <header :class="headerClass">
    <div class="wrapper">
      <div class="logo">
        <NuxtLink to="/">
          <Logo :color="headerClass" />
        </NuxtLink>
      </div>
      <Transition>
        <nav v-show="state.menuOpen || (state.siteWidth >= 900)">
          <NuxtLink to="/hundred-years">100 Years</NuxtLink>
          <NuxtLink to="/your-stories">Your Stories</NuxtLink>
          <!-- <RouterLink to="/our-dreams">Our Dreams</RouterLink> -->
          <NuxtLink to="/four-generations">Four Generations</NuxtLink>
          <!-- <RouterLink to="/giving-back">Giving back</RouterLink> -->
        </nav>
      </Transition>
      <button class="toggle" @click.prevent="ToggleMenu">
        <X v-if="state.menuOpen" />
        <Bars v-else />
      </button>

    </div>
  </header>

  <NuxtPage />

  <Transition>
    <Modal v-if="store.showmodal" />
  </Transition>
  <Footer />
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

.toggle {
  display: block;
  background-color: var(--color-bronze-light);
  @media (min-width: 900px) {
    display: none;
  }
}

.wrapper {
  max-width: 1440px;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-start;
  padding: 42px 54px 0;
}

nav {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  background-color: var(--color-gold);
  padding: 1rem 0;
  position: fixed;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 30px;
  padding: 0;
  @media (min-width: 900px) {
    background-color: var(--color-transparent);
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    position: relative;
    width: auto;
    gap: unset;
  }
  a {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5rem;
    padding: 35px 0;
    &:hover {
      background: var(--color-gold-dark);
      @media (min-width: 900px) {
        background: var(--color-transparent);

      }
    }
    &:active {
      font-weight: 700;
    }
    @media (min-width: 900px) {
      padding: 0;
      margin: 0 35px;
      font-size: 1rem;

    }
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
  background-image: url('~/assets/images/arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
