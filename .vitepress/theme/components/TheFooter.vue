<template>
  <footer>

    <div class="footer-container">
      <div class="f1">
        <PopularLinks />
      </div>

      <div class="f2">
        <OtherLinks />
      </div>

      <div class="f3">
        <div class="copyright">
          <h5>Disclaimer:</h5>
          **This website contains fictional articles, accounts, and information examining possible senarios surrounding the 2024 US Presidential Election. None of the articles are real, and are posted as a thought experiment.**
        </div>
      </div>
    </div>

  </footer>
</template>
<script lang="ts" setup>
const date = new Date().getFullYear();
import { ref } from 'vue';
import OtherLinks from './shared/OtherLinks.vue';
import PopularLinks from './shared/PopularLinks.vue';
const ver = ref("0.0.5");
</script>

<style>
footer {
  display: flex;
  text-align: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 50px;
  padding: 0;
}

footer ul {
  list-style: none;
  margin: 1rem 0 0 0!important;
  padding: 0;
}

footer ul li {
  padding: 0;
  margin: 0;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  max-width: 1200px;
}

.copyright {
  font-size: .75rem;
  line-height: .9rem;
  color: var(--vt-c-indigo-soft);
  font-weight: 500;
  margin: 0 .33rem;
}

.f3 {
  /* background: rgb(0, 0, 255, .1); */
  display: flex;
  justify-content: left;
}

.f1,
.f2,
.f3 {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  text-align: left;
  font-size: .8rem;
  padding: 2%;
  min-width: 300px;
  width: 33%;
}
</style>
