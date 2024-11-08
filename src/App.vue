<template>
  <main>
    <h1 class="main-title">iNaturalist</h1>
    <div class="main-grid">

      <section class="places-section">
        <SearchForm v-on:submit-search="submitSearch" />

        <div class="loading-indicator-container" v-if="showLoading">
          <LoadingIndicator class="loading-indicator" />
          <div class="loading-indicator-text">{{ currentSearchQuery }} loading...</div>
        </div>

        <PlacesList :results="searchResults?.results" v-on:search-identification="submitIdentificationSearch" />
      </section>

      <section class="identifications-section">

        <h2 class="identification-title">{{ identifiyingPlaceName }}</h2>

        <div class="loading-indicator-container" v-if="showLoadingIdentifications">
          <LoadingIndicator class="loading-indicator" />
          <div class="loading-indicator-text">{{ identifiyingPlaceName }} loading...</div>
        </div>

        <IdentificationsList :results="identificationsResults?.results" />
      </section>
    </div>

  </main>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import LoadingIndicator from './components/LoadingIndicator.vue'
import PlacesList from './components/PlacesList.vue'
import IdentificationsList from './components/IdentificationsList.vue'
import { searchPlaces, searchIdentifications } from './js/external-services.mjs'

export default {
  components: {
    SearchForm,
    LoadingIndicator,
    PlacesList,
    IdentificationsList
  },
  data() {
    return {
      currentSearchQuery: "",
      showLoading: true,
      searchResults: null,
      identificationsResults: null,
      identifiyingPlaceName: "Idaho",
      showLoadingIdentifications: false
    }
  },
  methods: {
    async submitSearch(searchQuery) {
      this.currentSearchQuery = searchQuery
      this.showLoading = true
      this.searchResults = await searchPlaces(searchQuery)
      this.showLoading = false
    },
    async submitIdentificationSearch(placeID, placeName) {
      this.identifiyingPlaceName = placeName
      this.showLoadingIdentifications = true
      this.identificationsResults = null
      this.identificationsResults = await searchIdentifications(placeID)
      this.showLoadingIdentifications = false
    }
  },
  mounted() {
    this.submitSearch("Idaho")
    this.submitIdentificationSearch(2, "Idaho")
  }
}
</script>

<style>
body {
  --color-1: rgb(6, 123, 74);
  --color-2: rgb(158, 245, 209);
  margin: 0;
  font-family: sans-serif;
}

main {
  border-radius: 10px;
  border: var(--color-1) 4px solid;
  margin: 10px;
}

.main-title {
  background-color: var(--color-1);
  margin: 0;
  padding: 20px;
  color: white;
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.places-section {
  border-radius: 0 0 0 5px;
  background-color: var(--color-2);
  border-bottom: var(--color-1) 4px solid;
  border-radius: 0;
  padding: 10px;
}

.loading-indicator {
  margin: 0 auto;
}

.loading-indicator-container {
  width: fit-content;
  margin: 7px auto;
  padding: 10px;
}

.loading-indicator-text {
  color: black;
  width: fit-content;
}

.identification-title {
  padding: 0 10px;
  margin: 15px 0;
}

@media (min-width: 600px) {
  .main-grid {
    grid-template-columns: 1fr 1fr;
  }

  .places-section {
    border-right: var(--color-1) 4px solid;
    border-bottom: none;
  }
}

@media (min-width: 800px) {
  .main-grid {
    grid-template-columns: 3fr 5fr;
  }
}
</style>