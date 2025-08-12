<template>
  <div id="heshInput">
    <div class="adminInput" v-if="!isTrue">
      <label> סיסמא: </label>
      <input id="myInput" @input="isIncorrect = false" class="inputBox" :class="{darkBorder:isDarkMode}" type="password" ref="newPassword" placeholder='  הכנס סיסמא' />
      <br>
      <span id="visibility">
      <input id="visibilityBtn" type="checkbox" @click="passwordVisibility">הצג סיסמא
      </span>
      <br>

      <button id="submitBtn" class="btns" :class="{darkBtns:isDarkMode}"  @click="checkPassword">  submit </button>
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


const yourCollectionRef = collection(db, 'login');

const q = query(yourCollectionRef, orderBy("__name__"), limit(1)); // orderBy('__name__') sorts by document ID

var correctPassword;

getDocs(q)
  .then((querySnapshot) => {
    if (!querySnapshot.empty) {
      const firstDoc = querySnapshot.docs[0]; // Get the first document snapshot
      const fieldName = "password"; // Replace with the actual field name you want to retrieve
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
             this.$refs.newPassword.value = "";
            }
            else{
            this.isIncorrect = true;
             this.$refs.newPassword.value = "";

            }
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
#heshInput{
    position: relative;
    top: 5vh;
}
#heshtalList{
  text-align: center;
  position: relative;
  top: 25vh;
  list-style: none;
    font-size: 3.5vw;

}
.inputBox{
    direction: rtl;
    /* border: 1px solid black; */
    outline: 1px dashed black;
    width: 60vw;
    text-align: center;
}

.btns{ 
    border: 1px solid black
}
.adminInput{
    position: absolute;
    left: 4vw;
    font-size: 4vw;
    height: 10vh;
    width: max-content;
}
#personalInfo{
    direction: rtl;
    position: relative;
    top: 28vh;
}

#submitBtn{
    position: absolute;
    top:10vh;
}

#visibility{
    position: absolute;
    top: 5vh;
}

#visibilityBtn{
    width: 10vw;
    height: 2.5vh;
}

#incorrect{
    position: absolute;
    top: 3vh;
    left: 42vw;
}

.darkBorder{
    outline: 1px dashed white;
    color: white;
}

.darkBtns{
    border: 1px solid white;
}

</style>