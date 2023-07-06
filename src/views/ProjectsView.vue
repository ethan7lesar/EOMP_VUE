<template>
  <h1>Projects:</h1>

  <div class="project-container" v-if="projects">
    <ProjectCardComp
      v-for="project of projects"
      :key="project.id"
      :project="project"
      class="col"
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
.project-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
h1 {
  color: #5cb85c;
  font-size: 50px;
}
</style>
