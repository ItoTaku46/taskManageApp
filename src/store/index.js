import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'Backlog',
        cards: [
          { body: 'English', details: '詳細' },
          { body: 'Mathematics', details: '詳細' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science', details: '詳細' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },

    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },

    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({
        body: payload.body
      })
    },

    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },

    updateList(state, payload) {
      state.lists = payload.lists
    },

    detailsAddToList(state, payload) {
      state.lists[payload.listIndex].cards[payload.cardIndex]['details'] = payload.details
    }
  },

  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },

    removelist(context, payload) {
      context.commit('removelist', payload)
    },

    addCardToList(context, payload) {
      // mutationsで定義するメソッドを引数として指定する
      context.commit('addCardToList', payload)
    },
    // removeCardFromListアクションの定義
    removeCardFromList(context, payload) {
      // mutationsのremoveCardFromListメソッドの呼び出し
      context.commit('removeCardFromList', payload)
    },

    updateList(context, payload) {
      context.commit('updateList', payload)
    },

    detailsAddToList(context, payload) {
      context.commit('detailsAddToList', payload)
    }
  },
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map(content => count += content.cards.length)
      return count
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
