<template>
    <!-- Quotes -->
    <div id="flexQouteContainer">
      <div class="qouteDiv" style="align-self: flex-end;">
        <p class="qouteText">
          חשיבה מעמיקה, מאפשרת לך למידה רחבה, בעיקר של עצמך
        </p>
      </div>

      <p class="qouteCaption">ערכי היסוד שלנו</p>

      <div class="qouteDiv">
        <p class="qouteText">
          החובה לפעול ליצירת שיח ערכי בצבא ובפרט בעת מלחמה
        </p>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

#flexQouteContainer {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}
.qouteDiv {
  direction: rtl;
  background-color: rgb(61, 61, 143);
  width: 70vw;
  height: 20vh;
  border-radius: 25px;
  margin: 5px;
  color: #d5dcff;
}


.qouteText {
  font-family: 'bibical';
  position: relative;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4.5vw;
}

.qouteCaption {
  text-align: center;
  border-top: 2px solid #1e2755;
  border-bottom: 2px solid #1e2755;
  width: fit-content;
  margin: 0 auto;
}

@media only screen and (min-width: 1050px) {

    .qouteText{
      font-size: 2.5vw !important;
    }
    .qouteDiv {
      height: 35vh;
      margin: 54px;
      width: 50vw;
    }
    .qouteCaption{
      font-size: 3vw !important;

    }

    #flexQouteContainer{
    margin-top: 26px !important;
    width: 92vw;
    left: 50%;
    transform: translate(-50%, 0);
    }

}
</style>