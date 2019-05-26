<template>
  <div class="skills-wrp">
    <div class="skills_top">
      <div class="skills_top_header"><p>Skills</p></div>
      <div class="skills_top_input"><input placeholder="Skill name" type="text" v-model="name"></div>
      <div class="skills_top_btn"><Blue_btn @click="addNewSkill" text="Add"></Blue_btn></div>
    </div>
    <div class="skills_bottom">
        <skill v-for="(s,index) in skills" :name="s.name" @setRate="changeRate" :rate="s.rate" :index="index"></skill>
    </div>
    <div class="skills_save">
      <btn text="Save"></btn>
    </div>
  </div>
</template>

<script>

  import btn from '@/components/buttons/NoBack_BlueText.vue';
  import skill from '@/components/Profile/settings/skill.vue';
  import Blue_btn from '@/components/buttons/Blue_Round_btn.vue';

export default {
  name: 'settings_skills',
  components:{
    Blue_btn,
    btn,
    skill
  },
  data(){
    return{
      skills:[{name:'vue',rate:3}],
      name: '',

    }
  },
  methods:{
    addNewSkill(){
      if(this.name!==''){
        this.skills.push({name: this.name, rate:1});
        this.name='';
      }
    },
    changeRate(d){
      vm.$set(this.skills[d.index], 'rate', d.rate);
       console.log(this.skills);

    },
  }
};
</script>

<style scoped>
  .skills-wrp{
    height: max-content;
    max-width: 500px ;
    border-bottom: 2px #595959 solid;
    padding: 0 0 20px  0;
  }
  .skills_top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .skills_top_header p{
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
  }
  .skills_top_input input{
    max-width: 300px;
    line-height: 56px;
    background: #ececec;
    border-radius: 8px;
    border: none;
  }
  .skills_save{
    position: relative;
    left:80%;
  }

</style>
