<template>
      <!-- Carousel / images -->
    <v-carousel
      v-if="isMobile"
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
import { useAppState  } from '@/composables/useAppState'

const {isMobile} = useAppState ();
export default {
     data() {
    return {
      isMobile,
      items: [
        { src: require("@/assets/images/homePageSlider/sliderFront.jpg") },
        { src: require("@/assets/images/homePageSlider/sliderSecond.png") },
        { src: require("@/assets/images/homePageSlider/sliderThird.png") },
      ],
    };
  },


}
</script>

<style>

#carousel{
  margin-top: 30px;
}

.flexImgContainer {
  display: flex;
  margin-top: 12vh;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

.mainImg {
  width: 30vw;
  height: 55vh;
}

.sideImg {
  width: 27vw;
  height: 42vh;
}

@media only screen and (min-width: 1050px) {

    .mainImg {
    width: 31vw;
    height: 45vh;
    }


}

@media only screen and (min-width: 1200px) {
  .sideImg {
    width: 28vw;
    height: 56vh;
  }
  .mainImg {
    width: 35vw;
    height: 63vh;
  }

}

</style>