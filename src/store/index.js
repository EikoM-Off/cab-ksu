import Vue from 'vue'
import Vuex from 'vuex'
import PersonalData from './modules/PersonalData'
import AdviserData from './modules/AdviserData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    PersonalData, AdviserData
  }
})
