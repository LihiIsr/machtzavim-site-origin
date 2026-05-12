<template>
   <div id="articlesContainer">
       <iframe type="text/html" src="https://www.mako.co.il/pzm-soldiers/your-picture/Article-1454ac28cf86731006.htm?partner=tagit" 
          :width="isMobile ? '300' : '500'" :height="isMobile ? '300' : '500'"></iframe>

      <p id="articlesText">
        מוזמנים לגלול בכתבות המצורפות
      </p>
      <iframe type="text/html" src="https://www.idf.il/%D7%9B%D7%AA%D7%91%D7%95%D7%AA-%D7%95%D7%A2%D7%93%D7%9B%D7%95%D7%A0%D7%99%D7%9D/2026/%D7%94%D7%A2%D7%A8%D7%91-%D7%AA%D7%A9%D7%91%D7%95-%D7%9C%D7%A9%D7%95%D7%9C%D7%97%D7%9F-%D7%94%D7%A1%D7%93%D7%A8-%D7%91%D7%A2%D7%99%D7%A6%D7%95%D7%9E%D7%95-%D7%A9%D7%9C-%D7%94%D7%9E%D7%91%D7%A6%D7%A2-%D7%96%D7%9B%D7%A8%D7%95-%D7%9B%D7%99-%D7%9B%D7%95%D7%97%D7%95%D7%AA-%D7%A6%D7%94-%D7%9C-%D7%A2%D7%A8%D7%95%D7%9B%D7%99%D7%9D-%D7%9C%D7%94%D7%92%D7%9F-%D7%A2%D7%9C%D7%99%D7%9B%D7%9D/" 
            :width="isMobile ? '300' : '500'" :height="isMobile ? '300' : '500'"></iframe>

    </div>
</template>

<script>
export default {
    props: {
    isMobile: Boolean
  }
}
</script>

<style>
#articlesContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
  gap: 10px;
}

#articlesText{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(61, 61, 143);
    padding: 0.5rem;
    color: #d5dcff;
    border-radius: 25px;
}
</style>