<template>
  <div class="question-wrp">
    <div class="question-top">
      <p class="question-name">{{ name }}</p>
      <img v-show='is_Answered===true' src="@/assets/img/forum/green-mark.svg" alt="Answered">
    </div>
    <div class="question-bottom">
      <input-tag class="tags" placeholder="Enter" :value= "['sad','fds','dsf']"  :read-only="true" v-model="tags" :limit="5"></input-tag>
      <p class="time">Posted {{ time }} hours ago</p>
      <p class="answers">{{ answers }} answers</p>
      <p class="time">{{ followers }} People followed</p>
    </div>
  </div>
</template>

<script>
  import InputTag from 'vue-input-tag'

  export default {
    name: "forum_question",
    components: {
     InputTag
    },
    props: {
      name: String,
      is_Answered: Boolean,
      time: Number,
      answers: Number,
      followers: Number
    },
    data() {
      return {
        tags: ['vue',],
      };
    },
  }
</script>

<style scoped>
  .question-wrp{
    max-width: 1060px;
    min-height: 115px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #979797;
    margin: 10px 0 0 0;
  }
  .question-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .question-top img{
    align-self: start;
    object-fit: contain;
    margin: 0 10px 0 20%;
  }
  .tags{
    max-width: 200px;
  }
  .question-bottom{
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 0;
  }
  .tags.vue-input-tag-wrapper {
    border: none;

  }
</style>
