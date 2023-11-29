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
        <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=93756&url_id=902" 
          class="sponsor">Why Not visit our sponsor?</a>
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
  margin-right: 1.5rem;
}

#page-bottom {
  display: block;
  border-top: 1px solid #b2c7c4!important;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  padding: 1em;
}

.dark #page-bottom {
  border-top: 1px solid #031b17!important;
}

.sponsor {
  color: #8a9997;
  text-decoration: underline;
}

.sponsor:hover {
  color: #111;
}

.dark .sponsor:hover {
  color: #d2e7e4;
}

</style>