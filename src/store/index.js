import { createStore } from "vuex";

import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default createStore({
  state: {
    sampleBlogCards: [
      {
        id: "1",
        blogTitle: "Blog card #1",
        blogCoverPhoto: "coffee-640",
        blogDate: "May 2, 2021",
        type: "cafe",
        bio: "This is some dummy text. This is a test. ",
      },
      {
        id: "2",
        blogTitle: "Blog card #2",
        blogCoverPhoto: "bird-640",
        blogDate: "May 3, 2021",
        type: "nature",
        bio: "This is some dummy text. This is a test. ",
      },
      {
        id: "3",
        blogTitle: "Blog card #3",
        blogCoverPhoto: "cd-640",
        blogDate: "May 4, 2021",
        type: "surreal",
        bio: "This is some dummy text. This is a test. ",
      },
      {
        id: "4",
        blogTitle: "Blog card #4",
        blogCoverPhoto: "fishing-640",
        blogDate: "May 5, 2021",
        type: "surreal",
        bio: "This is some dummy text. This is a test. ",
      },
      {
        id: "5",
        blogTitle: "Blog card #5",
        blogCoverPhoto: "water-lily-640",
        blogDate: "May 6, 2021",
        type: "nature",
        bio: "This is some dummy text. This is a test. ",
      },
      {
        id: "6",
        blogTitle: "Blog card #6",
        blogCoverPhoto: "bread-640",
        blogDate: "May 7, 2021",
        type: "cafe",
        bio: "This is some dummy text. This is a test. ",
      },
      {
        id: "7",
        blogTitle: "Blog card #7",
        blogCoverPhoto: "coffee2-640",
        blogDate: "May 8, 2021",
        type: "cafe",
        bio: "This is some dummy text. This is a test. ",
      },
      {
        id: "8",
        blogTitle: "Blog card #8",
        blogCoverPhoto: "moon-640",
        blogDate: "May 9, 2021",
        type: "surreal",
        bio: "This is some dummy text. This is a test. ",
      },
    ],
    user: null,
    profileId: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
  },

  getters: {
    blogPostHome(state) {
      return state.sampleBlogCards.slice(0, 4);
    },
  },
  mutations: {
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    updateUser(state, payload) {
      state.user = payload; // returns a value of true/false
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
    },
    async updateUserSettings({ state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
    },
  },
  modules: {},
});
