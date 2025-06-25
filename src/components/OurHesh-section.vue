<template>
  <div>
       <div id="ourHeshtalmuyotFlex">
          <v-card
            class="mx-auto my-8 owd-reveal"
            elevation="16"
            max-width="344"
            color="indigo-lighten-5"
            v-for="(card, i) in heshCards"
              :key="i"
              
          >
          <v-img id="cardImg" :src='heshCards[i].src' cover></v-img>
            <v-card-item>
              
              <v-card-title class="cardTitle">
              השתלמות {{heshCards[i].caption}}
              </v-card-title>

              <v-card-subtitle>
                  {{heshCards[i].subtitle}}            
              </v-card-subtitle>
            </v-card-item>

            <v-card-text class="cardText">
                  {{heshCards[i].text}}            
            </v-card-text>
          </v-card>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        heshCards: [
          {
            src: require('@/assets/images/ranagHesh.png'), caption: ' צה"לית רנ"ג', text: '"הנגדים הם עמוד השדרה של הצבא וצריך להשקיע בעבודה בדור הנוכחי והדור הבא"', subtitle: 'השתלמות מטכ"לית לדרג רב-נגד'
          },
          {
            src: require('@/assets/images/saalHesh.png'), caption: ' צה"לית סא"ל', text: '"יחסי צבא חברה מורכבים ואינם שחור לבן, יש לנהל את המחלוקות בשיח ואפשר להגיע לתובנות מופלאות"', subtitle: 'השתלמות מטכ"לית לדרג סגן אלוף'
          },
          {
            src: require('@/assets/images/sliderFirst4.jpeg'), caption: ' צה"לית אל"ם', text: '"צריך לחדד את הסיפור המשותף שלנו כמפקדים כדי לסמן מטרה ערכית בצורה ברורה יותר"', subtitle: 'השתלמות מטכ"לית לדרג אלוף משנה'
          },

        ]
        }
    }

}
</script>

<style>

#ourHeshtalmuyotFlex{
  position: relative;
  top:5vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  direction: rtl;
}

.cardTitle{
  font-family: 'bibical';
}
.cardText{
    font-family: 'bibical-light';
}
#cardImg{
  position: relative;
}

.owd-reveal {
  animation: owd-reveal linear forwards;
  animation-timeline: view();
  animation-range: entry;
}

@keyframes owd-reveal {
  0% {
    opacity: 0;
    /* clip-path: inset(25%); */
  }
  100% {
    opacity: 1;
    /* clip-path: inset(0%); */
  }
}
</style>