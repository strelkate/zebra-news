<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";</script>

<template>
  <Header/>
  <slot name="content"></slot>
  <Footer/>
</template>

<style scoped>
</style>
