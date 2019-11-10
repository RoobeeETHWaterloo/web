const initialState = {
  isSearching: false,
  pendingOpponent: null,
  data: null,
}

const setSearching = (state, value) => ({ ...state, isSearching: value })

const setPendingOpponent = (state, value) => ({ ...state, isSearching: false, pendingOpponent: value })

const setData = (state, payload) => ({ ...state, data: payload })


export default {
  initialState,
  setSearching,
  setPendingOpponent,
  setData,
}
