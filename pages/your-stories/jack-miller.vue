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
            <h1>Jack Miller</h1>
            <p class="subtitle">CEO</p>
            <p class="tagline">Northern Virginia Drilling</p>
          </div>
        </div>
      </div>

      <div class="big-image">
        <img
          src="/images/yourstories/NVDrilling.jpg"
          alt="Scott Claud Colony Construction"
        />
      </div>

      <div class="story__content story__statement">
        <p class="statement">
          “We’ve been working with Luck Stone as a driller since 1989, and our
          family business has grown along with theirs.
        </p>
        <p class="statement">
          I think it’s because we are both really committed to our people, to
          making sure they’re safe and they have the opportunity to do good work
          and to grow. I think this is the secret to how we both get the job
          done for our customers.
        </p>
        <p class="statement">
          Luck Stone’s quarries are certainly the safest and the cleanest to
          work in, and they have always communicated with us about their plans,
          which has helped us to plan, as well.
        </p>
        <p class="statement">
          It’s unusual in our business for a customer to stay with a driller for
          so many years—usually a quarry operator will just go to the lowest
          bidder—but Luck Stone has been committed to working with us for more
          than 30 years, and we are grateful for their continued partnership.”
        </p>
      </div>

      <PrefooterCta />
    </div>
    <div class="pagination-links">
      <NuxtLink to="/your-stories" class="prev">
        <span>Back To All Stories</span>
      </NuxtLink>
      <NuxtLink class="next" to="/your-stories/superior">
        <span>Next Story</span>
      </NuxtLink>
    </div>
  </div>
</template>
