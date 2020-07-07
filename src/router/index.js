import Vue from "vue";
import VueRouter from "vue-router";
import blogRoutes from "./modules/blog.route";

Vue.use(VueRouter);

const routes = [
	// 博客
	...blogRoutes,
	
];

const router = new VueRouter({
	routes,
});

export default router;
