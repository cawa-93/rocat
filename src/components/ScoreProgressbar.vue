<script setup>
import {computed} from "vue";
import {MAX_HITS} from "../config.js";
import {useI18n} from "vue-i18n";

const props = defineProps(['score'])

const progress = computed(() => Math.min( Math.round((props.score / MAX_HITS) * 100), 100))
const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})
</script>

<template>
  <div class="score-progress-container">
    <div class="progress" :style="{'--progress': progress + '%'}">
      <div></div>
    </div>
    <small>{{t('score.desc', {percent: progress})}}</small>
  </div>
</template>

<i18n>
{
  "en": {
    "score": {
      "title": "Your score",
      "desc": "Destroyed {percent}% of targets"
    }
  },
  "uk": {
    "score": {
      "title": "Твій рахунок",
      "desc": "Знищено {percent}% московії"
    }
  }
}
</i18n>



<style scoped>

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
  animation: expandWidth ease-in-out 2s 2s;
  animation-fill-mode: forwards;
  transition: width 0.5s;
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
</style>
