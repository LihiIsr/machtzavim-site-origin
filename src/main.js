import { createApp } from 'vue'
import App from './App.vue'

//firebase
import { VueFire } from "vuefire";
import { initializeApp } from "firebase/app";

import { getDatabase, ref} from "firebase/database";

import { rtdbPlugin } from 'vuefire';


// createApp(App).mount('#app')

export const firebaseApp = initializeApp({
  ///get one yourself with firebase
});

// export const postListRef = ref(db, 'heshtalmuyot');
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

// const app = initializeApp(firebaseConfig);
const app = createApp(App);

app.use(VueFire,rtdbPlugin, { firebaseApp });



app.mount("#app");


createApp(App).use(vuetify).mount('#app')
