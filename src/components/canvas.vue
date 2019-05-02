<template>
  <v-stage сlass="my" :config="{
           width: width,
           height: height}"
           @dragstart="handleDragstart"
           @dragend="handleDragend">
    <v-layer>
      <v-image v-for="img in images" :key="img.id" :config="{
            image: drawImages(img.image) ,
            x: img.x,
            y: img.y,
            draggable: true,
            }"></v-image>
    </v-layer>
    <v-layer ref="dragLayer"></v-layer>
  </v-stage>
</template>

<script>
  export default {
    name: "myCanvas",
    props: {
      width:{
        type:Number,
      },
      height: Number,
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
          {
            image: 'rectangle_blue_small.png',
            x: 0,
            y: 0,
          },
          {
            image: 'rectangle_green.png',
            x: 0,
            y: 0,
          },
          {
            image: 'rectangle_orange.png',
            x: 0,
            y: 0,
          },
          {
            image: 'triangle_blue.png',
            x: 0,
            y: 0,
          },
          {
            image: 'triangle_orange.png',
            x: 0,
            y: 0,
          },
        ],
      };
    },
    methods: {
      countRandomY(imageHeight) {
        let resp = 0;

        do {
          resp = Math.round(Math.random() * this.height);

        } while (resp + imageHeight >= this.height || resp < 1);
        return resp;
      },
      countRandomX(imageWidth) {
        let resp = 0;
        do {
          resp = Math.round(Math.random() * this.width);
        } while (resp + imageWidth > this.width || resp < 1);
        return resp;

      },
      countImage() {
        let image = new window.Image();
        for (let i = 0; i < this.images.length; i++) {
          image.src = require("@/assets/img/geometry/" + this.images[i].image);
          do {
            this.images[i].x = this.countRandomX(image.width);
            this.images[i].y = this.countRandomY(image.height);
          } while (!this.checkImage(image, i))
        }
      },
      checkImage(image, index) {
        let image2 = new window.Image();
        for (let i = 0; i < this.images.length; i++) {
          image2.src = require("@/assets/img/geometry/" + this.images[i].image);
          return this.images[i].x + image2.width != this.images[index].x + 10 || 10 + this.images[i].x != this.images[index].x + image.width && this.images[i].y + image2.width != 10 + this.images[index].y || 10 + this.images[i].y != this.images[index].y + image.height;
          // return this.images[i].x + image2.width < this.images[index].x-50 || 50+this.images[i].x > this.images[index].x + image.width && this.images[i].y + image2.width < 50+this.images[index].y || 50+this.images[i].y > this.images[index].y + image.height;

        }
      },
      drawImages(src) {
        const image = new window.Image();
        image.src = require("@/assets/img/geometry/" + src);
        return image;
      },
      handleDragstart(e) {
        const shape = e.target;
        const dragLayer = vm.$refs.dragLayer.getNode();
        const stage = vm.$refs.stage.getNode();
        // moving to another layer will improve dragging performance
        shape.moveTo(dragLayer);
        stage.draw();
      },
      handleDragend(e) {
        const shape = e.target;
        const layer = vm.$refs.layer.getNode();
        const stage = vm.$refs.stage.getNode();
        shape.moveTo(layer);
        stage.draw();
      }
    },
    created() {
      this.countImage();
    },
    //TODO перерисовывать  при апдейте данных
  }
</script>

<style scoped>

</style>
