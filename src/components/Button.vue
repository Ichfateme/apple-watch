<template>
  <div>
    <div>
      <button :class="{ 'blue':blue }" class="px-2 py-1 border border-1 bg-withe rounded-lg text-md font-normal">{{msg}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      msg: String,
      blue: {
        type: Boolean
      }
    }
  }
</script>

<style>
  .blue {
    color: blue;
    width: 370px;
  }
</style>