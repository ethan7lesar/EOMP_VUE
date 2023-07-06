import { createStore } from 'vuex'
const dbUrl = "https://ethan7lesar.github.io/VueEOMPData/eompdb.json"

export default createStore({
  state: {
    experiences: null,
    testimonials: null,
    projects: null,
  },

  mutations: {
    setExperiences: (state, value) => {
      state.experiences = value;
    },
    setTestimonials: (state, value) => {
      state.testimonials = value;
    },
    setProjects: (state, value) => {
      state.projects = value;
    }

  },
  actions: {
    async fetchExperiences(context) {
      try {
        let { experiences } = await (await fetch(dbUrl)).json();
        if (experiences) {
          context.commit("setExperiences", experiences);
        } else {
          context.commit(alert("God Did"));
        }
      } catch (e) {
        alert("errror");
      }
    },
    async fetchTestimonials(context) {
      try {
        let { testimonials } = await (await fetch(dbUrl)).json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          context.commit(alert("GOD DID"));
        }
      } catch (e) {
        alert("errror");
      }
    },
    async fetchProjects(context) {
      try {
        let { projects } = await (await fetch(dbUrl)).json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          context.commit(alert("GOD DID"));
        }
      } catch (e) {
        alert("errror");
      }
    },

  }
 
})
