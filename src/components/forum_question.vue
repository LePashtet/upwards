<template>
  <div class="question-wrp">
    <div class="question-top">
      <p class="question-name">{{ name }}</p>
      <img v-show='is_Answered===true' src="@/assets/img/forum/green-mark.svg" alt="Answered">
    </div>
    <div class="question-bottom">
      <vue-tags-input
        class="tags"
        v-model="tag"
        :tags="tags"
        :autocomplete-items="filteredItems"
        @tags-changed="newTags => tags = newTags"
      />
      <p class="time">Posted {{ time }} hours ago</p>
      <p class="answers">{{ answers }} answers</p>
      <p class="time">{{ followers }} People followed</p>
    </div>
  </div>
</template>

<script>
  import VueTagsInput from '@johmun/vue-tags-input';

  export default {
    name: "forum_question",
    components: {
      VueTagsInput
    },
    props: {
      name: String,
      is_Answered: String,
      time: String,
      answers: String,
      followers: String
    //  TODO Числа
    },
    data() {
      return {
        tag: '',
        tags: [],
        autocompleteItems: [{
          text: 'Spain',
        }, {
          text: 'France',
        }, {
          text: 'USA',
        }, {
          text: 'Germany',
        }, {
          text: 'China',
        }],
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
  .time{

  }
</style>
