<template>
  <section id="page-bottom">
    <!-- <div class="left">
      <div class="before">
        Why Not visit <a href="https://test.com" class="sponsor">
          our sponsor</a>?
      </div>
    </div> -->

    <div class="right">
      <div class="after">
        Why Not visit <a href="#" class="sponsor">
        our sponsor</a>?
      </div>
    </div>
  </section>
</template>

<style scoped>
.before, .after {
  font-size: .8rem;
  padding: 1rem;
}

.after {
  margin-right: 5px;
}

#page-bottom {
  display: block;
  border-top: 1px solid #b2c7c4!important;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0 0;
  padding: 1em;
}

.dark #page-bottom {
  border-top: 1px solid #031b17!important;
}
</style>