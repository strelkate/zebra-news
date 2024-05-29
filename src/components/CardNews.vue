<script setup>
import { onMounted, ref } from 'vue'
import timestampToDayMonthYear from "@/utils/date.js";

const props = defineProps({
  news: {
    type: Object,
    required: false
  }
})

const newsDate = ref({ day: 0, month: '', year: 0 })

const updateDateNews = () => {
  newsDate.value = timestampToDayMonthYear(props.news?.date)
}

onMounted(updateDateNews)
</script>

<template>
  <div class="card-news" v-if="news">
    <div class="card-news__image" v-if="news.image">
      <img :src="news.image" alt="image news">
    </div>
    <div class="card-news__content content">
      <div class="content__date date">
        <span class="date__number">{{ newsDate.day }}</span>
        <div class="date__wrapper">
          <span class="date__month">{{ newsDate.month }}</span>
          <span class="date__year">{{ newsDate.year }}</span>
        </div>
      </div>
      <a class="content__title">{{ news.name }}</a>
      <p class="content__text">{{ news.previewText }}</p>
      <span class="content__tag">{{ news.type.value }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.card-news {
  max-width: 536px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid var(--color-brand);

  &__image {
    width: calc(100% + 2px);
    height: auto;
    max-height: 250px;
    margin: -1px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      border-radius: 16px 16px 0 0;
    }
  }

  &__content {
    padding: 32px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .content {
    &__date {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 16px;
    }

    &__title {
      font-size: 22px;
      line-height: 26.4px;
      font-weight: 400;
      margin-bottom: 16px;
    }

    &__text {
      margin-bottom: 40px;
      letter-spacing: -0.01em;
    }

    &__tag {
      width: max-content;
      padding: 4px 16px;
      background: #F0F6FE;
      border-radius: 360px;
      font-size: 14px;
      line-height: 19.6px;
      color: #00133A;
      margin-top: auto;
    }

  }

  .date {
    color: #A1A7B5;

    &__number {
      font-size: 36px;
      line-height: 36px;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      font-size: 15px;
      line-height: 16.5px;
      font-weight: 700;
      letter-spacing: -0.01em;
    }
  }
}
</style>
