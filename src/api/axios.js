import axios from "axios";
import { apiServiceUrl } from "../config";
import { Message } from "element-ui";
import store from "@/store";

axios.defaults.timeout = 10000; // 设置超时时间

function createInterceptor(instance) {
	instance.interceptors.request.use(
		function(config) {
			// Do something before request is sent
			store.commit("setLoading", true);
			return config;
		},
		function(error) {
			// Do something with request error
			store.commit("setLoading", false);
			Message.error("网络错误");
			return Promise.reject(error);
		}
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function(response) {
			// Do something with response data
			store.commit("setLoading", false);
			const res = response.data;
			// if (res.code != 200) {
			// 	Message.warning(res.msg);
			// 	return;
			// }
			return response.data;
		},
		function(error) {
			// Do something with response error
			store.commit("setLoading", false);
			if (!error.response.data.isOk) {
				Message.error(error.response.data.errMsg);
			} else {
				Message.error("网络错误");
			}
			return Promise.reject(error);
		}
	);
}

const apiInstance = axios.create({
	baseURL: apiServiceUrl,
});

createInterceptor(apiInstance);

export const $api = apiInstance;
