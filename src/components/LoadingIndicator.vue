<template>
  <div class="load-container">
    <div class="load-bubble"></div>
  </div>
</template>

<style scoped>
/* using code from https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes */

.load-container {
  position: relative;
  width: 20px;
  height: 20px;
  padding: 5px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

.load-bubble {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: var(--color-1);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>