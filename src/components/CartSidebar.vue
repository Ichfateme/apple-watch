<template>
  <div class="flex flex-col justify-center items-center border border-1 rounded-md">
    <div class="border-b border-b-1 p-2">
      <div class="flex justify-between w-[374px] mb-1">
        <h1>Subtotal</h1>
        <h1>$1598</h1>
      </div>
      <div class="flex justify-between w-[374px] mb-1">
        <h1>Subtotal</h1>
        <h1>$1598</h1>
      </div>
      <div class="flex justify-between w-[374px] mb-1">
        <h1>Subtotal</h1>
        <h1>$1598</h1>
      </div>
    </div>
    <div class="p-2 flex flex-col justify-center items-center">
      <div class="flex justify-between w-[374px] pb-5 font-blod">
        <h1 class="font-bold">Subtotal</h1>
        <h1 class="font-bold">$1598</h1>
      </div>
      <Button msg="Pay - Check Out" blue />
    </div>
  </div>
</template>
<script>
  import Button from './Button.vue'
  export default {
    components: {
      Button
    },
    name: "CartSidebar"
  }
</script>