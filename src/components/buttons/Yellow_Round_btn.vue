<template>
  <button @click="handleClick" class="btn">{{text}}</button>
</template>

<script>
export default {
  name: 'Yellow_Round_btn',
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
   cursor: pointer;
   border: none;
   border-radius: 25px;

   background-color:#FFA202;
   color: white;
   font-family: "Open Sans", sans-serif;
   font-size: 27px;
   padding: 5px 40px;
   font-weight: 400;
   line-height: 44px;
 }
 .btn:hover{
   border:1px solid #FFA202;
   background-color: white;
   color: #FFA202;
   padding: 4px 39px;
 }
</style>
