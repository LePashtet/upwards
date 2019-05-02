<template>
  <div id="app">
    <header>
      <Header  class="header"></Header>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <Footer class="footer"></Footer>
    </footer>
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
    height: available;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    margin-top: 22px;
  }
  .footer{
    position: relative;
    /*left: 0;*/
    bottom: 0;
    /*width: 100%;*/
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
