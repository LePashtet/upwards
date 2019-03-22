<template>
    <div class="guest-wrp">
    <Registration></Registration>

    </div>
</template>

<script>
  import Registration from '@/components/Registration';
    export default {
        name: "Guest",
        components:{
          Registration,
        }
    }
</script>

<style scoped>
  .guest-wrp{
    background-image: url("/public/img/Homepage_bg.svg");
  }
</style>
