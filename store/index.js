import axios from 'axios'

const baseUrl = 'http://hn.algolia.com/api/v1/search?query='

const state = () => ({
  searchResults: [],
  searchHistory: [], // element example: { date, time, phrase, hits }
})

const getters = {
  allSearchResults: (state) => state.searchResults,
  allSearchHistory: (state) => state.searchHistory,
}

const actions = {
  async fetchSearchResults({ commit }, queryString, firstSearch) {
    let encodedQueryString = queryString.replaceAll(' ', '%20')
    let urlString = baseUrl + encodedQueryString
    const response = await axios.get(urlString)
    commit('setSearchResults', response.data.hits)
    if (firstSearch) this.updateSearchHistory(queryString)
  },

  updateSearchHistory({ commit }, queryString) {
    let search = {}
    let dateTime = new Date.toISOString()
    search.date = dateTime.slice(0, 10)
    search.time = dateTime.slice(11, 16)
    search.phrase = queryString
    search.hits = state.searchResults.length
    commit('setSearchHistory', search)
  },
}

const mutations = {
  setSearchResults: (state, searchResults) =>
    (state.searchResults = searchResults),

  setSearchHistory: (state, search) => state.searchResults.push(search),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
