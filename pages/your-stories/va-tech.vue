<script setup lang="ts">


</script>

<template>
    <div class="story-wrapper">
  <div class="story">
    <div class="title-block">
      <div class="title-block__inner">
        <div class="title-block__text">
          <div class="eyebrow">
            <div class="watch">Watch</div>
          </div>
          <h1>VA Tech</h1>
          <p class="subtitle">Sem Sollicitudin Euismod</p>
          <p class="tagline">Lorem Ipsum Dolor</p>
        </div>
      </div>
    </div>

    <div class="video">
      <video id="vid" ref="vid" controls autoplay playsinline preload="auto">
        <source src="/video/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


    <div class="story__content">
   <p>Magna pars studiorum, prodita quaerimus. Etiam habebis sem dicantur magna mollis euismod. Non equidem invideo, miror magis posuere velit aliquet. Contra legem facit qui id facit quod lex prohibet.</p>    <p>Pellentesque habitant morbi tristique senectus et netus. Nec dubitamus multa iter quae et nos invenerat. Quis aute iure reprehenderit in voluptate velit esse.</p>    <p>Me non paenitet nullum festiviorem excogitasse ad hoc. Sed haec quis possit intrepidus aestimare tellus. Curabitur blandit tempus ardua ridiculus sed magna. Ut enim ad minim veniam, quis nostrud exercitation. Fictum, deserunt mollit anim laborum astutumque! Ab illo tempore, ab est sed immemorabili.</p>    <p>Quid securi etiam tamquam eu fugiat nulla pariatur. Cum sociis natoque penatibus et magnis dis parturient. Mercedem aut nummos unde unde extricat, amaras.</p>    <p>Magna pars studiorum, prodita quaerimus. Etiam habebis sem dicantur magna mollis euismod. Non equidem invideo, miror magis posuere velit aliquet. Contra legem facit qui id facit quod lex prohibet.</p>    <p>Pellentesque habitant morbi tristique senectus et netus. Nec dubitamus multa iter quae et nos invenerat. Quis aute iure reprehenderit in voluptate velit esse.</p>    <p>Me non paenitet nullum festiviorem excogitasse ad hoc. Sed haec quis possit intrepidus aestimare tellus. Curabitur blandit tempus ardua ridiculus sed magna. Ut enim ad minim veniam, quis nostrud exercitation. Fictum, deserunt mollit anim laborum astutumque! Ab illo tempore, ab est sed immemorabili.</p>    <p>Quid securi etiam tamquam eu fugiat nulla pariatur. Cum sociis natoque penatibus et magnis dis parturient. Mercedem aut nummos unde unde extricat, amaras.</p> ",

    </div>

    <PrefooterCta />

  </div>
  <div class="pagination-links">
      <NuxtLink to="/your-stories" class="prev">
        <span>Back To All Stories</span>
      </NuxtLink>
      <NuxtLink class="next" to="yourstories/scott-claud">
        <span>Next Story</span>
      </NuxtLink>
    </div>
</div>
</template>

<style lang="scss" scoped>
.story__content {
    width: 100%; 
    max-width: 740px;
    margin: 50px auto 50px 50px;
p {
    margin-top: 26px;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.62;
    color: #595959;
}
}
.video {
  margin-top: 56px;
  video {
    width: 100%;
  }
}

.story {
  min-height: 100vh;
  padding: 160px 0;
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
}
.title-block {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.title-block__inner {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
    gap: 80px;
}
.pagination-links {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 200px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  text-align: center;
}

.pagination-links a.next,
.pagination-links a.prev {
  border: 1px solid var(--color-gold-light);
  width: 100%;
  padding: 50px 10px;
  color: var(--color-green);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  background-color: var(--color-off-white);
}

.pagination-links a.next:hover,
.pagination-links a.prev:hover {
  background-color: var(--color-gold-light);
}
</style>

<style>
.story__content p {
    margin-top: 26px;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.62;
    color: #595959;
}
</style>
