<template>
  <main class="wrapper">
  <h1>Past orders</h1>
  <table class="product-table" v-if="pastOrders.length">
    <thead>
      <tr>
        <td><span class="sr-only">Product Image</span></td>
        <td>Product</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Total</td>
        <td><span class="sr-only">Actions</span></td>
      </tr>
    </thead>
    <tbody v-for="(order, i) in pastOrders" :key="i">
      <tr v-for="(quantity, key, i) in order" :key="i">
        <td><i class="iconfont-4x" :class="reactiveClass(key)"/></td>
        <td>{{ key }}</td>
        <td>${{ getPrice(key) }}</td>
        <td>{{quantity}}</td>
        <td>${{(getPrice(key) * quantity).toFixed(2)}}</td>
        <td><button type="button" class="button button-dark" @click="addToCart(key, quantity)">Add</button></td>
      </tr>
    </tbody>
  </table>
  <p v-else>You do not have orders yet.</p>
</main>
</template>

<script>
export default {
  name: 'PastOrdersView',
  props: ['inventory', 'addToCart'],
  data () {
    return {
      pastOrders: []
    }
  },
  methods: {
    getPrice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product?.price.USD
    },
    reactiveClass (name) {
      console.log(this.inventory)
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      const icon = product?.icon
      return `icofont-${icon}`
    }
  },
  mounted () {
    this.pastOrders = this.$store.state.orders
  }
}
</script>
