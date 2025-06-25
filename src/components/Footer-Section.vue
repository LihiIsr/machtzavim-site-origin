<template>
<div id="container">
    <div id="info">
        <p id="contact"><strong>צרו איתנו קשר!</strong></p>
        <div id="contactInfo">
            <div id="mail" class="flexRow">
            <p><a href="mailto:machtzavim@gmail.com">
            <img id="mailIcon" src="@/assets/images/mailIcon.png">
            </a></p>
            <a href="mailto:machtzavim@gmail.com" id=mailText>machtzavim@gmail.com</a>
            </div>
            <div id="location" class="flexRow">
            <p><a href="https://maps.app.goo.gl/thAw2YpaqrcsPB717">
            <img id="locationIcon" src="@/assets/images/location2.png">
            </a></p>
            <a href="https://maps.app.goo.gl/thAw2YpaqrcsPB717" id="locationText">שלמה זלמן שרגאי 5, ירושלים</a>
            </div>
        </div>
    </div>
    <v-footer border id="credits"> Copyright ©  {{ new Date().getFullYear() }}   —  Lihi Israeli, Machtzavim  <br> <p>All rights reserved</p> </v-footer>
</div>
</template>


<style>
#container{
    direction: rtl;
    width: 100vh;
    height: 30vh;
}
#credits{
    display: flex;
    position: sticky;
    width: 100%;
    justify-content: center;
    flex-direction: column;
}
#info{
    direction: rtl;
    height: 50vh;
    width: 100vw;
    /* background-color: rgb(73, 101, 77); */
    background-color: rgb(12 18 53);
    /* border:1px solid rgba(29, 49, 26, 0.829); */
    border: 1px solid #1e285e;

}
#contact{
    color: rgb(255, 255, 255);
    position: absolute;
    top: 7vh;
    right: 2vw;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    font-size: 4vw;

}
#contactInfo{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 14vh;
    width: 80vw;
    height: 30vh ;
    /* justify-content:space-around ;     */
}
#contactInfo > div {
  margin: 5px;
  /* padding: 5px; */
     width: 90vw;
    display: flex;

}
.flexRow{
    align-content: flex-start;
    /* justify-content:flex-start ; */
    /* justify-content: space-evenly; */
}
#mail{
    /* display: flex; */
    width: 20vw;
}
#location{
    /* display: flex; */
    width: 20vw;
}
#locationIcon{
    width: 16vw;
    height: 9vh;
    margin-right: 15px;
    filter: brightness(0) invert(1);

}

#mailText{
    color: rgb(255, 255, 255);
    position: relative;
    top: 2vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 5vw;

    /* transform: translate(-50%); */
}
#mailIcon{
    width: 24vw;
    height: 8vh;
    filter: brightness(0) invert(1);
}
#locationText{
    position: relative;
    top: 2vh;
    color: rgb(255, 255, 255);
    margin-right: 16px;
    text-align: center;
    font-size: 4vw;

}
</style>
