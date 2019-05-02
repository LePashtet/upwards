<template>
    <div class="mark-wrp">
      <p class="mark-wrp_text">{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "Blue_Round_mark",
      props:{
          text:String,
      }
    }
</script>

<style scoped>
  .mark-wrp{
    line-height: 20px;
    padding: 5px 20px;
    background: rgba(0,135,203,0.28);
    border-radius: 8px;
    width: max-content;
    color: #0087CB;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 600;
  }
</style>
