<template>
  <div>
    <navbar msg="Apple Watch Series 7" />
    <div class="flex justify-center items-center px-10 mt-10">
      <div class="flex justify-center items-start gap-5">
        <img class="w-[622px] h-[590px] border border-1 rounded-lg" src="@/assets/01-1.jpeg" alt="">
        <div class="flex flex-col justify-center items-start text-start gap-2 w-[622]">
          <h1 class="font-normal text-[34px]">Silver Stainless Steel Case with Modern Buckle</h1>
          <h4 class="font-normal text-md">From <span>$399</span></h4>
          <Button msg="+ Add to Bag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button.vue'
import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      Button,
      Navbar
    }
  }
</script>