<template>
    <button class="btn">{{text}}</button>
</template>

<script>
    export default {
        name: "Blue_Round_btn",
        props: {
          text: String,
        },
    }
</script>

<style scoped>
 .btn{
   border: none;
   border-radius: 20px;
   padding: 5px 40px;
   background-color: #0087CB;
   color: white;
   font-family: "Open Sans", sans-serif;
   font-size: 27px;
   font-weight: 400;
   height: 44px;
 }
</style>
