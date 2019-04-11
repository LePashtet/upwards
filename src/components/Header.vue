<template>
    <div class="hd-wrp">
      <router-link to="/"><p class="upwards">Upwards!</p></router-link>
      <div class="hd-menu">
        <router-link to="/forum"><p>Forum</p></router-link>
        <p>Study</p>
        <router-link to="/event"><p>Events</p></router-link>
        <p>Motivation</p>
        <p>Team</p>
      </div>
      <LogIn_btn v-show="this.$route.name !== 'registration' " @click="goToLogin" class="btn" text="Log In" link></LogIn_btn><!--TODO :click="this.$router.push({path:'log_in'})"-->
    </div>
</template>

<script>
  import LogIn_btn from '@/components/buttons/Yellow_Round_btn';
    export default {
        name: "Header",
        components: {
            LogIn_btn,
        },
      methods: {
        goToLogin() {
          this.$router.push({
            name: 'entrance',
            params: {
              id: 'log_in'
            }
          });
        }
      }

    }
</script>

<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
    .hd-wrp{
      cursor: default;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  .hd-menu{
    align-self: center;
    font-family: "HelveticaNeue-Light";
    display: flex;
    flex-direction: row;
    font-size: 27px;
    font-weight: 400;
  }
  .hd-menu p{
    margin-left: 20px;
  }
  .upwards{
    font-family: 'Abel', sans-serif;
    font-size: 33px;
    font-weight: 400;
  }
  .btn{
    align-self: center;
  }
  @media screen and (max-width: 768px){
    .hd-wrp{
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .upwards{
        margin-bottom: 35px;
    }
  }
</style>
