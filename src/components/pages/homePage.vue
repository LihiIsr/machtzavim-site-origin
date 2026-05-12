<template>
  <div id="flexMainContainer">

    <!-- intro -->
    <div>
      <intro-animation :is-first-load="isFirstLoad" @intro-done="handleIntroDone"></intro-animation>

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

  props: {
    isFirstLoad: Boolean,
    isDark: Boolean,
  },
  methods:{
    handleIntroDone(){
        this.$emit("intro-done");
    }
  }

};
</script>

<style>

#flexMainContainer {
  position: relative;
  margin-top: 18vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

</style>