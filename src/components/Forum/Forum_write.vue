<template>
  <div class="wr-wrp">
    <div class="write-wrp">
      <div class="write_header">
        <p>Title</p>
        <input type="text" v-model="info.myHeader">
      </div>
      <div class="write_content">
        <wysiwyg class="myHTML" v-model="info.myHTML" />
        <!--TODO проверку на количество символов-->
      </div>
      <div class="write_tags">
        <p>Tags</p>
        <input-tag class="tags" placeholder="Enter" v-model="info.tags"></input-tag>
        <!--TODO maximum 5-->
      </div>
      <Blue_btn class="btn" @click="myClick" text="Ask Question"></Blue_btn>
    </div>
    <div class="rules">
      <p class="rules_header">Rules:</p>
      <p>1. Look up if the question has been already asked</p>
      <p>2. Be polite and respectful</p>
      <p>3. Behave as you would in real life</p>
      <p>4. Make sure question needs an answer, not a discussion</p>
      <p>5. Always provide context, ideally code or source to it</p>
    </div>
  </div>

</template>
<script>
  import InputTag from '@/components/InputTag.vue';

import Blue_btn from '@/components/buttons/Blue_Round_btn.vue';


export default {
  name: 'Forum_write',
  components: {
    Blue_btn,
    InputTag,
  },
  data() {
    return {

      search: null,
      results: [],
      notFoundError: false,
      info: {
        myHTML: null,
        myHeader: null,
        tags: [],
      },

    };
  },
  methods: {
    myClick() {
      console.log(this.info.myHTML);
      console.log(this.info.myHeader);
      console.log(this.info.tags);


      if (this.info.myHTML !== null && this.info.myHeader !== null && this.info.tags !== []) {
        console.log('we are in');
        this.$store.dispatch('createQuest', this.info).then((resp) => {
          if (resp.status === 200) {
            alert('success');
            this.$router.push({ path: '/forum' });
          } else if (resp.status === 401) {
            alert('Login firstly');
            this.$router.push({ path: '/entrance/log_in' });
          }
        });
      } else {
        alert('Fill all information');
      }
    },
  },
};
</script>

<style scoped>
  @import "../../../node_modules/vue-wysiwyg/dist/vueWysiwyg.css";
  .wr-wrp{
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .write-wrp{
    margin: 0 0 0 3em;
  }
  .write_header,.write_tags{
    font-family: "OpenSans-SemiBold";
    font-size: 29px;
    font-weight: 400;
  }
  .write_header{
    margin-bottom: 1em;
    display: flex;
    align-items: center;
  }
  .write_header p{
    margin-right: 2em;
  }
  .write_header input{
    min-width: 400px;
    line-height: 56px;
    background: #ececec;
    border-radius: 8px;
    font-family: 'Abel', sans-serif;
    font-size:25px;
    font-weight: 400;
  }
  .myHTML{
    width: 700px;
  }
  .write_tags{
    margin-top: 1em;
    display: flex;
    align-items: center;
  }
  .write_tags p{
    margin-right: 2em;
  }
  .write_tags .tags{
    width: 400px;
  }
  .btn{
    margin-top: 1em;
  }
  .rules_header{
    font-family: "OpenSans-SemiBold";
    font-size: 29px;
    font-weight: 400;
  }
  .rules{
    margin: 0 3em 0 0;
    font-family: "OpenSans-SemiBold";
    font-size: 22px;
    font-weight: 400;
  }
  .rules p{
    margin:0 0 20px 0;
  }
</style>
