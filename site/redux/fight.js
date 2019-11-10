import merge from 'deepmerge'


const initialState = {
  isSearching: false,
  pendingOpponent: null,
  data: null,
  // data: {
  //   state: 1,
  //   me: {
  //     name: 'TinkyWinky',
  //     image: 'https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1720283.svg',
  //     hp: 10,
  //   },
  //   opponent: {
  //     name: 'WizzyPizzy',
  //     image: 'https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1720012.svg',
  //     hp: 15,
  //   },
  // },
}

const setSearching = (state, value) => ({ ...state, isSearching: value })

const setPendingOpponent = (state, value) => ({ ...state, isSearching: false, pendingOpponent: value })

const setData = (state, payload) => ({ ...state, data: payload })

const updateData = (state, payload) => ({ ...state, data: merge(state.data, payload) })


export default {
  initialState,
  setSearching,
  setPendingOpponent,
  setData,
  updateData,
}
