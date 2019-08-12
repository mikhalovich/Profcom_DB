//import firebase from "firebase/app";
import pers_JSON from "@/json/data.json";

export default {
  state: {
    persons: []
  },
  mutations: {
    setPersons(state, persons) {
      state.persons = persons;
    }
  },
  getters: {
    persons: state => state.persons
  },
  actions: {
    fetchPersons({ commit }) {
      const persons = pers_JSON;
      commit("setPersons", persons);
    }
  }
};
