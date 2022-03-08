<template>
  <div class="home">
    <Navbar msg="Apple Watch Series 7" />
    <div class="flex justify-center items-center mt-[-45px] gap-5">
      <img class="w-[620px] h-[547] rounded-xl " src="@/assets/cover.jpg" alt="">
      <div class="flex">
        <ProductCard />
        <ProductCard />
      </div>
      <Filter />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue'
  import ProductCard from '@/components/ProductCard.vue'
  import Filter from '@/components/Filter.vue'

  export default {
    name: 'Home',
    components: {
      Navbar,
      ProductCard,
      Filter
    }
  }
</script>