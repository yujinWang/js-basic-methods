<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>{{ getCount }}</h2>
        <button @click="addCount">加加操作</button>
    </div>
</template>
<script>
    export default {
        name: "child",
        data() {
            return {
                msg: "你好，我是爸爸"
            }
        },
        computed: {
            getCount() {
                return this.$store.state.count
            }
        },
        methods: {
            addCount() {
                // this.$store.commit("add");
                this.$store.dispatch("add");
            }
        }
    }
</script>
<style scoped>
    h1 {
        color: red;
    }
</style>