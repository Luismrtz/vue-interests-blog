import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCards: [
      {blogTitle: "Blog card #1", blogCoverPhoto: "MidnightFerg", blogDate:"May 2, 2021", type: "hat"},
      {blogTitle: "Blog card #2", blogCoverPhoto: "MidnightFerg", blogDate:"May 3, 2021", type: "pin"},
      {blogTitle: "Blog card #3", blogCoverPhoto: "MidnightFerg", blogDate:"May 4, 2021", type: "jewelry"},
      {blogTitle: "Blog card #4", blogCoverPhoto: "MidnightFerg", blogDate:"May 5, 2021", type: "pin"},
      {blogTitle: "Blog card #5", blogCoverPhoto: "MidnightFerg", blogDate:"May 6, 2021", type: "hat"},
      {blogTitle: "Blog card #6", blogCoverPhoto: "MidnightFerg", blogDate:"May 7, 2021", type: "pin"},
      {blogTitle: "Blog card #7", blogCoverPhoto: "MidnightFerg", blogDate:"May 8, 2021", type: "jewelry"},
      {blogTitle: "Blog card #8", blogCoverPhoto: "MidnightFerg", blogDate:"May 9, 2021", type: "pin"},
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
