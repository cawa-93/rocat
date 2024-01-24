<script setup>
const emit = defineEmits(['start'])
</script>

<template>
  <section @click="emit('start')">
    <h1>RoCat</h1>
    <p>You have a limited time to hit as many military targets as possible!</p>
    <button class="pulse start">Tap to start</button>
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
  cursor: pointer;
  font-weight: lighter;
  font-size: 2em;
  padding: 10%;
}


.start {
  background: none;
}

.pulse {
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-name: pulse;
  animation-timing-function: ease-in-out;
}


@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>
