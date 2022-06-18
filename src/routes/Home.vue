<template>
  <main class="pt-16">
    <Carousel />
    <Preview />
  </main>
</template>

<script>
import Carousel from '../components/Carousel'
import Preview from '../components/Preview'

export default {
  components: {
    Carousel,
    Preview
  }
}
</script>