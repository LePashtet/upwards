<template>
    <div class="reg-wrp">
      <p class="reg">Registration</p>
      <div class="reg-cell" v-for="item in list">
        <p>{{item.name}}</p>
        <input :type = item.type :placeholder = item.place>
      </div>
      <Blue_btn text = "Become Upwordian"></Blue_btn>
  </div>
</template>

<script>
  import Blue_btn from '@/components/Blue_Round_btn.vue';

    export default {
        name: "Registration",
        components: {
          Blue_btn,
        },
        data() {
          return{
            list: [
              {
                name: 'Username',
                place: 'HeyHop',
                type: 'text',
              },
              {
                name: 'Email',
                place: 'example@email.com',
                type: "text"
              },
              {
                name: 'Password',
                place: 'smth secret',
                type: 'password'
              }
            ],
          }
        },
    }
</script>

<style scoped>
  .reg{
    font-family: "Open Sans", sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .reg-cell p{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .reg-cell input{
    width: 360px;
    height: 45px;
    border: 1px solid #979797;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 30px;
  }
</style>
