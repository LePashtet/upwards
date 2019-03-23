<template>
    <div class="e-wrp">
      <div class="calendar">
        <vue-slider
          v-model="value"
          :data="data"
          :marks="true"
          :ref="slider"/>
        <br>
        <br>
        <p>it is {{ showMonth }}</p>
      </div>

      <div class="e-body">
        <my-filter class="filter"></my-filter>
        <div class="events">
          <EventCell class="event" header='Upwards presentation' location='Odessa' topic='Presentation' level="Junior" price="Free" ></EventCell>
          <EventCell class="event" header='Upwards presentation' location='Odessa' topic='Presentation'></EventCell>
          <EventCell class="event" header='Upwards presentation' location='Odessa' topic='Presentation'></EventCell>
          <EventCell class="event" header='Upwards presentation' location='Odessa' topic='Presentation'></EventCell>
        </div>
      </div>
    </div>
</template>

<script>
  import EventCell from '@/components/Event.vue';
  import myFilter from '@/components/Filter.vue';
  import VueSlider from 'vue-slider-component';
  import 'vue-slider-component/theme/antd.css';


  export default {
    name: "Events",
    components: {
      EventCell,
      VueSlider,
      myFilter
    },
    data: function () {
      return {
        data: ['Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan'],
      }
    },
    methods: {
      showMonth(){
        return this.$refs.slider.getValue();
      }
    }
  }
</script>

<style scoped>
  .e-wrp{
    height: max-content;
    display: flex;
    flex-direction: column;
  }
  .e-body{
    display: flex;
    flex-direction: row;
  }
  .calendar{
    margin: 52px 0 32px 30vw;
    width: 843px;
    height: 66px;

  }

  .filter{
    margin: 0 8vw 0 5vw;
  }
 .event{
   margin: 0 0 40px 0;
  }
</style>
