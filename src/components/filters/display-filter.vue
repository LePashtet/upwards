<template>
  <div class="display-wrp">
    <p class="header">Display:</p>
    <div class="cell" v-for="(item,key) in filter">
      <img :src=item.link alt="Level">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
  import PrettyCheck from 'pretty-checkbox-vue/check';

  export default {
    name: "display-filter",
    components: {
      PrettyCheck
    },
    data() {
      return {
        filter: [
          {
            name: 'New',
            link: '@/assets/img/forum/new.svg'
          },
          {
            name: 'Popular',
            link: '@/assets/img/forum/fire.svg',
          },
          {
            name: 'Unanswered',
            link: '@/assets/img/forum/question.svg'
          },
          {
            name: 'Common',
            link: "@/assets/img/forum/support.svg"
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
  .cell img{
    object-fit: contain;
  }
  .cell-filter div {
    display: flex;
    flex-direction: row;

  }

</style>
