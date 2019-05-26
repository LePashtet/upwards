<template>
  <div class="m-info-wrp">
    <div class="m-info-wrp_avatar">
      <img :src="'https://upwards.cf/api/user/avatar?size=200'" alt="">
    </div>
    <div class="m-info-wrp_content">
      <div class="m-info-wrp_content_name"><p>{{info.first_name}} {{info.last_name}}</p>
        <p>@{{info.name}}</p></div>
      <div class="m-info-wrp_content_profession">{{ info.level}}</div>
      <div class="m-info-wrp_content_languages">
        <div class="m-info-wrp_content_languages_name">
          <p>Languages:</p>
        </div>
          <div v-for="lang in info.languages" class="m-info-wrp_content_languages_content">
            <p>{{lang}}</p>
          </div>
        </div>

      <div class="m-info-wrp_content_panel" v-if="false">
          <div @mouseover='over=1' @mouseout='over=0' class="info-wrp_content_panel_add">
            <img v-show="over===1" src="@/assets/img/profile/addtoteam.svg" alt="">
            <p :style="{color: over===1? 'black':'#FFA202'}">Add to team</p>
          </div>
        <div @mouseover='over=2' @mouseout='over=0' class="info-wrp_content_panel_message">
          <img v-show="over===2" src="@/assets/img/profile/chat.svg" alt="">
          <p :style="{color: over===2? 'black':'#24A8AC'}">Send Message</p>
        </div>
        <div @mouseover='over=3' @mouseout='over=0' class="info-wrp_content_panel_add">
          <img v-show="over===3" src="@/assets/img/profile/bookmark.svg" alt="">
          <p :style="{color: over===3? 'black':'#32ADB1'}">Bookmark</p>
        </div>
        <div @mouseover='over=4' @mouseout='over=0' class="info-wrp_content_panel_add">
          <img v-show="over===4" src="@/assets/img/profile/report.svg" alt="">
          <p :style="{color: over===4? 'black':'#00A03E'}">Report @reginaPT</p>
        </div>
      </div>
      <div class="m-info-wrp_content_panel" v-else>
        <router-link  to="/myaccount/settings/info"><div @mouseover='over=1' @mouseout='over=0' class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/settings.svg" alt="">
          <p :style="{color: over!==1 ? 'black':'#FFA202'}">Settings</p>
        </div></router-link>
        <div @mouseover='over=2' @mouseout='over=0' class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/bookmark.svg" alt="">
          <p :style="{color: over!==2? 'black':'#24A8AC'}">Saved</p>
        </div>
        <div @mouseover='over=3' @mouseout='over=0' class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/chat.svg" alt="">
          <p :style="{color: over!==3? 'black':'#32ADB1'}">Messages</p>
        </div>
        <div @mouseover='over=4' @mouseout='over=0' class="-info-wrp_content_panel_add">
          <img src="@/assets/img/profile/team.svg" alt="">
          <p :style="{color: over!==4? 'black':'#00A03E'}">My team</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main_info',
  props: {
    info: Object,
  },
  data() {
    return {
      over:0
    };
  },
  methods: {
    randomHash() {
      const o = Math.round(Math.random() * 1000000000000000000000).toString();
      return o;
    },
  },
};
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
  .m-info-wrp_content_panel a{
    text-decoration: none;
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
