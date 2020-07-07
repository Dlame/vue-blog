<template>
    <div id="app">
        <loading />
        <layout-header></layout-header>
        <layout-body></layout-body>
        <layout-footer></layout-footer>
    </div>
</template>
<script>
import Loading from "@/components/loading";
import LayoutHeader from "@/components/layout/layout-header";
import LayoutBody from "@/components/layout/layout-body.vue";
import LayoutFooter from "@/components/layout/layout-footer";
export default {
    components: {
        Loading,
        LayoutHeader,
        LayoutBody,
        LayoutFooter
    }
};
</script>
<style lang="less">
#app {
    font-size: 17px;
    color: #6f6f6f;
}
</style>
