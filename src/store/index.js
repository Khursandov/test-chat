import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        name: "Nick",
        isActive: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      },
      {
        id: 2,
        name: "Zephyr",
        isActive: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      },
      {
        id: 4,
        name: "Kisame",
        isActive: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      },
      {
        id: 3,
        name: "Jojo",
        isActive: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      }
    ],
    me: {
      name: '',
      id: ''
    },
    messages: []
  },
  mutations: {
    addMessage (state, payload) {
      state.messages.push(payload)
    },
    setMessage (state, payload) {
      state.messages = [... payload]
    },
    setUserStatus (state, payload) {
      state.users.forEach((user) => {
        user.isActive = false
      })
      state.users.forEach((user) => payload.forEach(id => {
        if(user.id == id) {
          user.isActive = true
        }

      }))
    },
    setUser (state, payload) {
      state.users.filter(user => {
        if (user.name === payload) {
          state.me.name = user.name
          state.me.id = user.id
        }
      })
    },
    removeUser (state) {
      state.me.name = ''
      state.me.id = ''
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    saveMessage({ state, commit }, payload) {
      commit('addMessage', payload)
      localStorage.setItem("messages", JSON.stringify(state.messages))
    },
    checkMessages ({ commit }) {
      setInterval(() => {
        const messages = JSON.parse(localStorage.getItem('messages'))
        if (messages !== null) {
          commit('setMessage', messages)
        }
      }, 1000)
    },
    checkUser ({ commit }) {
      setInterval(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user !== null) {
          commit('setUserStatus', user)
        }
      }, 1000)
    },
    saveUser ({ state, commit }, payload) {
      commit('setUser', payload)
      const users = JSON.parse(localStorage.getItem('user'))
      if (users !== null) {
        users.push(state.me.id)
        localStorage.setItem("user", JSON.stringify(users))
      } else {
        const data = []
        data.push(state.me.id)
        localStorage.setItem("user", JSON.stringify(data))
      }
    },
    removeUserStatus ({ state, commit }) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user !== null) {
        if (user.indexOf(state.me.id) > -1) {
          user.splice(user.indexOf(state.me.id),1)
          localStorage.setItem("user", JSON.stringify(user))
          commit('removeUser')
          location.reload();
        }
      }
    }
  },
  modules: {
  }
})
