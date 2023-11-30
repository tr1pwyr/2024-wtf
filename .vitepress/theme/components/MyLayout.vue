<template>
  <Layout>
    <template #doc-before>
      <Title />
    </template>

    <template #doc-after>
      <button @click="back" class="backButton">
        <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 384 512" class="flex-1">
          <path fill="#555" d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"/>
        </svg> &nbsp;
       <span class="pl-3"> Back</span>
      </button>
      <Comments />
    </template>

    <template #home-hero-before>
      <HomeHero />
    </template>
    <template #home-features-after>
      <Page />
    </template>

  </Layout>
  <Spacer />
  <Footer />
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import HomeHero from "./HomeHero.vue";
import Footer from "./TheFooter.vue";
import Comments from "./Comments.vue";
import Page from "./Page.vue";
import Spacer from "./shared/Spacer.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
const { Layout } = DefaultTheme;
const back = () => {
  history.back();
};
</script>

<style scoped>
.backButton {
  display: flex;
  align-items: center;
  color: #8f8e8e!important;
  border: 1px solid rgba(143, 143, 143, .5)!important;
  padding: .1rem .75rem!important;
  margin: 2rem 0!important;
  border-radius: 10px!important;
  cursor: pointer!important;
}
.backButton:hover {
  color:#555!important;
  background-color: #d6d6d6!important;
  border: 1px solid #d6d6d6!important;
}
</style>