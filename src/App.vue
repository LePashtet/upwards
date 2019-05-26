<template>
  <div id="app">
    <div :class="$route.path==='/' ? 'bg' : ''">
      <Header class="header"></Header>
    <main>
      <router-view/>
    </main>
    </div>
      <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    };
  },
  methods: {},

};
</script>

<style>
  #app{
    position: relative;
    min-height: 100vh;
  }
  *{
    margin: 0;
    padding: 0;
  }
  main{
    min-height: 50vw ;
    height: max-content;
    padding-bottom: 100px;
  }
  .bg{
    background: url(../../upwards_2.0/src/assets/img/welcome/welcome.png) no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
  }
  @media screen and (min-width: 1023px) {
    .header{
      padding-top: 25px;
    }
  }
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: max-content;
  }
  body ::selection{
    background:#ECECEC;
  }
  input::placeholder {
    font-family: 'Abel', sans-serif;
    font-size:16px;
    font-weight: 400;
  }
  @media screen and (min-width: 319px) {
    .header{
      padding-top: 15px;
    }
  }

</style>
