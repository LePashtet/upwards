<template>
    <div class="info-wrp">
      <div class="info_name">
        <div class="info_name_avatar">
          <img :src="'https://upwards.cf/api/user/avatar?'+randomHash()" alt="">
        </div>
        <div class="info_name_inputs">
          <input type="text" v-model="name">
          <input type="text" v-model="tag">
          <input type="text" v-model="surname">
        </div>
      </div>
      <btn class="save_btn" @click="save" text="Save"></btn>
    </div>
</template>

<script>
  import btn from '@/components/buttons/NoBack_BlueText.vue';

  export default {
        name: "settings_info",
    components:{
          btn
    },
    data(){
      return{
        resp: null,
        info:{
          name: null,
          tag: null,
          surname: null,
          success: null
        },
      }
    },
      methods:{
        randomHash() {
          let o = Math.round(Math.random() * 1000000000000000000000).toString();
          return o;
        },
        save(){
          this.$store.dispatch('updateInfo',this.info).then((resp)=>{

          }).catch((err)=>{
            console.log(err);
          })
        },
        mounted(){
          this.$store.dispatch('getProfile').then((resp)=>{
            this.info.name= resp.data.first_name;
            this.info.tag= resp.data.name;
            this.info.surname= resp.data.last_name;
          }).catch((err)=>{
            console.log(err);
          })
        }

  }
    }
</script>

<style scoped>
  .info-wrp{
    width: max-content;
    border-bottom: 2px #595959 solid;
    padding: 0 0 20px  0;
  }
  .info_name_avatar img{
    width: 200px;
    height: 200px;
    border-radius: 150px;
  }
  .info_name_inputs input{
    width: 300px;
    line-height: 56px;
    background: #ececec;
    border-radius: 8px;
    border: none;
  }
  .save_btn{
    position: relative;
    left:80%;
  }
  .info_name{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .info_name_inputs{
    display: flex;
    flex-direction: column;
    margin: 0 0 0 7em;
    align-self: center;
  }


  .info_name_inputs input{
    margin: 7px 0;
  }

</style>
