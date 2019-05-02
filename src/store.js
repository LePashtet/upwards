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
const login = {
  state: {
    name: null,
    email: null,
    password: null
  },
  getters: {
    EMAIL: state => {
      return state.email;
    },
    PASSWORD: state => {
      return state.password;
    },
    NAME: state => {
      return state.name;
    },
  },
  mutations: {
    SET_NAME: (state, payload) => {
      state.name = payload ;
    },
    SET_EMAIL: (state, payload) => {
      state.email = payload ;
    },
    SET_PASSWORD: (state, payload) => {
      state.password = payload ;
    },
  },
  actions: {
    register({commit},payload) {
      return axios.post('https://upwards.cf/api/auth/register', {
          name: payload.name,
          email: payload.email,
          password: payload.password,
      })
        .then((response) => {
            return response
        })
        .catch((error) => {
          return error.response
        });

    },
    logIn({commit},payload) {
      return axios.post('https://upwards.cf/api/auth/login', {
        email: payload.email,
        password: payload.password,
      })
        .then((response) => {
          return response
        })
        .catch((error) => {
           return error.response
        });
    },
    logOut({commit},payload) {
      return axios.get('https://upwards.cf/api/auth/logout')
        .then((response) => {
          return response
        })
        .catch((error) => {
          console.log("logout error response", error.response);
          return error.response
        });
    },
    isLogged({commit},payload) {
      return axios.get(' https://upwards.cf/api/auth/')
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error.response
        });
    },


  },
};
const events = {
  state: {
    pricemin: null,
    pricemax: null,
    theme: null,
    level: null,
    events: []
  },
  getters: {
    EVENTS: state => {
      return state.events;
    },
  },
  mutations: {
    SET_pricemin: (state, payload) => {
      state.pricemin = payload ;
    },
    SET_pricemax: (state, payload) => {
      state.pricemax = payload ;
    },
    SET_theme: (state, payload) => {
      state.theme = payload ;
    },
    SET_level: (state, payload) => {
      state.level = payload ;
    },
    //TODO WHYYYY???
    SET_EVENTS: (state, payload) => {
      state.events = payload ;
      // Vue.set(state.events, payload);
    },
  },
  actions: {
    createEvent({commit}, payload) {
      return axios.post('https://upwards.cf/api/admin/events/create', {
        time: payload.time,
        price: payload.price,
        level: payload.level,
        location: payload.location,
        site: payload.site,
        title: payload.title,
        description: payload.description,
        themes: payload.themes
      })
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error.response
        });
    },
    getEvents({commit,getters},payload) {
      return axios.get('https://upwards.cf/api/events/all/sort', {
        params:{
          // pricemin: payload.pricemin,
          // prisemax: payload.pricemax,
          themes: payload.theme,
          level: payload.level
        }
      })
        .then((response) => {
          console.log("hello", response.data);
          commit('SET_EVENTS', response.data);
          console.log("hello1", getters.EVENTS);
        })
        .catch((error) => {
          console.log(error);
          return error.response
        });
    },
    //TODO vuex не рабосий action

    saveEvents({commit},payload) {
      return axios.put('https://upwards.cf/api/events/save/'+ payload)
        .then((response) => {
          return response
        })
        .catch((error) => {

          return error.response
        });
    },
  }
};
const profile = {
  state: {
  },
  getters: {
    // EMAIL: state => {
    //   return state.email;
    // },
  },
  mutations: {
    // SET_NAME: (state, payload) => {
    //   state.name = payload ;
    // },
  },
  actions: {
    getProfile() {
      return axios.get('https://upwards.cf/api/user/profile')
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error.response
        });
    },
    updateInfo({commit}, payload) {
      return axios.put('https://upwards.cf/api/user/profile/me',{
        name: payload.tag,
        first_name:payload.name,
        last_name: payload.surname,
      })
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error.response
        });
    },
  },
};

export default new Vuex.Store({
  modules: {
    forum: forum,
    errors: errors,
    login: login,
    events: events,
    profile: profile
  }
});
