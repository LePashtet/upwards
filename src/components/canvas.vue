<template>
  <v-stage сlass="my" ref="stage" :config="{
  width: width,
  height: heigth
  }">
    <v-layer>
      <v-image v-for="img in images" :key="img.id" :config="{
            image: drawImages(img.image) ,
            x: img.x,
            y: img.y,
            }" ></v-image>
    </v-layer>
  </v-stage>
</template>

<script>

  export default {
    name: "myCanvas",
    props: {
      width: Number,
      heigth: Number,
    },
    data() {
      return {
        currentImage: null,
        images: [
          {
            image: 'line_blue.png',
            x: 0,
            y: 0
          },
          {
            image: 'line_green.png',
            x: 0,
            y: 0
          },
          {
            image: 'oval_blue.png',
            x: 0,
            y: 0,
          },
          {
            image: 'rectangle_blue.png',
            x: 0,
            y: 0,
          },
        ],
      };
    },
    methods: {
      //TODO this.parametrs = null
      countRandomY:((imageHeight)=>
        Math.round(Math.random() * (this.width - imageHeight - 5))
      ),
      //x1 +- width1 != x2+5 if true            if false
      //y1 +- heigth != y2+5 must be false      must be true
      countRandomX:((imageWidth)=>
        Math.round(Math.random() * (this.heigth - imageWidth - 5))
      ),
      countImage(){
        let image = new window.Image();
        for (let i = 0; i < this.images.length; i++) {
          image.src = require("@/assets/img/geometry/"+ this.images[i].image);
             do {
              this.images[i].x= this.countRandomX(image.width);
              this.images[i].y= this.countRandomY(image.height);
             }while (!this.checkImage(image,i))
        }
      },
      checkImage(image,index){
        let image2 = new window.Image();
        for (let i = 0; i < this.images.length; i++) {
          image2.src = require("@/assets/img/geometry/"+ this.images[i].image);

          return this.images[i].x + image2.width != this.images[index].x + 5 || this.images[i].x - image2.width != this.images[index].x + 5 || this.images[i].y - image2.width != this.images[index].y + 5 || this.images[i].y - image2.width != this.images[index].y + 5;
        }
      },
      drawImages(src){
        const image = new window.Image();
        image.src = require("@/assets/img/geometry/"+src);
        this.thisImg = image;
        return this.thisImg;
      },
    },

    created() {
       this.countImage();
      for (let i = 0; i < this.images.length ; i++) {
        console.log("xy");
        console.log(this.images[i].x);
        console.log(this.images[i].y);
      }

    }
  }
</script>

<style scoped>

</style>
