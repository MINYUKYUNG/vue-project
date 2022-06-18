<template>
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage'

export default {
  components: {
    HomePage
  },
  methods: {
    getAPI() {
      this.$store.dispatch('goods/getData')
    }
  },
  created() {
    this.getAPI();
    
    if (localStorage.getItem('cart_data') === null) {
      localStorage.setItem('cart_data', JSON.stringify({}))
    }
  }
}
</script>
