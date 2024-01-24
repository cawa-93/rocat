<script setup>
import {getScore} from "../gameScore.js";
import {ref} from "vue";

const emit = defineEmits(['start'])
const score = getScore()

const showDonateForm = ref(false)

</script>

<template>
  <section @click="emit('start')">
    <h1>Time ended</h1>
    <h2>Your score</h2>
    <div class="score">
      <img src="../assets/fire.svg" alt="Hits">

      <b>
      {{score}}
      </b>
    </div>

    <form v-if="showDonateForm" method="get" action="https://send.monobank.ua/jar/4Dyucs5PBU" target="_blank">
      <div class="donate-input">
        <img class="rocket" src="../assets/rocket.svg" alt="Rocket">
        <img src="../assets/x.svg" alt="X">
        <input type="number" name="a" value="100">
      </div>
      <button type="submit" class="pulse">Launch</button>
    </form>

    <button class="pulse" type="button" @click="showDonateForm = true" v-else>Launch more</button>

  </section>

</template>

<style scoped>

section {
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100dvh;
  align-items: center;
  font-weight: lighter;
  font-size: 2em;
  padding: 10%;
}

.score {
  font-size: 150%;
  display: flex;
  gap: 1em;
  align-items: center;
}

.donate-input {
  display: flex;
  gap: 0.5em;
  align-items: center;
}

input {
  background: none;
  border: none;
  font-size: inherit;
  display: inline;
  min-width: 0;
}

.donate-input img.rocket {
  rotate: 45deg;
}
</style>
