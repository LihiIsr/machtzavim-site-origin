<template>
  <div class="flexMainContainer">

    <!-- intro -->
    <div>
      <intro-animation @intro-done="handleIntroDone"></intro-animation>

      <p id="ourVisionText">
        יחידת מחצבי”ם הינה בית מדרש לפיקוד הבכיר בצה”ל.
        היחידה מקיימת השתלמויות מטכ”ליות ואורגניות מדרג הסא”ל ומעלה.
        הפלטפורמה ביחידה מזמינה ומאפשרת עצירה לטובת פיתוח ערכי והתנהגותי,
        מפתחת חשיבת עומק ומעודדדת למידה תוך כדי התפקיד.
      </p>
    
    </div>

    <img-slider></img-slider>

    <qoutes-section></qoutes-section>

    <!-- Hesh list -->
    <div>
      <p class="caption heshListCaption" id="upcomingCaption">
        רשימת השתלמויות לשנה הנוכחית:
      </p>
      <img
        class="underline"
        id="underlineUpcoming"
        src="@/assets/images/blueUnderline.png"
      />
    </div>

    <heshtalmotList />
  </div>

</template>

<script>
import heshtalmotList from "../UI/heshtalmotList.vue";
import qoutesSection from '../UI/qoutesSection.vue';
import imgSlider from '../UI/imgSlider.vue';
import introAnimation from '../UI/introAnimation.vue'

export default {
  components: {
    heshtalmotList,
    qoutesSection,
    imgSlider,
    introAnimation
  },

  methods:{
    handleIntroDone(){
        this.$emit("intro-done");
    }
  }

};
</script>

<style>

.flexMainContainer {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;

}


.heshListCaption{
  direction: rtl;
  font-size: 6vw;
}

#upcomingCaption{
  position: relative;
  top: 3vh;
}

#underlineUpcoming{
  position: relative;
  width: 82vw;
    height: 2vh;
    left: 8vw;
    top: 2.5vh;
}

#ourVisionText{
  font-size: 3.8vw;
  position: relative;
  text-align: center;
  top: 3vh;
  padding: 7px;
  direction: rtl;
}

@media only screen and (min-width: 1050px) {

    #ourVisionText{
      font-size: 2vw !important;
      margin-left: 64px;
      margin-right: 64px;
    }

    .heshListCaption{
      font-size: 3vw !important;
    }

    #flexMainContainer{
      gap: 70px !important;
    }


}

</style>