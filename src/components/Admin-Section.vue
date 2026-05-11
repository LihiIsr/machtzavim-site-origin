<template>
  <div id="adminSection">
    <div class="adminInput" v-if="!isTrue">
      <label> סיסמא: </label>
      <input id="myInput" @input="isIncorrect = false" class="inputBox" :class="{darkBorder:isDarkMode}" type="password" ref="newPassword" placeholder='  הכנס סיסמא' />
      <br>
      <span id="visibility">
      <input id="visibilityBtn" type="checkbox" @click="passwordVisibility">הצג סיסמא
      </span>
      <br>

      <button id="submitBtn" class="btns" :class="{darkBtns:isDarkMode}"  @click="checkPassword">  התחבר </button>
      <p id="incorrect" v-if="isIncorrect" >סיסמא לא נכונה, נסה שוב</p>


  </div>

    <div v-else>
        <div  class="adminInput">
        <label>סוג השתלמות:</label>
        <input class="inputBox" :class="{darkBorder:isDarkMode}" type="text" ref="heshType"  placeholder='כתוב את סוג ההשתלמות'/>
        <br>
        (למשל- צה"לית סא"ל)
        <br>
        <br>
        <label>תאריך:</label>
        <input class="inputBox" :class="{darkBorder:isDarkMode}" type="text" ref="heshDate" placeholder='תאריך התחלת ההשתלמות'/>
        <br>
        <br>
        <button class="btns"  :class="{darkBtns:isDarkMode}" @click="addNewHesh">הוסף לרשימה</button>
        </div>

        <ul id="heshtalList">
        <li v-for="heshtalmot in heshList" :key="heshtalmot.id">
        <p> השתלמות {{ heshtalmot.type }} {{ heshtalmot.date }}</p>
        <p>
            <button class="btns"  :class="{darkBtns:isDarkMode}" @click="deleteHesh(heshtalmot.id)"> מחק השתלמות</button>

        </p>
        <br />
        </li>
        </ul>
         <v-card
            class="mx-auto"
            elevation="16"
            max-width="344"
            color="indigo-lighten-5"
              id="personalInfo"
          >
            <v-card-item >
              
              <v-card-title>
                ליהי ישראלי, מפתחת לומדה
              </v-card-title>

              <v-card-subtitle>
                לתקלות טכניות באתר, מוזמנים לפנות אליי 
              </v-card-subtitle>
            </v-card-item>

            <v-card-text >
                ווצאפ בלבד- 0502119663
            </v-card-text>
          </v-card>
    </div>

  </div>
</template>


<script>
import { getFirestore, collection, addDoc,doc, deleteDoc, 
orderBy, onSnapshot,query, updateDoc, serverTimestamp, limit, getDocs } from "firebase/firestore";
import { ref, onUnmounted } from 'vue';
import { initializeApp } from "firebase/app";




const firebaseConfig = {
    apiKey: "AIzaSyC5Pq4U0Ezfux5HPiUwPV0mDYq31VFV3kA",
  authDomain: "machtzavim-site.firebaseapp.com",
  projectId: "machtzavim-site",
  storageBucket: "machtzavim-site.firebasestorage.app",
  messagingSenderId: "33940484489",
  appId: "1:33940484489:web:170c099bff51e1c6f87158"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


/// a way to retrieve the password without it showing here, by getting it from db
const yourCollectionRef = collection(db, 'login');

const q = query(yourCollectionRef, orderBy("__name__"), limit(1)); // orderBy('__name__') sorts by document ID

var correctPassword;

getDocs(q)
  .then((querySnapshot) => {
    if (!querySnapshot.empty) {
      const firstDoc = querySnapshot.docs[0]; // Get the first document snapshot
      const fieldName = "password"; 
      const correct = firstDoc.get(fieldName); // Using doc.get()
      correctPassword = correct;
    }
  });
 


export default{
    data() {
        return{
            heshList : ref([]),
            isTrue: false,
            isIncorrect: false
        }
    },
    props:{
        isDarkMode:Boolean
    },
    methods:{
        passwordVisibility: function(){
             var x = document.getElementById("myInput");
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
        },
        checkPassword: function (){
            if ( this.$refs.newPassword.value == correctPassword ) {
            this.isTrue = true;
            // set the form input back to initial state
            }
            else{
            this.isIncorrect = true;
            }
             this.$refs.newPassword.value = "";

        },
        addNewHesh: async function(){
            const docRef = await
            addDoc(collection(db, 'heshtalmuyot'), {
                type: this.$refs.heshType.value,
                date: this.$refs.heshDate.value,
                timestamp: 0
            }
            );

            await updateDoc(docRef, {
            timestamp: serverTimestamp()});

            this.$refs.heshType.value = '',
            this.$refs.heshDate.value= ''
        },

        deleteHesh: async function(heshId){
            console.log(heshId);
           await deleteDoc(doc(collection(db, "heshtalmuyot"), heshId));
        }
    },
    mounted() {
        const latestQuery = query(collection(db, 'heshtalmuyot'), orderBy('timestamp'));
        const liveList = onSnapshot(latestQuery, (snapshot) => {
            this.heshList = snapshot.docs.map((doc) => {
                return{
                    id: doc.id,
                    type: doc.data().type,
                    date: doc.data().date,
                    timestamp: doc.data().timestamp
                }
            });
        });
        onUnmounted(liveList)
    }
}
</script>

<style>
#adminSection {
  position: relative;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  min-height: 60vh;
}

/* each form section */
.adminInput {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  direction: ltr;
  text-align: right;
  gap: 0.8rem;
  font-size: 4vw; /* mobile size */
  width: 80vw;
  max-width: 400px;
}

/* input styling */
.inputBox {
  direction: rtl;
  outline: 1px dashed black;
  width: 100%;
  text-align: center;
  font-size: 4vw;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
}

/* button */
.btns {
  border: 1px solid black;
  font-size: 4vw;
  padding: 0.5rem 1rem;
  cursor: pointer;
  align-self: auto;
}

/* error / visibility text aligned normally */
#visibility {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 3.5vw;
}

#visibilityBtn {
  width: 1.2em;
  height: 1.2em;
}

#incorrect {
  color: red;
  font-size: 3.5vw;
  text-align: center;
  margin-top: 0.5rem;
}

/* list styling */
#heshtalList {
  list-style: none;
  text-align: center;
  font-size: 3.5vw;
  padding: 0;
  margin-top: 2rem;
  width: 100%;
}

/* personal info card */
#personalInfo {
  direction: rtl;
  width: 80vw;
  max-width: 400px;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
}

/* dark mode overrides */
.darkBorder {
  outline: 1px dashed white;
  color: white;
}

.darkBtns {
  border: 1px solid white;
}

/* ---------- Desktop ---------- */
@media (min-width: 768px) {
  #adminSection {
    gap: 2rem;
  }

  .adminInput {
    font-size: 1rem;
    width: 350px;
  }

  .inputBox {
    font-size: 1rem;
  }

  .btns {
    font-size: 1rem;
  }

  #visibility {
    font-size: 0.9rem;
  }

  #incorrect {
    font-size: 0.9rem;
  }

  #heshtalList {
    font-size: 1rem;
  }
}


</style>