<template>
  <div>
     <div id="subPageContainer" v-if="pageClicked != 'mainPage'">
        <p class="caption"> {{pageClicked}} </p>
        <img class="underline" id="underlineCaption" src="@/assets/images/blueUnderline.png"/>
    <ourHeshTalmoyut  v-if="pageClicked == 'ההשתלמויות שלנו'"></ourHeshTalmoyut>

    <prof-page :isMobile="isMobile" v-if="pageClicked == 'המרצים שלנו'"></prof-page>

    <articles-page :isMobile="isMobile" v-if="pageClicked == 'חומרי עיון'"></articles-page>
   
    <admin-page :isDarkMode=isDark v-if="pageClicked == 'כניסת מנהל'"></admin-page>
    </div>

    <home-page v-if="pageClicked == 'mainPage'" :is-first-load="isFirstLoad"></home-page>

  </div>

</template>

<script>
import homePage from './pages/homePage.vue'
import adminPage from './pages/adminPage.vue'
import profPage from './pages/profPage.vue'
import ourHeshTalmoyut from './pages/OurHeshPage.vue'
import articlesPage from './pages/articlesPage.vue'

  export default {
    components: {
    adminPage,
    profPage,
    ourHeshTalmoyut,
    homePage,
    articlesPage
  },
    props: {
      isMobile: Boolean,
      pageClicked:String,
      isFirstLoad:Boolean,
      isDark: Boolean 
    },
  }

</script>

<style>

@font-face {
  font-family: 'bibical';
  src: url(../assets/fonts/web/noa-shalev-regular-AlefAlefAlef.woff2) format('woff2'), url('../assets/fonts/web/noa-shalev-regular-AlefAlefAlef.woff') format("woff");
}
@font-face {
  font-family: 'bibical-light';
  font-weight: 300;
  src: url(../assets/fonts/web/noa-shalev-regular-AlefAlefAlef.woff2) format('woff2'), url('../assets/fonts/web/noa-shalev-regular-AlefAlefAlef.woff') format("woff");
}
#subPageContainer{
  position: relative;
  margin-top: 18vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
#underlineCaption{
 width: 73vw;
    height: 2vh;
    left: 13vw;
    top: 4.5vh;
}
.caption{
  text-align: center;
  font-size: 8vw;
}
.underline{
  position: absolute;
  filter: blur(2px);
  filter: brightness(70%);
  filter: grayscale(40%);
}

@media only screen and (min-width: 1050px) {

  #underlineCaption {
    width: 55vw;
    height: 3vh;
    left: 22vw;
    top: 7.5vh;
  }
  .caption{
    font-size: 4vw;
  }
  #captionDivided{
      gap: 18px !important;
    }
    .line-1{
      font-size: 4vw !important;
    }
    .smallLetter{
      font-size: 4vw !important;

    }
    #ourVisionText{
      font-size: 2.2vw !important;
      margin-left: 64px;
      margin-right: 64px;
    }
    .qouteText{
      font-size: 2.5vw !important;
    }
    .qouteDiv {
      height: 35vh;
      margin: 54px;
      width: 50vw;
    }
    .qouteCaption{
      font-size: 3vw !important;

    }
    #underlineHeshCaption{
        width: 63vw !important;
        height: 4vh !important;
        left: 18vw !important;
        top: 1.5vh !important;
    }
    .heshListCaption{
      font-size: 3vw !important;
    }
    #heshtalListMain{
      font-size: 2vw !important;
    }
    #flexQouteContainer{
    margin-top: 26px !important;
    width: 92vw;
    left: 50%;
    transform: translate(-50%, 0);
    }
    #flexMainContainer{
      gap: 70px !important;
    }
    .mainImg {
    width: 31vw;
    height: 45vh;
    }

  #articlesContainer{
    flex-direction: row;
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
  #underlineCaption {
        top: 10.5vh;
    }
}

@media only screen and (min-width: 1200px) {
    #logo {
        width: 10vw;
    }
}

</style>