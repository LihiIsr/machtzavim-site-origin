<template>
   <div id="subPageTitle">
        <p class="caption"> 
            <slot></slot>
        </p>
        <img class="underline" id="underlineCaption" src="@/assets/images/blueUnderline.png"/>
    </div>
</template>

<style>
#subPageTitle{
  position: relative;
  margin-bottom: 4vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
#underlineCaption{
 width: 73vw;
    height: 2vh;
    left: 13vw;
    top: 4.5vh;
}
.caption{
  text-align: center;
  font-size: 8vw;
}
.underline{
  position: absolute;
  filter: blur(2px);
  filter: brightness(70%);
  filter: grayscale(40%);
}

@media only screen and (min-width: 1050px) {

  #underlineCaption {
    width: 55vw;
    height: 3vh;
    left: 22vw;
    top: 7.5vh;
  }
  .caption{
    font-size: 4vw;
  }
}

@media only screen and (min-width: 1200px) {

  #underlineCaption {
        top: 10.5vh;
    }
}
</style>