<!--  -->
<template>
    <div class="layout-body">
        <router-view></router-view>
        <!-- <back-top></back-top> -->
    </div>
</template>

<script>
export default {
    name: "LayoutBody",
    components: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {}
};
</script>
<style lang='less' scoped>
.layout-body {
    /* header = 80px */
    min-height: -moz-calc(100vh - 80px);
    min-height: -webkit-calc(100vh - 80px);
    min-height: calc(100vh - 80px);
}
</style>