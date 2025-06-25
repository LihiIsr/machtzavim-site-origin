<template>
  <div id="container" >
     <div id="notMainFlex" v-if="numclicked < 4">
        <p class="caption"> {{caption[numclicked]}} </p>
        <img class="underline" id="underline1" v-if="numclicked <4" src="@/assets/images/blueUnderline3.png">
        <img class="underline" id="underline2" v-else src="@/assets/images/blueUnderline3.png">
    </div>

    <ourHeshTalmoyut  v-if="numclicked == 0"></ourHeshTalmoyut>

    <profSection v-if="numclicked == 1"></profSection>

    <admin :isDarkMode=isDark v-if="numclicked == 3"></admin>


    <div id="flexMainContainer" v-if="numclicked == 4">
      
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
    
      <div id="flexQouteContainer">
        <div class="qouteDiv" style="align-self: flex-end;">
            <p class="quoteMain">חשיבה מעמיקה, מאפשרת לך למידה רחבה, בעיקר של עצמך</p>
        </div>
        <p class="qouteCaption">ערכי היסוד שלנו</p>
        <div class="qouteDiv">
            <p class="quoteMain">החובה לפעול ליצירת שיח ערכי בצבא ובפרט בעת מלחמה</p>

        </div>
      </div>
    
    
    
        <div>
        <p class="caption heshListCaption" id="actionsCaption">רשימת השתלמויות לשנה הנוכחית:</p>
            <img class="underline" id="underline4"  src="@/assets/images/blueUnderline3.png">
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
        ],
        caption: [
         'ההשתלמויות שלנו' ,
         'המרצים שלנו',
         'חומרי עיון',
         'כניסת מנהל'
        ],
      }
    },
    props: {
      numclicked:Number,
      isLoaded:Boolean,
      isDark: Boolean 

    },
    mounted(){
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
#notMainFlex{
    width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  gap: 25px;
}
#underline1{
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
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
.quoteMain{
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

#underline4{
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
  color: white;
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

</style>

