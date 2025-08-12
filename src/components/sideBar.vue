<template>
<div>
   <div id="sideBar" class="side" :class="{openNavClass: isOpen, sideDark:isDark}">
        <img id="exit" :class="{darkenImg:isDark}" src="@/assets/images/x.svg" @click="closeMenu" />
            <a @click="handlePage('ההשתלמויות שלנו')">ההשתלמויות שלנו</a>
            <a @click="handlePage('המרצים שלנו')">המרצים שלנו</a>
            <a @click="handlePage(2)">חומרי עיון</a>
            <a id="adminDiv" @click="handlePage('כניסת מנהל')">כניסת מנהל</a>

        <div id="LinkedinCard" >
             <a href="https://www.linkedin.com/in/lihi-israeli-4a674b358">
                <img class="LinkedinIcon"  src="@/assets/images/linkedinIcon.png"/>
            </a>
            <span id="LinkedinCardMiddle">
                <p id="cardTitle">Lihi on LinkedIn</p>
                <p style="font-size: 3.5vw;">Check out the developer's account!</p>
            </span>
            <a href="https://www.linkedin.com/in/lihi-israeli-4a674b358">
                <img class="LinkIcon" :class="{darkenImg:isDark}" src="@/assets/images/boxThing.svg" />
            </a>

        </div>
   </div>

    <div id="shadow" v-show="isOpen" @click="closeMenu"></div>
</div>
</template>

<script>
export default {
     props:{
        isOpen: Boolean ,
        isDark: Boolean 
    },
     data() {
      return {
         items: [
        { title: 'ההשתלמויות שלנו' },
        { title: 'המרצים שלנו' },        
        { title: 'חומרי עיון' },
      ],
        toggleMenu: this.isOpen
      }
  },

methods: {
      closeMenu(){
        this.$emit("close", false);
    },
    handlePage(screen){
        this.$emit("change", screen);
        this.$emit("close", false);
    },

}
}
</script>

<style>
@font-face {
  font-family: 'galil';
  src: url(../assets/fonts/web/FUP-Galil-Regular-V3.woff2) format('woff2'), url('../assets/fonts/web/FUP-Galil-Regular-V3.woff') format("woff");
}
.side{
  position: fixed;
  z-index: 3;
    background-color: white;
    height: 100vh;
    width: 0;
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    overscroll-behavior: contain;
    transition: 0.2s ease-out;
}

.sideDark {
    background-color: #1c1d21;
}

.openNavClass{
    width: 75vw;
    height: 100%;
}

#shadow{
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: #25222230;
overflow-y: hidden;


}
.side #exit{
    left: 85%;
    top: 2vh;
    position: relative;
    width: 7vw;
    height: 8vh;
}
.side #flexMenuContainer{
    direction: rtl;
    position: relative;
    top: 5vh;
    right: 5vw;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 6vw;
}
.side a {
    font-family: 'galil';
  position: relative;
  direction: rtl;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  /* color: #858585; */
  display: block;
  transition: 0.5s;
  right: 5vw;
}
.side #adminDiv{
    position: absolute;
    bottom: 10vh;
    font-size: 6vw;
    right: 5vw;

}
.side #LinkedinCard{
    position: absolute;
    display: flex;
  border:1px outset #efe3e3;    
  bottom: 0.5vh;
    right: 0vw;
    gap: 20px;
    transition: 0.3s;
}
.LinkedinIcon{
   position: relative;
    width: 7vw;
    height: 3vh;
    top: 0vh;
    left: 36vw;
    border-radius: 25%;
}
.LinkIcon{
    position: relative;
    width: 4vw;
    height: 4vh;
    top: -1vh;
    right: -1vw;

}
#cardTitle{
    font-weight: 500;
    font-size: 5.5vw;
}
#LinkedinCardMiddle{
    position: relative;
    width: 70vw;
    left: 26vw;
}

.darkenImg{
     -webkit-filter: invert(100%); /* Safari/Chrome */
    filter: invert(100%);
}
</style>