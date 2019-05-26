<template>
  <div class="reg-wrp" @keyup.enter="registerUser">
    <div class="reg">
      <p>Registration</p>
    </div>
    <div v-if="done===false" class="error" v-html="this.resoult">
    </div>
    <div class="reg-cell" v-for="item in reg_list">
      <img :src='item.img_path' alt="">
      <label>
        <input v-model="item.value" :type=item.type :placeholder=item.place>
      </label>
      <p>{{ item.info}}</p>
    </div>
    <Blue_btn class="reg-btn" @click="registerUser" :text="'Become Upwordian'"></Blue_btn>
    <p class="policy">By registering you accept our
      <router-link to="/terms_of_policy">Terms of Policy</router-link>
    <p class="already_have">Already have an account?</p>
    <Yellow_btn :text="'Log In'"
                @click="goToLogin"></Yellow_btn>
  </div>

</template>

<script>
import Blue_btn from '@/components/buttons/Blue_Round_btn.vue';
import Yellow_btn from '@/components/buttons/Yellow_Round_btn.vue';
import user from "@/assets/img/user.svg";
import locked from "@/assets/img/locked.svg";
import mail from "@/assets/img/mail.svg";


export default {
  name: 'Registration',
  components: {
    Blue_btn,
    Yellow_btn,
  },
  data() {
    return {
      reg_list: [
        {
          name: 'Username',
          value: null,
          place: 'HeyHop',
          type: 'text',
          img_path: user,
          info: 'May be only letters, digits, and "_", "-"',
        },
        {
          name: 'Email',
          value: null,
          place: 'example@email.com',
          type: 'text',
          img_path: mail,
        },
        {
          name: 'Password',
          value: null,
          place: 'smth secret',
          type: 'password',
          img_path: locked,
          info: 'Must be between 8 and 20 symbols',
        },
      ],
      myParams: {
        name: null,
        email: null,
        password: null,
      },
      done: null,
      resoult: null,

    };
  },
  methods: {
    goToLogin() {
      this.$router.push({
        name: 'entrance',
        params: {
          id: 'log_in',
        },
      });
    },
    goToHome() {
      this.$router.push({
        path: '/myaccount/settings/info',
      });
    },
    registerUser() {
      this.myParams.name = this.reg_list[0].value;
      this.myParams.email = this.reg_list[1].value;
      this.myParams.password = this.reg_list[2].value;
      this.$store.dispatch('register', this.myParams).then((response) => {
        if (response.status === 201) {
          this.$store.dispatch('isLogged');
          this.goToHome();
        } else {
          this.done = false;
          this.resoult = response.data.error;
        }
      });
    },
  },
};
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
  .error{
    width: 400px;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: 0 auto 30px auto;
  }
  .reg-cell {
    width: 400px;
    background: rgba(0, 148, 227, 0.29);
    border-radius: 8px;
    margin-bottom: 30px;
  }

  .reg-cell p {
    font-family: 'Abel', sans-serif;
    font-size: 17px;
    font-weight: 400;
    margin: 5px;
  }
  .reg-cell img{
    margin: 1px;
    width: 20%;
    height:45px;
    object-fit: contain;
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
