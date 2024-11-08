<template>
  <form v-on:submit.prevent="submitSearch">
    <input type="text" v-model="searchQuery">
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ""
    }
  },
  emits: ["submit-search"],
  methods: {
    submitSearch() {
      if (this.searchQuery) {
        this.$emit("submit-search", this.searchQuery)
        this.searchQuery = ""
      }
    }
  },
}
</script>

<style scoped>
form {
  display: flex;
  gap: 10px;
}

input {
  width: 100%;
  font-size: 25px;
  padding: 5px;
  border: var(--color-1) 4px solid;
  border-radius: 5px;
}

button {
  font-size: larger;
  border: var(--color-1) 4px solid;
  background-color: var(--color-1);
  color: white;
  border-radius: 5px;
}
</style>