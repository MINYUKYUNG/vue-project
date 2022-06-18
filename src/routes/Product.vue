<template>
  <main class="pt-16" :key="this.$route.fullPath">
    <!-- params가 있을때 -->
    <template 
      v-if="Number(this.$route.params.id) <= all.length && 
      this.$route.params.id[0] !== '-' && 
      this.$route.params.id[0] !== '0'"
    >
      <YesProduct />
    </template>

    <!-- params가 없을때 -->
    <template v-else>
      <NoProduct />
    </template>
      
  </main>
</template>

<script>
import { mapState } from 'vuex'
import YesProduct from '../components/YesProduct'
import NoProduct from '../components/NoProduct'

export default {
  // created() {
  //   console.log('Product 페이지,', this.$route.params);
  // },
  computed: {
    ...mapState('goods', [
      'all'
    ])
  },
  components: {
    YesProduct,
    NoProduct
  }
}
</script>