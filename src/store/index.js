import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedProjects: [
      { src: '/static/new-york.jpeg', id: '123erfgt67u', title: 'Projects in New York', date: '2017-07-20' },
      { src: '/static/paris.jpeg', id: '09iuhgft543', title: 'Projects in Paris', date: '2017-07-21' },
      { src: '/static/germany.jpeg', id: '456trefg6kp', title: 'Projects in Germany', date: '2017-07-22' }
    ],
    user: {
      id: '123edfgt545678i',
      registerMeetups: ['kjnbgt6789765redf']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedProjects (state) {
      return state.loadedProjects.sort((itemA, itemB) => {
        return itemA.date > itemB.date
      })
    },
    featuredProjects (state, getters) {
      return getters.loadedProjects.slice(0, 5)
    },
    loadedProject (state) {
      return (projectId) => {
        return state.loadedProjects.find((project) => {
          return project.id === projectId
        })
      }
    }
  }
})
