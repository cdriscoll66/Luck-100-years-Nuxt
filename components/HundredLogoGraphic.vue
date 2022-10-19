<script setup lang="ts"></script>

<template>
  <div class="hundred-graphic">
    <h2 class="hundred-graphic__title">The Hundred Year Breakdown</h2>
    <div class="hundred-graphic__inner">
      <div class="hundred-graphic__image">
        <img
          src="/images/home-page/100graph.svg"
          alt="The Hundred Year Breakdown"
        />
      </div>
      <div class="hundred-graphic__text">
        <h4>The 00s</h4>
        <p>
          Morbi finibus felis ut eros facilisis, faucibus tristique felis
          elementum. Pellentesque eleifend commodo eros, non pretium augue
          suscipit
        </p>
      </div>
    </div>
    <div class="hundred-graphic__blocks">
      
        <div class="hundred-graphic__colorblock">
        <span class="green"></span>
        <div class="hundred-graphic__colorblock--text">
        <h4>Green</h4>
        <p>Modern and timeless, this versatile hue pays homage to our history and is commonly associated with freshness, growth and balance.</p>
        </div>
        </div>


        <div class="hundred-graphic__colorblock">
        <span class="bronze"></span>
        <div class="hundred-graphic__colorblock--text">
        <h4>Bronze</h4>
        <p>Strength, stability and support, bronze is a color that stands on its own. It requires little assistance and is exceptionally grounded.</p>
        </div>
        </div>



        <div class="hundred-graphic__colorblock">
        <span class="gray"></span>
        <div class="hundred-graphic__colorblock--text">
        <h4>Gray</h4>
        <p>The middle ground; reasonable agreement and sophistication. We also associate gray with wisdom – the sort that’s acquired with age.</p>
        </div>
        </div>


    </div>
  </div>
</template>

<style lang="scss" scoped>
.hundred-graphic {
  max-width: 915px;
  width: calc(100vw - 50px);
  margin: 0 auto;
  padding-bottom: 125px;  
  @media screen and (min-width: 965px) {
    width: 100%;
  }
}
.hundred-graphic__title {
  font-family: 'Professor', serif;
  font-size: 3.125rem;
  line-height: 0.76;
  margin-top: 110px;
}

.hundred-graphic__inner {
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 44px;

  img {
    width: 140%;
    height: auto;
    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
}

.hundred-graphic__text {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -75px;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  padding-left: 40px;
  @media screen and (min-width: 768px) {
    width: calc(33% - 64px);
    padding-left: 15px;
    bottom: 30px;
  }
}

p {
  font-size: 0.875rem;
  line-height: 1.43;
  font-weight: 300;
}

.hundred-graphic__blocks {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 125px;
    gap: 64px;
    @media screen and (min-width: 768px) {
        flex-flow: row nowrap;
        margin-top: 50px;

    }
        
    }

.hundred-graphic__colorblock {
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
}

span {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    flex-shrink: 0;
    &.green {
        background-color: var(--color-green);
    }
    &.bronze {
        background-color: var(--color-bronze);
    }
    &.gray {
        background-color: var(--color-gold-light);
    }
}
</style>
