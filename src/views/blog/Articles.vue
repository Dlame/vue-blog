<!-- 文章 -->
<template>
    <div class="main-container">
        <div
            id="content"
            class="article-detail"
            v-html="articleDetail.content"
        ></div>
        <div class="article-right fr anchor" v-html="articleDetail.toc"></div>
    </div>
</template>

<script>
import { $api } from '@/api/axios';
import markdown from '@/share/markdown';

export default {
    components: {},
    data() {
        return {
            articleDetail: '',
        };
    },
    computed: {},
    watch: {},
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        $api.post('/api/getArticleDetail', {
            id: '5c9d8ce5f181945ddd6b0ffc',
            type: 1,
        }).then((res) => {
            this.articleDetail = res.data;
            // 使用 marked 转换
            const article = markdown.marked(res.data.content);
            article.then((response) => {
                this.articleDetail.content = response.content;
                this.articleDetail.toc = response.toc;
            });
        });
    },
};
</script>
<style lang='less' scoped>
// @import url('../../assets/css/markdown.css');
.main-container {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    transform:translate(0,0);
    .article-detail {
        width: 75%;
    }
    .article-right {
        position: fixed;
        top: 213px;
        width: 23%;
    }
}
.anchor {
    display: block;
    position: sticky;
    top: 213px;
    margin-top: 213px;
    /deep/ .anchor-ul {
        position: relative;
        top: 0;
        max-width: 250px;
        -moz-box-shadow: 0 0px 0px #fff;
        -webkit-box-shadow: 0 0px 0px #fff;
        box-shadow: 0 0px 0px #fff;
        border-left: 1px solid #eee;
        li.active {
            color: #009a61;
        }
        .anchor-ul {
            border: none;
        }
    }
    a {
        color: #333;
    }
}
.article {
    width: 100%;
    .header {
        .title {
            margin: 20px 0 0;
            text-align: center;
            font-size: 34px;
            font-weight: bold;
        }
        .author {
            position: relative;
            margin: 30px 0 40px;
            padding-left: 50px;
            .avatar {
                position: absolute;
                left: 0;
                top: 0;
                width: 48px;
                height: 48px;
                vertical-align: middle;
                display: inline-block;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .info {
                float: left;
                vertical-align: middle;
                // display: inline-block;
                margin-left: 8px;
                a {
                    color: #333;
                }
            }
            .name {
                margin-right: 3px;
                font-size: 16px;
                vertical-align: middle;
            }
            .meta {
                margin-top: 5px;
                font-size: 12px;
                color: #969696;
                span {
                    padding-right: 5px;
                }
            }
            .tags {
                float: right;
                padding-top: 15px;
                // padding-right: 20px;
                .tag {
                    // padding: 0 10px;
                    margin-left: 5px;
                    border-right: 2px solid #eee;
                }
            }
        }
    }
    .content {
        min-height: 300px;
    }
}
.heart {
    height: 60px;
    text-align: center;
    margin: 50px;
}
.loader {
    color: rgb(226, 44, 44);
    text-align: center;
    padding: 50px;
    font-size: 16px;
}
.clearfix {
    clear: both;
}
</style>