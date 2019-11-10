import { createStore } from 'store'

import chars from './chars'
import fight from './fight'


const store = createStore({
  chars,
  fight,
})


export default store
