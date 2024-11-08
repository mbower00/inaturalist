<template>
  <div v-if="results" class="identifications-grid">
    <IdentificationItem v-for="result in results" :key="result.id + new Date().getTime()" :result="result" />
  </div>
</template>

<script>
import IdentificationItem from './IdentificationItem.vue';

export default {
  components: { IdentificationItem },
  props: ["results"]
}
</script>

<style scoped>
.identifications-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px;
}
</style>