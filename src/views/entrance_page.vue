<template>
  <div class="guest-wrp">
    <login v-show="this.$route.path==='/entrance/log_in'" class="login"></login>
    <registration v-show="this.$route.path==='/entrance/register'" class="login"></registration>
  </div>
</template>

<script>
  import login from '@/components/login.vue';
  import registration from '@/components/Registration.vue';

  export default {
    name: "Guest",
    components: {
      login,
      registration
    }
  }
</script>

<style scoped>
  .guest-wrp {
  }

  .login {
    text-align: center;
    margin: 200px auto;
    /*TODO оно немного кривое*/
  }
</style>
