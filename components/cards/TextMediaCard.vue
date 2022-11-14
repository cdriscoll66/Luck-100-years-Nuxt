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
  <div class="textmediacard">
    <div class="textmediacard__inner">
        <div class="textmediacard__text">
            <div class="eyebrow">
            <div class="watch" v-if="props.type === 'watch'">Watch</div>
            <div class="listen" v-else-if="props.type === 'listen'">Listen</div>
            <div class="read" v-else>Read</div>
            </div>
            <NuxtLink class="titlelink" :to="`/your-stories/${props.link}/`">
            <h3>{{ props.title }}</h3>
            </NuxtLink>
            <p class="subtitle">{{ props.subtitle }}</p>
            <p class="tagline">{{ props.tagline }}</p>
        </div>
        <div class="textmediacard__media">
                <img :src="`/images/yourstories/${props.image}`" :alt=props.title />
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

.textmediacard {
    margin-top: 96px;
    margin-bottom: 96px;
}
.textmediacard__inner {
    display: flex;
    flex-flow: column-reverse nowrap;
    justify-content: space-between;
    gap: 50px;
    @media (min-width: 768px) {
        flex-flow: row nowrap;
    }
    margin: 30px 50px;

}
.textmediacard__text {
    flex: 0 1 50%;
    display: flex;
    flex-flow: column;
    justify-content: center;
}

.textmediacard__media {
    flex: 1 0 50%;
    img {
        width: 100%;
        height: auto;
    }
}

</style>
