<template>
  <div v-for="{ id, count } in this.baseCart" :key="id" class="card lg:card-side border-solid border border-gray-200 my-12">

    <!-- 이미지 -->
    <RouterLink :to="'/product/' + id" class="bg-white flex justify-center">
      <figure class="bg-white h-56 w-56"><img :src="all[id-1].image" alt="이미지" class="object-contain h-5/6 w-5/6" /></figure>
    </RouterLink>

    <!-- 정보 -->
    <div class="card-body relative">
      <!-- 타이틀 -->
      <RouterLink :to="'/product/' + id">
        <h2 class="card-title">{{ all[id-1].title }}</h2>
      </RouterLink>

      <!-- 가격 -->
      <p class="text-3xl">${{ all[id-1].price * count }}</p>

      <!-- 증가감소 버튼 -->
      <div class="card-actions pt-4">
        <div class="btn-group">
          <button class="btn btn-primary" @click="minusCart(id), $emit('repage')"> - </button>
          <button class="btn no-animation btn-disabled bg-white text-black">{{ count }}</button>
          <button class="btn btn-primary" @click="plusCart(id), $emit('repage')"> + </button>
        </div>
      </div>

      <!-- X 버튼 -->
      <button class="btn btn-circle btn-outline absolute bottom-8 right-8" @click="deleteItem(id), $emit('repage')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      baseCart: []
    }
  },
  computed: {
    ...mapState('goods', [
      'all',
    ]),
    ...mapState('cart', [
      'saveCart',
    ])
  },
  emits: [ 'repage' ],
  created() {
    const data = this.saveCart
    for (const key in data) {
      this.baseCart = [...this.baseCart, data[key]];
    }
  },
  methods: {
    plusCart(value) {
      this.$store.commit('cart/updateCart', {
        getParams: value,
        num: 1
      })
    },
    minusCart(value) {
      this.$store.commit('cart/updateCart', {
        getParams: value,
        num: -1
      })
    },
    deleteItem(value) {
      this.$store.commit('cart/deleteItem', {
        id: value
      })
    }
  }
}
</script>