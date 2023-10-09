<template>
  <section>
    <h5>Other Links:</h5>
    <ul v-for="d in data" :key="d.id" >
      <li>
        <a :href="d.url" target="_blank" :title="d.name">
          {{ d.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
// this will be a fetch request back to the mother ship to get other links
const data = [
  { id: 1, name: 'Get this Code', url: 'https://github.com/tr1pwyr/wyr-world' },
  { id: 2, name: 'Me on Twitter', url: 'https://twitter.com/tr1pwyr' },
  { id: 3, name: 'WLog.App', url: 'https://wlog.app/' },
  { id: 4, name: 'Wyr.World', url: 'https://wyr.world' },
  ]
</script>