<template>
    <div class="reg-wrp">
      <p>{{ this.$route.path }}</p>
      <div class="reg">
        <p v-if="this.$route.path === '/entrance/register'">Registration</p>
        <p v-else>Log In</p>
      </div>
      <div class="reg-cell" v-for="item in this.$route.path === '/entrance/register'?reg_list:log_list">
        <img :src= item.imgpath  alt="">
        <input :type = item.type :placeholder = item.place>
      </div>
      <!--TODO Отцентрировать кнопи-->
      <Blue_btn class="reg-btn" :text = "this.$route.path === '/entrance/register'?'Become Upwordian':'Log In'"></Blue_btn>
      <p class="policy">By registering you accept our <a href="/terms_of_policy">Terms of Policy</a></p>
      <p v-if="this.$route.path === '/entrance/register'" class="already_have">Already have an account?</p>
      <p v-else class="already_have">Don't have account yet?</p>
      <Yellow_btn :text="this.$route.path === '/entrance/register'?'Log In':'Create new account'"></Yellow_btn><!--TODO :click="this.$router.push({path:'entrance/login'})"-->
  </div>
</template>

<script>
  import Blue_btn from '@/components/Blue_Round_btn.vue';
  import Yellow_btn from '@/components/Yellow_Round_btn.vue';

    export default {
        name: "Registration",
        components: {
          Blue_btn,
          Yellow_btn
        },
        data() {
          return{
            reg_list: [
              {
                name: 'Username',
                place: 'HeyHop',
                type: 'text',
                imgpath: 'public/img/user.svg'
              },
              {
                name: 'Email',
                place: 'example@email.com',
                type: "text",
                imgpath: 'public/img/mail.svg'
              },
              {
                name: 'Password',
                place: 'smth secret',
                type: 'password',
                imgpath: 'public/img/locked.svg'
              }
            ],
            log_list: [
              {
                name: 'Username',
                place: 'HeyHop',
                type: 'text',
                imgpath: 'public/img/user.svg'
              },
              {
                name: 'Password',
                place: 'smth secret',
                type: 'password',
                imgpath: 'public/img/locked.svg'
              }
            ],
          }
        },
    }
</script>

<style scoped>
  .reg-wrp{
    width: max-content;
  }
  .reg p{
    width: max-content;
    font-family: "Open Sans", sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin: 0 auto 30px auto;

  }
  .reg-cell{
    width: 400px;
    height: 50px;
    background: rgba(0, 148, 227, 0.29);
    border-radius: 8px;
    margin-bottom: 15px;
  }
  input{
    line-height: 50px;
    width: 100%;
    background: initial;
    border: none;
  }
  .reg-btn{
    margin: 0 auto;
    text-align: center;
  }
  .policy{
    margin: 15px 0 40px 0;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  .already_have{
    text-align: center;

  }
</style>
