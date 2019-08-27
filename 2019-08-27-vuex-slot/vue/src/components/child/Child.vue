<template>
    <div>
        {{msg}}
        <h1>{{ getState }}</h1>
        <button @click="changeCount">减减操作</button>
    </div>
</template>
<script>
    export default {
        name: "child",
        data() {
            return {
                msg: "你好，我是儿子"
            }
        },
        computed: {
            getState() {
                // return this.$store.state.count;   //这里只能进行的是减减操作但是并不能进行边界的处理如要控制需要在getters中进行设置

                return this.$store.getters.getState; //使用getters中的getState方法可以做数量的限制而不是直接进行数据操作
            }
        },
        methods: {
            changeCount() {
                // this.$store.commit("declare");
                this.$store.dispatch("declare");
            }
        }
    }
</script>
<style scoped>
    h1 {
        color: pink;
    }
</style>