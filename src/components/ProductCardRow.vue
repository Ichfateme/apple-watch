<template>
  <div>
    <div class="flex justify-center items-center">
      <div class="flex justify-center items-center gap-5 border-b border-b-1 pb-5">
        <img class="w-[182px] h-[173px] rounded-lg" src="@/assets/01-1.jpeg" alt="">
        <div class="flex flex-col justify-center items-start text-start gap-2 w-[430px]">
          <h1 class="font-normal text-[28px]">Silver Stainless Steel Case with Modern Buckle</h1>
          <h4 class="font-medium text-lg">$399</h4>
        </div>
        <Button msg="Remove from Bag" />
      </div>
    </div>
  </div>
</template>

<script>
  import Button from "@/components/Button.vue"

  export default {
    name: 'ProductCardRow ',

    components: {
      Button
    }
  }
</script>