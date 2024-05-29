<script setup>
import Container from "@/components/Container.vue";</script>

<template>
  <div class="footer">
    <Container>
      <a href="#" class="footer__logo logo">
        <svg class="logo__icon">
          <use xlink:href="/sprite.svg#logo"></use>
        </svg>
        <div class="logo__text">alpha</div>
      </a>
      <span class="footer__copyright">© alpha, 2023</span>
    </Container>
  </div>
</template>

<style lang="scss">
.footer {
  background: #F0F6FE;
  padding: 64px 0;

  &__logo {
    margin-bottom: 16px;
  }

  &__copyright {
    color: #81899D;
    font-size: 16px;
    line-height: 22.4px;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 6px;

  &__icon {
    width: 33px;
    height: 33px;
  }

  &__text {
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    color: #1D37AF;
    letter-spacing: -0.05em;
  }
}
</style>
