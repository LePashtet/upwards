<template>
    <button @click="handleClick" class="btn">{{text}}</button>
</template>

<script>
export default {
  name: 'Blue_Round_btn',
  props: {
    text: String,
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
 .btn{
   border: none;
   border-radius: 40px;
   padding: 5px 40px;
   background-color: #0087CB;
   color: white;
   font-family: "Open Sans", sans-serif;
   font-size: 27px;
   font-weight: 400;
   line-height: 44px;
   width: max-content;
 }
 .btn:hover{
   border:1px solid #0087CB;
   background-color: white;
   color: #0087CB;
   padding: 4px 39px;
 }
</style>
