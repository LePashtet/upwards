<template>
      <div @keyup.enter="loginUser"  class="reg">
        <div class="regName">
          <p>Log In</p>
        </div>
        <div class="error" v-if="done===false">{{ this.resoult }}</div>
        <div class="reg-cell" v-for="item in log_list">
          <img :src='item.img_path' alt="">
          <input v-model="item.value" :type=item.type :placeholder=item.place>
        </div>
        <Blue_btn class="reg-btn" @click="loginUser" text="Log In"></Blue_btn>
        <p class="already_have" v-show="this.$route.params.error">Forgot password?</p>
        <p class="already_have">Don't have account yet?</p>
        <Yellow_btn text="Create new account"
                    @click="goToRegistration()"></Yellow_btn>
      </div>

</template>

<script>
  import Blue_btn from '@/components/buttons/Blue_Round_btn.vue';
  import Yellow_btn from '@/components/buttons/Yellow_Round_btn.vue';
  export default {
    name: "login",
    components: {
      Blue_btn,
      Yellow_btn,
    },
    data() {
      return {
        log_list: [
          {
            name: 'Email',
            place: 'test@email.com',
            type: 'text',
            img_path: '@/assets/img/user.svg'
          },
          {
            name: 'Password',
            place: 'smth secret',
            type: 'password',
            img_path: '@/assets/img/locked.svg'
          }
        ],
        myParams: {
          email: null,
          password: null
        },
        done: null,
        resoult: null,
      }
    },
    methods: {
      goToRegistration() {
        this.$router.push({
          name: 'entrance',
          params: {
            id: 'register'
          }
        });
      },
      goToHome() {
        this.$router.push({
          path: '/',
        });
      },
      //ToDO don not work
      loginUser() {
        this.myParams.email = this.log_list[0].value;
        this.myParams.password = this.log_list[1].value;
        this.$store.dispatch('logIn', this.myParams).then((response)=>{
          console.log(response);
          if (response.status === 200) {
            this.$store.dispatch('isLogged');
            this.goToHome();
          }
          else {
            this.done = false;
             this.resoult = response.data.error;
          }
        });
      },
    },
  }
</script>

<style scoped>
  .reg {
    width: max-content;
  }
  .regName {
    width: max-content;
    font-family: "Open Sans", sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin: 0 auto 30px auto;

  }
  .error{
    width: 400px;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    margin: 0 auto 30px auto;
  }
  .reg-cell {
    width: 400px;
    height: 50px;
    background: rgba(0, 148, 227, 0.29);
    border-radius: 8px;
    margin-bottom: 15px;
  }
  input {
    line-height: 50px;
    width: 100%;
    background: initial;
    border: none;
  }
  .reg-btn {
    margin: 0 auto;

  }
  .already_have {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 400;
  }
</style>

