const initialState = {
  isSearching: false,
  pendingOpponent: null,
  data: null,
}

const setSearching = (state, value) => ({ ...state, isSearching: value })

const setPendingOpponent = (state, value) => ({ ...state, isSearching: false, pendingOpponent: value })


export default {
  initialState,
  setSearching,
  setPendingOpponent,
}
