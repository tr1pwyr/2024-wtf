<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated, useRouter } from "vitepress";

// const { route, go } = useRouter();
function deleteChild() {
  const element = document.querySelector("#gitalk-container");
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  deleteChild();
  const gitalk = new Gitalk({
    clientID: "fefd96d9ad5c550e4953",
    clientSecret: "4a61ed215568517e5f3a1583b70c414c55d7bc01",
    repo: "2024-wtf",
    owner: "tr1pwyr",
    admin: ["tr1pwyr"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "en-US",
    distractionFreeMode: true, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>
<style scoped>
.gitalk-container{
  display: block;
  width: 100%;
}
</style>
