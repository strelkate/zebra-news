<script setup>
import Container from "@/components/Container.vue";</script>

<template>
  <div class="banner">
    <div class="banner__background">
      <img src="../../public/banner.png" alt="Banner">
    </div>
    <Container>
      <h1 class="banner__title">Новости</h1>
    </Container>
  </div>
</template>

<style lang="scss">
.banner {
  position: relative;
  width: 100%;

  &__background {
    img {
      object-fit: cover;
      position: relative;
      display: block;
      width: 100%;
      height: 320px;
    }
  }

  &__title {
    position: absolute;
    bottom: 48px;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;
  }

  @media (max-width: 768px) {
    &__background {
      img {
        height: 200px;
      }
    }
  }
}
</style>
