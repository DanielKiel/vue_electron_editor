import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

let Datastore = require('nedb')
let bu = new Datastore({ filename: 'database/business_units', autoload: true })


const state = {
  businessUnits: [],
  activeBusinessUnit: {}
}

const mutations = {
  reloadBusinessUnits () {
      bu.find({},{}, (err, docs) => {
          state.businessUnits = docs
      })
  },
  saveBusinessUnit(state,struct) {
      if (struct._id === undefined) {
          bu.insert(struct, (err, newDoc) => {
              state.businessUnits.push(newDoc)
          })
      }
      else {
          bu.update({_id: struct._id}, struct, (err, numReplaced) => {
              //we reload all the items
              bu.find({},{}, (err, docs) => {
                  state.businessUnits = docs
              })
          })
      }
  },
  changeActiveBusinessUnit(state, id) {console.log(id, 'changed')
      let result = state.businessUnits.filter(businessUnit => businessUnit._id == id)

      if (result.length === 1) {
          state.activeBusinessUnit = result[0]
      }
      else {
          state.activeBusinessUnit = {}
      }
  }
}

const actions = { //"U63QEvw5QZExDVYF"
  reloadBsinessUnitsAsync ({ commit }) {
    setTimeout(() => {
      commit('ReloadBusinessUnits')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

store.commit('reloadBusinessUnits')

export default store
