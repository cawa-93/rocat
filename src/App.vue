<script setup>
import LaunchZone from "./components/LaunchZone.vue";
import {ref} from "vue";
import StartScreen from "./components/StartScreen.vue";
import GameScore from "./components/GameScore.vue";

/**
 *
 * @type {Ref<'START-SCREEN'|'IN-GAME'|'GAME-END'>}
 */
const STATE = ref(import.meta.env.PROD ? 'START-SCREEN' : 'GAME-END')

const currentScore = ref(0)
function onGameEnd(score) {
  currentScore.value = score
  STATE.value = 'GAME-END'
}
</script>

<template>
<div>
  <LaunchZone v-if="STATE === 'IN-GAME'" @end="onGameEnd"/>
  <GameScore :score="700" v-else-if="STATE === 'GAME-END'"/>
  <StartScreen @start="STATE = 'IN-GAME'" v-else/>
</div>
</template>
