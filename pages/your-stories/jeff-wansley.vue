<script setup lang="ts"></script>

<template>
  <div class="story-wrapper">
    <div class="story">
      <div class="title-block">
        <div class="title-block__inner">
          <div class="title-block__text">
            <div class="eyebrow">
              <div class="read">Read</div>
            </div>
            <h1>Jeff Wansley</h1>
            <p class="subtitle">Executive Director</p>
            <p class="tagline">Georgia Construction Aggregates Association</p>
          </div>
        </div>
      </div>

      <div class="big-image">
        <img
          src="/images/yourstories/GCAA.jpg"
          alt="Jeff Wansley Georgia Construction"
        />
      </div>

      <div class="story__content story__statement">
        <p class="statement">
          “When I learned that Luck Stone was coming to Georgia, I was excited
          because I knew they had a reputation not only for excellence in their
          own business but also for contributing to the betterment of the
          aggregates industry overall.
        </p>
        <p class="statement">
          They have exceeded my high expectations for their level of commitment
          to our work—they’re constantly providing financial support for our
          activities, they send their people to utilize our programs, Joe
          Carnahan serves on our board, and Charlie Luck was an incredible
          speaker for our statewide conference.
        </p>
        <p class="statement">
          We’re honored to have them involved and look forward to watching them
          grow here in Georgia.”
        </p>
      </div>

      <PrefooterCta />
    </div>
    <div class="pagination-links">
      <NuxtLink to="/your-stories" class="prev">
        <span>Back To All Stories</span>
      </NuxtLink>
      <NuxtLink class="next" to="/your-stories/conrad-feggins">
        <span>Next Story</span>
      </NuxtLink>
    </div>
  </div>
</template>
