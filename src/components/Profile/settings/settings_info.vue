<template>
    <div class="info-wrp">
      <div class="info_name">
        <div class="info_name_avatar">
          <img :src="'https://upwards.cf/api/user/avatar?'+randomHash()" alt="">
        </div>
        <div class="info_name_inputs">
          <input type="text" placeholder="@tag" v-model="tag" >
          <input type="text" placeholder="Name" v-model="f_name">
          <input type="text" placeholder="Surname" v-model="surname">
        </div>
      </div>
      <btn class="save_btn" @click="save" text="Save"></btn>
    </div>
</template>

<script>
import btn from '@/components/buttons/NoBack_BlueText.vue';

export default {
  name: 'settings_info',
  components: {
    btn,
  },
  props:{
    f_name: String,
    tag: String,
    surname: String,
  },
  data() {
    return {
      resp: null,
      info: {
        success: null,
      },
    };
  },
  methods: {
    randomHash() {
      const o = Math.round(Math.random() * 1000000000000000000000).toString();
      return o;
    },
    save() {
      this.$store.dispatch('updateInfo', this.info).then((resp) => {
        if (resp.status === 200) {
          alert('Info saved');
          this.updatePage();
        } else {
          console.log('resp.error', resp);
          alert(resp.error);
          this.updatePage();
          //  TODO респонс ввиде строки
        }
      });
    },

  },
};
</script>

<style scoped>
  .info-wrp{
    border-bottom: 2px #595959 solid;
    padding: 0 0 20px  0;
  }
  .info_name_avatar img{
    width: 200px;
    height: 200px;
    border-radius: 150px;
  }
  .info_name_inputs input{
    max-width: 300px;
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
