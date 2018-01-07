import { Store } from 'vuex'
import state from './state'
import mutations from './mutations'

export default () => new Store({
  state,
  mutations
})
