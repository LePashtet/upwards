<template>
  <div>
  <v-stage ref="stage" :config="stageSize">
    <v-layer >
      <v-circle :config="{
          x: 200,
          y: 100,
          radius: 50,
          stroke: 'black',
          strokeWidth: 4
        }"
      />
    </v-layer>
  <v-layer ref="dragLayer"></v-layer>
  </v-stage>
  </div>
</template>
<!--<v-circle :config="{
          x: 200,
          y: 100,
          radius: 50,
          fill: 'green'
        }"
      />-->
<script>
const width = window.innerWidth;
const height = window.innerHeight;
const vm = {};
export default {
  name: 'loading',
  data() {
    return {
      stageSize: {
        width,
        height,
      },
    };
  },
};
</script>

<style scoped>

</style>
