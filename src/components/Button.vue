<template>
  <div>
    <div>
      <button class="p-1 border border-1 bg-withe rounded-lg text-md font-bold">{{msg}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      msg: String
    }
  }
</script>