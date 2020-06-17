import Vue from 'vue'
import Vuex from 'vuex'
import PersonalData from './modules/PersonalData'
import AdviserData from './modules/AdviserData'
import InfoMessages from './modules/InfoMessages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    PersonalData, AdviserData, InfoMessages
  }
})
