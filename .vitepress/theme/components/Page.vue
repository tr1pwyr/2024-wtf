<template>
  
  <MastHead />

  <div class="blogList">

    <a class="blog flex-item" v-for="item in posts" :href="withBase(item.regularPath)">
      <div class="blogContainer">
        <div class="flex-item">
          <img 
            :alt = "item.frontMatter.title"
            :src="item.frontMatter.thumbnail" 
            class="thumbnail" />
        </div>

        <div class="meta flex-item">
          <div class="title">
            {{ item.frontMatter.title }}
          </div>
          <div class="date">
            {{ transDate(item.frontMatter.date) }}
          </div>
          <div class="description">
            {{ item.frontMatter.description }}
          </div>

          <div class="tags">
            <span class="tag" v-for="tag in item.frontMatter.tags">
              {{ tag }} &nbsp;
            </span>
          </div>
        </div>
        
      </div>
    </a>

  </div>

  <section class="pagination">
    <button class="left" v-if="pageCurrent > 1" @click="go(pageCurrent - 1)">
      Previous page
    </button>

    <div v-if="pagesNum > 1">
      Page:  {{ `${pageCurrent} of ${pagesNum}` }} total pages.
    </div>
    
    <button class="right" v-if="pageCurrent < pagesNum" @click="go(pageCurrent + 1)">
      Next page
    </button>

  </section>

  <section class="maird">&nbsp;</section>

  <Sponsor />

</template>

<script lang="ts" setup>
import { ref } from "vue";
import { transDate } from "../utils";

import MastHead from "./MastHead.vue";
import Sponsor from "./Sponsor.vue";

import { useData, withBase } from "vitepress";

interface post {
  regularPath: string;
  frontMatter: object;
}

const { theme } = useData();

let postsAll = theme.value.posts || [];
let postLength: number = theme.value.postLength;
let pageSize: number = theme.value.pageSize;

let pagesNum: number =
  postLength % pageSize === 0
    ? postLength / pageSize
    : postLength / pageSize + 1;

pagesNum = parseInt(pagesNum.toString());

let pageCurrent = ref(1);

postsAll = postsAll.filter((item: post) => {
  return item.regularPath.indexOf("index") < 0;
});

let allMap = {};
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = [];
}
let index = 0;
for (let i = 0; i < postsAll.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1;
  }
  allMap[index].push(postsAll[i]);
}

let posts = ref([]);
posts.value = allMap[pageCurrent.value - 1];

// click pagination
const go = ( i: number) => {
  pageCurrent.value = i;
  posts.value = allMap[pageCurrent.value - 1];
};

</script>
