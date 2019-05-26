<template>
  <div>
    <div v-show="$route.path==='/forum/ask'">
      <write></write>
    </div>
    <div v-show="$route.path==='/forum'" class="forum-wrp">
      <div class="forum-top">
        <addQuestion_btn @click="write" class="ask_btn"
                         text="Ask a question"></addQuestion_btn>
        <div>
          <search @input="searchFunc"></search>
          <div>
            <p class="trend">Tags:</p>
            <input-tag class="tags" placeholder="Enter" v-model="tags"></input-tag>
          </div>
        </div>
      </div>
      <div class="forum-body">
        <div class="forum-panel">
          <myDisplayFilter></myDisplayFilter>
          <myDifficultyFilter class="disabled"></myDifficultyFilter>
        </div>
        <div v-show="!notFoundError" class="forum-question">
          <question
            class="question"
            v-for="question in $store.getters.BRANCHES"
            :followers="question.users"
            :answers="question.posts"
            :is_Answered="question.posts > 0"
            :name="question.title"
            :id="question.branch_id">
          </question>
        </div>
        <div v-show="notFoundError" class="forum-question">
          <h1>Nothing Found</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myDisplayFilter from '@/components/filters/display-filter.vue';
import myDifficultyFilter from '@/components/filters/difficulty-filter.vue';
import addQuestion_btn from '@/components/buttons/Blue_Round_btn.vue';
import search from '@/components/inputs/Search.vue';
import question from '@/components/Forum/forum_question.vue';
import write from '@/components/Forum/Forum_write.vue';
import InputTag from '@/components/InputTag.vue';


export default {
  name: 'Forum',
  components: {
    myDisplayFilter,
    myDifficultyFilter,
    addQuestion_btn,
    search,
    question,
    InputTag,
    write,
  },
  data() {
    return {
      tags: ['vuejs', 'js', 'php'],
      search: null,
      results: [],
      notFoundError: false,
    };
  },
  // TODO опаздывает на 1 вызов
  methods: {
    write() {
      if (this.$store.getters.LOGGED === true) {
        this.$router.push({ path: '/forum/ask' });
      } else {
        alert('You should logIn first');
      }
    },
    searchFunc(value) {
      this.$router.push({ query: null });
      this.notFoundError = false;
      this.$store.dispatch('search', value).then((resp) => {
        if (resp.status !== 200) {
          this.notFoundError = true;
          setTimeout(() => {
            this.notFoundError = false;
          }, 1000);
        }
      });
    },
  },
  created() {
    this.$router.push({ query: null });
    this.$store.dispatch('getBranches', 'popular').then((resp) => {
      if (resp.status !== 200) {
        this.notFoundError = true;
        setTimeout(() => {
          this.notFoundError = false;
        }, 1000);
      }
      else{
        this.$router.push({query:{type:'popular'}})
      }
    });
  },
};
</script>

<style scoped>
  .forum-top {
    display: flex;
    flex-direction: row;
    margin: 0 0 0 4.5vw;

  }

  .forum-wrp {
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
    height: max-content;
    display: flex;
    flex-direction: column;
    min-width: 500px;
  }

  .forum-question .question {
    margin: 50px 0 0 7vw;
  }

  .vue-input-tag-wrapper .input-tag {
    background-color: #cde69c;
    border-radius: 2px;
    border: 1px solid #d24a;
    color: #303084;
  }

  .disabled {
    background: gray;
  }
  .vue-input-tag-wrapper{
    border: none;
  }
  .vue-input-tag-wrapper span {
    border: none;
    color: deeppink;
    background-color: white;
    font-size: 16px;
  }
</style>
