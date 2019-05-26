<template>
  <div class="btn-wrp">
    <button @click="handleClick" class="save_btn">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'NoBack_BlueText',
  props: {
    text: String,
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
  .save_btn{
    border: none;
    background: none;
    color: #0087cb;
    font-family: "Open Sans";
    font-size: 29px;
    font-weight: 600;
  }
</style>
