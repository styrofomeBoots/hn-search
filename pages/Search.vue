<template>
  <v-container>
    <v-row>
      <v-toolbar dense class="rounded-lg">
        <v-text-field
          :label="searchInputLabel"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          clearable
          v-model="searchString"
          @keyup.enter="fetchSearchResults(searchString, true)"
        ></v-text-field>
        <v-btn @click="fetchSearchResults(searchString, true)" icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-toolbar>
    </v-row>
    <v-row
      v-for="result in allSearchResults"
      :key="result.created_at_i"
      class="mx-6"
    >
      <SearchCard :result="result" />
    </v-row>
  </v-container>
</template>

<script>
import SearchCard from '../components/SearchCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    SearchCard,
  },
  data() {
    return {
      searchInputLabel: 'Start Your Search...',
      searchString: '',
    }
  },
  computed: mapGetters(['allSearchResults']),
  methods: {
    ...mapActions(['fetchSearchResults']),
  },
}
</script>

<style scoped>
.no-search-results {
  height: 200px;
  max-height: 200px;
}
</style>
