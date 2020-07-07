import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	loading: false,
	websiteInfo: {},
	socials: [],
};
const mutations = {
	setLoading: (state, payload) => {
		state.loading = payload;
	},
	setSiteInfo: (state, payload) => {
		state.websiteInfo = payload;
	},
	setSocials: (state, payload) => {
		state.socials = payload;
	},
};
const actions = {};
const getters = {
	loading: (state) => state.loading,
	websiteInfo: (state) => state.websiteInfo,
	socials: (state) => state.socials,
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {},
});
