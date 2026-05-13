<template>
<div>
<page-title>המרצים שלנו</page-title>

  <div class="ProfCardsContainer">
    <div class="profFlex">
      <div
          v-for="(image, i) in profCardsCurr"
          :key="i"
          class="flip-card-inner"
          color="indigo-lighten-5"
          v-bind:id="profCardsCurr[i].id"   
        
          >
            
          <div class="flip-card-front owd-reveal">
              <img class="avatarImg" :src="profCardsCurr[i].src" />
              <p class="profName"> פרופ' {{profCardsCurr[i].name}} </p>
              <p class="profSubtitle">הסבר קצר על תחום עיסוקו</p>
          <p class="profText" v-if="!isMobile">הסבר ארוך יותר על המרצה. למשל: בעל תואר במדעי החברה ופעיל לטובת ארגון מסויים</p>          
          <button class="readMore" @click="toggleFlip(profCardsCurr[i].id)" v-if="isMobile && profCardsCurr[i].moreInfo">קרא עוד >></button>
          </div>

          <div class="flip-card-back">
            <p class="profText" v-if="isMobile">הסבר ארוך יותר על המרצה. למשל: בעל תואר במדעי החברה ופעיל לטובת ארגון מסויים</p>
            
              <button class="readLess" @click="toggleFlip(profCardsCurr[i].id)" v-if="profCardsCurr[i].moreInfo"> >> חזור</button>
          </div>
      </div>
    </div>


          <div id="flexPagination">
              <span class="paginationCircle" @click="changeProfPage(0)" :class="{clickedProf: currentPage==0}"><p class="paginationText">1</p></span>
              <span class="paginationCircle" @click="changeProfPage(1)" :class="{clickedProf: currentPage==1}"><p class="paginationText">2</p></span>
          </div>
  </div>
</div>
</template>

<script>
import pageTitle from '../UI/pageTitle.vue'
import { useAppState  } from '@/composables/useAppState'
const {isMobile } = useAppState ()

import { professorPages } from '@/data/professors'

export default {
  components:{
    pageTitle
  },
    data() {
      
        return{
          currentPage:0,
          isMobile,
          professorPages,
        }
    },
    computed: {
  profCardsCurr() {
    return this.professorPages[this.currentPage]
  }
},

    methods:{
        changeProfPage(page){
          this.currentPage = page;
          window.scrollTo({top:0, behavior: 'smooth'});

        },
        toggleFlip(id){
            var element = document.getElementById(id);
             element.classList.toggle('flipped');
        }
    }

}
</script>

<style>
/* make sizing predictable */
*, *::before, *::after { box-sizing: border-box; }

.profImg{
  width: 40vw;
  height: 20vh;
}
.profName{
    font-family: 'bibical';
    font-size: 5vw;
}

.ProfCardsContainer{
  position: relative;      /* no absolute centering that causes overflow */
  margin-top: 11vh;
  direction: rtl;
  width: 100%;
  max-width: 1200px;       /* keep the whole block centered and limited */
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

#ourProf{
  height: 60vh;
}

#flexPagination{
  display: flex;
  position: relative;
  text-align: center;
  font-size: 4vw;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 5vh;
}

.paginationCircle{
  width: 11vw;
  height: 5vh;
  border-radius: 25px;
  margin: 10px;
}
.paginationText{
  position: relative;
  top: 1vh;
}

.clickedProf{
  background-color: rgb(192 201 211);
}

/* card style */

.readMore,
 .readLess{
    position: absolute;
    bottom: 1vh;
    left: 5vw;
    font-size: 3vw;
    font-weight: 600;
}

.profSubtitle{
    color: gray;
    font-size: 3.5vw;
}

.avatarImg {
    width: 51%;
    max-width: 140px;
    height: 71%;
    display: block;
}
.profText{
  margin: 5px;
}

.profFlex{
    display: flex;
    flex-direction: column;  
    gap: 10px;
    width: 100%;
    align-items: center;
    color: black;
}

.profFlex {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

/* prof flip card */

.flip-card-inner {
    background-color:rgb(232 234 246);
    transition: transform 0.8s;
    transform-style: preserve-3d;
    height: auto;          /* let it grow based on content */
    min-height: 30vh;      /* keeps a nice minimum height */
    width: 95%;              /* mobile: nearly full width */
    max-width: 520px;
    height: 30vh;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    position: relative;
}

.flipped{
    transform: rotateY(180deg);
}

.flip-card-inner .flip-card-front, 
.flip-card-inner .flip-card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  -o-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 2;
}

.flip-card-inner  .flip-card-back {
    -o-transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.flip-card-inner .flip-card-front{
    display: flex;
    flex-direction: column;
    gap: 4px;
    right: 0.5rem;
}

.flip-card-front{
  display: flex;
flex-direction: column;
height: 100%;
gap: 0.5rem;
}

/* Desktop layout */
@media only screen and (min-width: 1050px) {
  .profFlex{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: stretch;
  }

  .flip-card-inner {
    flex: 0 1 calc(33.333% - 20px); /* 3 per row */
    width: calc(33.333% - 20px);
    max-width: 360px;
    height: 50vh;
  }

  .avatarImg {
    width: 71%;
    max-width: 120px;
  }
  .profText{
    margin: 0;
  }
  .profName {
    font-size: 2vw;
    font-size: clamp(1rem, 5vw, 1.5rem);
  }
  .profSubtitle{
    font-size: 1.5vw;
    font-size: clamp(0.8rem, 3.5vw, 1.2rem);

  }

  .readMore, .readLess {
    font-size: clamp(0.7rem, 2.5vw, 1rem);
}

  .ProfCardsContainer{
    margin-top: 18vh;
  }
}

 .paginationCircle {
    width: 36px;
    height: 36px;
  }
  .paginationText {
    font-size: 0.9rem;
  }

</style>