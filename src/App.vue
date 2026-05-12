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
    <header-section id="header-section" :is-mobile="isMobile" @change-page="handleChangePage" @toggle-dark="changeMode" @open="openMenu"></header-section>
    <main-section id="main-section" :is-mobile="isMobile" :page-clicked="clickedPage" :is-dark="isDarkMode" :is-first-load="showLandingAnim"></main-section>
    <side-bar :is-mobile="isMobile" :is-open="isSidebarOpen" :is-dark="isDarkMode" @close="closeMenu" @change="handleChangePage"></side-bar>
    <footer-section id="footer-section"></footer-section>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import MainSection from './components/MainSection.vue'
import FooterSection from './components/FooterSection.vue'
import sideBar from './components/UI/sideBar.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    sideBar,
    MainSection,
    FooterSection
  },
  data() {
    return {
      clickedPage: "mainPage",
      windowWidth: window.innerWidth,
      isSidebarOpen: false,
      isHesh: false,
      isProf: false,
      isAdmin: false,
      showLandingAnim: true,
      isDarkMode: false
    }
  },
 mounted() {
  window.addEventListener('resize', this.checkScreen);
  this.checkScreen();
  },
  unmounted() {
    window.removeEventListener('resize', this.checkScreen);
  },
  computed: {
  isMobile() {
    return this.windowWidth <= 450;
  }
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
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
        this.showLandingAnim = false;
      } else if (page === "המרצים שלנו") {
        this.isProf = true;
      } else if (page === "כניסת מנהל") {
        this.isAdmin = true;
      }
    },
    openMenu() {
      document.body.classList.add("hideOverflow");
      this.isSidebarOpen = true;

    },
    closeMenu() {
      document.body.classList.remove("hideOverflow");
      this.isSidebarOpen = false;
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
#header-section,
#main-section,
#footer-section {
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
