<template>
  <h1 class="title">{{ pageData.title }}</h1>
  <div class="date">Published: {{ publishDate }}</div>
</template>

<script lang="ts" setup>
import { useData, onContentUpdated } from "vitepress";
import { ref } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type pageData = {
  description: string;
  title: string;
  frontmatter: object;
  headers: object[];
  lastUpdated: number;
  relativePath: string;
};

const pageData: pageData = useData().page;

const publishDate = ref("");
dayjs.extend(relativeTime);

onContentUpdated(() => {
  const { frontmatter } = pageData.value;
  publishDate.value = dayjs().to(dayjs(frontmatter.date || Date.now()));
});

</script>
