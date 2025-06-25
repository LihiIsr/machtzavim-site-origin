<template>
<div class="flexImgContainer flexProfImgContainer">
  <div v-if="firstProf" class="firstProfFlex">
    <div
        v-for="(image, i) in profCards1"
        :key="i"
        class="flip-card-inner"
        color="indigo-lighten-5"
        v-bind:id="profCards1[i].id"   
        >
           
        <div class="flip-card-front owd-reveal">
            <img class="avatarImg" :src="profCards1[i].src" />
            <p class="profName"> פרופ' {{profCards1[i].name}} </p>
            <p class="profSubtitle">הסבר קצר על תחום עיסוקו</p>
                <p class="profText">הסבר ארוך יותר על המרצה. למשל: בעל תואר במדעי החברה ופעיל לטובת ארגון מסויים</p>
            <button class="readMore" @click="toggleFlip(profCards1[i].id)" v-if="profCards1[i].moreInfo">קרא עוד >></button>
        </div>

        <div class="flip-card-back">
            <button class="readLess" @click="toggleFlip(profCards1[i].id)" v-if="profCards1[i].moreInfo"> >> חזור</button>
        </div>
    </div>
  </div>

    
  <div v-if="!firstProf" class="firstProfFlex">
    <div
        v-for="(image, i) in profCards2"
        :key="i"
        class="flip-card-inner "
        color="indigo-lighten-5"
        v-bind:id="profCards2[i].id"   
        >
           
        <div class="flip-card-front owd-reveal">
            <img class="avatarImg" :src="profCards2[i].src" />
            <p class="profName"> פרופ' {{profCards2[i].name}} </p>
            <p class="profSubtitle">הסבר קצר על תחום עיסוקו</p>
                <p class="profText">הסבר ארוך יותר על המרצה. למשל: בעל תואר במדעי החברה ופעיל לטובת ארגון מסויים</p>
            <button class="readMore" @click="toggleFlip(profCards2[i].id)" v-if="profCards2[i].moreInfo">קרא עוד >></button>
        </div>

        <div class="flip-card-back">
            <button class="readLess" @click="toggleFlip(profCards2[i].id)" v-if="profCards2[i].moreInfo"> >> חזור</button>
        </div>
    </div>
  </div>

        <div id="flexPagination">
                <span class="pagination" @click="changeProfPage" :class="{clickedProf: firstProf}"><p class="paginationText">1</p></span>
                <span class="pagination" @click="changeProfPage" :class="{clickedProf: !firstProf}"><p class="paginationText">2</p></span>
        </div>
</div>
</template>

<script>



export default {
    data() {
        return{
           firstProf:true,
           profArr:'profCards1',
            profCards1: [
          
            {
              src: require('@/assets/images/blankImg.png'), name:'שמואל', info:'', moreInfo: ''
            }
          ,
        
            {
              id: 6 , src: require('@/assets/images/blankImg.png'), name:'סבטלנה', info:'', moreInfo: 'blah blah blah'
            }
          ,
          
            {
              src: require('@/assets/images/blankImg.png'), name:'יוסי', info:'', moreInfo: ''
            }
          ,
          
            {
              src: require('@/assets/images/blankImg.png'), name:'נחמה', info:'', moreInfo: ''
            }
          ,
          
            {
               id: 9, src: require('@/assets/images/blankImg.png'), name:'רבקה', info:'', moreInfo: 'blaaaaaa'
            }

          ,
          
            {
               id: 10,src: require('@/assets/images/blankImg.png'), name:'גלית',  info:'', moreInfo: ' i hate shira'
            }
          ,
          
            {
               id: 11, src: require('@/assets/images/blankImg.png'), name:'יהודה',  info:'', moreInfo: 'kaki ktzina'
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'מיכה', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'רונית', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'שרית', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'יהודית', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'מיכאל', info:'', moreInfo: ''
            }
          ,
            {
              id: 12, src: require('@/assets/images/blankImg.png'), name:'אלון', info:'', moreInfo: 'fuck you'
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'נעמי', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'שרה', info:'', moreInfo: ''
            }

        ],

        profCards2: [
          
            {
              id:1, src: require('@/assets/images/blankImg.png'), name:'שרה', info:'', moreInfo: 'blahhh'
            }
          ,
        
            {
              src: require('@/assets/images/blankImg.png'), name:'שמוליק', info:'', moreInfo: ''
            }
          ,
          
            {
              id:2,src: require('@/assets/images/blankImg.png'), name:'יוסי', info:'', moreInfo: 'ad mataiiiii'
            }
          ,
          
            {
              src: require('@/assets/images/blankImg.png'), name:'מוראל' ,info:'', moreInfo: ''
            }
          ,
          
            {
              src: require('@/assets/images/blankImg.png'), name:'שושנה', info:'', moreInfo: ''
            }

          ,
          
            {
              src: require('@/assets/images/blankImg.png'), name:'גלית', info:'', moreInfo: ''
            }
          ,
          
            {
              src: require('@/assets/images/blankImg.png'), name:'יהודה', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'מיכה', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'רונית', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'שרית', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'יהודית', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'מיכאל', info:'', moreInfo: ''
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'אלון', info:'', moreInfo: ''
            }
          ,
            {
              id:3,src: require('@/assets/images/blankImg.png'), name:'נעמי', info:'', moreInfo: 'go fucking fuck urself'
            }
          ,
            {
              src: require('@/assets/images/blankImg.png'), name:'שרה' ,info:'', moreInfo: ''
            }

        ],
        strArray: '',

        }
    },
    methods:{
        changeProfPage(){
            this.firstProf=!this.firstProf;
            window.scrollTo({top:0, behavior: 'smooth'});

        },
        toggleFlip(id){
            var element = document.getElementById(id);
             element.classList.toggle('flipped');
            console.log(id);
            console.log("flipped");
        }
    }

}
</script>

<style>
.flexImgContainer{
  position: absolute;
  top: 27vh;
  display: flex;
  justify-items: center;
  justify-content: center;
  left: 10vw;
}
.profImg{
  width: 40vw;
  height: 20vh;
}
.profName{
    font-family: 'bibical';
    font-size: 5vw;
}

.flexProfImgContainer{
  flex-direction: column;
  top: 11vh;
  direction: rtl;
  width: 100vw;
  flex-wrap: wrap;
    left: 2vw;
    gap: 10px;
    left: 50%;
    transform: translate(-50%,-0%);

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
}

.pagination{
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

.readMore{
    position: relative;
    left: -38vw;
    top: -4vh;
    font-size: 2.5vw;
    font-weight: 600;
}

.readLess{
    position: relative;
    top: 22vh;
    right: 77vw;
    /* top: -1vh; */
    font-size: 3.5vw;
    font-weight: 600;
}

.profSubtitle{
    color: gray;
    font-size: 3.5vw;
}

.avatarImg {
    width: 23vw;
}

.firstProfFlex{
    display: flex;
    flex-direction: column;
    width: 100vw;
    gap: 10px;
    left: -2vw;
    position: relative;
    color: black;
}


/* prof flip card */

/* This container is needed to position the front and back side */
.flip-card-inner {
    background-color:rgb(232 234 246);
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transition: transform 0.8s;
    transform-style: preserve-3d;
    width: 95vw;
    height: 30vh;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

.flipped{
    transform: rotateY(180deg);

}

.flip-card-inner .flip-card-front, .flip-card-inner .flip-card-back{
  width: 100%;
  height: 100%;
  position: absolute;
  -o-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 2;
  /* -webkit-box-shadow: 5px 6px 32px 2px rgba(133,133,133,0.71);
  -moz-box-shadow: 5px 6px 32px 2px rgba(133,133,133,0.71);
  box-shadow: 5px 6px 32px 2px rgba(133,133,133,0.71); */
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
    left: -2vw;

}

</style>