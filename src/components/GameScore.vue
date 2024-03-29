<script setup>
import {computed, ref} from "vue";

import {LINK_TO_DONATE, MAX_HITS} from "../config.js";
import DonateLink from "./DonateLink.vue";
import {useI18n} from "vue-i18n";
import ScoreProgressbar from "./ScoreProgressbar.vue";

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})

const emit = defineEmits(['start'])
const props = defineProps(['score'])

const showDonateForm = ref(false)
const donate = ref('100')

</script>

<template>
  <section @click="emit('start')">
    <h1>{{t('end-time')}}</h1>

    <div class="score-section">
      <h2>{{t('score.title')}}</h2>

      <div class="score">
        <img src="../assets/fire.svg" alt="Hits">
        <img src="../assets/x.svg" alt="X">

        <b>
          {{ score }}
        </b>
      </div>

      <ScoreProgressbar :score="score"/>
    </div>

    <div class="donate-section">
      <small v-if="showDonateForm">{{t('donate.title')}}</small>
      <div class="fast-donate" v-if="showDonateForm">
        <DonateLink v-for="v of [50, 100, 200]" :key="v" :value="v" />
      </div>
      <div v-if="showDonateForm" class="donate-input">
        <img class="rocket" src="../assets/rocket.svg" alt="Rocket">
        <img src="../assets/x.svg" alt="X">
        <div class="input-wrapper">
          <input type="number" name="a" v-model="donate" placeholder="100">
        </div>
      </div>
      <a v-if="showDonateForm"
         target="_blank"
         :href="LINK_TO_DONATE + '?t=🚀RoCat&a=' + donate"
         rel="noopener noreferrer"
         class="pulse"
      >
        {{t('donate.send')}}
      </a>
      <button v-if="!showDonateForm" class="open-donate" type="button" @click="showDonateForm = true">
        {{t('donate.open')}}
      </button>
    </div>


  </section>
</template>

<i18n>
{
  "en": {
    "end-time": "Time ended",
    "score": {
      "title": "Your score"
    },
    "donate": {
      "title": "How many to launch?",
      "open": "Launch more",
      "send": "Launch!"
    }
  },
  "uk": {
    "end-time": "Час вийшов",
    "score": {
      "title": "Твій рахунок"
    },
    "donate": {
      "title": "Скільки запустити?",
      "open": "Запустити ще",
      "send": "Запуск!"
    }
  },
  "pl": {
    "end-time": "Czas minął",
    "score": {
      "title": "Twój wynik"
    },
    "donate": {
      "title": "Ile chcesz wystrzelić?",
      "open": "Wystrzel więcej",
      "send": "Wystrzel!"
    }
  }
}
</i18n>

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
  padding: 20px 5%;
  overflow: hidden;
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
  justify-content: center;
}

.donate-section {
  display: grid;
  gap: 0.5em;
}

.fast-donate {
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  justify-content: center;
}

.donate-input {
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
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
  animation: zoomIn 300ms 4.5s, pulse 2s 4.5s infinite;
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


</style>
