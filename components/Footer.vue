<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-links">
      <NuxtLink to="#">Luck Store</NuxtLink>
      <NuxtLink to="#">Luck Ecosystems</NuxtLink>
      <NuxtLink to="#">Luck Real Estate</NuxtLink>
      <NuxtLink to="#">Luck Companies</NuxtLink>
    </div>
    <div class="footer-logo">
      <NuxtLink href="/">
        <img src="~/assets/images/logo.svg" alt="Luck 100 year logo" />
      </NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100%;
  max-width: calc(100vw - 110px);
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.footer-links {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-flow: column nowrap;
  justify-content: space-between;
  a {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    line-height: 1.06;
    letter-spacing: 0.2em;
    color: var(--color-gold);
  }
  @media (min-width: 900px) {
    gap: 72px;
    flex-flow: row nowrap;
  }
}
</style>
