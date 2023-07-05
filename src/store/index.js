import { createStore } from 'vuex'

export default createStore({
  state: {
    experiences: null,
   
  },

  mutations: {
    setExperiences: (state, experiences) => {
      state.experiences = experiences;
    }

  },
  actions: {
    getExperiences: async (context) => {
      fetch ("https://ethan7lesar.github.io/VueEOMPData/experience.json")
      .then((res) => res.json())
      .then((experiences) => context.commit("setExperiences", experiences))
    }
  }
 
})
