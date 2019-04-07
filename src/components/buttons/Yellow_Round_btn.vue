<template>
  <button @click="handleClick" class="btn">{{text}}</button>
</template>

<script>
    export default {
        name: "Yellow_Round_btn",
        props: {
          text: String,
        },
      methods: {
        handleClick() {
          this.$emit('click');
        }
      }
    }
</script>

<style scoped>
 .btn{
   border: none;
   border-radius: 25px;
   padding: 5px 40px;
   background-color:#FFA202;
   color: white;
   font-family: "Open Sans", sans-serif;
   font-size: 27px;
   font-weight: 400;
   line-height: 44px;
 }
</style>
