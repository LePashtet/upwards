<!--EMPTY-->
<template>
  <div class="home">
    <div id="homepage">
      <div class="register">
        <h1 id="registerWord">Register</h1>

        <p class="threeMainWords">Username</p>
        <input type="text" value="Username" placeholder="Username">

        <p class="threeMainWords">Email</p>
        <input type="text" value="example@email.com" placeholder="example@emil.com">

        <p class="threeMainWords">Password</p>
        <input type="text" value="•••••••••••••••••" placeholder="•••••••••••••••••">

        <button id="startButton">Start learning now</button>
        <p id="orLogIn">Or log in using:</p>

        <div id="socialClubs">
          <a href=""><img src="@/assets/img/guest/google.svg" alt=""></a>
          <a href=""><img src="@/assets/img/guest/facebook.svg" alt=""></a>
          <a href=""><img src="@/assets/img/guest/twitter.svg" alt=""></a>
        </div>
      </div>
      <div id="mainPicture">
        <img src="@/assets/img/guest/Mainpic.svg" alt="">
      </div>
    </div>
    <div id="main">
      <p id="thereAre">There are lots of ways of education:</p>


      <div id="blocks">
        <div id="firstRow">
          <div id="success">
            <img src="@/assets/img/guest/Success.svg" alt="">
          </div>
          <div id="community">
            <img src="@/assets/img/guest/Community.svg" alt="">
          </div>
        </div>
        <div id="secondRow">
          <div id="self-progress">
            <img src="@/assets/img/guest/Self-progress.svg" alt="">
          </div>
          <div id="dictionary">
            <img src="@/assets/img/guest/Dictionary.svg" alt="">
          </div>
          <div id="events">
            <img src="@/assets/img/guest/Events.svg" alt="">
          </div>
        </div>
      </div>
      <div id="killer">
        <img src="@/assets/img/guest/Team Builder.svg" alt="">
      </div>
      <div id="registerAlready">
        <button id="registerAlreadyBox">Register</button>
        <p id="whatAreYou">What are you waiting for? Just click register and open a world of programming to
          yourself!</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
};
</script>
<style scoped>
  #homepage {
    width: 100%;
    display: flex;
  }

  .register {
    width: 380px;
    height: 650px;
    margin-left: 15vw;
    margin-top: 132px;
  }

  #registerWord {
    width: 202px;
    height: 55px;
    font-family: "Open Sans";
    font-size: 40px;
    font-weight: 700;
    line-height: 53px;
  }

  .threeMainWords {
    width: 85px;
    height: 23px;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 600;
    line-height: 23px;
  }

  input {
    padding-left: 17px;
    width: 360px;
    height: 56px;
    border: 1px solid #979797;
    background: #ffffff;
    border-radius: 8px;
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
  }

  #exampleema {
    width: 195px;
    height: 27px;
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
  }

  #startlearn {
    width: 269px;
    height: 39px;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 700;
    line-height: 39px;
  }

  #startButton {
    margin-top: 30px;
    width: 334px;
    height: 52px;
    background: #0087cb;
    border-radius: 26px;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0);
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 700;
    line-height: 39px;
  }

  #orLogIn {
    display: flex;
    justify-content: center;
    height: 23px;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 600;
    line-height: 23px;
  }

  #socialClubs {
    display: flex;
    justify-content: space-around;
  }

  #mainPicture {
    margin-top: 132px;
    margin-left: 8vw
  }

  #main {
    background: url('../assets/img/guest/Background.svg') no-repeat;
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%; /* Opera 9.6+ */
    background-size: 100%;
  }

  #thereAre {
    padding-top: 100px;
    margin-left: 209px;
    width: 818px;
    height: 63px;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 46px;
    font-weight: 700;
    line-height: 63px;
  }

  #firstRow {
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: max-content;
  }

  #blocks {
    margin-left:10%;
    width: max-content;
  }

  #community,
  #dictionary,
  #events {
    margin-left: 282px;
  }

  #secondRow {
    margin-top: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: max-content;
  }

  #killer {
    margin-top: 100px;
    margin-left: 10vw;
  }

  #registerAlready {
    margin-top: 200px;
    display: flex;
    flex-direction: row;
  }

  #whatAreYou {
    margin-left: 295px;
    margin-top: -50px;
    width: 713px;
    height: 180px;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 44px;
    font-weight: 700;
    line-height: 60px;
  }

  #registerAlreadyBox {
    margin-left: 10vw;
    width: 334px;
    height: 52px;
    background: #0087cb;
    border-radius: 22px;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 700;
    line-height: 39px;
  }

</style>
