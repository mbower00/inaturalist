<template>
  <div v-if="results">
    <ul>
      <PlaceItem v-for="result in results" :key="result.id + new Date().getTime()" :result="result"
        v-on:click="() => { submitIdentificationSearch(result.id, result.name) }" />
    </ul>
  </div>
</template>

<script>
import PlaceItem from './PlaceItem.vue';

export default {
  props: ["results"],
  emits: ["search-identification"],
  components: {
    PlaceItem
  },
  methods: {
    submitIdentificationSearch(placeID, placeName) {
      this.$emit("search-identification", placeID, placeName)
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  font-size: large;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>