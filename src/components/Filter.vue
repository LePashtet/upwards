<template>
    <div class="filter-wrp">
      <p class="header">Filter By</p>
        <div class="cell" v-for="(item,key) in filter">
        <p>{{ item.name }}</p>
         <!--TODO  v-for-->
        <div v-for="item1 in filter[key].label" class="cell-filter">
          <div class="pretty p-curve p-default ">
              <input type="checkbox" />
              <div class="state p-primary">
                <label class="cell-label">{{ item1 }}</label>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  import PrettyCheck from 'pretty-checkbox-vue/check';

    export default {
        name: "Filter",
        components: {
            PrettyCheck
        },
      data (){
          return{
            filter: [
              // TODO  fill this data with params from BD
              // TODO  Location
              {
                name: 'Price',
                label: ['All','Free','Up to 10$','10$ to 50$','50$ to 100$'],
              },
              {
                name: 'Theme',
                label: ['All','Design','PHP','C#','Angular/React/Vue','Frontend','Node.js','Python','Java'],
              },
              {
                name: 'Level',
                label: ['Everyone','Junior','Middle','Senior'],
              },
            ],
          }
      }
    }
</script>

<style scoped>
  @import '~pretty-checkbox/dist/pretty-checkbox.min.css';

 .filter-wrp{
   display: flex;
   flex-direction: column;
 }
 .header{
   font-family: "Open Sans", sans-serif;
   font-size: 40px;
   font-weight: 700;
 }
 .cell p{
   font-family: "Open Sans", sans-serif;
   font-size: 25px;
   font-weight: 700;
   margin: 0 0 10px 0;
 }
  .cell-filter div{
    display: flex;
    flex-direction: row;

  }
  .pretty {
    margin-bottom: 10px;
  }
  .price-label{
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 300
  }
</style>
<!--
