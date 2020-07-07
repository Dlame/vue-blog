<template>
    <div class="home">
        <banner isHome="true" />
        <div class="site-content animate">
            <!--通知栏-->
            <div class="notify">
                <div class="search-result" v-if="hideSlogan">
                    <span v-if="searchWords">搜索结果："{{searchWords}}" 相关文章</span>
                    <span v-else-if="category">分类 "{{category}}" 相关文章</span>
                </div>
                <quote v-else>{{notice}}</quote>
            </div>
            <!--焦点图-->
            <div class="top-feature" v-if="!hideSlogan">
                <h1 class="section-title">
                    <div style="display: flex;align-items: flex-end;">
                        聚焦
                        <small-ico></small-ico>
                    </div>
                </h1>
                <div class="feature-content">
                    <div class="feature-item" v-for="item in features" :key="item.title">
                        <Feature :data="item"></Feature>
                    </div>
                </div>
            </div>
            <!--文章列表-->
            <main class="site-main" :class="{'search':hideSlogan}">
                <h1 class="section-title" v-if="!hideSlogan">推荐</h1>
                <template v-for="item in postList">
                    <post :post="item" :key="item.id"></post>
                </template>
            </main>
        </div>
    </div>
</template>

<script>
// components
import Banner from "@/components/banner";
import Quote from "@/components/quote";
import SmallIco from "@/components/small-ico";
import Feature from "@/components/feature";
import Post from "@/components/post";

import { mapMutations } from "vuex";
// apis
import { $fetchSiteInfo, $fetchFocus } from "@/api/site.api";
export default {
    name: "Home",
    components: {
        Banner,
        Quote,
        SmallIco,
        Feature,
        Post
    },
    data() {
        return {
            notice: "", // 提示
            searchWords: "", // 搜索栏关键字
            category: "", // 分类
            features: [], // 热点
            postList: [
                {
                    id: 0,
                    isTop: true,
                    banner: "https://s1.ax1x.com/2020/05/14/YDhagx.jpg",
                    isHot: true,
                    pubTime: "2018-11-18",
                    title: "看一遍闭着眼都会安装Lua了",
                    summary:
                        "Lua 是一种轻量小巧的脚本语言，能为应用程序提供灵活的扩展和定制功能。",
                    content: "",
                    viewsCount: 4045,
                    commentsCount: 99
                }
            ],
            currPage: 1, // 当前页
            hasNextPage: false // 是否到最后一页
        };
    },
    methods: {
        ...mapMutations(["setSiteInfo", "setSocials"])
    },
    computed: {
        hideSlogan() {
            return this.category || this.searchWords;
        }
    },
    created() {
        this.searchWords = this.$route.params.words;
        this.category = this.$route.params.cate;
        // 获取网站信息
        $fetchSiteInfo().then(res => {
            const { siteInfo, socialList } = res;
            this.notice = siteInfo.notice;
            this.setSiteInfo(siteInfo);
            this.setSocials(socialList);
            // this.$root.eventHub.$emit("initDone");
        });
        $fetchFocus().then(res => {
            this.features = res.focusList;
        });
    }
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/common.less");
.site-content {
    .notify {
        margin: 60px 0;
        border-radius: 3px;
        & > div {
            padding: 20px;
        }
    }

    .search-result {
        padding: 15px 20px;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        border: 1px dashed #ddd;
        color: #828282;
    }
}
.top-feature {
    width: 100%;
    height: auto;
    margin-top: 30px;

    .feature-content {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        position: relative;

        .feature-item {
            width: 32.9%;
        }
    }
}

.site-main {
    padding-top: 80px;

    &.search {
        padding-top: 0;
    }
}

.more {
    margin: 50px 0;
    .more-btn {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #adadad;
        border: 1px solid #adadad;
        border-radius: 20px;
        margin: 0 auto;
        cursor: pointer;
        &:hover {
            color: #8fd0cc;
            border: 1px dashed #8fd0cc;
        }
    }
}

/******/
@media (max-width: 800px) {
    .top-feature {
        display: none;
    }

    .site-main {
        padding-top: 40px;
    }

    .site-content {
        .notify {
            margin: 30px 0 0 0;
        }

        .search-result {
            margin-bottom: 20px;
            font-size: 16px;
        }
    }
}

/******/
</style>
