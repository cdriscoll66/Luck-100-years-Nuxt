<script setup lang="ts">

</script>

<template>
  <div class="ystories-home">
    <div class="ystories-home__inner">

        <div class="ystories-home__text">
            <h2>Your Stories</h2>
            <p>The story of Luck Companies is about relationships. And it’s best told in the voices of the customers and community partners who inspire us every day. Hear from the people who have made this milestone possible.</p>
            <div class="link-button__wrapper"><NuxtLink class="link-button" to="/your-stories">Explore your stories</NuxtLink></div>
        </div>

        <div class="ystories-home__media">
            <img src="/images/home-page/yourstories.jpg" alt="Your Stories feature Image" />
        </div>

    </div>
  
  </div>
</template>

<style lang="scss" scoped>

.ystories-home {
    width: 100%;
}

.ystories-home__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column-reverse nowrap;
    max-width: 1120px;
    width: calc(100vw - 50px);
    margin: 0 auto;
    padding-top: 135px;
    gap: 50px;
    @media (min-width: 1170px) {
        flex-flow: row nowrap;
        gap: 127px;

    }
}

.ystories-home__media {
    width: 100%;
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
