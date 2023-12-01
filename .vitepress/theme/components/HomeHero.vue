<template>
  <div class="hero-content">
    **This website contains fictional articles, accounts, and information examining possible senarios 
    surrounding the 2024 US Presidential Election. None of the articles are real, and are posted as a
    thought experiment.**
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
  margin: 1rem auto;  
  font-size: .9rem;
  line-height: 1.5;
  padding: 0 1rem 0 0;
  font-style: italic;
}

</style>
