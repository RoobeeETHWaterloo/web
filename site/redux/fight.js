const initialState = {
  isSearching: false,
}

const setSearching = (state, value) => ({ ...state, isSearching: value })


export default {
  initialState,
  setSearching,
}
