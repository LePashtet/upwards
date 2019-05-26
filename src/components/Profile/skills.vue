<template>
  <div class="skills-wrp">
    <div class="skills-wrp_skills">
      <div class="skills-wrp_skills_header">
        <p>Skills</p>
        <div class="skills-wrp_skills_header_hr"></div>
      </div>
      <div class="skills-wrp_skills_skill" v-for="skill in skills">
        <p class="skills-wrp_skills_skill_name">{{skill.name}}</p>
        <div class="skills-wrp_skills_skill_level">
          <img v-for="num in skill.level" src="@/assets/img/profile/skill_point.svg" alt="point">
        </div>
      </div>
    </div>
    <div class="skills-wrp_works">
      <div class="skills-wrp_skills_header">
        <p>Experience</p>
        <div class="skills-wrp_skills_header_hr"></div>
      </div>
      <div class="skills-wrp_works_work" v-for="skill in works">
        <div class="skills-wrp_works_work_content">
          <p class="skills-wrp_skills_works_name">{{skill.name}}</p>
          <!--<p class="skills-wrp_skills_works_link">{{skill.site}}</p>-->
          <p class="skills-wrp_skills_works_year">{{skill.time}}</p>
        </div>
        <current v-show="skill.now" text="Current"></current>
      </div>
    </div>
  </div>
</template>

<script>
import current from '@/components/buttons/Blue_Round_mark.vue';

export default {
  name: 'skills',
  components: {
    current,
  },
  props: {
    works: Array,
    skills: Array,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .skills-wrp {
    width: max-content;
    padding: 0 5px 0 0;
    min-height: 523px;
    border-right: 2px solid #595959;
  }

  .skills-wrp_skills_header {
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 0 30px 0;
  }

  .skills-wrp_skills_skill {
    color: #595959;
    font-family: "Open Sans";
    font-size: 19px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 0 30px 0;
  }

  .skills-wrp_skills_header_hr {
    height: 1px;
    border: 1px solid black;
    /*size:2px;*/
    /*color:#ff0000;*/
  }

  .skills-wrp_skills_skill_name {
    margin: 0 3em 0 0;
  }

  .skills-wrp_works_work {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 25px 0;
  }

  .skills-wrp_works_work_content {
    color: #595959;
    font-family: "Open Sans";
    font-size: 19px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin: 0 3em 0 0;
  }

  .skills-wrp_skills_works_link {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    color: black;
  }

  .skills-wrp_skills_works_year {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    color: black;
  }
</style>
