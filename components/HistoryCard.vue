<template>
  <v-card class="my-2 history-card">
    <v-card-title>
      <a class="text-truncate" @click="searchAgain(search.phrase)">
        {{ search.phrase }}
      </a>
    </v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <span class="grey--text ms-3">
          <v-icon small class="mr-1">mdi-comment</v-icon>
          {{ search.hits }} Hits
        </span>
      </v-row>
      <div class="mt-4 text-subtitle-1">
        Searched on <b>{{ search.date }}</b> at <b>{{ search.time }}</b>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['search'],
  methods: {
    ...mapActions(['fetchSearchResults']),
    searchAgain(queryString) {
      this.fetchSearchResults(queryString)
      this.$router.push('/search')
    },
  },
}
</script>

<style scoped>
.history-card {
  width: 100%;
}
</style>
