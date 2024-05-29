<script setup>
import Container from "@/components/Container.vue";</script>

<template>
  <div class="header">
    <Container>
      <a href="#" class="header__logo logo">
        <svg class="logo__icon">
          <use xlink:href="/sprite.svg#logo"></use>
        </svg>
        <div class="logo__text">alpha</div>
      </a>
    </Container>
  </div>
</template>

<style lang="scss">
.header {
  padding: 20px 0;

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;

    &__icon {
      width: 43px;
      height: 43px;
    }

    &__text {
      font-weight: 900;
      font-size: 40px;
      line-height: 48px;
      color: #1D37AF;
      letter-spacing: -0.05em;
    }
  }
}
</style>
