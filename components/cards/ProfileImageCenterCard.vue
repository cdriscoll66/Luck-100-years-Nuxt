<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        required: true,
        },
    type: {
        type: String,
        required: true,
        },
    image: {
        type: String,
        required: true,
        },
    subtitle: {
        type: String,
        required: true,
        },
    tagline: {
        type: String,
        required: true,
        },
    link: {
        type: String,
        required: true,
        }
    })



</script>

<template>
  <h1>{{ props.title }}profile image center</h1>

</template>

<style lang="scss" scoped></style>
