<template>
  <div class="hd-wrp " :class="$route.path==='/' ? ' ' : 'hd-wrp black'">
    <router-link to="/"><p class="upwards">Upwards!</p></router-link>
    <div class="hd-menu">
      <router-link to="/forum"><p>Forum</p></router-link>
      <router-link to="/hundreddays"><p>#100days</p></router-link>
      <router-link to="/event"><p>Events</p></router-link>
      <a>Motivation</a>
      <a>Team</a>
    </div>
    <div v-show=" $store.getters.LOGGED===true" class="profile-link">
      <router-link to="/myaccount"><img :src="'https://upwards.cf/api/user/avatar?size=30&'+randomHash()" alt=""></router-link>
    </div>
    <LogIn_btn v-show="this.$route.name !== 'entrance' && $store.getters.LOGGED === false" @click="goToLogin"
               class="btn" text="Log In" link></LogIn_btn>
    <LogIn_btn v-show="this.$route.name !== 'entrance' && $store.getters.LOGGED === true" @click="logout" class="btn"
               text="Log Out" link></LogIn_btn>

  </div>
</template>

<script>
  import LogIn_btn from '@/components/buttons/Yellow_Round_btn';

  export default {
    name: 'Header',
    components: {
      LogIn_btn,
    },
    data() {
      return {
        logged: false,
        response: [],
      };
    },
    methods: {
        randomHash() {
          const o = Math.round(Math.random() * 1000000000000000000000).toString();
          return o;
        },
      goToLogin() {
        this.$router.push({
          name: 'entrance',
          params: {
            id: 'log_in',
          },
        });
      },
      logout() {
        this.$store.dispatch('logOut').then((response) => {
          this.$store.dispatch('isLogged');
          this.$router.push({path: '/'});
        })
          .catch((error) => {
            alert(error);
          });
      },

    },
    mounted() {
      this.$store.dispatch('isLogged');
    },
    // TODO при логине вызывается оч часто

  };
</script>

<style scoped>
  a {
    text-decoration: none;
    color: white;
  }

  .black a {
    color: black;
    text-decoration: none;
  }

  .hd-wrp {
    cursor: default;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .hd-menu {
    align-self: center;
    font-family: "HelveticaNeue-Light";
    display: flex;
    flex-direction: row;
    font-size: 27px;
    font-weight: 400;
  }

  .hd-menu a {
    margin-left: 20px;
  }
  /*.hd-menu a:hover {*/
    /*-webkit-transform: rotate(-45deg); !* Chrome y Safari *!*/
    /*-moz-transform: rotate(-45deg); !* Firefox *!*/
    /*-o-transform: rotate(-45deg); !* Opera *!*/
    /*color:green  ;*/
  /*}*/

  .upwards {
    font-family: 'Abel', sans-serif;
    font-size: 33px;
    font-weight: 400;
  }

  .btn {
    align-self: center;
  }

  .profile-link img {
    border-radius: 100%;
  }

  .profile-link {
    width: 30px;
    height: 30px;
  }
  /*@media screen and (min-width: 319px) {*/
    /*.hd-menu{*/
      /*display: none;*/
    /*}*/
    /*.upwards{*/
      /*font-size: 25px;*/
    /*}*/
  /*}*/
  @media screen and (max-width: 1023px) {
    .hd-wrp {
    }
    .hd-menu {
      align-self: center;
      font-family: "HelveticaNeue-Light";
      display: flex;
      flex-direction: row;
      font-size:15px;
      font-weight: 400;
    }
    .hd-menu a {
      margin-left: 20px;
    }
    .upwards {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .btn {
      margin: 20px 0 0 0;
    }

  }
</style>
