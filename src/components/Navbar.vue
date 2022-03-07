<template>
  <div class="border-b border-b-1 border-Gray-300">
    <div class="flex flex-col items-end px-10 gap-5 py-5">
      <div class="flex justify-between items-center w-full">
        <!-- title  -->
        <h1 class="text-lg font-bold">{{ msg }}</h1>
        <!-- icon  -->
        <div class="flex justify-center items-center gap-5">
          <!-- user  -->
          <img src="@/assets/user.svg" alt="">
          <!-- shop box -->
          <div class="flex justify-center items-center">
            <div class="h-5 w-5 bg-red-500 rounded-full flex justify-center items-center absolute mr-6">
              <span class="p-2">1</span>
            </div>
            <img src="@/assets/shopping-bag.svg" alt="">
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-lg font-bold">Full screen, Fresh styles</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      msg: String
    }
  }
</script>