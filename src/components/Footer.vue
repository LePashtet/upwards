<template>
    <div class="ft-wrp">
      <p class="upwards">Upwards!</p>
      <div class="ft-menu">
        <p>	&#169; Upwards 2019</p>
        <p>Icons provided by <a target="_blank" href="https://www.flaticon.com/">flaticon.com</a></p>
        <p>Privacy Policy</p>
        <p>About</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
  a{
    text-decoration: none;
    color: inherit;
  }
  /*@media screen and (max-width: 1023px){*/
    /*.ft-wrp{*/
      /*flex-direction: column;*/
    /*}*/
    /*.ft-menu{*/
      /*display: flex;*/
      /*flex-direction: column;*/
    /*}*/
  /*}*/
  .ft-wrp{
    width: 100%;
    cursor: default;
    display: flex;
    background-color: black;
    justify-content: space-around;
  }
  .upwards{
    margin: 21px 0;
    font-family: 'Comfortaa', cursive;
    font-size: 33px;
    font-weight: 400;
    color: white;
  }
  .ft-menu{
    display: flex;
    flex-direction: row;

  }
  .ft-menu p{
    align-self: center;
    color: #5e5e5e;
    font-family: "HelveticaNeue-Medium";
    font-size: 22px;
    font-weight: 400;
    margin-left: 52px;
  }
  @media screen and (max-width: 1023px) {
    .ft-menu p{
      font-size: 14px;
      margin-left: 25px;
    }
  }
</style>
