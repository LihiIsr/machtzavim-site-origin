<template>
      <!-- Carousel / images -->
    <v-carousel
      v-if="windowWidth <= 450"
      height="400"
      :show-arrows="false"
      cycle
      id="carousel"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      />
    </v-carousel>

    <div v-else class="flexImgContainer">
      <img
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        :class="[i !== 1 ? 'sideImg' : 'mainImg']"
      />
    </div>
</template>

<script>
export default {
     data() {
    return {
      windowWidth: window.innerWidth,
      items: [
        { src: require("@/assets/images/homePageSlider/sliderFront.jpg") },
        { src: require("@/assets/images/homePageSlider/sliderSecond.png") },
        { src: require("@/assets/images/homePageSlider/sliderThird.png") },
      ],
    };
  },

  mounted() {
    window.addEventListener("resize", this.updateWidth);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  },

  methods: {
    updateWidth() {
      this.windowWidth = window.innerWidth;
    },

  },

}
</script>

<style>

#carousel{
  margin-top: 30px;
}


.flexImgContainer {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.mainImg {
  width: 30vw;
  height: 20vh;
}

.sideImg {
  width: 27vw;
  height: 42vh;
}

</style>