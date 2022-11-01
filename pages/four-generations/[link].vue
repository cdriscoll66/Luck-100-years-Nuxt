<script lang="ts" setup>

import fourgenerations from '~/content/fourgenerations.json'

const route = useRoute()

const profile = computed(() => {
  return fourgenerations.find((profile) => profile.link === route.params.link)
})

</script>

<template>
<h1>{{ profile.title }}</h1>
</template>

<style lang="scss" scoped>
</style>