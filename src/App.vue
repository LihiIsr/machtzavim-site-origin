<template>
  <div 
    id="app" 
    :class="{ 
      'dark-mode': isDarkMode,
    }"
  >
    <header-section id="header-section" @open="openMenu"></header-section>
    <main-section id="main-section"></main-section>
    <side-bar :is-open="isSidebarOpen" @close="closeMenu"></side-bar>
    <footer-section id="footer-section"></footer-section>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import MainSection from './components/MainSection.vue'
import FooterSection from './components/FooterSection.vue'
import sideBar from './components/UI/sideBar.vue'

import { useAppState  } from '@/composables/useAppState'

const {isDark } = useAppState ();


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
      isSidebarOpen: false,
      isDarkMode: isDark
    }
  },

  methods: {
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
#main-section {
  margin-top: 5vh;
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


</style>
