<template>
  <h1>Testimonials:</h1>
  <div class="row row-cols-3 w-100 " v-if="testimonials">
    <HoverCardComp
      v-for="testimonial of testimonials"
      :key="testimonial.id"
      :testimonial="testimonial"
    />
  </div>
  <div v-else><div class="spinner-border" style="width: 200px; height: 200px; color:#5cb85c" role="status">
    <span class="visually-hidden">Loading...</span>
  </div></div>
</template>

<script>
import HoverCardComp from "@/components/HoverCardComp.vue";
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
  components: { HoverCardComp },
};
</script>
<style scoped>
h1 {
  color: #5cb85c;
  font-size: 50px;
}

@media screen and (max-width: 700px) {
  .row.row-cols-3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
  }
  .row-cols-3>* {
    flex: 0 0 auto;
  width: 100%;
}
  
}

@media screen and (max-width: 300px) {
  .row.row-cols-3 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }
}
</style>
