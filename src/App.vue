<template>
    <div id="app">
        <loading />
        <router-view></router-view>
    </div>
</template>
<script>
import Loading from "@/components/loading";

export default {
    components: {
        Loading
    }
};
</script>
<style lang="less">
#app {
    width: 100%;
    height: 100%;
}
</style>
