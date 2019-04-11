<template>
  <div class="confirm-wrp">
    <p class="firstStr">A code will be send to this email</p>
    <p>{{ email }}</p>
    <p>Please, check your inbox and confirm registration</p>
    <btn @click="send()" text='send'></btn>
  </div>
</template>

<script>
  import btn from '@/components/buttons/Blue_Round_btn.vue';

  export default {
    name: "confirmation",
    components: {
      btn,
    },
    data() {
      return {
        email: 'testtext',
      }
    },
    methods: {
      send(){
        this.$store.dispatch('sendText', this.email);
        this.$store.dispatch('getText', 2).then(() => {
          console.log( this.$store.getters.TEXT);
        });

      }
    }
  }
</script>

<style scoped>

  .confirm-wrp{
    width: max-content;
    margin: 300px auto;
    text-align: center;
  }
  .firstStr{
    font-family: "Open Sans", sans-serif;
    font-size: 47px;
    font-weight: 700;
  }
   p{
     font-family: "Open Sans",sans-serif;
     font-size: 29px;
     font-weight: 600;
   }
</style>
