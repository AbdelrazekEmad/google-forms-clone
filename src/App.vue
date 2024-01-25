<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style>
* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Google Sans';
  src: url('./assets/fonts/google-sans/ProductSans-Black.woff2') format('woff2'),
    url('./assets/fonts/google-sans/ProductSans-Black.woff') format('woff'),
    url('./assets/fonts/google-sans/ProductSans-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Google Sans';
  src: url('./assets/fonts/google-sans/ProductSans-Bold.woff2') format('woff2'),
    url('./assets/fonts/google-sans/ProductSans-Bold.woff') format('woff'),
    url('./assets/fonts/google-sans/ProductSans-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Google Sans';
  src: url('./assets/fonts/google-sans/ProductSans-Light.woff2') format('woff2'),
    url('./assets/fonts/google-sans/ProductSans-Light.woff') format('woff'),
    url('./assets/fonts/google-sans/ProductSans-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Google Sans';
  src: url('./assets/fonts/google-sans/ProductSans-Medium.woff2') format('woff2'),
    url('./assets/fonts/google-sans/ProductSans-Medium.woff') format('woff'),
    url('./assets/fonts/google-sans/ProductSans-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Google Sans';
  src: url('./assets/fonts/google-sans/ProductSans-Regular.woff2') format('woff2'),
    url('./assets/fonts/google-sans/ProductSans-Regular.woff') format('woff'),
    url('./assets/fonts/google-sans/ProductSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


body {
  font-family: 'Google Sans', sans-serif;
}
</style>
