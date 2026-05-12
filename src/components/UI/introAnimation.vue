<template>
<div>
  <p
        id="typeAnimation"
        :class="isFirstLoad ? 'typingAnim' : 'typingAnim hideTypingLine'"
      >
        נעים להכיר, יחידת
      </p>

      <div
        id="captionDivided"
        :class="isFirstLoad ? 'hideCaptionDivided' : 'showCaptionDivided'"
      >
        <p class="bigLetter" 
        :class="{bigLetterDark: isDark, bigLetterHide: isFirstLoad}">מ</p>
        <p id="smallLetter1" :class="smallClass">נהיגות</p>

        <p class="bigLetter"  :class="{bigLetterDark: isDark, bigLetterHide: isFirstLoad}">ח</p>
        <p id="smallLetter2" :class="smallClass">ינוכית</p>

        <p class="bigLetter"  :class="{bigLetterDark: isDark, bigLetterHide: isFirstLoad}">צ</p>
        <p id="smallLetter3" :class="smallClass">ה"לית</p>

        <p class="bigLetter" :class="{bigLetterDark: isDark, bigLetterHide: isFirstLoad}">ב</p>
        <p id="smallLetter4" :class="smallClassEnd">ירושל</p>

        <p class="bigLetter" :class="{bigLetterDark: isDark, bigLetterHide: isFirstLoad}">י ם</p>
      </div>

</div>
</template>

<script>
export default {
    props: {
    isFirstLoad: Boolean,
  },
    computed: {
    smallClass() {
      return this.isFirstLoad
        ? "smallLetter"
        : "smallLetter smallLetterShow";
    },

    smallClassEnd() {
      return this.isFirstLoad
        ? "smallLetter endSmallLetter"
        : "smallLetter endSmallLetter smallLetterShow";
    },
  },
    mounted() {
    if (this.isFirstLoad) {
    this.runAnimation();
    // tell parent we already played it
    this.$emit("intro-done");
  }
  },
   methods: {
    runAnimation() {
      // wait for DOM to fully settle
      this.$nextTick(() => {
        const type = document.getElementById("typeAnimation");
        const caption = document.getElementById("captionDivided");

        if (!type || !caption) return;

        type.classList.add("anim-typewriter");

        setTimeout(() => {
          caption.classList.add("appearAnimation");

          document.querySelectorAll(".bigLetter")
        .forEach(el => el.classList.add("appearAnimation"));
        }, 5000);

        setTimeout(() => {
          document
            .getElementById("smallLetter1")
            ?.classList.add("appearAnimation");
        }, 7000);

        setTimeout(() => {
          document
            .getElementById("smallLetter2")
            ?.classList.add("appearAnimation");
        }, 8000);

        setTimeout(() => {
          document
            .getElementById("smallLetter3")
            ?.classList.add("appearAnimation");
        }, 9000);

        setTimeout(() => {
          document
            .getElementById("smallLetter4")
            ?.classList.add("appearAnimation");
        }, 10000);
      });
    },
  },

}
</script>

<style>

.typingAnim{
  direction: rtl;
    position: relative;
    width: 9em;
    margin: 0 auto;
    border-left: 2px solid rgba(255,255,255,.75);
    font-size: 5vw;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
}

.hideTypingLine{
  border-left: 0px solid rgba(255,255,255,.75);
}

/* typewriter effect */

.typewriter{
  position: absolute;
  display: flex;
  justify-content: center;

}
.typewriter h1 {
  direction: rtl;
  color: #000000;
  font-size: 4vw;
  font-family: 'galil';
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-left: .15em solid rgb(20, 20, 95); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .12em; /* Adjust as needed */
}

.appearAnimation{
  animation: appear 2s forwards;
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(20, 20, 95) }
}

@keyframes appear {
  from { opacity: 0 }
  to { opacity: 100% }
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
            blink-caret 1s step-end infinite;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 9em;}
}

.smallLetterShow{
    opacity: 1;
}

#captionDivided{
  top: 0vh;
  display: flex;
  direction: rtl;
  gap: 10px;
  justify-content: center;
  justify-items: flex-start;
  position: relative;
  font-family: 'galil';
  text-align: center;
  font-weight: bold;
  font-size: 6.5vw;
}

.hideCaptionDivided{
  opacity: 0;
}

.showCaptionDivided{
  opacity: 1;
}

.bigLetter{
  font-size: 7vw;
  color: #0a0a5f;
}

.bigLetterHide{opacity: 0;}

.bigLetterDark{color: #609db9;}

.smallLetter{
  position: relative;
  font-size: 5vw;
  justify-self:baseline;
  margin-left: 2px;
  margin-right: -6px;
  align-self: center;
  opacity: 0;
  font-weight: 400;
}
.smallLetterShow{opacity: 1;}

.endSmallLetter{margin-left: -6px;}

</style>