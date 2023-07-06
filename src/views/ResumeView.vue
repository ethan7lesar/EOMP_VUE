<template>
  <h1 class="education">Education</h1>

  <TimeLineComp />
  <h1 class="experience">Experience</h1>
  <div v-if="experiences" class="row pb-5 mb-5">
    <XpCardComp v-for="experience of experiences" :key="experience.id" :experience="experience"/>
  </div>
  <div v-else>
    loading...
  </div>
  <h1>Skills:</h1>
    <SkillBarComp/>
  
  
</template>
<script>
import TimeLineComp from "@/components/TimeLineComp.vue";
import XpCardComp from "@/components/XpCardComp.vue";
import SkillBarComp from "@/components/SkillBarComp.vue";
export default {
    computed: {
        experiences(){
            return this.$store.state.experiences;
        }
    },
    mounted(){
 this.$store.dispatch("fetchExperiences");
    },
  components: { TimeLineComp, XpCardComp, SkillBarComp },
};
</script>
<style>
h1 {
  color: #5cb85c;
  font-size: 50px;
}

</style>
