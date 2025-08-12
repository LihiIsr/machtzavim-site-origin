<template>
    <div id="container">
        <div id="infoHeader">
            <div id="banner">
                <img id="logo" src="@/assets/images/logoLight1.png" @click="handlePage('mainPage')">
                
                <div class="switch">
                  <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" v-model="isDark" @change="changeMode" />
                    <div class="slider round"></div>
                  </label>
                </div>

                <div id="hamburger" @click="openMenu">
                    <span class="hamburger-line first-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                  </div>

            </div>
          </div>
    </div>
</template>

<script>

  export default {
    data: () => ({
      toggleMenu: false,
      isDark: false
    }),
    methods: {
      openMenu(){
        this.toggleMenu = true;
        this.$emit("open", this.toggleMenu);
      },
      handlePage(i){
        this.$emit("changePage", i);

      },
      changeMode(){
        console.log(this.isDark);
        if(this.isDark){
          document.getElementById("app").style.backgroundColor = '#09092c';
           document.getElementById("app").classList.add("dark");
            this.$emit("isDark", true);
        }
        else{
          document.getElementById("app").style.backgroundColor = 'rgb(143 175 207 / 32%)';
          document.getElementById("app").classList.remove("dark");
            this.$emit("isDark", false);
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
    background-color: #09092c;
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
     /* background-image: url(../assets/images/menu4.png); */
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
    height: fit-content;
    position: absolute;
    left: 20vw;
    top: 3.5vh;
}
    
.theme-switch {
  display: inline-block;
  height: 20px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 3px;
  content: "";
  height: 14px;
  left: 5px;
  position: absolute;
  transition: .4s;
  width: 14px;
}

input:checked + .slider {
  background-color: #2b2b2b;
}

input:checked + .slider:before {
  transform: translateX(33px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
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

</style>