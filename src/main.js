import { createApp } from 'vue'
import App from './App.vue'

//firebase
import { VueFire } from "vuefire";
import { initializeApp } from "firebase/app";

import { getDatabase, ref} from "firebase/database";


// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";



export const firebaseApp = initializeApp({
  apiKey: "AIzaSyC5Pq4U0Ezfux5HPiUwPV0mDYq31VFV3kA",
  authDomain: "machtzavim-site.firebaseapp.com",
  projectId: "machtzavim-site",
  storageBucket: "machtzavim-site.firebasestorage.app",
  messagingSenderId: "33940484489",
  appId: "1:33940484489:web:170c099bff51e1c6f87158"});

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
// const appCheck = initializeAppCheck(firebaseApp, {
//   provider: new ReCaptchaV3Provider('6Lc-t3MrAAAAALF32WoHcmld34LYRgU4eItgP8Ne'),

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true
// });

export const db = getDatabase(firebaseApp);
export const collectionRef = ref(db, 'heshtalmuyot');

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



// Components

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

app.use(VueFire, { firebaseApp });


app.mount("#app");


createApp(App).use(vuetify).mount('#app')


