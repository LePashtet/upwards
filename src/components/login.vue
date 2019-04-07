<template>
  <div class="reg-wrp">
    <p>{{ this.$route.path }}</p>
    <div class="reg">
      <p>Log In</p>
    </div>
    <div class="reg-cell" v-for="item in log_list">
      <img :src='item.img_path' alt="">
      <input :type=item.type :placeholder=item.place>
    </div>
    <Blue_btn class="reg-btn" @click="goToConfirm()" text="Log In"></Blue_btn>
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
      data(){
          return{
            log_list: [
              {
                name: 'Username',
                place: 'HeyHop',
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
        goToConfirm() {
          this.$router.push({
            name: 'entrance',
            params: {
              id: 'log_in/confirm'
            }
          });
        }

      }
    }
</script>

<style scoped>
  .reg-wrp {
    width: max-content;
  }

  .reg p {
    width: max-content;
    font-family: "Open Sans", sans-serif;
    font-size: 40px;
    font-weight: 700;
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
    margin: auto 0;
  }

  .policy {
    margin: 15px 0 40px 0;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  .already_have {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 400;
  }
</style>

