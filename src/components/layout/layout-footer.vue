<template>
    <div id="layout-footer">
        <div class="footer-main">
            <div class="footer-item" v-if="socials.length">
                <div v-for="item in socials" :key="item.id">
                    <a target="_blank" class="out-link" :href="item.href">
                        <i class="iconfont" :class="item.icon"></i>
                        {{item.title}}
                    </a>
                </div>
            </div>
            <div class="footer-item">
                <div style="font-size:17px;font-weight: bold;">资源</div>
                <div>
                    <a
                        target="_blank"
                        class="out-link"
                        href="https://segmentfault.com/weekly?utm_source=sf-footer"
                    >每周精选</a>
                </div>
                <div>
                    <a target="_blank" class="out-link" href="http://houdunren.gitee.io/note/">后盾人</a>
                </div>
                <div>
                    <a target="_blank" class="out-link" href="https://www.liaoxuefeng.com/">廖雪峰的官方网站</a>
                </div>
            </div>
        </div>
        <div class="copyright">
            Copyright © 2020 by
            <a
                target="_blank"
                class="out-link"
                href=""
            >zhangzhe</a> . All rights reserved.
        </div>
    </div>
</template>

<script>
// import sectionTitle from "@/components/section-title";
import { mapGetters } from "vuex";
export default {
    name: "LayoutFooter",
    data() {
        return {};
    },
    // components: {
    //     sectionTitle
    // },
    computed: {
        ...mapGetters(["socials"])
    },
    methods: {},
    created() {}
};
</script>

<style scoped lang="less">
@import url("../../assets/css/base.less");
#layout-footer {
    padding: 2%;
    border-top: 1px solid #f7f7f7;
    font-size: 13px;
    color: #9c9c9c;
    a.out-link:hover {
        color: @base-color;
    }
    .footer-main {
        max-width: 800px;
        margin: 0 auto 20px auto;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        .footer-item {
            flex: 1;
            & > div:not(:last-child) {
                margin-bottom: 10px;
            }
            i {
                margin-right: 10px;
            }
        }
    }
    .copyright {
        text-align: center;
    }
}
/*****/
@media (max-width: 800px) {
    #layout-footer {
        .footer-main .footer-item:nth-child(3) {
            flex: 2;
        }
    }
}
@media (max-width: 600px) {
    #layout-footer {
        .footer-main {
            display: block;
            .footer-item {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                & > div {
                    margin-bottom: 10px;
                }
            }
        }
    }
}
/*****/
</style>