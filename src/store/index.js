import { createStore } from 'vuex'

export default createStore({
  state: {
    experiences: null,
    testimonials: null,
    projects: null,
  },

  mutations: {
    setExperiences: (state, experiences) => {
      state.experiences = experiences;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    }

  },
  actions: {
    getExperiences: async (context) => {
      fetch ("https://ethan7lesar.github.io/VueEOMPData/experience.json")
      .then((res) => res.json())
      .then((experiences) => context.commit("setExperiences", experiences))
    },
    getTestimonials: async (context) => {
      fetch ("https://ethan7lesar.github.io/VueEOMPData/testimonials.json") 
      .then((res) => res.json())
      .then((testimonials) => context.commit("setTestimonials", testimonials))
    },
    getProjects: async (context) => {
      fetch ("https://ethan7lesar.github.io/VueEOMPData/projects.json") 
      .then((res) => res.json())
      .then((projects) => context.commit("setProjects", projects))
    }

  }
 
})
