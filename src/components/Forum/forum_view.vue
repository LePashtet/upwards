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
        <p>{{ followers }}people followed</p>
        <p>Posted by {{ first_name }} {{last_name}} <span class="grey">@{{ name }}</span></p>
      </div>
      <div class="view_info-bar_btn">
        <Blue_btn @click="follow" text="I have the same"></Blue_btn>
      </div>

    </div>
  </div>
</template>

<script>
  import InputTag from 'vue-input-tag'
  import Blue_btn from '@/components/buttons/Blue_Round_btn.vue';


  export default {
    name: "forum_view",
    props: {
      // tags: Array,
      // header: String,
      // content: String
    },
    components: {
      InputTag,
      Blue_btn
    },
    data(){
      return{
        tags: ['Vue','Js','HTML'],
        header: 'Как получить диапазон значений в массиве?',
        content: '<pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:\'Courier New\';font-size:12,0pt;"><span style="color:#e8bf6a;">&lt;div </span><span style="color:#bababa;">class=</span><span style="color:#a5c261;">"view_header"</span><span style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">      &lt;p&gt;</span>{{ <span style="color:#9876aa;">header </span>}}<span style="color:#e8bf6a;">&lt;/p&gt;<br></span><span style="color:#e8bf6a;">    &lt;/div&gt;<br></span><span style="color:#e8bf6a;">    &lt;div </span><span style="color:#bababa;">class=</span><span style="color:#a5c261;">"view_content"</span><span style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">      &lt;p&gt;</span>{{ <span style="color:#9876aa;">content </span>}}<span style="color:#e8bf6a;">&lt;/p&gt;<br></span><span style="color:#e8bf6a;">    &lt;/div&gt;<br></span><span style="color:#e8bf6a;">    &lt;div </span><span style="color:#bababa;">class=</span><span style="color:#a5c261;">"view_info-bar"</span><span style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">      &lt;div </span><span style="color:#bababa;">class=</span><span style="color:#a5c261;">"view_info-bar_info"</span><span style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">        &lt;p&gt;</span>{{ <span style="color:#9876aa;">followers </span>}}people followed<span style="color:#e8bf6a;">&lt;/p&gt;<br></span><span style="color:#e8bf6a;">        &lt;p&gt;</span>Posted by{{firts_name}}{{<span style="color:#9876aa;">last_name</span>}} @{{ name }}<span style="color:#e8bf6a;">&lt;/p&gt;<br></span><span style="color:#e8bf6a;">      &lt;/div&gt;<br></span><span style="color:#e8bf6a;">      &lt;div </span><span style="color:#bababa;">class=</span><span style="color:#a5c261;">"view_info-bar_btn"</span><span style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">        &lt;Blue_btn </span><span style="color:#bababa;">@click=</span><span style="color:#a5c261;">"</span>follow<span style="color:#a5c261;">" </span><span style="color:#bababa;">text=</span><span style="color:#a5c261;">"I have the same"</span><span style="color:#e8bf6a;">&gt;&lt;/Blue_btn&gt;<br></span><span style="color:#e8bf6a;">      &lt;/div&gt;<br></span><span style="color:#e8bf6a;"><br></span><span style="color:#e8bf6a;">    &lt;/div&gt;<br></span><span style="color:#e8bf6a;">  &lt;/div&gt;<br></span><span style="color:#e8bf6a;">&lt;/template&gt;<br></span><span style="color:#e8bf6a;"><br></span><span style="color:#e8bf6a;">&lt;script&gt;<br></span><span style="color:#e8bf6a;">  </span><span style="color:#cc7832;font-weight:bold;">import </span><span style="color:#9876aa;">InputTag </span><span style="color:#cc7832;font-weight:bold;">from </span><span style="color:#6a8759;">\'vue-input-tag\'<br></span><span style="color:#6a8759;">  </span><span style="color:#cc7832;font-weight:bold;">import </span>Blue_btn <span style="color:#cc7832;font-weight:bold;">from </span><span style="color:#6a8759;">\'@/components/buttons/Blue_Round_btn.vue\'</span><span style="color:#cc7832;">;<br></span><span style="color:#cc7832;"><br></span></pre>',
        first_name:'Poul',
        last_name:'Legkiy',
        name:'admin'
      }
    }
  }
</script>

<style scoped>
  .view-wrp{
    margin-top: 20px;
  }
  .view_header{
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
  }
  .grey{
    color: #595959;
  }
  .tags {
    max-width: 200px;
  }
  .view_info-bar{
    font-family: "Open Sans";
    font-size: 17px;
    font-weight: 600;
  }
  .view_info-bar{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
