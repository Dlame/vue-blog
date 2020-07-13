import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
	loading: false,
	websiteInfo: {},
	socials: [
		{
			id: 1,
			title: "QQ",
			icon: "iconqq",
			color: "#1AB6FF ",
			href: "",
		},
		{
			id: 2,
			title: "Gitee",
			icon: "icongitee",
			color: "#d81e06",
			href: "",
		},
		{
			id: 3,
			title: "GitHub",
			icon: "icongithub",
			color: "",
			href: "",
		},
		{
			id: 4,
			title: "CSDN",
			icon: "iconcsdn",
			color: "red",
			href: "",
		},
	],
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
