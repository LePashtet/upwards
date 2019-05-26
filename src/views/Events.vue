<template>
    <div class="e-wrp">
        <div class="e-body">
        <my-filter class="filter"></my-filter>
        <div class="events">
          <EventCell @myClick="save(event.id)" v-for="event in $store.getters.EVENTS" class="event" :description="event.description" :header='event.title' :location='event.location' :topic='event.themes' :level="event.level" :price="event.price" :date="event.time" :link="event.site"></EventCell>
        </div>
      </div>
    </div>
</template>

<script>
import EventCell from '@/components/Event.vue';
import myFilter from '@/components/filters/Event-filter.vue';

export default {
  name: 'Events',
  components: {
    EventCell,
    myFilter,
  },
  data() {
    return {
      myParams: {
        pricemin: null,
        pricemax: null,
        level: null,
        theme: null,
      },
    };
  },
  methods: {
    save(id) {
      this.$store.dispatch('saveEvents', id);
    },
  },
  created() {
    this.$store.dispatch('getEvents', this.myParams);
    console.log('events', this.$store.getters.EVENTS);
  },
};
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
    margin: 32px auto;
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
