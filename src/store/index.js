import { createStore } from 'vuex'

const store = createStore({
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  mutations: {
    setItems (state, items) {
      state.items = items
    },
    setLoading (state, loading) {
      state.loading = loading
    },
    setError (state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchData ({ commit }) {
      commit('setLoading', true)
      commit('setError', null)

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data')
          }
          return response.json()
        })
        .then(data => {
          commit('setItems', data)
        })
        .catch(err => {
          commit('setError', err.message)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    }
  },
  getters: {
    itemTitles: (state) => {
      return state.items.map(item => item.title)
    }
  }
})
export default store
