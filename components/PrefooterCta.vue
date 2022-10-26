<script setup lang="ts">


</script>

<template>

    <div class="prefootercta">
        <div class="prefootercta__inner">
            <div class="prefootercta__text">
                <h3>Prefooter CTA Title</h3>
                <p>Morbi finibus felis ut eros facilisis, faucibus tristique felis elementum. Pellentesque eleifend commodo eros, non pretium augue suscipit</p>
            </div>
            <div class="prefootercta__button">
                <NuxtLink class="link-button" to="/">Action</NuxtLink>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.prefootercta {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    padding: 124px 0;
    text-align: center;
    color: var(--color-gold-dark);
}



h3 {
    font-family: 'Professor', sans-serif;
    font-weight: 300;
    line-height: .96;
    font-size: 3.125rem;
    color: var(--color-gold-dark);
}


p {
    margin-top: 10px;
    font-weight: 200;
    line-height: 1.62;
    font-size: 1rem;
}
.prefootercta__button {
    margin-top: 30px;
}



</style>