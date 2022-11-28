<template>
    <div id="using-v-text-directive">
      <h1>Using a v-text Directive</h1>
  
      <h3 v-text="favoriteBand"></h3>
      <h3>{{ favoriteBand }}</h3>
  
      <div v-text="favoriteBand"></div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  let favoriteBand = ref(
    "Una de mis bandas preferidas en el mundo se llama, The Doors."
  );
  </script>
  
  <style scoped></style>