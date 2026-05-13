<template>
    <router-view></router-view>
</template>

<style>

@font-face {
  font-family: 'bibical';
  src: url(../assets/fonts/web/noa-shalev-regular-AlefAlefAlef.woff2) format('woff2'), url('../assets/fonts/web/noa-shalev-regular-AlefAlefAlef.woff') format("woff");
}
@font-face {
  font-family: 'bibical-light';
  font-weight: 300;
  src: url(../assets/fonts/web/noa-shalev-regular-AlefAlefAlef.woff2) format('woff2'), url('../assets/fonts/web/noa-shalev-regular-AlefAlefAlef.woff') format("woff");
}

@media only screen and (min-width: 1200px) {
    #logo {
        width: 10vw;
    }
}

</style>