<script setup lang="ts"></script>

<template>
  <div class="story-wrapper">
    <div class="story">
      <div class="title-block">
        <div class="title-block__inner">
            <div class="title-block__image">

            <img src="/images/yourstories/BillSharr.png" alt="Bill Scharr profile image">
            </div>
          <div class="title-block__text">
            <div class="eyebrow">
              <div class="listen">Listen</div>
            </div>
            <h1>Bill Scharr</h1>
            <p class="subtitle">Retiree</p>
            <p class="tagline">17 Years of Service</p>
          </div>
        </div>
      </div>
      
 <AudioPlayer audio="/audio/Bill Schaar music.mp3" />
      <div class="story__content">
        <p>
          Magna pars studiorum, prodita quaerimus. Etiam habebis sem dicantur
          magna mollis euismod. Non equidem invideo, miror magis posuere velit
          aliquet. Contra legem facit qui id facit quod lex prohibet.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus. Nec dubitamus
          multa iter quae et nos invenerat. Quis aute iure reprehenderit in
          voluptate velit esse.
        </p>
        <p>
          Me non paenitet nullum festiviorem excogitasse ad hoc. Sed haec quis
          possit intrepidus aestimare tellus. Curabitur blandit tempus ardua
          ridiculus sed magna. Ut enim ad minim veniam, quis nostrud
          exercitation. Fictum, deserunt mollit anim laborum astutumque! Ab illo
          tempore, ab est sed immemorabili.
        </p>
        <p>
          Quid securi etiam tamquam eu fugiat nulla pariatur. Cum sociis natoque
          penatibus et magnis dis parturient. Mercedem aut nummos unde unde
          extricat, amaras.
        </p>
        <p>
          Magna pars studiorum, prodita quaerimus. Etiam habebis sem dicantur
          magna mollis euismod. Non equidem invideo, miror magis posuere velit
          aliquet. Contra legem facit qui id facit quod lex prohibet.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus. Nec dubitamus
          multa iter quae et nos invenerat. Quis aute iure reprehenderit in
          voluptate velit esse.
        </p>
        <p>
          Me non paenitet nullum festiviorem excogitasse ad hoc. Sed haec quis
          possit intrepidus aestimare tellus. Curabitur blandit tempus ardua
          ridiculus sed magna. Ut enim ad minim veniam, quis nostrud
          exercitation. Fictum, deserunt mollit anim laborum astutumque! Ab illo
          tempore, ab est sed immemorabili.
        </p>
        <p>
          Quid securi etiam tamquam eu fugiat nulla pariatur. Cum sociis natoque
          penatibus et magnis dis parturient. Mercedem aut nummos unde unde
          extricat, amaras.
        </p>
      </div>

      <PrefooterCta />
    </div>
    <div class="pagination-links">
      <NuxtLink to="/your-stories" class="prev">
        <span>Back To All Stories</span>
      </NuxtLink>
      <NuxtLink class="next" to="/your-stories/michelle-trudeau">
        <span>Next Story</span>
      </NuxtLink>
    </div>
  </div>
</template>
