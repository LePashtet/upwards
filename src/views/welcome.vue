<template>
  <div class="welcome-wrp">
    <div class="welcome_greeting">
      <p class="welcome_greeting_hello">Hello, this is Upwards!</p>
      <p class="welcome_greeting_about">It’s a cozy sweet home for every developer and designer to learn, explore, collaborate and create great things!</p>
    </div>
    <div class="welcome_greeting_button">
      <button class="welcome_greeting_register" text="Register">Register</button>
    </div>
    <div class="welcome_greeting_fireplace">
      <p class="welcome_greeting_fireplace_text">*Fireplace not included:)</p>
    </div>
  <div class="greeting_upwards">
    <div class="greeting_text">
      <div class="greeting_upwards_we_here">
        <p>«We here in Upwards believe, that coding skill is not a skill that will kill in the IT. It's also very important to have the ability to collaborate, manage time and task. And most importantly, understand what do you want to achieve and how to get to it. And here we come to help in all the ways possible!»</p>
      </div>
      <div class="greeting_author">
        <p class="greeting_some_wise_guy">‒Some wise guy in our team</p>
      </div>
    </div>
    <div class="greeting_notebooks">
      <img class="greeting_notebooks_image" src="@/assets/img/welcome/laptops.png" alt="">
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
        <img class="website_sections_images" src="src/SVG's/Main/Forum Picture.png" alt="">
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
        <img class="website_sections_images" src="src/SVG's/Main/In Dev Picture.png" alt="">
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
        <img class="website_sections_images" src="src/SVG's/Main/Event Picture.png" alt="">
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
        <img class="website_sections_images" src="src/SVG's/Main/In Dev Picture.png" alt="">
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
        <img class="website_sections_images" src="src/SVG's/Main/In Dev Picture.png" alt="">
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
        <img class="website_sections_images" src="src/SVG's/Main/In Dev Picture.png" alt="">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import register from '@/components/buttons/Yellow_Round_btn.vue';

  export default {
        name: "welcome",
    components:{
          register,
    }

    }
</script>

<style scoped>
  .welcome-wrp{
    margin-left: 200px;
    margin-top: 160px;
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
  .welcome_greeting_register{
    width: 198px;
    height: 53px;
    background: #ffa202;
    border-radius: 27px;
    color: white;
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
  }
  .welcome_greeting_fireplace{
    margin-top: 250px;
    margin-left: 1400px;
    width: max-content;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 600;
  }
  .greeting_upwards{
    display: flex;
    width: 1640px;
    height: 530px;
    margin-left: 140px;
    margin-top: 160px;
  }
  .greeting_text{
    justify-content: column;
  }
  .greeting_upwards_we_here{
    width: 840px;
    height: 440px;
    font-family: "Open Sans";
    font-size: 40px;
    font-weight: 700;
  }
  .greeting_author{
    margin-top: 60px;
    margin-left: 525px;
    color: #595959;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 600;
  }
  .greeting_notebooks{
    margin-left: 120px;
    margin-top: 50px;
  }
  .greeting_notebooks_image{
    width: 680px;
    height: 388px;
  }
  .website_sections-wrp{
    margin-top: 160px;
    margin-bottom: 100px;
  }
  .website_sections_headline-wrp{
    margin-left: 220px;
  }
  .website_sections_headline{
    font-family: "Open Sans";
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 0;
  }
  .website_line{
    width: 370px;
    height: 0;
    border: 1px solid #595959;
  }
  .website_sections_box{
    display: flex;
    margin-left: 350px;
    margin-top: 130px;
  }
  .website_sections__text{
    justify-content: column;
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
    margin-left: 330px;
  }
  .website_sections_images{
    width: 540px;
    height: 338px;
  }
  .line{
    margin-left: 500px;
    margin-top: 115px;
    margin-bottom: 115px;
    width: 974px;
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
  .website_sections_in_design_status{
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 700;
    padding-left: 20px;
    padding-top: 5px;
  }

</style>
