<template>
  <div class="dropdown">
    <input 
      type="text"
      placeholder="검색"
      @input="search"
      v-model="reset"
      class="input max-w-xs bg-gray-300 flex-none ml-5 mr-1 dark:text-white dark:bg-gray-600 focus:outline-0"
    />
    <ul class="dropdown-content menu shadow bg-base-100 w-full flex-none ml-5 dark:text-white left-0 mt-2 max-h-96 overflow-y-auto">
      <li v-for="{ id, title } in result" :key="id" @click="openClose">
        <RouterLink :to="'/product/' + id">
          <span class="line-clamp-2">{{ title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from'vuex'

export default {
  data() {
    return {
      result: [],
      reset:''
    }
  },
  computed: {
    ...mapState('goods', [
      'all'
    ]),
  },
  methods: {
    search(e) {
      let input = e.target.value;
      if (e.target.value === '') {
        this.reset = '',
        this.result = []
      } else if (e.target.value !== '') {
        this.result = this.all.filter((item) => {
          return item.title.toLowerCase().indexOf(input.toLowerCase()) > -1
        });
      }
    },
    openClose() {
      this.reset = '',
      this.result = []
    }
  }
}
</script>