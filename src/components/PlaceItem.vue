<template>
  <li>
    {{ result.name }}
  </li>
</template>

<script>
export default {
  props: ["result"],
}
</script>

<style scoped>
li {
  font-weight: bold;
  border-left: var(--color-2) 4px solid;
  padding-left: 5px;
  cursor: pointer;
}

li:hover {
  border-left: var(--color-1) 4px solid;
}
</style>