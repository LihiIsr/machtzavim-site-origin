import { createApp } from 'vue'
import App from './App.vue'

// Firebase
import { VueFire } from "vuefire";
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

import router from './router';

// Firebase config
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyC5Pq4U0Ezfux5HPiUwPV0mDYq31VFV3kA",
  authDomain: "machtzavim-site.firebaseapp.com",
  projectId: "machtzavim-site",
  storageBucket: "machtzavim-site.firebasestorage.app",
  messagingSenderId: "33940484489",
  appId: "1:33940484489:web:170c099bff51e1c6f87158"
});

export const db = getDatabase(firebaseApp);
export const collectionRef = ref(db, 'heshtalmuyot');

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Create Vue app
const app = createApp(App)

app.use(VueFire, { firebaseApp })
app.use(router)           
app.use(vuetify)

app.mount("#app")      