<template>
    <div class="search-wrp">
      <input type='text'  placeholder='Search questions, authors, themes … Well pretty much anything'>
      <img src='@/assets/img/forum/search.svg' alt="">
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
  .search-wrp {
    display: flex;
    flex-direction: row;
    min-width: 440px;
    height: 50px;
    border-radius: 25px;
    margin-bottom: 15px;

    background: #ECECEC;
  }
img{
  object-fit: contain;
  margin: 0 10px 0 0;
}
  input {
    line-height: 50px;
    width: 100%;
    background: initial;
    border: none;
    margin: 0  0 0 5px;
    font-family: 'Abel', sans-serif;
    font-size:16px;
    font-weight: 400;
  }
  input::placeholder {
    font-family: 'Abel', sans-serif;
    font-size:16px;
    font-weight: 400;
  }
</style>
