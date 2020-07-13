<template>
    <div id="app">
        <layout-header></layout-header>
        <layout-body></layout-body>
        <layout-footer></layout-footer>
    </div>
</template>
<script>
import LayoutHeader from "@/components/layout/blog/layout-header";
import LayoutBody from "@/components/layout/blog/layout-body.vue";
import LayoutFooter from "@/components/layout/blog/layout-footer";
export default {
    components: {
        LayoutHeader,
        LayoutBody,
        LayoutFooter
    }
};
</script>
<style lang="less">
@import url("../../assets/css/base.less");
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e9eef3;
}
::-webkit-scrollbar-track {
    background-color: #ffffff;
}
</style>
