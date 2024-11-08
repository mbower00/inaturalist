<template>
  <div @click="() => { console.log(result) }" class="identification-container">
    <h3>{{ resultName }}</h3>
    <img :src="resultImg" :alt="resultName">
  </div>
</template>

<script>
export default {
  props: ["result"],
  computed: {
    resultName() {
      return this.result.observation.taxon.name
    },
    resultImg() {
      return this.result.observation.photos[0]?.url
    }
  }
}
</script>

<style scoped>
.identification-container {
  border: var(--color-1) 4px solid;
  padding: 7px;
  border-radius: 10px;
}

img {
  width: 75px;
  margin: 0 auto 10px auto;
  display: block;
  border: var(--color-1) 2px solid;
  border-radius: 5px;
}

h3 {
  text-align: center;
  margin: 10px 0 15px 0;
}
</style>