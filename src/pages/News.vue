<script setup>
// libs
import { onMounted, ref } from 'vue'
// api
import { getNews } from "@/api/news.js"
// layouts
import MainLayout from "@/layouts/MainLayout.vue"
// components
import Banner from "@/components/Banner.vue"
import CardNews from "@/components/CardNews.vue"
import Container from "@/components/Container.vue"

const hasMore = ref(false)
const items = ref([])
const currentPage = ref(null)

// Asynchronous news loading
const loadNextNews = async () => {
  hasMore.value = false

  const page = currentPage.value !== null ? currentPage.value + 1 : null
  const newsData = await getNews(page)

  if (newsData) {
    items.value.push(...newsData.items ?? [])
    currentPage.value = newsData.nav?.current ?? null
    hasMore.value = (newsData.nav?.total ?? 0) > currentPage.value
  }
}

const onLoadMoreClick = async () => {
  await loadNextNews()
}

onMounted(loadNextNews)
</script>

<template>
  <MainLayout>
    <template #content>
      <Banner/>
      <Container>
        <div class="news">
          <div class="news__grid">
            <CardNews v-for="item in items" :key="item.code" :news="item"/>
          </div>
          <button v-if="hasMore" class="news__button" @click="onLoadMoreClick">Загрузить ещё</button>
        </div>
      </Container>
    </template>
  </MainLayout>
</template>

<style lang="scss">
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 72px 0;

  &__grid {
    display: grid;
    gap: 64px 48px;
    grid-template-columns: repeat(3, 1fr);
  }

  &__button {
    font-weight: 600;
    padding: 16px 32px;
    border-radius: 8px;
    border: 1px solid #002DBF;
    color: #002DBF;
    margin-top: 72px;
    letter-spacing: -0.01em;
    transition: all 0.4s;
  }

  @media (min-width: 1025px) {
    &__button {
      &:hover {
        background: #002DBF;
        color: #ffffff;
      }
    }
  }
  @media (max-width: 1200px) {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

  }
  @media (max-width: 768px) {
    &__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
