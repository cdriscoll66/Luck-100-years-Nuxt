<script setup lang="ts">
import fourgenerations from '~/content/fourgenerations.json'

</script>

<template>

<div class="wrapper">
    <div class="introblock">
        <div class="introblock__inner">
            <h1>Four Generations</h1>
            <h3>Four generations of family leaders have built a business on the idea that every single one of us has the potential to be a leader, that if we live and lead in alignment with core values, we can all make a positive impact on the lives of other people. The importance of people and culture. A commitment to innovation and constant reinvention. An orientation toward the customer and the market. And at the core of it all-family.</h3>
            <p>These simple and powerful ideas have been passed down from generation to generation, providing consistency and clarity of purpose for the true authors of our history–the people we are honored to call our associates. It is their leadership, their commitment, their creativity and their integrity that have made it all possible, and will continue to do so for generations to come.</p>
        </div>
    </div>
    <div class="profiles">
        <div v-for="profile, key in fourgenerations" class="profile">
            <div class="profile__image">
                <img :src="`images/${profile.image}`" :alt="profile.title" />
            </div>
            <div class="profile__text">
                <h2>{{ profile.title }}</h2>
                <p class="quote">{{ profile.quote }}</p>
                <NuxtLink class="link-button" :to="`four-generations/${profile.link}`">Explore His Story</NuxtLink>
            </div>
        </div> 
    </div>

</div>


</template> 


<style lang="scss" scoped>

.introblock {
  max-width: 960px;
  margin: 0 20px;
  padding: 100px 10px 30px;
  @media (min-width: 1000px) {
    width: 100%;
    padding: 100px 200px 30px 0;
    margin: 0 auto;
  }
}

h1 {
    font-family: 'Sentinel', serif;
    font-style: italic;
    font-weight: 300;
    font-size: 5.375rem;
    line-height: 1.2;
}

h3 {
    font-family: 'Sentinel', serif;
    font-style: italic;
    font-weight: 200;
    font-size: 1.5;
    line-height: 1.54;
    color: var(--color-gray);
}

p {
    font-family: 'Gotham HTF', sans-serif;
    font-weight: 200;
    line-height: 1.625;
}

.profile {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 20px;
    padding: 50px 0;
    gap: 80px;
    @media (min-width: 900px) {
    flex-flow: row nowrap;
      width: 100%;
      margin: 120px auto 0;
    }
    h2 {
        font-style: italic;
        font-size: 40px;
        line-height: 1.2;
        margin-bottom: 16px;
    }
    p.quote {
        font-family: 'Professor', serif;
        font-size: 3rem;
        line-height: 1.04;
        color: var(--color-gray);
        margin-bottom: 32px;
        
    }
    &:nth-child(even) {
        justify-content: flex-end;
    }
}
</style>   