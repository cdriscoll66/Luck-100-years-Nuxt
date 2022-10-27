<script setup lang="ts">

</script>

<template>
<footer class="footer">
    <div class="footer-links">
        <a href="">Luck Store</a>
        <a href="">Luck Ecosystems</a>
        <a href="">Luck Real Estate</a>
        <a href="">Luck Companies</a>
    </div>
    <div class="footer-logo">
        <a href="/"><img src="~/assets/images/logo.svg"  alt="Luck 100 year logo" /></a>
    </div>
</footer>
</template>

<style lang="scss" scoped>

.footer {
    display: flex;
    width: 100%;
    max-width: calc(100vw - 110px);
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
}

.footer-links {
display: flex;
gap: 20px;
margin-top: 20px;
margin-bottom: 20px;
flex-flow: column nowrap;
justify-content: space-between;
a {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    line-height: 1.06;
    letter-spacing: .2em;
    color: var(--color-gold);
}
@media (min-width: 900px) {
    gap: 72px;
    flex-flow: row nowrap;
}
}
</style>

