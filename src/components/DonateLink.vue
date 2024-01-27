<script setup>
import {LINK_TO_DONATE} from "../config.js";

defineProps(['value'])
</script>

<template>
  <a :href="LINK_TO_DONATE + '?t=🚀RoCat&a=' + value" target="_blank" rel="noopener noreferrer">
    <img class="rocket" src="../assets/rocket.svg" alt="Rocket">
    <img src="../assets/x.svg" alt="X">
    {{value}}
  </a>
</template>

<style scoped>
  a {
    padding: 2px 12px 2px 8px;
    justify-content: center;
    border-radius: 100px;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 0.2em;
  }
  a:not(:hover, :focus-visible) {
    border: 1px solid #e2c1b0;
  }

  img {
    width: 0.9em;
    aspect-ratio: 1;
  }

  .rocket {
    rotate: -135deg;
    width: 1.5em;
  }
</style>
