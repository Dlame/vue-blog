<!-- search组件 -->
<template>
    <div class="header-search">
        <i class="iconfont iconsearch" @click.stop="onIconClick"></i>
        <input
            ref="searchInput"
            :class="{'show':show}"
            v-model="searchValue"
            type="text"
            @click.stop
            @keyup.enter="handleSearch"
        />
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            searchValue: "",
            show: false
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 搜索事件
        handleSearch() {
            // console.log(this.searchValue)
            this.$router.push({
                name: "search",
                params: { words: this.searchValue }
            });
            this.inputClose();
        },
        onIconClick() {
            this.searchValue = "";
            this.show = !this.show;
            if (this.show) {
                this.$refs.searchInput && this.$refs.searchInput.focus();
            }
        },
        inputClose() {
            if (!this.show) return;
            this.$refs.searchInput && this.$refs.searchInput.blur();
            this.show = false;
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        document.body.addEventListener("click", this.inputClose);
    },
    beforeDestroy() {
        document.body.removeEventListener("click", this.inputClose);
    }
};
</script>
<style lang='less' scoped>
.header-search {
    display: inline-block;
    position: relative;
    i {
        font-size: 18px;
        position: relative;
        top: 3px;
    }
    input {
        border: none;
        outline: none;
        overflow: hidden;
        background: transparent;
        height: 30px;
        width: 0;
        transition: 0.2s all;
        &.show {
            width: 200px;
            margin-left: 10px;
        }
        &:focus {
            border-bottom: 1px solid #8fd0cc;
        }
    }
}
</style>