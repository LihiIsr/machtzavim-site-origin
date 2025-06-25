<template>
  <div id="heshList">
   
    <ul id="heshtalListMain">
    <li v-for="heshtalmot in heshList" :key="heshtalmot.id">
      <p> השתלמות {{ heshtalmot.type }} {{ heshtalmot.date }}</p>
      <p>

      </p>
      <br />
    </li>
    </ul>

  </div>
</template>

<script>
import { getFirestore, collection, 
orderBy, onSnapshot,query} from "firebase/firestore";
import { ref, onUnmounted } from 'vue';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    ///get one yourself with firebase

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default{
    data() {
        return{
            heshList : ref([])
        }
    },
    methods:{
        
    },
    mounted() {
        const latestQuery = query(collection(db, 'heshtalmuyot'), orderBy('timestamp'));
        const liveList = onSnapshot(latestQuery, (snapshot) => {
            this.heshList = snapshot.docs.map((doc) => {
                return{
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
#heshList{
    position: relative;
    /* top: 20vh; */
}
#heshtalListMain{
  text-align: center;
  position: relative;
  list-style: none;
  top: 2vh;
  font-size: 4vw;

}
</style>