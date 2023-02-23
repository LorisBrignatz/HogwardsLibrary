<script setup>
import LibrairieHeader from "./components/LibrairieHeader.vue";
import LibrairieList from "./components/LibrairieList.vue";
</script>

<template>
  <LibrairieHeader />
  <LibrairieList />
</template>

<style>

h3 {
  font-family: 'magic-school', sans-serif;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-top: 0;
  color: rgba(255, 255, 255, 0.98);
  text-shadow: 0 0 2px #000;
}

body {
  background: url('/public/raw.jfif') no-repeat center center fixed;
  background-size: cover;
}

@font-face {
  font-family: 'harry-potter';
  src: url('public/HARRYP.ttf') format('truetype');
}

@font-face {
  font-family: 'magic-school';
  src: url('/public/MagicSchoolOne.ttf') format('truetype');
}

@font-face {
  font-family: 'great-vibes';
  src: url('/public/GreatVibes-Regular.ttf') format('truetype');
}

</style>

