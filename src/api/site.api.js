import { $api } from "./axios";

// 获取网站信息
export const $fetchSiteInfo = () => $api.get("/site");

// 获取焦点信息
export const $fetchFocus = () => $api.get("/focus/list");
