<template>
<div id="container">
    <div id="info">
        <p id="contactCaption"><strong>תמיד כאן בשבילכם</strong></p>
        <div id="newContactInfo">
            <span class="contact-col contact-col-img">
            <p>
                <a href="mailto:machtzavim@gmail.com">
                <img id="mailIcon" src="@/assets/images/mailIcon.png">
                </a>
            </p>
            <p>
                <a href="https://maps.app.goo.gl/thAw2YpaqrcsPB717">
                <img id="locationIcon" src="@/assets/images/location.png">
                </a>
            </p>
            </span>
            <span class="contact-col contact-col-text">
                <a href="mailto:machtzavim@gmail.com" id=mailText>machtzavim@gmail.com</a>
                <a href="https://maps.app.goo.gl/thAw2YpaqrcsPB717" id="locationText">שלמה זלמן שרגאי 5, ירושלים</a>

            </span>
        </div>
        <img id="bannerLogos" src="@/assets/images/banner.png" alt="logos"/>
    </div>
    <v-footer border id="credits" >   <p id="myCredits">האתר עוצב ונבנה ע"י ליהי ישראלי</p> <p> {{ new Date().getFullYear() }} © כל הזכויות שמורות יחידת מחצבי”ם </p> </v-footer>
</div>
</template>


<style>
#container {
    direction: rtl;
    width: 100%;
    overflow-x: hidden;
}

#info {
    direction: rtl;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* center the two rows vertically */
    background-color: rgb(12 18 53);
    border: 1px solid #1e285e;
}

/* Contact Info */
#contactCaption {
    color: white;
    text-align: center;
    font-size: 4vw; /* mobile-friendly */
    margin-bottom: 4vh;
}

#contactInfo {
    display: flex;
    flex-direction: column; /* keep two rows stacked */
    align-items: center;
    justify-content: center;
    /* gap: 1.5rem; */
}

#contactInfo > div {
    display: flex;
    align-items: center; /* icon & text vertically aligned */
    justify-content: center; /* center horizontally */
    gap: 10px;
    width: 90vw; /* mobile row width */
    margin: 0 auto;
}

#contactInfo p {
    margin: 0;
    padding: 0;
}

#mailIcon,
#locationIcon {
    width: 24vw; /* mobile size */
    height: auto;
    filter: brightness(0) invert(1);
}

#locationIcon{
    width: 17vw;
}

#mailText,
#locationText {
    color: white;
    font-size: 5vw; /* mobile font size */
    text-decoration: none;
}

#locationText{
    font-size: 4.2vw;
}

/* Footer */
#credits {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.3rem;
    padding: 1rem 0;
}

#myCredits {
    font-size: 1rem;
}


#bannerLogos {
    border-radius: 80px;
    width: 18rem;
    align-self: center;
}

/* Desktop Overrides */
@media only screen and (min-width: 1050px) {
    #contactCaption {
        font-size: 1.5vw !important;
        /* align-self: flex-start;
        margin-right: 42px; */
    }

    #bannerLogos{
    width: 30rem;
    align-self: end;
}

    #contactInfo > div {
        width: 45vw; /* desktop row width */
        gap: 1rem;
    }

    #mailIcon {
        width: 6vw;
    }

    #locationIcon {
        width: 4vw;
    }

    #mailText {
        font-size: 1.5vw;
    }

    #locationText {
        font-size: 1.3vw;
    }

    #credits {
        font-size: 1.5vw !important;
    }

    #myCredits {
        font-size: 1.3vw !important;
    }
}

#newContactInfo{
    display: flex;
    flex-direction: row;
    align-self: baseline;
}

.contact-col{
    display: flex;
    flex-direction: column;
}

.contact-col-text{
    gap: 33px;
    margin-top: 13px;
    align-items: flex-start;
}

.contact-col-img{
    align-items: center;
}


</style>
