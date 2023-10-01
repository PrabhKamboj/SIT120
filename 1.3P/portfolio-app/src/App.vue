<template>
  <div id="app">
    <navbar></navbar>
    <main-content></main-content>
    <footer-content></footer-content>
    
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainContent from "./components/MainContent.vue";
import FooterContent from "./components/FooterContent.vue";

export default {
  components: {
    navbar: NavBar,
    "main-content": MainContent,
    "footer-content": FooterContent,
  },
};


</script>

<style>
/* Your global CSS styles here */
</style>
