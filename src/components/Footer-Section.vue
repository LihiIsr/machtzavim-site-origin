<template>
<div id="container">
    <div id="info">
        <p id="contactCaption"><strong>צרו איתנו קשר!</strong></p>
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
    <v-footer border id="credits" >   <p id="myCredits">האתר עוצב ונבנה ע"י ליהי ישראלי</p> <p> {{ new Date().getFullYear() }} © כל הזכויות שמורות יחידת מחצבי”ם </p> </v-footer>
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
    gap: 5px;
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
#contactCaption{
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
    width: fit-content;
    height: 30vh ;
}
#contactInfo > div {
  margin: 5px;
     width: 90vw;
    display: flex;

}
.flexRow{
    align-content: flex-start;
}
#mail{
    width: 20vw;
}
#location{
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
     text-decoration:none;
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
    text-decoration:none;
}

@media only screen and (min-width: 1050px) {
    #contactInfo{
        left: 50%;
        transform: translate(-50%, 0);
        top: 16vh;
        gap: 10px;
    }
    #locationIcon{
        width: 6vw;
        margin-right: 20px;
    }
    #mailIcon{
        width: 8vw;
        margin-right: 1vw;

    }
    #mailText {
        font-size: 2vw;
    }
    #locationText{
        font-size: 1.8vw;
        margin-right: 13px;
    }
    #contactInfo > div{
        width: 45vw;
    }
    #contactCaption{
        font-size: 1.5vw !important;
    }
     #credits{
      font-size: 1.5vw !important;
    }
    #mycredits{
      font-size: 1vw !important;
    }



}

</style>
