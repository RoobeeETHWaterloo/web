const initialState = {
  isFetching: false,
  isFetched: false,
  items: [],
}

const setFetching = (state, value) => ({ ...state, isFetched: false, isFetching: value })

const setItems = (state, items) => ({ isFetching: false, isFetched: true, items })


export default {
  initialState,
  setFetching,
  setItems,
}
