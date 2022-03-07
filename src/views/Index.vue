<template>
  <div class="home">
    <Navbar msg="Apple Watch Series 7"/>
    <ProductCard />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  }
}
</script>
