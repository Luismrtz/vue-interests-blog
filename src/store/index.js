import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCards: [
      {id: "1", blogTitle: "Blog card #1", blogCoverPhoto: "MidnightFerg", blogDate:"May 2, 2021", type: "hat", bio: "This is some dummy text. This is a test. "},
      {id: "2", blogTitle: "Blog card #2", blogCoverPhoto: "MidnightFerg", blogDate:"May 3, 2021", type: "pin", bio: "This is some dummy text. This is a test. "},
      {id: "3", blogTitle: "Blog card #3", blogCoverPhoto: "MidnightFerg", blogDate:"May 4, 2021", type: "jewelry", bio: "This is some dummy text. This is a test. "},
      {id: "4", blogTitle: "Blog card #4", blogCoverPhoto: "MidnightFerg", blogDate:"May 5, 2021", type: "pin", bio: "This is some dummy text. This is a test. "},
      {id: "5", blogTitle: "Blog card #5", blogCoverPhoto: "MidnightFerg", blogDate:"May 6, 2021", type: "hat", bio: "This is some dummy text. This is a test. "},
      {id: "6", blogTitle: "Blog card #6", blogCoverPhoto: "MidnightFerg", blogDate:"May 7, 2021", type: "pin", bio: "This is some dummy text. This is a test. "},
      {id: "7", blogTitle: "Blog card #7", blogCoverPhoto: "MidnightFerg", blogDate:"May 8, 2021", type: "jewelry", bio: "This is some dummy text. This is a test. "},
      {id: "8", blogTitle: "Blog card #8", blogCoverPhoto: "MidnightFerg", blogDate:"May 9, 2021", type: "pin", bio: "This is some dummy text. This is a test. "},
    ],
  },

  getters: {
    blogPostHome(state) {
      return state.sampleBlogCards.slice(0,4);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
