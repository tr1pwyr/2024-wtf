<template>
  <div class="hero-content">
    **This website contains fictional articles, accounts, and information 
    examining the people and possible senarios surrounding the 2024 
    US Presidential Election. None of the articles are real, and are not meant to be taken literally.  
    They are posted as a thought experiment to examine the possiblities of the future as a way to better 
    understand the present.**
  </div>
</template>

<script lang="ts" setup>
import { useData } from "vitepress";
const { theme } = useData();
</script>

<style scoped>
.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 1.5rem auto;  
  font-size: .9rem;
  line-height: 1.5;
  padding: 0 1rem 0 0;
  font-style: italic;
}

</style>
