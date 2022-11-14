<script setup lang="ts">

</script>

<template>
  <div class="fourgens-home">
    <div class="fourgens-home__inner">

        <div class="fourgens-home__media">
            <img src="/images/home-page/fourgens.jpg" alt="Four Gens feature Image" />
        </div>

        <div class="fourgens-home__text">
            <h2>Four Generations</h2>
            <p> Four generations of family leaders have built a business on the idea that every single one of us has the potential to make a positive impact on the lives of other people. Learn more about the family leaders of Luck Companies.</p>
            <div class="link-button__wrapper"><NuxtLink class="link-button" to="/four-generations">Explore our Leadership</NuxtLink></div>
        </div>



    </div>
  
  </div>
</template>

<style lang="scss" scoped>

.fourgens-home {
    width: 100%;
}

.fourgens-home__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column-reverse nowrap;
    max-width: 1120px;
    width: calc(100vw - 50px);
    margin: 0 auto;
    padding-top: 135px;
    gap: 50px;
    @media (min-width: 1210px) {
        flex-flow: row nowrap;
        gap: 127px;

    }
}
.fourgens-home__text {
    flex: 0 1 48%;
}

.fourgens-home__media {
    width: 100%;
    flex: 1 0 52%;
    img {
        width: 100%;
    }
}

h2 {
font-family: 'Sentinel', serif;
font-size: 3.5rem;
font-style: italic;
font-weight: 300;
line-height: 1.07;
color: var(--color-green);
}

p {
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.625;
    color: var(--color-gray);
    margin-top: 10px;

}

p.signature {
    font-family: 'Professor', serif;
    font-size: 2.25rem;
    line-height: 1;
    color: #220e00;
}


</style>
