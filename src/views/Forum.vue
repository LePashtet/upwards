<template>
  <div class="forum-wrp">
    <div class="forum-top">
      <addQuestion_btn class="ask_btn" text="Ask a question"></addQuestion_btn>
      <div>
        <search v-model="search"></search>
        <div>
          <p class="trend">Trending:</p>
          <input-tag v-on:keyup.enter="findByTag" class="tags" placeholder="Enter" :value="['sad','fds','dsf']" v-model="tags"></input-tag>
        </div>
      </div>
    </div>
    <div class="forum-body">
      <div class="forum-panel">
        <myDisplayFilter></myDisplayFilter>
        <myDifficultyFilter></myDifficultyFilter>
      </div>

      <div v-show="!notFoundError" class="forum-question" v-for="question in results" >
         <question
          :followers="100"
          :answers="15"
          :time="1"
          :is_Answered="true"
          :name=question.text></question>
      </div>
      <div v-show="notFoundError" class="forum-question">
        <h1>Nothing Found</h1>
      </div>

    </div>
  </div>
</template>
<script>
  import myDisplayFilter from '@/components/filters/display-filter.vue';
  import myDifficultyFilter from '@/components/filters/difficulty-filter.vue';
  import addQuestion_btn from '@/components/buttons/Blue_Round_btn.vue';
  import search from '@/components/inputs/Search.vue';

  import question from '@/components/forum_question.vue';


  import InputTag from 'vue-input-tag'


  export default {
    name: "Forum",
    components: {
      myDisplayFilter,
      myDifficultyFilter,
      addQuestion_btn,
      search,
      question,
      InputTag
    },
    data() {
      return {
        tags: ['vuejs', 'js', 'php'],
        search: null,
        results: [],
        notFoundError: false,
      };
    },
    //TODO опаздывает на 1 вызов
    methods: {
      find() {
        console.log(this.notFoundError);
        return new Promise((resolve) => setTimeout(() => resolve(),1000))
        .then(() =>  {
          console.log(this.results);
          this.results.splice(0,this.results.length);
          this.notFoundError = false;
        })
        .then(() =>  {
           this.$store.dispatch('getText', this.search);
           this.results.push(this.$store.getters.RESPONSE);
        })
          .then(() =>  {
            this.notFoundError = this.$store.getters.NOT_FOUND_ERROR;
            console.log(this.results);
          })
      },
    },
    watch: {
      search: function () {
        this.find();
      }
    },
    created(){
      console.log(this.notFoundError);
    }
  }

</script>

<style scoped>
  .forum-top {
    display: flex;
    flex-direction: row;
    margin: 0 0 0 4.5vw;

  }
  .forum-wrp{
    min-height: 800px;
  }
  .forum-top div {
    margin: 0 0 0 10vw;
  }

  .forum-top div div {
    display: flex;
    flex-direction: row;
    margin: 0 0 0 20px;
    width: 425px;
  }

  .forum-panel {
    margin: 0 0 0 3vw;
  }

  .vue-tags-input {
    width: 400px;
  }

  .ask_btn {
    align-self: start;
  }

  .trend {
    color: #0087cb;
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 600;
    width: max-content;
  }

  .forum-body {
      display: flex;
  }

  .forum-question {
    margin: 50px 0 0 7vw;
    display: flex;
    flex-direction: column;
    min-width: 500px;
  }

  .vue-input-tag-wrapper .input-tag{
    background-color: #cde69c;
    border-radius: 2px;
    border: 1px solid #d24a;
    color: #303084;
  }
</style>
