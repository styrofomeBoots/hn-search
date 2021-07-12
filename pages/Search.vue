<template>
  <v-container>
    <!-- <v-row class="no-results" v-if="searchResults.length == 0"></v-row> -->
    <v-row>
      <v-toolbar dense class="rounded-lg">
        <v-text-field
          :label="searchInputLabel"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          v-model="searchString"
        ></v-text-field>
      </v-toolbar>
    </v-row>
    <v-row>
      <SearchCard />
    </v-row>
  </v-container>
</template>

<script>
import SearchCard from '../components/SearchCard'
import { mapGetters } from 'vuex'

export default {
  components: {
    SearchCard,
  },
  data() {
    return {
      searchInputLabel: 'Start Your Search...',
      searchString: '',
      searchResults: [],
    }
  },
  computed: mapGetters(['allSearchResults']),
  methods: {
    queryAPI: () => {
      let encodedQuery = this.searchString.replaceAll(' ', '%20')
      let queryUrl = `${this.baseURL}query=${encodedQuery}`
      axios.get(queryUrl).then((data) => console.log(data))
    },
  },
}
</script>

<style scoped>
.no-search-results {
  height: 200px;
  max-height: 200px;
}
</style>
