import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: null,
  },
  getters: {
    TEXT: state => {
      return state.text;
    }
  },
  mutations: {
      SEND_TEXT: (state, payload) => {
     state.text = payload;
    },

   SAVE_TEXT: (state, payload) => {
      state.text.push(payload);
    },
  },

  actions: {
    async  getText ({ commit },payload) {
      return await axios.get('https://upwards.cf/api/get', {
        params: {
          id: payload
        }
      })
        .then((response) =>{
          console.log(response);
          commit('SAVE_TEXT', response.data.text);
        })
        .catch((error) =>{
          console.log('Get Error');
          console.log(error.message);
        });

    },

    async  sendText ({ commit },payload) {
      await axios.post('https://upwards.cf/api/post', {
        text: payload,
      })
        .then(function (response) {
          console.log(response.status);
        })
        .catch(function (error) {
          console.log(error.message);
          console.log('Send Error');
        });

    },
  },
});
// this.axios.get(api).then((response) => {
//   console.log(response.data)
// })
