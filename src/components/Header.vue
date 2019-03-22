<template>
    <div class="hd-wrp">
      <p class="upwards">Upwards!</p>
      <div class="hd-menu">
        <p>Forum</p>
        <p>Study</p>
        <a href="/event"><p>Events</p></a>
        <p>Motivation</p>
        <p>Team</p>
      </div>
      <LogIn_btn class="btn" text="Log In"></LogIn_btn>
    </div>
</template>

<script>
  import LogIn_btn from '@/components/Yellow_Round_btn';
    export default {
        name: "Header",
        components: {
            LogIn_btn,
        }

    }
</script>

<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
  .hd-wrp{
    cursor: default;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .hd-menu{
    align-self: center;
    font-family: "HelveticaNeue-Light";
    display: flex;
    flex-direction: row;
    font-size: 27px;
    font-weight: 400;
  }
  .hd-menu p{
    margin-left: 20px;
  }
  .upwards{
    font-family: 'Abel', sans-serif;
    font-size: 33px;
    font-weight: 400;
  }
  .btn{
    align-self: center;
  }
</style>
