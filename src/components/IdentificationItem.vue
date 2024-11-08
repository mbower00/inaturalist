<template>
  <div class="identification-container">
    {{ result.id }}
  </div>
</template>

<script>
export default {
  props: ["result"]
}
</script>

<style scoped>
.identification-container {
  border: var(--color-1) 2px solid;
  padding: 7px;
  border-radius: 10px;
}
</style>