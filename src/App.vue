<template>
  <div 
    id="app" 
    :class="{ 
      'dark-mode': isDarkMode,
      'hesh-page': isHesh, 
      'prof-page': isProf, 
      'admin-page': isAdmin 
    }"
  >
    <Header id="header" :is-mobile="mobile" @change-page="handleChangePage" @is-dark="changeMode" @open="openMenu"></Header>
    <Main id="main" :is-mobile="mobile" :page-clicked="clickedPage" :is-dark="isDarkMode" :is-loaded="firstLoad"></Main>
    <side-bar :is-mobile="mobile" :is-open="open" :is-dark="isDarkMode" @close="closeMenu" @change="handleChangePage"></side-bar>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header-Section.vue'
import Main from './components/Main-Section.vue'
import Footer from './components/Footer-Section.vue'
import sideBar from './components/sideBar.vue'

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
      clickedPage: "mainPage",
      mobile: null,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      open: false,
      isHesh: false,
      isProf: false,
      isAdmin: false,
      firstLoad: false,
      isDarkMode: false
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  unmounted() {
    window.removeEventListener('resize', this.checkScreen);
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      this.mobile = this.windowWidth <= 450;
    },
    changeMode(mode) {
      this.isDarkMode = mode;
    },
    handleChangePage(page) {
      this.clickedPage = page;
      
      // Reset flags for page-specific classes
      this.isHesh = false;
      this.isProf = false;
      this.isAdmin = false;
      
      // Set the flag based on the current page
      if (page === "ההשתלמויות שלנו") {
        this.isHesh = true;
      } else if (page === "mainPage") {
        this.firstLoad = true;
      } else if (page === "המרצים שלנו") {
        this.isProf = true;
      } else if (page === "כניסת מנהל") {
        this.isAdmin = true;
      }
    },
    openMenu(binary) {
      document.body.classList.add("hideOverflow");
      this.open = binary;
    },
    closeMenu(binary) {
      document.body.classList.remove("hideOverflow");
      this.open = binary;
    }
  }
}
</script>

<style>
/* Global CSS */
@font-face {
  font-family: 'galil';
  src: url('./assets/fonts/web/FUP-Galil-Regular-V3.woff2') format('woff2'), url('./assets/fonts/web/FUP-Galil-Regular-V3.woff') format("woff");
}

/* Crucial: Ensure html and body occupy full height */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Correct Flexbox Layout for the App Container */
#app {
  font-family: 'galil', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(143 175 207 / 32%);

  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Keeps footer at bottom on short pages */
}

/* Remove Absolute Positioning from Components */
#header,
#main,
#footer {
  position: static; /* Overrides any previous absolute positioning */
  width: 100%;
}

/* Main content area takes up all available space */
#main {
  flex-grow: 1; /* Key to sticky footer: allows main content to fill space */
}

/* Dark Mode and other utility classes */
#app.dark-mode {
  background-color: rgb(9, 9, 44);
  color: #c4e1ff;
}

.hideOverflow {
  overflow-y: hidden;
  position: fixed;
  width: 100%;
}

/* Remove problematic, hardcoded height adjustments */
.hesh-page,
.prof-page,
.admin-page {
  /* These classes are now only for page-specific styles, not for height. */
}
</style>
