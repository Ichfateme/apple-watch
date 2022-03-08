<template>
  <div>
    <Navbar msg="Apple Watch Series 7" />
    <div class="flex justify-center items-center gap-5 p-5">
      <product-card-row />
      <cart-sidebar />
    </div>
  </div>
</template>

<script>
  // Components
  import Navbar from '@/components/Navbar.vue'
  import ProductCardRow from '@/components/ProductCardRow.vue'
  import CartSidebar from '@/components/CartSidebar.vue'

  export default {
    name: 'ShopingCart',

    components: {
      Navbar,
      ProductCardRow,
      CartSidebar,
    }
  }
</script>