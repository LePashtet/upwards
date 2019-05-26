<template>
  <div class="view-wrp">
    <div class="view_tags">
      <input-tag class="tags" placeholder="Enter" :read-only="true" v-model="tags" :limit="5"></input-tag>
    </div>
    <div class="view_header">
      <p>{{ header }}</p>
    </div>
    <div class="view_content">
      <p v-html="content"></p>
    </div>
    <div class="view_info-bar">
      <div class="view_info-bar_info">
        <p>{{ followers }} people followed</p>
        <p>Posted by {{ first_name }} {{last_name}} <span class="grey">@{{ name }}</span></p>
      </div>
      <div class="view_info-bar_btn">
        <Blue_btn @click="follow" text="I have the same"></Blue_btn>
      </div>

    </div>
    <div v-if="showBlur === false">
      <div class="view_myanswer">
        <div class="view_myanswer_header">
          <p>My Answer</p>
          <hr>
        </div>
        <div class="view_myanswer_textarea">
          <div  class="post" v-if="myPost===null">
            <wysiwyg class="post" v-model="post"/>
           <Blue_btn @click="savepost" text="Send"></Blue_btn>
          </div>
          <div v-html="myPost.text" v-else></div>
        </div>
      </div>
      <div  class="view_answers">
        <div class="view_answers_header">
          <p>All Answers</p>
        </div>
        <div v-for="post in posts" class="view_answers_answer">
          <hr>
          <div class="view_answers_answer_user">
            <img :src="'https://upwards.cf/api/user/avatar?size=30&id='+post.user_id" alt="">
            <p>{{ post.first_name }} {{ post.last_name }} <span class="grey">@{{ post.name }}</span></p>
          </div>
          <div v-html="post.text" class="view_answers_answer_content"></div>
        </div>
      </div>
    </div>
    <div v-else class="error">Join our community to see answers</div>
  </div>
</template>

<script>

  import InputTag from '@/components/InputTag.vue';
  import Blue_btn from '@/components/buttons/Blue_Round_btn.vue';

  export default {
    name: 'forum_view',
    components: {
      InputTag,
      Blue_btn,
    },
    data() {
      return {
        tags: [],
        header: null,
        content: null,
        first_name: null,
        last_name: null,
        name: null,
        followers: null,
        u_id: null,
        showBlur: false,
        posts: [],
        post: null,
        myPost:null
      };
    },
    mounted: function () {
      this.$store.dispatch('getBranch', this.$route.query.id).then((resp) => {
        resp.data[0].tags.forEach(element => {
          this.tags.push(element);
        });
        this.header = resp.data[0].title;
        this.content = resp.data[0].question;
        this.followers = resp.data[0].users;
        this.u_id = resp.data[0].user_id;
        this.name = resp.data[0].name;
        this.first_name = resp.data[0].first_name;
        this.last_name = resp.data[0].last_name;
        this.$store.dispatch('getPosts', this.$route.query.id).then((resp)=>{
          if (resp.status === 401){
             this.showBlur = true;
          } else {
            resp.data.forEach(element => {
              console.log('element',element);
             if(element.author === false){
               this.posts.push(element);
             }else {
               this.myPost = element;
             }
            });
            console.log(this.posts);
          }
        });
      });
    },
    methods:{
      savepost(){
        let payload = {id:this.$route.query.id, text:this.post};
        this.$store.dispatch('createPost', payload).then((resp) => {
          if (resp.status === 200){
            window.location.reload();

          }
        })
      }
    }
  };
</script>

<style scoped>
  .view-wrp {
    padding:0 100px 100px 100px;
    margin-top: 20px;
  }

  .view_tags {
    margin-bottom: 15px;
  }

  .view_header {
    margin-bottom: 15px;
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
  }

  .grey {
    color: #595959;
  }

  .tags {
    max-width: 200px;
  }

  .view_info-bar {
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 600;
  }

  .view_info-bar {

    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .view_info-bar_info {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .view_info-bar_btn {
    margin-right: 40px;
  }

  .post{
    width: 700px;
  }
  .error {
    font-family: 'Abel', sans-serif;
    font-size: 33px;
    font-weight: 400;
  }

  .view_myanswer_header {
    margin-bottom: 20px;
  }

  .view_myanswer_header p {
    margin-bottom: 20px;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 600;

  }

  .view_answers_header {
    margin-bottom: 20px;
  }
  .view_answers_header p {
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 600;
  }
  .view_answers_answer hr {
    margin-bottom: 20px;
  }

  .view_answers_answer_user {
    margin-bottom: 20px;
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .view_answers_answer_user img {
    padding: 2px ;
    border-radius: 100%;
  }

</style>
