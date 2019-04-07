<template>
  <div class="display-wrp">
    <p class="header">Difficulty:</p>
    <div class="cell" v-for="item in filter">
      <img :src="item.link" alt="Difficulty">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
  import PrettyCheck from 'pretty-checkbox-vue/check';

  export default {
    name: "difficulty-filter",
    components: {
      PrettyCheck
    },
    data() {
      return {
        filter: [
          {
            name: 'Easy',
            link: '@/assets/img/forum/difficulty_easy.svg'
          },
          {
            name: 'Medium',
            link: '@/assets/img/forum/difficulty_medium.svg',
          },
          {
            name: 'You nerd or something?',
            link: '@/assets/img/forum/difficulty_hard.svg'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  @import '../../../node_modules/pretty-checkbox/dist/pretty-checkbox.min.css';

  .display-wrp {
    display: flex;
    flex-direction: column;
  }

  .header {
    font-family: "Open Sans", sans-serif;
    font-size: 29px;
    font-weight: 600;
  }
  .cell{
    display: flex;
    flex-direction: row;
  }
  .cell p {
    color: #595959;
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 10px 0;
  }

  .cell-filter div {
    display: flex;
    flex-direction: row;

  }

</style>
