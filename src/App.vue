<template>
  <div id="app">
    <div v-show="$route.path==='/'" class="bg">
      <!--@/assets/img/welcome/welcome.png-->
      <Header  class="header"></Header>
    <main>
      <router-view/>
    </main>
    </div>
      <Footer class="footer"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  export default {
    name: "app",
    components: {
      Header,
      Footer
    },
    data(){
      return{
      }
    },
    methods: {}

  }
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
    /*background: url(../../upwards_2.0/src/assets/img/welcome/welcome.png) no-repeat;*/
    /*background-size: contain;*/
    /*height: 66vw;*/
  }
  .header{
    padding-top: 25px;
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

</style>
