<template>
  <div class="settings-wrp">
    <div class="settings_menu"><my-menu></my-menu></div>
    <div class="settings_content">
      <info v-if="this.$route.path==='/myaccount/settings/info'" :tag="myData.name" :name="myData.first_name" :surname="myData.last_name"></info>
      <about v-if="this.$route.path==='/myaccount/settings/info'" :about="myData.about"></about>
      <skills v-if="this.$route.path==='/myaccount/settings/info'"></skills>
    </div>
  </div>
</template>

<script>
import myMenu from '@/components/Profile/settings/settings_menu.vue';
import info from '@/components/Profile/settings/settings_info.vue';
import about from '@/components/Profile/settings/settings_about.vue';
import skills from '@/components/Profile/settings/settings_skills.vue';


export default {
  name: 'Profile_Settings',
  components: {
    myMenu,
    info,
    about,
    skills
  },
  data(){
    return{
      myData: null,
    }
  },
  mounted(){
      this.$store.dispatch('getProfile').then((resp) => {
        this.myData = resp.data;
      });
  },
};
</script>

<style scoped>
  .settings-wrp {
    height: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .settings_content{
    min-width: 500px;
  }
</style>
