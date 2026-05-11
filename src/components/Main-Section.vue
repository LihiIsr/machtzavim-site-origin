<template>
  <div id="container" >
     <div id="flexOhterContainer" v-if="pageClicked != 'mainPage'">
        <p class="caption"> {{pageClicked}} </p>
        <img class="underline" id="underlineCaption" src="@/assets/images/blueUnderline3.png"/>
    <ourHeshTalmoyut  v-if="pageClicked == 'ההשתלמויות שלנו'"></ourHeshTalmoyut>

    <profSection :isMobile="isMobile" v-if="pageClicked == 'המרצים שלנו'"></profSection>

    <div id="articlesContainer" v-if="pageClicked == 'חומרי עיון'">
       <iframe type="text/html" src="https://www.mako.co.il/pzm-soldiers/your-picture/Article-1454ac28cf86731006.htm?partner=tagit" 
          :width="isMobile ? '300' : '500'" :height="isMobile ? '300' : '500'"></iframe>

      <p id="articlesText">
        מוזמנים לגלול בכתבות המצורפות
      </p>
      <iframe type="text/html" src="https://www.idf.il/%D7%9B%D7%AA%D7%91%D7%95%D7%AA-%D7%95%D7%A2%D7%93%D7%9B%D7%95%D7%A0%D7%99%D7%9D/2026/%D7%94%D7%A2%D7%A8%D7%91-%D7%AA%D7%A9%D7%91%D7%95-%D7%9C%D7%A9%D7%95%D7%9C%D7%97%D7%9F-%D7%94%D7%A1%D7%93%D7%A8-%D7%91%D7%A2%D7%99%D7%A6%D7%95%D7%9E%D7%95-%D7%A9%D7%9C-%D7%94%D7%9E%D7%91%D7%A6%D7%A2-%D7%96%D7%9B%D7%A8%D7%95-%D7%9B%D7%99-%D7%9B%D7%95%D7%97%D7%95%D7%AA-%D7%A6%D7%94-%D7%9C-%D7%A2%D7%A8%D7%95%D7%9B%D7%99%D7%9D-%D7%9C%D7%94%D7%92%D7%9F-%D7%A2%D7%9C%D7%99%D7%9B%D7%9D/" 
            :width="isMobile ? '300' : '500'" :height="isMobile ? '300' : '500'"></iframe>

    </div>
   
    <admin :isDarkMode=isDark v-if="pageClicked == 'כניסת מנהל'"></admin>
    </div>

   

    <router-view></router-view>


    <div id="flexMainContainer" v-if="pageClicked == 'mainPage'">
      
      <div>
            <p id="typeAnimation" :class="!isLoaded ? 'line-1' : 'line-1 noBorder'">נעים להכיר, יחידת</p>


              <div :class="!isLoaded ? ' captionDivided ' : ' showCaptionDivided'" id="captionDivided"> 
              <p  class="bigLetter" :class="{bigLetterDark:isDark}">מ</p> 
              <p id="smallLetter1" :class="!isLoaded ? 'smallLetter' : 'smallLetter smallLetterShow'">נהיגות</p> 
              <p class="bigLetter" :class="{bigLetterDark:isDark}">ח</p>
              <p  id="smallLetter2" :class="!isLoaded ? 'smallLetter' : 'smallLetter smallLetterShow'">ינוכית</p>
              <p  class="bigLetter" :class="{bigLetterDark:isDark}">צ</p>
              <p id="smallLetter3" :class="!isLoaded ? 'smallLetter' : 'smallLetter smallLetterShow'">ה"לית</p>
              <p  class="bigLetter" :class="{bigLetterDark:isDark}">ב</p>  
              <p id="smallLetter4" :class="!isLoaded ? 'smallLetter endSmallLetter' : 'smallLetter endSmallLetter smallLetterShow'">ירושל</p>
              <p  class="bigLetter" :class="{bigLetterDark:isDark}">י ם</p>
              </div>

            
          <p id="ourVisionText">
          יחידת מחצבי”ם הינה בית מדרש לפיקוד הבכיר בצה”ל.
            היחידה מקיימת השתלמויות מטכ”ליות ואורגניות מדרג הסא”ל ומעלה.
            הפלטפורמה ביחידה מזמינה ומאפשרת עצירה לטובת פיתוח ערכי והתנהגותי, מפתחת חשיבת עומק ומעודדדת למידה תוך כדי התפקיד.
          </p>
      </div>

      
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
          
        >
          </v-carousel-item>
        </v-carousel>

        <div class="flexImgContainer" v-else>
            <img  :class="[ i  != 1 ? 'sideImg' : 'mainImg' ]" v-for="(item, i) in items" :key="i" :src="item.src"/>
        </div>
    
      <div id="flexQouteContainer">
        <div class="qouteDiv" style="align-self: flex-end;">
            <p class="qouteText">חשיבה מעמיקה, מאפשרת לך למידה רחבה, בעיקר של עצמך</p>
        </div>
        <p class="qouteCaption">ערכי היסוד שלנו</p>
        <div class="qouteDiv">
            <p class="qouteText">החובה לפעול ליצירת שיח ערכי בצבא ובפרט בעת מלחמה</p>

        </div>
      </div>
    
    
    
        <div>
        <p class="caption heshListCaption" id="actionsCaption">רשימת השתלמויות לשנה הנוכחית:</p>
            <img class="underline" id="underlineHeshCaption"  src="@/assets/images/blueUnderline3.png">
        </div>

        <heshtalmotList >
        </heshtalmotList>
     

    </div>

  </div>

</template>

<script>
import heshtalmotList from './heshtalmot-list.vue'
import admin from './Admin-Section.vue'
import profSection from './prof-Section.vue'
import ourHeshTalmoyut from './OurHesh-section.vue'

  export default {
     components: {
      heshtalmotList,
      admin,
      profSection,
      ourHeshTalmoyut

  },
    data () {
      return {
        windowWidth: window.innerWidth,
         items: [
          {
            src: require('@/assets/images/sliderSecond.jpg'),
          },
          {
            src: require('@/assets/images/slider22.png'),
          },
          {
            src: require('@/assets/images/slider333.png'),
          },
        ]
      }
    },
    props: {
       
      isMobile: Boolean,
      pageClicked:String,
      isLoaded:Boolean,
      isDark: Boolean 

    },
    mounted(){
      window.addEventListener('resize', this.updateWidth);
      console.log(this.isLoaded)
      if(!this.isLoaded){
          console.log(this.isLoaded)

          document.getElementById("typeAnimation").classList.add("anim-typewriter");
          setTimeout(() => {
            document.getElementById("captionDivided").classList.add("appearAnimation");
          }, 5000);

          setTimeout(() => {
              document.getElementById("smallLetter1").classList.add("appearAnimation");

            }, 7000);
          setTimeout(() => {
              document.getElementById("smallLetter2").classList.add("appearAnimation");

            }, 8000);
          setTimeout(() => {
              document.getElementById("smallLetter3").classList.add("appearAnimation");

            }, 9000);
          setTimeout(() => {
              document.getElementById("smallLetter4").classList.add("appearAnimation");

            }, 10000);
      }},
      beforeUnmount() {
        window.removeEventListener('resize', this.updateWidth);
      },
      methods: {
        updateWidth() {
          this.windowWidth = window.innerWidth;
        }
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
#flexOhterContainer{
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
#underline2{
   width: 59vw;
    height: 6vh;
    left: 18vw;
    top: 2vh;
}

/* להעתיק אותם */
.caption{
  /* font-family: 'bibical'; */

  text-align: center;
  font-size: 8vw;
  /* font-weight: bold; */
}
.heshListCaption{
  direction: rtl;
  font-size: 6vw;
}
.underline{
  position: absolute;
  filter: blur(2px);
  filter: brightness(70%);
  filter: grayscale(40%);

}

#carousel{
  margin-top: 30px;
}

/* לגזור מכאן*/

#flexMainContainer{
  /* position: absolute; */
  position: relative;
  margin-top: 18vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}
#flexQouteContainer{
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-top: 15px;

}
.qouteDiv{
  direction: rtl;
  background-color: rgb(61, 61, 143);
  width:70vw;
  height: 20vh;
  border-radius: 25px;
  margin: 5px;
  color:#d5dcff;

}
.qouteText{
  font-family: 'bibical';
  position: relative;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 2px;
  font-size: 4.5vw;

}

.qouteCaption{
  position: relative;
  text-align: center;
  font-size: larger;
  border-top: 2px solid #1e2755;
  border-bottom: 2px solid #1e2755;
  width: fit-content;
  left: 50%;
  transform: translate(-50%);
}


#underline3{
  position: relative;
  width: 50vw;
  height: 6vh;
  left: 24vw;
  top: -3vh;
}

#underlineHeshCaption{
  position: relative;
  width: 82vw;
    height: 2vh;
    left: 8vw;
    top: 2.5vh;
}

#captionDivided{
  top: 0vh;
  display: flex;
  direction: rtl;
  gap: 10px;
  justify-content: center;
  justify-items: flex-start;
  position: relative;
  font-family: 'galil';
  text-align: center;
  font-weight: bold;
  font-size: 6.5vw;
}

.captionDivided{
  opacity: 0;
}

.showCaptionDivided{
  opacity: 1;
}

.bigLetter{
  font-size: 7vw;
  color: rgb(10, 10, 95);
}

.bigLetterDark{
  color: #609db9;
}

.smallLetter{
  position: relative;
  font-size: 5vw;
  justify-self:baseline;
  margin-left: 2px;
  margin-right: -6px;
  align-self: center;
  opacity: 0;
  font-weight: 400;
}

.smallLetterShow{
  opacity: 1;
}

.endSmallLetter{
  margin-left: -6px;

}

#actionsCaption{
  position: relative;
  top: 3vh;
}
#ourVisionText{
  font-size: 3.8vw;
  position: relative;
  text-align: center;
  top: 3vh;
  padding: 7px;
  direction: rtl;
}

.flexImgContainer{
  position: relative;
  display: flex;
  width: 100vw;
  left: 0;
  top: 2vh;
  height: fit-content;
  justify-content: space-evenly;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.mainImg{
  width: 30vw;
  height: 20vh;
}

.sideImg{
  width: 27vw;
  height: 42vh;
}

/* עד כאן לגזור*/


/* typewriter effect */

.typewriter{
  position: absolute;
  display: flex;
  justify-content: center;

}

.typewriter h1 {
  direction: rtl;
  color: #000000;
  font-size: 4vw;
  font-family: 'galil';
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-left: .15em solid rgb(20, 20, 95); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .12em; /* Adjust as needed */
}

.appearAnimation{
  animation: appear 2s forwards;

}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(20, 20, 95) }
}

@keyframes appear {
  from { opacity: 0 }
  to { opacity: 100% }
}


.line-1{
  direction: rtl;
    position: relative;
    width: 9em;
    margin: 0 auto;
    border-left: 2px solid rgba(255,255,255,.75);
    font-size: 5vw;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
}

.noBorder{
  border-left: 0px solid rgba(255,255,255,.75);
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
            blink-caret 1s step-end infinite;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 9em;}
}

#articlesContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
  gap: 10px;
}

#articlesText{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(61, 61, 143);
    padding: 0.5rem;
    color: #d5dcff;
    border-radius: 25px;
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

