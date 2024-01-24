<script setup>
import LaunchZone from "./components/LaunchZone.vue";
import {ref} from "vue";
import StartScreen from "./components/StartScreen.vue";

/**
 *
 * @type {Ref<'START-SCREEN'|'IN-GAME'|'GAME-END'>}
 */
const STATE = ref('START-SCREEN')
</script>

<template>
<div>
  <StartScreen @start="STATE = 'IN-GAME'" v-if="STATE === 'START-SCREEN'"/>
  <LaunchZone v-else-if="STATE === 'IN-GAME'"/>
</div>
</template>
