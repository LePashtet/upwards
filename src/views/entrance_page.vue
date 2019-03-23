<template>
    <div class="guest-wrp">
    <LogIn class="login"></LogIn>

    </div>
</template>

<script>
  import LogIn from '@/components/LogIn_Reg.vue';
    export default {
        name: "Guest",
        components:{
          LogIn,
        }
    }
</script>

<style scoped>
  .guest-wrp{
  }
  .login{
    margin: 200px auto;
  }
</style>
