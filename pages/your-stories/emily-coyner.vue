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
            <h1>Emily Coyner</h1>
            <p class="subtitle">Senior Director, Environmental Policy</p>
            <p class="tagline">National Stone, Sand and Gravel Association</p>
          </div>
        </div>
      </div>

      <div class="big-image">
        <img
          src="/images/yourstories/NSSGA.jpg"
          alt="Emily Coyner National Stone sand and Gravel Association"
        />
      </div>

      <div class="story__content story__statement">
        <p class="statement">
          “As the senior director of environmental policy for the National
          Stone, Sand and Gravel Association, my job is to help our members
          understand environmental laws and regulations and help policymakers
          and regulators understand our industry.
        </p>
        <p class="statement">
          I can always rely on Luck Stone not only to exceed their environmental
          requirements, but also to demonstrate their genuine commitment to
          making a positive impact.
        </p>
        <p class="statement">
          From automating their plants to building bike paths to providing their
          associates with technical and leadership training to hosting
          policymakers and regulators at their facilities, they are always going
          above and beyond in service to our industry.
        </p>
        <p class="statement">
          They are true leaders in our industry—in innovation, sustainability
          and as an example of how to lead with purpose.”
        </p>
      </div>

      <PrefooterCta />
    </div>
    <div class="pagination-links">
      <NuxtLink to="/your-stories" class="prev">
        <span>Back To All Stories</span>
      </NuxtLink>
      <NuxtLink class="next" to="/your-stories/jack-miller">
        <span>Next Story</span>
      </NuxtLink>
    </div>
  </div>
</template>
