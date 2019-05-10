<template>
  <div class="profile-wrp">
    <info class="profile-wrp_info" :info="info"></info>
    <div class="profile-wrp_bottom">
      <skills class="sk" :skills="info.skills.skills" :works="info.works.works"></skills>
      <div class="profile-wrp_bottom_about">
        <div class="profile-wrp_bottom_about_name">
          About <span class="profile-wrp_bottom_about_name_tag">@ {{ info.name }}</span>
        </div>
        <div class="profile-wrp_bottom_about_content">
            {{ info.about}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import info from '@/components/Profile/main_info.vue';
  import skills from '@/components/Profile/skills.vue';


  export default {
    name: "Profile",
    components: {
      info,
      skills
    },
    data() {
      return {
        info: null,
      }
    },

    mounted() {
      this.$store.dispatch('getProfile').then((response) => {
        if(response.status===401){
          alert("Please logIn first");
          setTimeout(function(){
          }, 1500);
          this.$router.push({path: '/entrance/log_in'});
        }else {
          this.info = response.data;
          this.info.languages=response.data.languages.split(", ");
        }
      });
    }
  }
</script>

<style scoped>
  .profile-wrp {
    margin: 0 0 0 10%;
  }

  .profile-wrp_info {
    margin: 0 0 40px 0;
  }

  .profile-wrp_bottom_about_name {
    ont-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
  }

  .profile-wrp_bottom_about_content {
    font-family: "Open Sans";
    font-size: 19px;
    font-weight: 400;
  }

  .sk {
    margin: 0 40px 0 0;
  }

  .profile-wrp_bottom {
    display: flex;
    flex-direction: row;
  }
  .profile-wrp_bottom_about_name_tag{
    color: #595959;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 600;
  }
</style>
