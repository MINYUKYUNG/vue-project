<template>
  <main class="pt-16">
      <section class="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">

        <div class="text-sm breadcrumbs">
          <ul>
            <li>홈</li> 
            <li>장바구니</li>
          </ul>
        </div>
        
        <!-- 물건이 Yes -->
        <template v-if="Object.keys(saveCart).length !== 0">
          <section class="container mx-auto">
            
            <!-- 개별상품 전체 + 구매하기 버튼 -->
            <div class="px-5 xl:px-20">
              <!-- 개별상품 전체 -->
              <div>
                <!-- 개별상품 1개 -->
                <YesCart @repage="reYesCart" :key="reLoad" />
              </div>
              
              <div>
                <p class="text-3xl">Total: ${{ toPr() }}</p>
                <label for="my-modal-6" class="btn modal-button mt-4 btn-primary">구매하기 버튼</label>
                
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                  <div class="modal-box">
                    <h3 class="font-bold text-lg">정말로 구매하시겠습니까?</h3>
                    <p class="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
                    <div class="modal-action">
                      <label for="my-modal-6" class="btn" @click="deleteCart">네</label>
                      <label for="my-modal-6" class="btn">아니오</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </template>

        <!-- 물건이 No -->
        <template v-else>
            <section class="py-36">
              <p class="text-center text-3xl py-4 line-clamp-1">장바구니에 물품이 없습니다.</p>
              <RouterLink to="/" class="flex justify-center">
                <button class="btn btn-primary">쇼핑하러 가기</button>
              </RouterLink>
            </section>
        </template>

      </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import YesCart from '../components/YesCart'
import axios from "axios"

export default {
  data() {
    return {
      reLoad: 0,

    }
  },
  components: {
    YesCart
  },
  async created() {
    await axios.get('https://fakestoreapi.com/products');
    this.$store.commit('cart/loadCart')
  },
  computed: {
    ...mapState('cart', [
      'saveCart'
    ]),
    ...mapState('goods', [
      'all'
    ])
  },
  methods: {
    deleteCart() {
      this.$store.commit('cart/deleteCart')
    },
    reYesCart() {
      this.reLoad = this.reLoad + 1;
    },
    toPr() {
      let newData = this.saveCart
      let newId = 0, newCount = 0, newTotalPrice = 0;

      for (const key in newData) {
        newCount = newData[key].count
        newId = newData[key].id
        newTotalPrice = newTotalPrice + (this.all[newId-1].price * newCount)
      }

      return newTotalPrice
    }
  }
}
</script>