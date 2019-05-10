<template>
  <div class="settings-wrp">
    <my-menu></my-menu>
    <div class="settings_content">
      <info v-if="this.$route.path==='/myaccount/settings/info'"></info>
      <about v-if="this.$route.path==='/myaccount/settings/info'"></about>
    </div>
  </div>
</template>

<script>
  import myMenu from '@/components/Profile/settings/settings_menu.vue';
  import info from '@/components/Profile/settings/settings_info.vue';
  import about from '@/components/Profile/settings/settings_about.vue';

  export default {
    name: "Profile_Settings",
    components: {
      myMenu,
      info,
      about
    }
  }
</script>

<style scoped>
  .settings-wrp {
    height: 1000px;
    display: flex;
    flex-direction: row;
  }
  .settings_content{
    margin: 0 0 0 5em;
  }
</style>
