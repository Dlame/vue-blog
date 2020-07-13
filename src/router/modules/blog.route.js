import Index from "../../views/blog/Index.vue";
import Home from "@/views/blog/Home.vue";

const blogRoutes = [
	{
		path: "/",
		name: "Blog",
		component: Index,
		children: [
			{
				path: "/",
				name: "Home",
				component: Home,
				meta: {
					title: "首页",
				},
			},
			{
				path: "/about",
				name: "About",
				component: () => import("@/views/blog/About.vue"),
				meta: {
					title: "关于我",
				},
			},
			{
				path: "/article/:id",
				name: "Articles",
				component: () => import("@/views/blog/Articles.vue"),
				meta: {},
			},
		],
	},
];

export default blogRoutes;
