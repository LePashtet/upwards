<template>
  <div class="skill_wrp">
    <div class="skill_name"><p>{{ name }}</p></div>
    <div class="skill_rate" @click='setRate(index+1)' v-for="(n,index) in arr">
      <img v-if="n===1" src="@/assets/img/profile/skill_point.svg" alt="">
      <img v-else src="@/assets/img/profile/empty_point.svg" alt="">
    </div>
  </div>
</template>

<script>

  import Blue_btn from '@/components/buttons/Blue_Round_btn.vue';

  export default {
    name: 'skill',
    props: {
      name: String,
      rate: Number,
      index: Number
    },
    data() {
      return {
        arr: [],
      }
    },
    methods: {
      createArr() {
        for (let i = 0; i < this.rate; i++) {
          this.arr.push(1);
        }
        if (5 - this.rate !== 0) {
          for (let i = 0; i < 5 - this.rate; i++) {
            this.arr.push(0);
          }
        }

      },
      setRate(i) {
        this.$emit('setRate', {
          rate: i,
          index: this.index,
        });
        setTimeout(()=>{
          this.arr = [];
          this.createArr();
        },50);
      }
    },
    mounted() {
      this.createArr();
    }

  };

</script>

<style scoped>
  .skill_wrp {
    display: flex;
    flex-direction: row;

  }

  .skill_name {
    color: #595959;
    font-family: "Open Sans";
    font-size: 19px;
    font-weight: 400;
    margin-right: 5px;
  }

  .skill_rate {
    display: flex;
    flex-direction: row;

  }

  .skill_rate img {
    height: 20px;
    object-fit: contain;
  }
</style>
