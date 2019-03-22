<template>
    <div class="wrp">
      <div class="evnt-top">
        <p class="evnt-header">{{header}}</p>
        <div class="panel">
          <div class="website">
            <img src="/public/img/web.svg" alt="Web">
            <p>Website</p>
          </div>
          <div class="share">
            <img src="/public/img/chain.svg" alt="Link">
            <p>Share</p>
          </div>
          <div class="save">
            <img src="/public/img/bookmark.svg" alt="Save">
            <p>Save</p>
          </div>
        </div>
      </div>
        <div class="topic">
          <div class="location">
            <img src="/public/img/location.svg" alt="Location">
            <p>{{ location }}</p>
          </div>
          <div class="language">
            <img src="/public/img/lab.svg" alt="Location">
            <p>{{ topic }}</p>
          </div>
          <div class="level">
            <img src="/public/img/bar-graph-progress.svg" alt="level">
            <p>{{ level }}</p>
          </div>
          <div class="price">
            <img src="/public/img/bar-graph-progress.svg" alt="price">
            <p>{{ price }}</p>
          </div>
        </div>
      <hr>
      <div class="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi harum magni necessitatibus optio provident quo temporibus ut voluptate? Aperiam culpa cum eius explicabo, facilis iste iure molestiae porro, saepe soluta tenetur voluptate voluptatum! Accusamus animi autem corporis culpa dolor dolore dolores ea earum, eveniet hic id illum mollitia neque nesciunt nobis omnis quasi reiciendis repellat, rerum tempora? Accusamus asperiores aspernatur culpa delectus distinctio dolore dolores, ea eum hic in labore laboriosam nam nulla, optio perspiciatis repellendus repudiandae sapiente sed sequi voluptatum. Accusantium commodi eligendi fuga id incidunt ipsum neque placeat, porro quas, saepe totam vel voluptas. Eveniet explicabo ipsum iusto nam! Aliquam blanditiis delectus distinctio praesentium, quo reiciendis voluptate. Debitis deleniti explicabo libero, maiores minus molestias natus non nostrum pariatur quaerat, quidem sint sit tenetur? Accusamus ad amet architecto asperiores at blanditiis distinctio, doloribus est excepturi facere facilis fugiat fugit ipsa magnam maiores obcaecati quaerat quas, quis quod repudiandae rerum similique veniam voluptate! Asperiores at beatae dolores facilis fugiat labore maiores qui quis repudiandae sapiente sequi similique, temporibus vel? Doloribus, hic, odio! Aliquam asperiores, commodi dicta dolorem eos facere maxime quibusdam ullam vitae! Animi consectetur consequuntur cumque dolor doloremque dolores eius enim est et eum expedita explicabo facere fuga fugiat fugit harum illo, incidunt labore laudantium magni maiores natus odio omnis, optio pariatur perspiciatis placeat porro provident quasi recusandae repellendus tenetur ullam voluptate? Alias aliquam aliquid architecto autem, consectetur consequatur cum cumque debitis doloremque eligendi est et facere facilis fugiat harum id illo incidunt ipsa laborum laudantium libero, mollitia nam nihil nisi nostrum odit officia possimus praesentium quaerat, quis quod recusandae rem repellendus reprehenderit saepe tempora voluptatum? At corporis doloremque fugiat illum incidunt iste minus, qui quod repellendus sequi tempora, voluptate. Ipsa maiores molestias omnis! Accusantium, fugiat iusto laborum praesentium quisquam ratione rem sequi similique sint vero, voluptatum.</p>
         </div>
      <a href="#" class="expands">Expands</a>
    </div>
</template>

<script>
    export default {
        name: "Event",
        props: {
            header: String,
            topic: String,
            location: String,
            level: String,
            price: String,
        }
    }
</script>

<style scoped>
  .wrp{
    width: 980px;
    height: 340px;
    background-color: #ECECEC;
    border: none;
    padding: 35px 46px 10px 43px;
  }
  .evnt-header{
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 40px;
  }
  .evnt-top{
    display: flex;
    justify-content: space-between;
  }
  .panel{
    color: #878787;
    display: flex;
    flex-direction: row;
  }
  .panel div{
    display: flex;
    flex-direction: row;
    margin-right: 31px;
  }
  .panel div p{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 20px;
  }
  .topic{
    color: #878787;
    cursor: default;
    display: flex;
    flex-direction: row;
  }
  .topic div{
    display: flex;
    flex-direction: row;
    margin-right: 30px;
  }
  .topic div p{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 19px;
  }
  .description{
    overflow-y: scroll;
    height: 200px;
    margin-top: 20px;
  }
  .expands{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: #0087CB;
    display: flex;
    justify-content: center;
    cursor: default;
    text-decoration: none;
  }
</style>
