<template>
  <section>
    <h5>Popular Links:</h5>
    <ul>
      <li v-for="d in data" :key="d.id">
        <a :href="d.url" target="_blank" :title="d.name">
          {{ d.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const data = [
  { id: 1, name: 'Fear And Loathing 2024', url: '/posts/FearAndLoathing2024.html' },
  { id: 2, name: 'Trump Incarcerated', url: '/posts/TrumpIncarceration.html' },
  { id: 3, name: 'Middle East War', url: '/posts/MiddleEastWar.html' },
  { id: 4, name: 'Joe Manchin 2024', url: '/posts/joe-manchin-enters-2024-presidential-election.html' },
]
</script>