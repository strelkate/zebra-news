<script setup>
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>


<style lang="scss">
.container {
  max-width: 1710px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1440px) {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 992px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
  }

  @media (max-width: 576px) {
    max-width: 80%;
  }
}
</style>
