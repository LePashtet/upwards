<template>
    <div class="about-wrp">
      <div class="about_header">
        <p>About me</p>
      </div>
      <div class="about_text-area">
        <textarea v-model="info.about" id="" cols="30" rows="10"></textarea>
      </div>
      <btn class="save_btn" @click="save" text="Save"></btn>
    </div>
</template>

<script>
  import btn from '@/components/buttons/NoBack_BlueText.vue';

    export default {
        name: "settings_about",
      components:{
          btn
      },
      data(){
        return{
          resp: null,
          info:{
            about: null
          },
        }
      },
      methods:{
        save() {
          this.$store.dispatch('updateAbout', this.info).then((resp) => {
            if (resp.status===200){
              alert("Discription saved");
              this.updatePage();
            } else {
              alert(resp.error);
              this.updatePage();
            }
          })
        },
        updatePage() {
          this.$store.dispatch('getProfile').then((resp)=>{
            if (resp.status===200) {
              this.info.about= resp.data.about;
            }
          })
        }
      },
      mounted(){
        this.updatePage();
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
