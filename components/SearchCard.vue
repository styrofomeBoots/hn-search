<template>
  <v-card class="my-2 search-card">
    <v-card-title>
      <a :href="result.url" target="_blank" class="text-truncate">
        {{ result.title }}
      </a>
    </v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <span class="grey--text ms-3">
          <v-icon small class="mr-1">mdi-comment</v-icon>
          {{ result.num_comments }} Comments
        </span>
        <span class="grey--text ms-4">
          <v-icon small class="mr-1">mdi-thumb-up</v-icon>
          {{ result.points }} points
        </span>
      </v-row>
      <div class="mt-4 text-subtitle-1">
        Posted by <b>{{ result.author }}</b> on {{ parsedDate }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['result'],
  computed: {
    parsedDate() {
      return this.result.created_at.split('T')[0]
    },
  },
}
</script>

<style scoped>
.search-card {
  width: 100%;
}
</style>
