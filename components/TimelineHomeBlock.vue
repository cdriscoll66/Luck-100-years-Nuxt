<script setup lang="ts">

</script>

<template>
  <div class="timeline-home">
    <div class="timeline-home__inner">
        <div class="timeline-home__media">
            <img src="/images/home-page/home-collage1.png" alt="Tome Timeline Collage" />
        </div>
        <div class="timeline-home__text">
            <h2>100 Years</h2>
            <p>It all started at Sunnyside … growing customer partnerships, joining new communities and building a culture where people can thrive. We have been igniting human potential and powering possibilities since 1923.</p>
            <div class="link-button__wrapper"><NuxtLink class="link-button" to="/hundred-years">Explore our history.</NuxtLink></div>
        </div>

    </div>
  
  </div>
</template>

<style lang="scss" scoped>

.timeline-home {
    width: 100%;
}

.timeline-home__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    max-width: 1120px;
    width: calc(100vw - 50px);
    margin: 0 25px;
    padding-top: 65px;
    gap: 50px;
    @media (min-width: 1170px) {
        flex-flow: row nowrap;
        margin: 0 auto 0 0;
        margin-right: calc((100vw - 1120px) / 2);
        max-width: unset;
        width: unset;
    }
}

.timeline-home__media {
    width: 100%;
    flex: 1 0 65%;
    img {
        width: 100%;
    }
}

.timeline-home__text {
 flex: 0 1 35%;
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
