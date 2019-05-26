<template>
  <div class="display-wrp">
    <p class="header">Display:</p>
    <div class="cell" @mouseover='item.over=!item.over' @mouseout='item.over=!item.over' v-for="(item,key) in filter">
      <img v-show="item.over===true" :src=item.link alt="Level">
      <p :style="{color: item.over===true? item.color:'#595959'}" @click="$store.dispatch('getBranches', item.query); $router.push({query:{type:item.query}})">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import PrettyCheck from 'pretty-checkbox-vue/check';

export default {
  name: 'display-filter`',
  components: {
    PrettyCheck,
  },
  data() {
    return {
      filter: [
        {
          name: 'New',
          link: require('@/assets/img/forum/new.svg'),
          query: 'new',
          over:false,
          color:'#00A03E'
        },
        {
          name: 'Popular',
          link: require('@/assets/img/forum/fire.svg'),
          query: 'popular',
          over:false,
          color:'#FFA202'
        },
        {
          name: 'Unanswered',
          link: require('@/assets/img/forum/question.svg'),
          query: 'unanswered',
          over:false,
          color:'#32ADB1'

        },
        // {
        //   name: 'Common',
        //   link:  require('@/assets/img/forum/support.svg'),
        //   query:'coon'
        // },
      ],
    };
  },
  methods: {
    handleClick(q) {
      this.$emit('click', { id: q });
      //  $router.push({path:'/forum',query: {id:item.query}})
    },
  },
};
</script>

<style scoped>
  @import '../../../node_modules/pretty-checkbox/dist/pretty-checkbox.min.css';

  .display-wrp {
    cursor: default;
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
    cursor: pointer;
  }
  .cell img{
    align-self:flex-start;
  }
  .cell p {
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
