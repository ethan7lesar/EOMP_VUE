<template>
  <h1>Testimonials</h1>
  <div class="row row-cols-3git " v-if="testimonials">
    <HoverCardComp
      v-for="testimonial of testimonials"
      :key="testimonial.id"
      :testimonial="testimonial"
    />
  </div>
  <div v-else>loading...</div>
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
    this.$store.dispatch("getTestimonials");
  },
  components: { HoverCardComp },
};
</script>
<style>
h1 {
  color: #5cb85c;
  font-size: 50px;
}
</style>
