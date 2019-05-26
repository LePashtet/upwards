<template>
  <div class="admin-wrp">
    <div v-show="this.$route.path === '/adminpanel/events'" class="events">
      <h2 v-if="complete===true">Success</h2>
      <h2 v-else-if="complete===false">{{response.data.error}}</h2>
      <h2 v-else>Events</h2>
      <div class="inputs">
        <input v-model="myData.time" type="date" placeholder="time">
        <input v-model="myData.price" type="number" placeholder="price">
        <input v-model="myData.level" type="text" placeholder="level" list="level">
        <datalist  id="level">
          <option  v-for="item in levels" :value="item"/>
        </datalist>
        <input v-model="myData.themes" type="text" placeholder="themes" list="themes">
        <datalist  id="themes">
          <option  v-for="item in lang" :value="item"/>
        </datalist>
        <input v-model="myData.location" type="text" placeholder="location">
        <input v-model="myData.site" type="text"  placeholder="site">
        <input v-model="myData.title" type="text" placeholder="title">
        <textarea v-model="myData.description" cols="50" rows="5" placeholder="description"/>
      </div>
      <Blue_btn text="Submit" @click="sendEvent()"></Blue_btn>
    </div>
  </div>
</template>

<script>
import Blue_btn from '@/components/buttons/Blue_Round_btn.vue';

export default {
  name: 'admin',
  components: {
    Blue_btn,
  },
  data() {
    return {
      lang: ['Design', 'PHP', 'C#', 'Angular/React/Vue', 'Frontend', 'Node.js', 'Python', 'Java'],
      levels: ['Everyone', 'Junior', 'Middle', 'Senior'],
      myData: {
        time: null,
        price: null,
        level: null,
        location: null,
        site: null,
        title: null,
        description: null,
        themes: null,
      },
      complete: null,
      response: null,
    };
  },
  methods: {
    sendEvent() {
      this.$store.dispatch('createEvent', this.myData).then((response) => {
        this.response = response;
        console.log('resp', this.response);
        this.complete = response.status === 200;
      });
    },
  },
};
</script>

<style scoped>
  .inputs{
    display: flex;
    flex-direction: column;
  }
</style>
