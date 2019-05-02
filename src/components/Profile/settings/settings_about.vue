<template>
    <div class="about-wrp">
      <div class="about_header">
        <p>About me</p>
      </div>
      <div class="about_text-area">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <btn class="save_btn" text="Save"></btn>
    </div>
</template>

<script>
  import btn from '@/components/buttons/NoBack_BlueText.vue';

    export default {
        name: "settings_about",
      components:{
          btn
      }
    }
</script>

<style scoped>
  .about-wrp{
    border-bottom: 2px #595959 solid;
    padding: 0 0 20px  0;
  }
  .save_btn{
    position: relative;
    left:80%;
  }
  .about_header{
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
    margin: 20px 0;
  }
  .about_text-area{
  }
  .about_text-area textarea{
    width: 90%;
    height: 300px;
    resize: none;
    background: #ececec;
    border-radius: 8px;
    border: none;
    padding: 20px;
  }

</style>
