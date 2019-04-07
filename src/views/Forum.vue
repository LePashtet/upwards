<template>
  <div class="forum-wrp">
    <div class="forum-top">
      <addQuestion_btn class="ask_btn" text="Ask a question"></addQuestion_btn>
      <div>
        <search class="search"></search>
        <div>
          <p class="trend">Trending:</p>
          <input-tag v-model="tags"></input-tag>
          <!--<vue-tags-input-->
            <!--class="vue-tags-input"-->
            <!--v-model="tag"-->
            <!--:tags="tags"-->
            <!--:autocomplete-items="filteredItems"-->
            <!--@tags-changed="newTags => tags = newTags"-->
          <!--/>-->
        </div>
      </div>
    </div>
    <div class="forum-body">
      <div class="forum-panel">
        <myDisplayFilter></myDisplayFilter>
        <myDifficultyFilter></myDifficultyFilter>
      </div>
      <div class="forum-question">
        <question
          followers="100"
          answers="15"
          time="3"
          :is_Answered="true"
          name="Aspernatur assumenda doloremque odit possimus quae repellendus, ullam voluptas? Facere qui, vitae!"></question>
        <question
          followers="100"
          answers="15"
          time="3"
          :is_Answered="true"
          name="Aspernatur assumenda doloremque odit possimus quae repellendus, ullam voluptas? Facere qui, vitae!"></question>
        <question
          followers="100"
          answers="15"
          time="3"
          :is_Answered="true"
          name="Aspernatur assumenda doloremque odit possimus quae repellendus, ullam voluptas? Facere qui, vitae!"></question>

      </div>
    </div>
  </div>
</template>
<script>
  import myDisplayFilter from '@/components/filters/display-filter.vue';
  import myDifficultyFilter from '@/components/filters/difficulty-filter.vue';
  import addQuestion_btn from '@/components/buttons/Blue_Round_btn.vue';
  import search from '@/components/Search.vue';

  import question from '@/components/forum_question.vue';
  //TODO which is better

  import InputTag from 'vue-input-tag'
  import VueTagsInput from '@johmun/vue-tags-input';


  export default {
    name: "Forum",
    components: {
      myDisplayFilter,
      myDifficultyFilter,
      addQuestion_btn,
      search,
      VueTagsInput,
      question,
      InputTag
    },
    data() {
      return {
      //   tag: '',
        tags: [],
      //   autocompleteItems: [{
      //     text: 'Spain',
      //   }, {
      //     text: 'France',
      //   }, {
      //     text: 'USA',
      //   }, {
      //     text: 'Germany',
      //   }, {
      //     text: 'China',
      //   }],
      };
    },
    computed: {
      filteredItems() {
        return this.autocompleteItems.filter(i => {
          return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
        })
      }
    },
  }

</script>

<style scoped>
  .forum-top {
    display: flex;
    flex-direction: row;
    margin: 0 0 0 4.5vw;

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
  .forum-body{
    display: flex;
  }
  .forum-question{
    margin: 0 0 0 6vw;
  }

</style>
