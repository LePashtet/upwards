<template>
  <div id="app">
    <header>
      <Header class="header"></Header>
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
    }

  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .header{
    margin-top: 22px;
  }
  .footer{
    /*position: fixed;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*width: 100%;*/
  }
  body ::selection{
    background:#ECECEC;
  }

</style>
