<template>
  <div ref="wrp" v-resize="setWidth" class="guest-wrp">
    <div class="g_first" ref="g_first">
      <geometry :width="changeWidth" :height="700"></geometry>
    </div>
    <div class="content">
      <login v-show="this.$route.path === '/entrance/log_in'" class="login"></login>
      <registration v-show="this.$route.path === '/entrance/register'" class="login"></registration>
    </div>
    <div class="g_second">
      <geometry :width="changeWidth" :height="700"></geometry>
    </div>
  </div>
</template>

<script>
import login from '@/components/login.vue';
import registration from '@/components/Registration.vue';
import geometry from '@/components/canvas.vue';
import resize from 'vue-resize-directive';


export default {
  name: 'Guest',
  components: {
    login,
    registration,
    geometry,
  },
  directives: {
    resize,
  },
  data() {
    return {
      screenWidth: null,
    };
  },
  methods: {
    setWidth() {
      this.screenWidth = this.$refs.wrp.offsetWidth;
    },
  },
  mounted() {
    this.setWidth();
  },
  computed: {
    changeWidth() {
      return this.screenWidth === null ? 500 : (this.screenWidth - 400) / 2;
    },
  },

};
</script>

<style scoped>
  .guest-wrp {
    display: flex;
    flex-direction: row;
  }

  .content {
    text-align: center;
    align-self: center;
    /*TODO оно немного кривое*/
  }

  .g_first {
    width: 1000px;
    height: 700px;
  }

  .g_second {
    width: 1000px;
    height: 700px;
  }

</style>
