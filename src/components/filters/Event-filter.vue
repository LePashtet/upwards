<template>
  <div class="filter-wrp">
    {{ changeParams }}
    <p class="header">Filters</p>
    <div>
      <div class="cell disabled"  >
      <p>{{ filter[0].name }}</p>
      <div class="cell-filter" v-for="(item3,key) in filter[0].label" >
        <p-radio class="p-default p-curve" :value="filter[0].value[key]==='All'? null : filter[0].value[key]" v-model="myParams.price" color="info-o">{{ item3 }}</p-radio>
      </div>
<!--TODO дергаются ивенты-->
      </div>
      <div class="cell">
        <p>{{ filter[1].name }}</p>
        <div class="cell-filter" v-for="(item2,key) in filter[1].label" >
          <p-radio class="p-default p-curve" :value="item2==='All'? null : item2" v-model="myParams.theme" color="info-o">{{ item2 }}</p-radio>
        </div>
      </div>
      <div class="cell">
        <p>{{ filter[2].name }}</p>
        <div class="cell-filter" v-for="(item1,key) in filter[2].label" >
          <p-radio class="p-default p-curve" :value="item1==='Everyone'? null : item1" v-model="myParams.level" color="info-o">{{ item1 }}</p-radio>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


  export default {
    name: "myFilter",
    components: {
    },
    data() {
      return {
        filter: [
          // TODO  fill this data with params from BD
          // TODO  Location
          {
            name: 'Price',
            label: ['All','Free', 'Up to 10$', '10$ to 50$', '50$ to 100$'],
            value: [{
              pricemin:0,
              pricemax:0,
            },{
              pricemin:0.1,
              pricemax:9,
            },{
              pricemin:10,
              pricemax:49,
            },
            {
              pricemin:50,
              pricemax:100,
            }]
          },
          {
            name: 'Theme',
            label: ['All','Design', 'PHP', 'C#', 'Angular/React/Vue', 'Frontend', 'Node.js', 'Python', 'Java','Meetup', 'Competition','QA','Other'],
          },
          {
            name: 'Level',
            label: ['Everyone', 'Junior', 'Middle', 'Senior'],
          },
        ],
        myParams:{
          theme: null,
          level: null,
        }
      }
    },
    computed:{
      changeParams() {
        console.log(this.level);
        console.log(this.theme);
        // TODO not work
        this.$store.dispatch('getEvents',this.myParams);
      },
    }
  }
</script>

<style scoped>
  @import '../../../node_modules/pretty-checkbox/dist/pretty-checkbox.min.css';

  .filter-wrp {
    display: flex;
    flex-direction: column;
  }

  .header {
    font-family: "Open Sans", sans-serif;
    font-size: 40px;
    font-weight: 700;
    cursor: default;
  }

  .cell p {
    font-family: "Open Sans", sans-serif;
    font-size: 25px;
    font-weight: 700;
    margin: 0 0 10px 0;
  }

  .cell-filter div {
    display: flex;
    flex-direction: row;

  }
  .disabled {
    pointer-events: none;

    /* for "disabled" effect */
    opacity: 0.5;
    background: #CCC;
  }
  .pretty {
    margin-bottom: 10px;
  }

  .price-label {
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 300
  }
</style>
<!--
