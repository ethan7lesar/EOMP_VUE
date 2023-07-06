<template>
  <h1>Projects:</h1>


  <div class="" v-if="projects" >
    <ProjectCardComp
      v-for="project of projects"
      :key="project.id"
      :project="project"
    />
  </div>
  <div v-else>loading...</div>
</template>
<script>
import ProjectCardComp from "@/components/ProjectCardComp.vue";

export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("getProjects");
  },
  components: { ProjectCardComp },
};
</script>
<style>
h1 {
    color: #5cb85c;
    font-size: 50px;
  }
</style>
