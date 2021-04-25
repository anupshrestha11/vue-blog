import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        last_page: 0,
        page: 1,
        isCompleted: false,
        post: Object,
    },
    mutations: {
        setPosts(state, posts) {
            state.posts.push(...posts);
        },
        setLastPage(state, lastPage) {
            state.last_page = lastPage;
        },
        increasePage(state) {
            state.page++;
        },
        completed(state) {
            state.isCompleted = true;
        },
        setPost(state, post) {
            state.post = post;
        },
    },
    actions: {
        addPosts({ commit, state }) {
            if (state.isCompleted) return;
            window.axios
                .get(`http://localhost:8000/api/posts?page=` + state.page)
                .then((response) => {
                    let posts = response.data.data;
                    let lastPage = response.data.last_page;
                    commit("setPosts", posts);
                    commit("increasePage");
                    commit("setLastPage", lastPage);
                    if (state.page > state.last_page) {
                        commit("completed");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getPost({ commit }, slug) {
            window.axios
                .get("http://localhost:8000/api/posts/" + slug)
                .then((response) => {
                    commit("setPost", response.data);
                })
                .catch((err) => console.log(err));
        },
    },
    modules: {},
});
