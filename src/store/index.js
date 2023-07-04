import { createStore } from 'vuex'

export default createStore({
  state: {
    orders: []
  },
  mutations: {
    setNewOrder (state, order) {
      state.orders.push(order)
    }
  }
})
