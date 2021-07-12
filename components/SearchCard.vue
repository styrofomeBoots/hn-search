<template>
  <v-row class="d-flex">
    <v-card class="mx-auto my-12">
      <v-card-title>
        <a :href="searchResults.url">{{ searchResults.title }}</a>
      </v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <span class="grey--text ms-3">
            <v-icon small class="mr-1">mdi-comment</v-icon>
            {{ searchResults.num_comments }} Comments
          </span>
          <span class="grey--text ms-4">
            <v-icon small class="mr-1">mdi-thumb-up</v-icon>
            {{ searchResults.points }} points
          </span>
        </v-row>
        <div class="mt-4 text-subtitle-1">
          Posted by <b>{{ searchResults.author }}</b> on <b>{{ parsedDate }}</b>
        </div>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      searchResults: {
        created_at: '2012-07-12T18:02:33.000Z',
        title: 'Yahoo Breach Extends Beyond Yahoo to Gmail, Hotmail, AOL Users',
        url: 'http://bits.blogs.nytimes.com/2012/07/12/yahoo-breach-extends-beyond-yahoo-to-gmail-hotmail-aol-users/',
        author: 'iProject',
        points: 18,
        story_text: '',
        comment_text: null,
        num_comments: 3,
        story_id: null,
        story_title: null,
        story_url: null,
        parent_id: null,
        created_at_i: 1342116153,
        relevancy_score: 4031,
        _tags: ['story', 'author_iProject', 'story_4235747'],
        objectID: '4235747',
        _highlightResult: {
          title: {
            value:
              '<em>Yahoo</em> <em>Breach</em> Extends Beyond <em>Yahoo</em> to Gmail, Hotmail, AOL Users',
            matchLevel: 'full',
            fullyHighlighted: false,
            matchedWords: ['yahoo', 'breach'],
          },
          url: {
            value:
              'http://bits.blogs.nytimes.com/2012/07/12/<em>yahoo</em>-<em>breach</em>-extends-beyond-<em>yahoo</em>-to-gmail-hotmail-aol-users/',
            matchLevel: 'full',
            fullyHighlighted: false,
            matchedWords: ['yahoo', 'breach'],
          },
          author: {
            value: 'iProject',
            matchLevel: 'none',
            matchedWords: [],
          },
          story_text: {
            value: '',
            matchLevel: 'none',
            matchedWords: [],
          },
        },
      },
    }
  },
  computed: {
    parsedDate: function () {
      return this.searchResults.created_at.split('T')[0]
    },
  },
}
</script>

<style></style>
