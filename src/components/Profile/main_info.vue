<template>
  <div class="m-info-wrp">
    <div class="m-info-wrp_avatar">
      <img :src="'https://upwards.cf/api/user/avatar?'+randomHash()" alt="">
    </div>
    <div class="m-info-wrp_content">
      <div class="m-info-wrp_content_name"><p>{{info.first_name}} {{info.last_name}}</p>
        <p>@{{info.name}}</p></div>
      <div class="m-info-wrp_content_profession">Middle Front-end dev</div>
      <div class="m-info-wrp_content_languages">
        <div class="m-info-wrp_content_languages_name">
          <p>Languages:</p>
        </div>
          <div v-for="lang in info.languages" class="m-info-wrp_content_languages_content">
            <p>{{lang}}</p>
          </div>
        </div>

      <div class="m-info-wrp_content_panel" v-if="false">
          <div class="-info-wrp_content_panel_add">
            <img src="@/assets/img/profile/addtoteam.svg" alt="">
            <p>Add to team</p>
          </div>
        <div class="-info-wrp_content_panel_message">
          <img src="@/assets/img/profile/chat.svg" alt="">
          <p>Send Message</p>
        </div>
        <div class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/bookmark.svg" alt="">
          <p>Bookmark</p>
        </div>
        <div class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/report.svg" alt="">
          <p>Report @reginaPT</p>
        </div>
      </div>
      <div class="m-info-wrp_content_panel" v-else>
        <router-link to="/myaccount/settings/info"><div class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/settings.svg" alt="">
          <p>Settings</p>
        </div></router-link>
        <div class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/bookmark.svg" alt="">
          <p>Saved</p>
        </div>
        <div class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/chat.svg" alt="">
          <p>Messages</p>
        </div>
        <div class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/team.svg" alt="">
          <p>My team</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main_info",
    props:{
      info: Object
    },
    data(){
      return{}
    },
    methods:{
      randomHash(){
        let o = Math.round(Math.random()*1000000000000000000000).toString();
        return o;
      }
    }
  }
</script>

<style scoped>
  .m-info-wrp_content_name {
    font-family: "Open Sans";
    font-size: 40px;
    font-weight: 700;
    display: flex;

  }

  .m-info-wrp_content_name p:nth-child(2) {
    color: #595959;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 600;
    align-self: flex-end;
  }

  .m-info-wrp_content_profession {
    color: #0087cb;
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
  }
  .m-info-wrp_content_languages{
    margin: 0 0 10px 0;
  }
  .m-info-wrp_content_languages_name{
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
  }
  .m-info-wrp_content_languages_content{
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    width: 10em;
    flex-wrap: wrap;
  }
  .m-info-wrp_content_languages_content p{
    margin: 3px
  }
  .m-info-wrp_content_panel{
    width: 23em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .m-info-wrp_content_panel div{
    display: flex;
    flex-direction: row;
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 600;
    margin: 0 20px 10px 0;
  }
  .m-info-wrp_content_panel div img{
    margin: 0 10px 0 0;
  }
  .m-info-wrp_avatar img{
    width: 200px;
    height: 200px;
    border-radius: 150px;
  }
  .m-info-wrp{
    display: flex;
    flex-direction: row;
  }
  .m-info-wrp_avatar{
    margin: 0 3em 0 0;
  }
</style>
