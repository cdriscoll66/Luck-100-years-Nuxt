<script setup lang="ts">


</script>

<template>
    <div class="story-wrapper">
  <div class="story">
    <div class="title-block">
      <div class="title-block__inner">
        <div class="title-block__text">
          <div class="eyebrow">
            <div class="read">Read</div>
          </div>
          <h1>Scott Claud</h1>
          <p class="subtitle">President</p>
          <p class="tagline">Colony Construction</p>
        </div>
      </div>
    </div>

  
    <div class="big-image">
      <img src="/images/yourstories/scott-claud-large.jpg" alt="Scott Claud Colony Construction" />
    </div>

    <div class="story__content story__statement">
    <p class="statement">“At Colony Construction, we've worked with Luck Stone to pave the roads in our community for many years. Our company has grown along with theirs, and we're grateful for their continued partnership.   </p> 
    <p class="statement">Road construction is always complex and challenging, but we work together and figure out how to tackle each project. We support our community together, too, whether that's paving a church parking lot or serving together on industry association boards. </p>
    <p class="statement">What I've learned about Luck Stone is this: some companies build accounts. I believe Luck Stone builds relationships.”</p>

    </div>

    <PrefooterCta />

  </div>
  <div class="pagination-links">
      <NuxtLink to="/your-stories" class="prev">
        <span>Back To All Stories</span>
      </NuxtLink>
      <NuxtLink class="next" to="/your-stories/aubrey-witt">
        <span>Next Story</span>
      </NuxtLink>
    </div>
</div>
</template>

