<script setup lang="ts">

</script>

<template>
    <div class="hero-home">
        <div class="hero-home__image">
            <img src="~/assets/images/100-logo.svg" alt="hero-home" class="hero-home__img" />
        </div>
            <h1>Powering Possibilities</h1>
            <h3>100 years of powering possibilities for our associates, customers and communities</h3>
    </div>
</template>

<style lang="scss" scoped>

.hero-home {
    display: flex; 
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-image:url('/images/home-page/home-hero-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 645px;
    color: var(--color-white);
    text-align: center;
    gap: 20px;
    
}

.hero-home__image {
    img {
    width: 50vw;
    max-width: 506px;
    }
}

h1 {
    font-family:'Sentinel', serif;
    font-size: 4.5rem;
    font-weight: 300;
    font-style: italic;
    line-height: 1;
    color: var(--color-white);
}

h3 {
    font-size: 1rem;
    line-height: 1.625;
    font-weight: 200;
    color: var(--color-white);

}
</style>