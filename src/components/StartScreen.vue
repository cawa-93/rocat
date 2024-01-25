<script setup>
import {useI18n} from "vue-i18n";

const emit = defineEmits(['start'])

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})
</script>

<template>
  <section @click="emit('start')">
    <h1>RoCat</h1>
    <p>{{t('rules')}}</p>
    <button class="pulse start">{{t('action')}}</button>
  </section>

</template>

<i18n>
{
  "en": {
    "rules": "You have a limited time to hit as many military targets as possible!",
    "action": "Tap to start"
  },
  "uk": {
    "rules": "Ти маєш обмежений час, щоб вразити якомога більше військових цілей!",
    "action": "Торкнись, щоб почати"
  }
}
</i18n>


<style scoped>

h1 {
  margin: 0;
}

section {
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100dvh;
  align-items: center;
  cursor: pointer;
  font-weight: lighter;
  font-size: 2em;
  padding: 10%;
}


.start {
  background: none;
}

</style>
