<template>
  <div class="wrp">
    <div @click="expands=false">
      <div class="evnt-top">
        <p class="evnt-header">{{header}}</p>
        <div class="panel">
          <div class="share">
            <img src="@/assets/img/events/chain.svg" alt="Link">
            <p>Share</p>
          </div>
          <!--TODO do not work-->
          <div v-on:click="handleClick" class="save">
            <img src="@/assets/img/events/bookmark.svg" alt="Save">
            <p>Save</p>
          </div>
        </div>
      </div>
      <div class="topic">
        <div class="location">
          <img src="@/assets/img/events/location.svg" alt="Location">
          <p>{{ location }}</p>
        </div>
        <div class="language">
          <img src="@/assets/img/events/lab.svg" alt="Location">
          <p>{{ topic }}</p>
        </div>
        <div class="level">
          <img src="@/assets/img/events/bar-graph-progress.svg" alt="level">
          <p>{{ level }}</p>
        </div>
        <div class="price">
          <img src="@/assets/img/events/price.svg" alt="price">
          <p>{{ price }}</p>
        </div>
      </div>
      <hr>
      <p class="description-name">Event Description</p>
      <div class="description">
        <p class="description-text">{{ description }}</p>
      </div>
      <div v-show="expands">
        <p class="description-name ">Event Info</p>
        <div class="event-f">
          <div class="when">
            <p>When</p>
            <div>
              <img src="@/assets/img/events/time.svg" alt="">
              <p>{{date}}</p>
            </div>
          </div>
          <div class="where">
            <p>Where</p>
            <div>
              <img src="@/assets/img/events/location.svg" alt="">
              <p>{{location}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="!expands" @click="expands=!expands" class="expands">Expands</p>
    <a :href="link" target="_blank" v-else class="expands">Visit Website</a>
  </div>
</template>

<script>
  export default {
    name: "Event",
    props: {
      header: String,
      topic: String,
      location: String,
      level: String,
      price: Number,
      link: String,
      date: String,
      description:String,

    },
    data() {
      return {
        expands: false
      }
    },
    methods: {
      handleClick() {
        this.$emit('myClick');
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }

  .description-name {
    color: #0087cb;
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
  }

  .wrp {
    cursor: default;
    max-width: 980px;
    height: max-content;
    background-color: inherit;
    border: none;
    padding: 15px 46px 10px 43px;
  }

  .when {
    font-family: "Open Sans", sans-serif;
    font-size: 19px;
    font-weight: 400;

  }

  .event-f {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .event-f div {
    display: flex;
    flex-direction: column;
  }

  .event-f div div {
    display: flex;
    flex-direction: row;
  }

  .where {
    font-family: "Open Sans", sans-serif;
    font-size: 19px;
    font-weight: 400;
  }

  .evnt-header {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 40px;
  }

  .evnt-top {
    display: flex;
    justify-content: space-between;
  }

  .panel {
    color: #878787;
    display: flex;
    flex-direction: row;
  }

  .panel div {
    display: flex;
    flex-direction: row;
    margin-right: 31px;
    align-items: center
  }

  .panel div p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin-left: 10px;
  }

  .panel div img {
    display: block;
  }

  .topic {
    color: #878787;
    cursor: default;
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
  }

  .topic div {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
  }

  .topic div p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 19px;
    margin-left: 5px;
  }

  .description {
    overflow: auto;
    min-height: 50px;
    max-height: 400px;
  }

  .description-text {
    color: #070707;
    font-family: "Open Sans", sans-serif;
    font-size: 19px;
    font-weight: 400;
    margin: 0 15px 0 20px;
  }

  .expands {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: #0087CB;
    display: flex;
    justify-content: center;
    cursor: default;
    text-decoration: none;
  }
</style>
