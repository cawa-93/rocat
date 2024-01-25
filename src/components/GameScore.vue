<script setup>
import {computed, ref} from "vue";

import {MAX_HITS} from "../config.js";

const emit = defineEmits(['start'])
const props = defineProps(['score'])

const showDonateForm = ref(false)
const donate = ref(100)

const progress = computed(() => Math.round((props.score / MAX_HITS) * 100))
</script>

<template>
  <section @click="emit('start')">
    <h1>Time ended</h1>

    <div class="score-section">
      <h2>Your score</h2>

      <div class="score">
        <img src="../assets/fire.svg" alt="Hits">
        <img src="../assets/x.svg" alt="X">

        <b>
          {{ score }}
        </b>
      </div>

      <div class="progress" :style="{'--progress': progress + '%'}">
        <div></div>
      </div>

      <small>Destroyed {{ progress }}% targets</small>
    </div>

    <div class="donate-section">
      <small v-if="showDonateForm">How many to launch?</small>
      <div v-if="showDonateForm" class="donate-input">
        <img class="rocket" src="../assets/rocket.svg" alt="Rocket">
        <img src="../assets/x.svg" alt="X">
        <div class="input-wrapper">
          <input type="number" name="a" v-model="donate">
        </div>
      </div>
      <a v-if="showDonateForm" target="_blank" :href="'https://send.monobank.ua/jar/4Dyucs5PBU?a=' + donate"
         class="pulse">Launch</a>
      <button v-if="!showDonateForm" class="open-donate" type="button" @click="showDonateForm = true">
        Launch more
      </button>
    </div>


  </section>

</template>

<style scoped>

h1 {
  font-size: 200%;
  font-weight: lighter;
  margin: 0;
  opacity: 0;
  animation: fadeIn 300ms 0.5s;
  animation-fill-mode: forwards;
}

small {
  font-size: 60%;
  opacity: 0.7;
}


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
  padding: 20px 10%;
}

.score-section {
  display: grid;
  gap: 0.5em;
}

h2 {
  font-size: 150%;
  font-weight: lighter;
  margin: 0;
  opacity: 0;
  animation: fadeIn 300ms 1s;
  animation-fill-mode: forwards;
}


.score {
  font-size: 150%;
  display: flex;
  gap: 0.5em;
  align-items: center;
  opacity: 0;
  animation: fadeIn 300ms 1.5s;
  animation-fill-mode: forwards;
}


.progress {
  height: 18px;
  border: 2px solid #dc603a;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 50px;
  opacity: 0;
  animation: fadeIn 300ms 1.8s;
  animation-fill-mode: forwards;
}

.progress > div {
  display: block;
  width: 0;
  background-color: #f5c041;
  background-clip: content-box;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  animation: expandWidth ease-in-out 3s 2s;
  animation-fill-mode: forwards;

}

.progress > div:before,
.progress > div:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 32px;
  aspect-ratio: 1;
  background-size: contain;
  translate: 50% calc(100% + 10px);
}

@keyframes expandWidth {
  to {
    width: var(--progress);
  }
}

.progress > div:before {
  background-color: #f5c041;
  border-radius: 50% 50% 50% 0;
  rotate: 135deg;
}


.progress > div:after {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/fire.svg");
  width: 16px;
}

.score-section small {
  opacity: 0;
  animation: fadeIn 300ms 5s;
  animation-fill-mode: forwards;
}

.donate-section {
  display: grid;
  gap: 0.5em;
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
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.donate-input img.rocket {
  rotate: -135deg;
}

button {
  background: none;
}

.input-wrapper {
  width: 100px;
}

a {
  color: inherit;
  text-decoration: inherit;
}

.open-donate {
  scale: 0;
  animation: zoomIn 300ms 6s, pulse 2s 6s infinite;
  animation-fill-mode: forwards;
}


@keyframes zoomIn {
  from {
    scale: 0;
  }

  to {
    scale: 1;
  }
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>
