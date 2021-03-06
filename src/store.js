import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const forum = {
  state: {
    branches: {},
  },
  getters: {
    BRANCHES: state => state.branches,
    NOT_FOUND_ERROR: state => state.notFoundError,
  },
  mutations: {
    SET_BRANCHES: (state, payload) => {
      state.branches = payload;
    },
  },

  actions: {
    createQuest({ commit }, payload) {
      return axios.post('https://upwards.cf/api/forum/branch', {
        title: payload.myHeader,
        question: payload.myHTML,
        tags: payload.tags,
      })
        .then((response) => {
          alert('success');
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error.response;
        });
    },
    getBranches({ commit }, payload) {
      return axios.get(`https://upwards.cf/api/forum/branch/sort/${payload}`)
        .then((response) => {
          commit('SET_BRANCHES', response.data);
          console.log('enter', payload);
          console.log(response);
          return response;
        })
        .catch(error => error.response);
    },
    getBranch({ commit }, payload) {
      return axios.get(`https://upwards.cf/api/forum/branch/one?branch_id=${payload}`)
        .then(response => response)
        .catch(error => error.response);
    },
    getPosts({ commit }, payload) {
      return axios.get(`https://upwards.cf/api/forum/post?branch_id=${payload}`)
        .then(response => response)
        .catch(error => error.response);
    },
    search({ commit }, payload) {
      return axios.get('https://upwards.cf/api/forum/branch/search', {
        params: {
          q: payload,
        },
      })
        .then((response) => {
          commit('SET_BRANCHES', response.data);
          return response;
        })
        .catch((error) => {
          commit('SET_BRANCHES', null);
          return error.response;
        });
    },
    createPost({ commit }, payload) {
      return axios.post(`https://upwards.cf/api/forum/post?branch_id=${payload.id}&text=${payload.text}`)
        .then((response) => {
          alert('success');
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error.response;
        });
    },

  },
};
const errors = {
  state: {
    401: 'You must LogIn to enter this page',
  },
};
const login = {
  state: {
    logged: false,
  },
  getters: {
    EMAIL: state => state.email,
    PASSWORD: state => state.password,
    LOGGED: state => state.logged,
  },
  mutations: {
    SET_NAME: (state, payload) => {
      state.name = payload;
    },
    SET_EMAIL: (state, payload) => {
      state.email = payload;
    },
    SET_LOGGED: (state, payload) => {
      state.logged = payload;
    },
  },
  actions: {
    register({ commit }, payload) {
      return axios.post('https://upwards.cf/api/auth/register', {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      })
        .then(response => response)
        .catch(error => error.response);
    },
    logIn({ commit }, payload) {
      return axios.post('https://upwards.cf/api/auth/login', {
        email: payload.email,
        password: payload.password,
      })
        .then(response => response)
        .catch(error => error.response);
    },
    logOut({ commit }) {
      return axios.get('https://upwards.cf/api/auth/logout')
        .then((response) => {
          commit('SET_LOGGED', false);
          return response;
        })
        .catch((error) => {
          console.log('logout error response', error.response);
          return error.response;
        });
    },
    isLogged({ commit }) {
      return axios.get(' https://upwards.cf/api/auth/')
        .then((response) => {
          commit('SET_LOGGED', true);
        })
        .catch(error => error.response);
    },


  },
};
const events = {
  state: {
    pricemin: null,
    pricemax: null,
    theme: null,
    level: null,
    events: [],
  },
  getters: {
    EVENTS: state => state.events,
  },
  mutations: {
    SET_pricemin: (state, payload) => {
      state.pricemin = payload;
    },
    SET_pricemax: (state, payload) => {
      state.pricemax = payload;
    },
    SET_theme: (state, payload) => {
      state.theme = payload;
    },
    SET_level: (state, payload) => {
      state.level = payload;
    },
    // TODO WHYYYY???
    SET_EVENTS: (state, payload) => {
      state.events = payload;
      // Vue.set(state.events, payload);
    },
  },
  actions: {
    createEvent({ commit }, payload) {
      return axios.post('https://upwards.cf/api/admin/events/create', {
        time: payload.time,
        price: payload.price,
        level: payload.level,
        location: payload.location,
        site: payload.site,
        title: payload.title,
        description: payload.description,
        themes: payload.themes,
      })
        .then(response => response)
        .catch(error => error.response);
    },
    getEvents({ commit, getters }, payload) {
      return axios.get('https://upwards.cf/api/events/all/sort', {
        params: {
          // pricemin: payload.pricemin,
          // prisemax: payload.pricemax,
          themes: payload.theme,
          level: payload.level,
        },
      })
        .then((response) => {
          console.log('hello', response.data);
          commit('SET_EVENTS', response.data);
          console.log('hello1', getters.EVENTS);
        })
        .catch((error) => {
          console.log(error);
          return error.response;
        });
    },
    // TODO vuex не рабосий action

    saveEvents({ commit }, payload) {
      return axios.put(`https://upwards.cf/api/events/save/${payload}`)
        .then(response => response)
        .catch(error => error.response);
    },
  },
};
const profile = {
  state: {},
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
        .then(response => response)
        .catch(error => error.response);
    },

    updateInfo({ commit }, payload) {
      return axios.put('https://upwards.cf/api/user/profile/me', {
        name: payload.tag,
        first_name: payload.name,
        last_name: payload.surname,
      })
        .then(response => response)
        .catch(error => error.response);
    },
    updateAbout({ commit }, payload) {
      return axios.put('https://upwards.cf/api/user/profile/about', {
        about: payload.about,
      })
        .then(response => response)
        .catch(error => error.response);
    },
    updateSkills({ commit }, payload) {
      return axios.put('https://upwards.cf/api/user/profile/skills', {
          skills: JSON.stringify([{name: 'vue', level: 4}])
      })
        .then(response => response)
        .catch(error => error.response);
    },

  },
};

export default new Vuex.Store({
  modules: {
    forum,
    errors,
    login,
    events,
    profile,
  },
});
