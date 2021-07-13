<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="d-flex justify-center mt-4">
        <v-btn text large rounded to="/search">SEARCH</v-btn>
        <span class="text-h4 mx-2">|</span>
        <v-btn text large rounded to="/history">HISTORY</v-btn>
      </div>
      <v-container class="main-container">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hacker News Search',
    }
  },
}
</script>
<style scoped>
.main-container {
  width: 55%;
}
</style>
