<template>
  <div>
    <div v-if="$route.path==='/'" class="hd-wrp" >
      <router-link to="/"><p class="upwards">Upwards!</p></router-link>
      <div class="hd-menu">
        <router-link to="/forum"><p>Forum</p></router-link>
        <a>Challenges</a>
        <router-link to="/event"><p>Events</p></router-link>
        <a>Motivation</a>
        <a>Team</a>
      </div>
      <div v-show=" $store.getters.LOGGED===true" class="profile-link">
        <router-link to="/myaccount"><img src="https://via.placeholder.com/30" alt=""></router-link>
      </div>
      <LogIn_btn v-show="this.$route.name !== 'entrance' && $store.getters.LOGGED === false" @click="goToLogin" class="btn" text="Log In" link></LogIn_btn>
      <LogIn_btn v-show="this.$route.name !== 'entrance' && $store.getters.LOGGED === true" @click="logout" class="btn" text="Log Out" link></LogIn_btn>

    </div>
    <div v-else class="hd-wrp black" >
    <router-link to="/"><p class="upwards">Upwards!</p></router-link>
    <div class="hd-menu">
      <router-link to="/forum"><p>Forum</p></router-link>
      <a>Study</a>
      <router-link to="/event"><p>Events</p></router-link>
      <a>Motivation</a>
      <a>Team</a>
    </div>
    <div v-show=" $store.getters.LOGGED===true" class="profile-link">
      <router-link to="/myaccount"><img src="https://via.placeholder.com/30" alt=""></router-link>
    </div>
    <LogIn_btn v-show="this.$route.name !== 'entrance' && $store.getters.LOGGED === false" @click="goToLogin" class="btn" text="Log In" link></LogIn_btn>
    <LogIn_btn v-show="this.$route.name !== 'entrance' && $store.getters.LOGGED === true" @click="logout" class="btn" text="Log Out" link></LogIn_btn>

  </div>
  </div>
</template>

<script>
  import LogIn_btn from '@/components/buttons/Yellow_Round_btn';
    export default {
        name: "Header",
        components: {
            LogIn_btn,
        },
      data(){
        return{
          logged: false,
          response:[],
        }
      },
      methods: {

        goToLogin() {
          this.$router.push({
            name: 'entrance',
            params: {
              id: 'log_in'
            }
          });
        },
        logout(){
          this.$store.dispatch('logOut').then((response)=>{
            this.$store.dispatch('isLogged');
            this.$router.push({path:'/'})
          })
            .catch((error)=>{
              alert(error)
            });
        },

      },
      mounted(){
        this.$store.dispatch('isLogged');
      },
      //TODO при логине вызывается оч часто

    }
</script>

<style scoped>
  a{
  text-decoration: none;
  color: white;
}
  .black a{
    color: black;
  }

    .hd-wrp{
      cursor: default;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  .hd-menu{
    align-self: center;
    font-family: "HelveticaNeue-Light";
    display: flex;
    flex-direction: row;
    font-size: 27px;
    font-weight: 400;
  }
  .hd-menu a{
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
  #profile-link img{
    border-radius: 100%;
  }
  .profile-link{
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 1024px){
    .hd-wrp{
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .upwards{
        margin-bottom: 35px;
    }
    .btn{
      margin: 20px 0 0 0;
    }

  }
</style>
