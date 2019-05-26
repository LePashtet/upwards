<template>
  <div class="welcome-wrp">
    <div class="welcome_greeting">
      <p class="welcome_greeting_hello">Hello, this is Upwards!</p>
      <p class="welcome_greeting_about">It’s a cozy sweet home for every developer and designer to learn, explore, collaborate and create great things!</p>
    </div>
    <div class="welcome_greeting_button">
      <Yellow_btn class="welcome_greeting_register" text="Register"></Yellow_btn>
    </div>
    <div class="welcome_greeting_fireplace">
      <p class="welcome_greeting_fireplace_text">*Fireplace not included:)</p>
    </div>
    <div class="greeting_upwards">
      <div class="greeting_text">
        <div class="greeting_upwards_we_here">
          <p>«We here in Upwards believe, that coding skill is not a main one. It's also very important to have the ability to collaborate, manage time and task. And most importantly, understand what do you want to achieve and how to get to it. And here we come to help in all the ways possible!»</p>
        </div>
        <div class="greeting_author">
          <p class="greeting_some_wise_guy">‒Some wise guy in our team</p>
        </div>
      </div>
      <div class="greeting_notebooks">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uo-fBE7hkME?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <div class="website_sections-wrp">
      <div class="website_sections_headline-wrp">
        <p class="website_sections_headline">Website sections</p>
        <div class="website_line"></div>
      </div>
      <div class="website_sections_box">
        <div class="website_sections_text">
          <div class="website_sections_headline-wrp">
            <p class="website_sections_headline">Forum</p>
          </div>
          <div class="website_sections_about-wrp">
            <p class="website_sections_about">
              Got a question? We've got an answer! Join us on our forum, where hundreds of users are ready to give you some piece of advice!
            </p>
          </div>
          <div class="website_sections_beta_out_status-wrp">
            <p class="website_sections_beta_out_status">BETA OUT</p>
          </div>
        </div>
        <div class="website_sections_images-wrp">
          <img class="website_sections_images" src="@/assets/img/welcome/forum.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="website_sections_box">
        <div class="website_sections_text">
          <div class="website_sections_headline-wrp">
            <p class="website_sections_headline">Stories</p>
          </div>
          <div class="website_sections_about-wrp">
            <p class="website_sections_about">
              What factor of learning people tend tounderestimate is motivation. Read our monthly published stories about programmers around the world, being best in their job!
            </p>
          </div>
          <div class="website_sections_in_plans_status-wrp">
            <p class="website_sections_in_plans_status">IN PLANS</p>
          </div>
        </div>
        <div class="website_sections_images-wrp">
          <img class="website_sections_images" src="@/assets/img/welcome/stories.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="website_sections_box">
        <div class="website_sections_text">
          <div class="website_sections_headline-wrp">
            <p class="website_sections_headline">Events</p>
          </div>
          <div class="website_sections_about-wrp">
            <p class="website_sections_about">
              There's some much happening in IT industry. Don't want to miss anything? Check out our events calendar, with every presentation or announce in next 12 months
            </p>
          </div>
          <div class="website_sections_beta_out_status-wrp">
            <p class="website_sections_beta_out_status">BETA OUT</p>
          </div>
        </div>
        <div class="website_sections_images-wrp">
          <img class="website_sections_images" src="@/assets/img/welcome/events.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="website_sections_box">
        <div class="website_sections_text">
          <div class="website_sections_headline-wrp">
            <p class="website_sections_headline">Problem-solving</p>
          </div>
          <div class="website_sections_about-wrp">
            <p class="website_sections_about">
              Self-improving is important. Especially when you are a programmer. Here you will find various problems to solve and practice your programming skills!
            </p>
          </div>
          <div class="website_sections_in_plans_status-wrp">
            <p class="website_sections_in_plans_status">IN PLANS</p>
          </div>
        </div>
        <div class="website_sections_images-wrp">
          <img class="website_sections_images" src="@/assets/img/welcome/challenges.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="website_sections_box">
        <div class="website_sections_text">
          <div class="website_sections_headline-wrp">
            <p class="website_sections_headline">Dictionary</p>
          </div>
          <div class="website_sections_about-wrp">
            <p class="website_sections_about">
              Even we sometimes confuse each other by getting the meaning. And we thought: nobody would go to Wikipedia, it's words are confusing. Let's just make TL:DR Dictionary!
            </p>
          </div>
          <div class="website_sections_in_design_status-wrp">
            <p class="website_sections_in_design_status">IN DESIGN</p>
          </div>
        </div>
        <div class="website_sections_images-wrp">
          <img class="website_sections_images" src="@/assets/img/welcome/dictionary.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="website_sections_box">
        <div class="website_sections_text">
          <div class="website_sections_headline-wrp">
            <p class="website_sections_headline">Team Builder</p>
          </div>
          <div class="website_sections_about-wrp">
            <p class="website_sections_about">
              Imagine: you have a great idea of a startup,but you don't have a team. What do you do? Right! In just a few clicks pick team members, being based on their skills and previous
            </p>
          </div>
          <div class="website_sections_in_plans_status-wrp">
            <p class="website_sections_in_plans_status">IN PLANS</p>
          </div>
        </div>
        <div class="website_sections_images-wrp">
          <img class="website_sections_images" src="@/assets/img/welcome/team.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import register from '@/components/buttons/Yellow_Round_btn.vue';
  import Yellow_btn from '@/components/buttons/Yellow_Round_btn.vue';

  export default {
    name: "welcome",
    components:{
      register,
      Yellow_btn
    }

  }
</script>

<style scoped>
  .welcome-wrp{
    margin-top: 8%;
  }
  .welcome_greeting{
    color: white;
    margin-left: 8%;
  }
  .welcome_greeting_hello{
    font-family: "Gilroy-ExtraBold";
    font-size: 100px;
    font-weight: 400;
  }
  .welcome_greeting_about{
    margin-top: 30px;
    font-family: "Open Sans";
    font-size: 47px;
    font-weight: 400;
    width: 20em;
  }
  .welcome_greeting_button{
    margin-top: 2vw;
    margin-left: 8%;
    cursor: pointer;
  }
  .welcome_greeting_fireplace{
    color: white;
    margin-top: 15%;
    margin-left: 70%;
    width: max-content;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 600;
  }

  .greeting_upwards{
    display: flex;
    height: max-content;
    margin-left: 5%;
    margin-top: 5%;
  }
  .greeting_text{
    width: 50%;
  }

  .greeting_upwards_we_here{
    font-family: "Open Sans";
    font-size: 25px;
    font-weight: 700;
  }
  .greeting_author{
    width: max-content;
    color: #595959;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 600;
    margin: 0 auto;
  }
  .greeting_notebooks_image{
    width: 100%;

  }





  .website_sections-wrp{
    margin-top: 9%;
    margin-bottom: 100px;
  }
  .website_sections_headline-wrp{
    margin-left: 15%;
  }
  .website_line{
    width: 20%;
    height: 0;
    border: 1px solid #595959;
  }
  .website_sections_box{
    display: flex;
    margin-left: 10%;
    margin-top: 10%;
  }
  .website_sections_headline{
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
  }
  .website_sections_about-wrp{
    margin-top: 40px;
    width: 335px;
    height: 150px;
    color: #595959;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 600;
  }
  .website_sections_beta_out_status-wrp{
    width: 125px;
    height: 34px;
    background: #00a03e;
    border-radius: 8px;
    margin-top: 75px;
  }
  .website_sections_beta_out_status{
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 700;
    padding-left: 20px;
    padding-top: 5px;
  }
  .website_sections_images-wrp{
    margin-left: 5%;
  }
  .website_sections_images{
    width: 540px;
    height: 338px;
  }
  .line{
    margin-left: 20%;
    margin-top: 115px;
    margin-bottom: 115px;
    width: 75%;
    height: 0;
    border: 1px solid #979797;
  }
  .website_sections_in_plans_status-wrp{
    width: 125px;
    height: 34px;
    background: #0087cb;
    border-radius: 8px;
    margin-top: 75px;
  }
  .website_sections_in_plans_status{
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 700;
    padding-left: 20px;
    padding-top: 5px;
  }
  .website_sections_in_design_status-wrp{
    width: 125px;
    height: 34px;
    background: #ffa202;
    border-radius: 8px;
    margin-top: 75px;
  }
  .website_sections_in_design_status {
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 700;
    padding-left: 20px;
    padding-top: 5px;
  }
  @media screen and (min-width: 1024px){
    .welcome_greeting_hello{
      font-size: 80px;
    }
    .welcome_greeting_about{
      font-size:35px;
    }
    .welcome_greeting_fireplace{
      margin-top: 10%;
      margin-left: 70%;
      width: max-content;
      font-family: "Open Sans";
      font-size: 22px;
      font-weight: 600;
    }
    .greeting_upwards{
      margin-left: 5%;
      margin-top:5vw;
    }
  }
  @media screen and (min-width: 1120px){
    .welcome_greeting_fireplace{
      margin-top: 13%;
      margin-left: 70%;
    }
  }
  @media screen and (min-width: 1200px){
    .welcome_greeting_fireplace{
      margin-top: 17%;
      margin-left: 70%;
      width: max-content;
      font-family: "Open Sans";
      font-size: 22px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 1360px){
    .welcome_greeting_fireplace{
      margin-top: 20%;
      margin-left: 80%;
      width: max-content;
      font-family: "Open Sans";
      font-size: 22px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 1460px){
    .welcome_greeting_fireplace{
      margin-top: 20%;
      margin-left: 80%;
    }
    .welcome_greeting_hello{
      font-size: 90px;
    }
    .welcome_greeting_about{
      font-size: 40px;
    }
  }
  @media screen and (min-width: 1560px){
    .welcome_greeting_fireplace{
      margin-top: 22%;
      margin-left: 80%;
      width: max-content;
      font-family: "Open Sans";
      font-size: 22px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 1860px){
    .welcome_greeting_fireplace{
      margin-top: 26%;
      margin-left: 80%;
      width: max-content;
      font-family: "Open Sans";
      font-size: 22px;
      font-weight: 600;
    }
  }


  @media screen and (max-width: 320px) {
    body{
      width: 100%;
    }
    .welcome-wrp{
      margin-left: 10px;
    }
    .welcome_greeting{
      margin-left: 0;
    }
    .welcome_greeting_hello{
      font-size: 20px;
      font-weight: 400;
    }
    .welcome_greeting_about{
      width:50%;
      margin-top: 10px;

      font-size: 10px;
      font-weight: 400;
    }
    .welcome_greeting_button{
      margin-bottom: 20px;
      display: none;
    }
    .welcome_greeting_fireplace{
      /*margin-top: 100px;*/
      /*margin-left: 100px;*/
      /*font-size: 15px;*/
      /*font-weight: 600;*/
      display: none;
    }
    .greeting_upwards{
      display: flex;
      flex-direction: column-reverse;
      margin-top: 15%;
    }
    .greeting_text{
      width: 70%;
    }
    /*.greeting_upwards_we_here{*/
      /*width: inherit;*/
      /*height: 300px;*/
      /*font-size: 20px;*/
      /*font-weight: 700;*/
    /*}*/
    .greeting_notebooks{
      margin-left: 0;
      height: 315px;
      overflow: hidden;
    }
    .greeting_notebooks_image{
      width: 300px;
      height: 200px;
    }
    .greeting_author{
      margin-top: 10px;
      margin-left: 125px;
    }
    .greeting_some_wise_guy{
      font-size: 12px;
      font-weight: 600;
    }
    .website_sections-wrp{
      margin-left: 0;
      margin-top: 180px;
    }
    .website_sections_headline-wrp{
      margin-left: 70px;
    }
    .website_sections_headline{
      font-size: 24px;
      font-weight: 700;
    }
    .website_line{
      width: 200px;
    }
    .website_sections_box{
      margin-top: 45px;
      margin-left: 30px;
      width: 100%;
    }
    .website_sections_headline-wrp{
      margin-left: 5%;
    }
    .website_sections_about-wrp{
      width: 200px;
    }
    .website_sections_about{
      font-size: 18px;
      font-weight: 600;
    }
    .website_sections_images-wrp{
      margin-left: 0;
    }
    .website_sections_images{
      width: 100%;
      object-fit: contain;
    }
    .website_sections_beta_out_status-wrp{
      margin-top: 150px;
    }
    .website_sections_in_plans_status-wrp{
      margin-top: 150px;
    }
    .website_sections_in_design_status-wrp{
      margin-top: 150px;
    }
    .line{
      width: 255px;
      margin-left: 25px;
    }
  }

</style>

