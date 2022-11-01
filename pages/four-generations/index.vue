<script setup lang="ts">
import fourgenerations from '~/content/fourgenerations.json'

</script>

<template>

<div>
    <div class="introblock">
        <h1>Four Generations</h1>
        <h3>Four generations of family leaders have built a business on the idea that every single one of us has the potential to be a leader, that if we live and lead in alignment with core values, we can all make a positive impact on the lives of other people. The importance of people and culture. A commitment to innovation and constant reinvention. An orientation toward the customer and the market. And at the core of it all-family.</h3>
        <p>These simple and powerful ideas have been passed down from generation to generation, providing consistency and clarity of purpose for the true authors of our history–the people we are honored to call our associates. It is their leadership, their commitment, their creativity and their integrity that have made it all possible, and will continue to do so for generations to come.</p>
    </div>
    <div class="profiles">
        <div v-for="profile, key in fourgenerations" class="profile">
            <div class="profile__image">
                <img :src="`images/${profile.image}`" :alt="profile.title" />
            </div>
            <div class="profile__text">
                <h2>{{ profile.title }}</h2>
                <h4>{{ profile.quote }}</h4>
                <NuxtLink :to="`four-generations/${profile.link}`">Explore His Story</NuxtLink>
            </div>
        </div> 
    </div>

</div>


</template> 


<style lang="scss" scoped>

</style>   