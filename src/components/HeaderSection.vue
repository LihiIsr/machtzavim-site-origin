<template>
    <div id="container">
        <div id="infoHeader">
            <div id="banner">
                <img id="logo" src="@/assets/images/logoLight.png" @click="handlePage('mainPage')">
                
                <div class="switch" :class="{moveSwitch: !isMobile}">
                  <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" v-model="isDark" @change="changeMode" />
                    <div class="slider round"></div>
                  </label>
                </div>

                <div v-if="isMobile" id="hamburger" @click="openMenu">
                    <span class="hamburger-line first-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                  </div>
                <span v-if="!isMobile">
                    <ul class="navBar" >
                        <li class="link" :class="{darkLink:isDark}" @click="handlePage('ההשתלמויות שלנו')">ההשתלמויות שלנו</li>
                        <li class="link" :class="{darkLink:isDark}" @click="handlePage('המרצים שלנו')">המרצים שלנו</li>
                        <li class="link" :class="{darkLink:isDark}" @click="handlePage('חומרי עיון')">חומרי עיון</li>
                        <li class="link" :class="{darkLink:isDark}" @click="handlePage('כניסת מנהל')">כניסת מנהל</li>
                    </ul>
              </span>

            </div>
          </div>
    </div>
</template>

<script>

  export default {
    props:{
      isMobile: Boolean,

    },
    data: () => ({
      isDark: false,
    }),
    methods: {
      openMenu(){
        this.$emit("open");
      },
      handlePage(i){
        this.$emit("change-page", i);

      },
      changeMode(){
        if(this.isDark){
           document.getElementById("app").classList.add("dark");
            this.$emit("toggle-dark", true);
        }
        else{
          document.getElementById("app").classList.remove("dark");
            this.$emit("toggle-dark", false);
        }
      }
    }
  }
</script>

<style>
#container{
    direction: rtl;
    width: 100vh;
    height: 30vh;
}

#infoHeader{
    width: 100vw;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
#banner{
    position: absolute;
    background-color: rgb(12 18 53);
    width: 100vw;
    height: 10vh;
}
#hamburger{
  position: absolute;
  left: 4vw;
  top: 33%;

}

#hamburger .hamburger-line{
  width: 2.5rem;
  height: 0.2rem;
  background-color: #ecf0f1;
  display: block;
  margin: 8px auto;
  border-radius: 3px;
}

#hamburger .first-line{
  margin-top: 0px;
}

#logo{
    position: absolute;
   right: 2vw;
    top: 1vh;
    height: 8vh;
    width: 26vw;
    cursor: pointer;
}
#menu{
  position: relative;
     /* background-image: url(../assets/images/menu.png); */
     background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(10%);

    /* top: 3vh; */
    left: 1vw;
    top: 50%;
    transform: translate(-0%,-50%);

}
#admin{
  position: absolute;
    left: 22vw;
    /* top: 3vh; */
    top: 50%;
    transform: translate(-0%,-60%);
    height: 4vh;
    width: 7vw;
}

/* ///dark light mode */
.switch {
  position: absolute;
  left: 20vw;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.moveSwitch {
  left: 2vw;
}

.theme-switch {
  display: inline-block;
  width: 60px;
  height: 20px;
  position: relative;
}

.theme-switch input {
  display: none;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  cursor: pointer;
  transition: 0.4s;
}

.slider:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 3px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2b2b2b;
}

input:checked + .slider:before {
  transform: translateY(-50%) translateX(33px);
}


@media only screen and (min-width: 1050px) {
    #logo{
      right: 4vw;
      top: 0vh;
      height: 11vh;
      width: 11vw;
    }
    #banner{
      height: 11vh;
    }
    

}

.navBar{
    direction: rtl;
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    gap: 3rem;
    left: 9vw;
    top: 50%;
    transform: translateY(-50%);
}
.link{
    background-color: #ccc;
    border-radius: 25px;
    width: 10rem;
    text-align: center;
    cursor: pointer;

}

.link:hover{
      background-color: #a29f9f;

}

.darkLink{
    color: #fff;
    background-color: #2b2b2b;
    
}

.darkLink:hover{
      background-color: #555353;

}

</style>