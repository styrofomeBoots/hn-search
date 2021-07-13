import axios from 'axios'

const baseUrlString = 'http://hn.algolia.com/api/v1/search?query='

const state = () => ({
  searchResults: [],
  searchHistory: [], // element example: { key, date, time, phrase, hits }
})

const getters = {
  getSearchResults: (state) => state.searchResults,
  getSearchHistory: (state) => state.searchHistory,
  getSearchString: (state) => state.searchPhrase,
}

const actions = {
  // parse search phrase and make API call
  async fetchSearchResults({ commit, dispatch }, queryString) {
    let queryArray = queryString.split(' ')
    // ------ remove double and leading/trailing spaces --------
    let cleanArray = queryArray.filter((a, i) => a !== queryArray[i + 1])
    if (cleanArray[0] === '') cleanArray = cleanArray.slice(0)
    if (cleanArray[-1] === '') cleanArray = cleanArray.slice(-1)
    // ---------------------------------------------------------
    let encodedQueryString = queryArray.join('%20')
    let completeUrlString = baseUrlString + encodedQueryString
    let response = await axios.get(completeUrlString)
    commit('setSearchResults', response.data.hits)
    dispatch('updateSearchHistory', queryString)
  },

  updateSearchHistory({ commit }, queryString) {
    let search = {}
    let dateTime = new Date()
    search.key = Date.now()
    search.date = dateTime.toISOString().slice(0, 10)
    search.time = dateTime.toISOString().slice(11, 16)
    search.phrase = queryString
    search.hits = this.state.searchResults.length
    commit('setSearchHistory', search)
  },

  deleteSearch({ commit }, key) {
    commit('removeSearch', key)
  },
}

const mutations = {
  // action: fetchSearchResults
  setSearchResults: (state, searchResults) =>
    (state.searchResults = searchResults),
  // action: updateSearchHistory
  setSearchHistory: (state, search) => state.searchHistory.unshift(search),
  // action: updateSearchString
  setSearchString: (state, queryString) => (state.queryString = queryString),
  // action: deleteSearch
  removeSearch: (state, key) =>
    (state.searchHistory = state.searchHistory.filter(
      (search) => search.key !== key
    )),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
