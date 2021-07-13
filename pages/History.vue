<template>
  <v-container>
    <v-row v-for="search in getSearchHistory" :key="search.key">
      <HistoryCard :search="search" />
    </v-row>
  </v-container>
</template>

<script>
import HistoryCard from '../components/HistoryCard.vue'
import { mapGetters } from 'vuex'

export default {
  components: { HistoryCard },
  computed: {
    ...mapGetters(['getSearchHistory']),
  },
}
</script>

<style></style>
