<template>
<div>
  <div v-if="mobile" class="mainWrapper">
    <Header id="header" @changePage="takeAction" @isDark="changeMode" @open="openMenu"></Header>
    <Main id="main" :numclicked=clickedNum :isDark=isDarkMode :isLoaded=firstLoad></Main>
    <side-bar :isOpen=open :isDark=isDarkMode @close="closeMenu" @change="takeAction"></side-bar>

    <Footer id="footer" :class="{heshPageFooter: isHesh, profPageFooter:isProf, adminPageFooter:isAdmin}" ></Footer>
  </div>
  <div id="unAvailScreen" v-else :style="cssVars">
    <!-- {{height}} -->
    <img id="error" src="@/assets/images/error2.png">
  </div>
</div>
</template>

<script>
import Header from './components/Header-Section.vue'
import Main from './components/Main-Section.vue'
import Footer from './components/Footer-Section.vue'
import sideBar from './components/sideBar.vue'

let vh = window.innerHeight * 1;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//  // We execute the same script as before
 //  let vh = window.innerHeight * 1;
 //  document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main,
    sideBar
  },
  data() {
      return {
        clickedNum: 4,
        mobile: null,
        windowWidth: null,
        height: window.innerHeight,
        open: false,
        isHesh: false,
        isProf: false,
        isAdmin: false,
        firstLoad: false,
        isDarkMode:false
      }
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
      checkScreen(){
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 450){
          this.mobile = true;
          return;
        }
        this.mobile=false;

      },
      changeMode(mode){
          this.isDarkMode=mode;
      },
      takeAction(index){
        let vh = window.innerHeight * 1;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // console.log('clicked', index);
        if(index === 0){
          this.isProf=false;
          document.getElementById("app").classList.remove("profPage");
          this.isAdmin=false;
          document.getElementById("app").classList.remove("adminPage");

          this.isHesh= true;
          // console.log("hesh");
          document.getElementById("app").classList.add("heshPage");
        }
        else if(index === 4){
          document.getElementById("app").classList.remove("heshPage");
          this.isHesh= false;
          this.isProf=false;
          document.getElementById("app").classList.remove("profPage");
          this.isAdmin=false;
          document.getElementById("app").classList.remove("adminPage");
          this.firstLoad = true;
          console.log(this.firstLoad);

        }
        else if(index === 1){
          this.isHesh=false;
          document.getElementById("app").classList.remove("heshPage");
          this.isAdmin=false;
          document.getElementById("app").classList.remove("adminPage");

          this.isProf = true;
          document.getElementById("app").classList.add("profPage");

        }
        else if(index===3){
          this.isHesh=false;
          document.getElementById("app").classList.remove("heshPage");
          this.isProf=false;
          document.getElementById("app").classList.remove("profPage");

          this.isAdmin = true;
          document.getElementById("app").classList.add("adminPage");
        }

        this.clickedNum = index;
      },
      openMenu(binary){
        // console.log('clicked', binary);
        document.body.classList.add("hideOverflow");
        this.open = binary;
      },
      closeMenu(binary){
        // console.log('clicked', binary);
        document.body.classList.remove("hideOverflow");

        this.open = binary;
      }
    }
}
</script>

<style>
@font-face {
  font-family: 'galil';
  src: url(./assets/fonts/web/FUP-Galil-Regular-V3.woff2) format('woff2'), url('./assets/fonts/web/FUP-Galil-Regular-V3.woff') format("woff");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'galil';

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 285vh;
  background-color: rgb(143 175 207 / 32%);

}

.dark{
  color: rgb(196 225 255);
}


html,  body{
  height: 100vh;
  width: 100vw;
}

.hideOverflow{
  overflow-y: hidden;
  position: fixed;
}

#footer{
  width: 100vw;
  position:absolute;
  top: calc(var(--vh, 1vh) * 2.8);
}


#header{
  width: 100vw;
  position:absolute;
  top: 0;
}
#main{
  position:absolute;
  top: 15vh;
  width: 100vw;
  height: 50vh;

}
#unAvailScreen{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100vw;
}
#error{
  position: absolute;
  top: 20vh;
  width: 80vw;
  height: 62vh;
  left: 9vw;
}



/* change app size by curr page */

.heshPage{
  height: 250vh !important;
  height: calc( var(--vh, 1vh) * 2.2) !important;

}
.heshPageFooter{
  top: 250vh !important;
  top: calc(var(--vh, 1vh) * 2.2) !important;

}


.profPage{
  height: 526vh !important;
  height: calc( var(--vh, 1vh) * 5.1) !important;

}
.profPageFooter{
  top: 526vh !important;
  top: calc(var(--vh, 1vh) * 5.1) !important;

}


.adminPage{
  height: 260vh !important;
  height: calc(var(--vh, 1vh) * 2.3) !important;
}
.adminPageFooter{
  top: 260vh !important;
  top: calc(var(--vh, 1vh) * 2.3) !important;

}

/* media queries */
@media only screen and (min-height: 850px) {
    #footer{
      top: calc(var(--vh, 1vh) * 2.9);
    }
    #app{
      height: calc(var(--vh, 1vh) * 2.9);
    }
}

@media only screen and (min-height:830px) and ( max-height: 890px){
   .heshPage{
  height: calc( var(--vh, 1vh) * 2.3) !important;
  }
  .heshPageFooter{
    top: calc(var(--vh, 1vh) * 2.3) !important;
  }
  .profPage{
    height: calc( var(--vh, 1vh) * 5.4) !important;
  }
  .profPageFooter{
    top: calc(var(--vh, 1vh) * 5.4) !important;
  }
    .adminPage{
  height: calc(var(--vh, 1vh) * 2.45) !important;
}
.adminPageFooter{
  top: calc(var(--vh, 1vh) * 2.45) !important;
}
  
}

@media only screen and (max-height: 850px) {
 .profPage{
    height: calc( var(--vh, 1vh) * 5.1) !important;
  }
  .profPageFooter{
    top: calc(var(--vh, 1vh) * 5.1) !important;
  }
  #footer{
      top: calc(var(--vh, 1vh) * 2.7);
    }
    #app{
      height: calc(var(--vh, 1vh) * 2.7);
    }
}

@media only screen and (max-height: 750px) {
   #footer {
  top: calc(var(--vh, 1vh) * 3) ;
  }
  #app{
    height: calc( var(--vh, 1vh) * 3) ;
  }
  .heshPage{
  height: calc( var(--vh, 1vh) * 2.6) !important;
  }
  .heshPageFooter{
    top: calc(var(--vh, 1vh) * 2.6) !important;
  }
  
  .profPage{
    height: calc( var(--vh, 1vh) * 5.5) !important;
  }
  .profPageFooter{
    top: calc(var(--vh, 1vh) * 5.5) !important;
  }
  .adminPage{
  height: calc(var(--vh, 1vh) * 2.6) !important;
}
.adminPageFooter{
  top: calc(var(--vh, 1vh) * 2.6) !important;
}
}


@media only screen and (max-height: 700px) {
  #footer {
  top: calc(var(--vh, 1vh) * 3.2) ;
  }
  #app{
    height: calc( var(--vh, 1vh) * 3.2) ;
  }
  .heshPage{
  height: calc( var(--vh, 1vh) * 2.9) !important;
  }
  .heshPageFooter{
    top: calc(var(--vh, 1vh) * 2.9) !important;
  }
  
  .profPage{
    height: calc( var(--vh, 1vh) * 5.2) !important;
  }
  .profPageFooter{
    top: calc(var(--vh, 1vh) * 5.2) !important;
  }
  .adminPage{
  height: calc(var(--vh, 1vh) * 2.8) !important;
}
.adminPageFooter{
  top: calc(var(--vh, 1vh) * 2.8) !important;
}






}
</style>
