import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const forum = {
  state: {
    text: {},
    notFoundError: false
  },
  getters: {
    RESPONSE: state => {
      return state.text;
    },
    NOT_FOUND_ERROR: state => {
      return state.notFoundError;
    }
  },
  mutations: {
    setNotFound:(state,payload)=>{
      console.log("mutation");
      state.notFoundError = payload;
    },
    SAVE_TEXT: (state, payload) => {
      state.text = payload ;
    },
  },

  actions: {
    getText({commit}, payload) {
      this.commit('setNotFound',false);
      return axios.get('https://upwards.cf/api/get', {
        params: {
          id: payload
        }
      })
        .then((response) => {
          console.log(response);
          console.log(response.data);
          console.log(response.data.text);

          commit('SAVE_TEXT', response.data);
        })
        .catch((error) => {
          console.log(Object.is(404, error.response.status));

          if (Object.is(404, error.response.status)) {

            this.commit('setNotFound',true);
          }
          console.log(error.message);
        });

    },

    async sendText({commit}, payload) {
      await axios.post('https://upwards.cf/api/post', {
        text: payload,
      })
        .then(function (response) {
          console.log(response.status);
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.message);
          console.log('Send Error');
        });

    },
  },
};
const errors = {
  state: {
    401:'You must LogIn to enter this page',
  }
};

export default new Vuex.Store({
  modules: {
    forum: forum,
    errors: errors,
  }
});
