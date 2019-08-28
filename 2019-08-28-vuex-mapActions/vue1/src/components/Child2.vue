<template>
	<div>
		<h2>我是子组件222</h2>
		<h3 style="color:red;">mutations的值：{{$store.state.count}}</h3>
		<h3 style="color:pink;">actions的值：{{$store.state.count1}}</h3>
		<button style="background: red;" @click="addNum(3)">mutations增加</button>
		<button style="background: red;" @click="reduceNum(1)">mutations减少</button>
		<button style="background: pink;" @click="actionAddNum()">actions增加</button>
		<button style="background: pink;" @click="actionReduceNum()">actions减少</button>
		<h1 style="color: red;">state中定义的count1的值是：{{count1}}</h1>
		<!-- 作用域插槽 -->
		<slot v-bind:user="userMsg">
			
		</slot>
	</div>
</template>

<script>
	import { mapMutations, mapActions } from "vuex";
	export default {
		data() {
			return {
				userMsg: {
					userName: "这是子组件作用域插槽中的数据"
				}
			}
		},
		computed: {
			count1(){
				return this.$store.getters.getterCount;
			}
		},
		methods: {
			// 使用...mapMutations方式调用mutations中的方法
			...mapMutations({
				addNum: "addCount",
				reduceNum: "reduceCount"
			}),
			// 使用...mapActions方式调用actions中的方法
			...mapActions({
				actionAddNum: "actionAddCount",
				actionReduceNum: "actionReduceCount"
			}),
			// commit方式触发
			// addNum(n){
			// 	this.$store.commit("addCount", n);
			// },
			// reduceNum(n){
			// 	this.$store.commit("reduceCount",n);
			// },
			//dispatch方式触发，可以异步触发，例如这里的将执行函数放在延时定时器中
			// actionAddNum(n){
			// 	this.$store.dispatch("actionAddCount", n);
			// },
			// actionReduceNum(n){
			// 	this.$store.dispatch("actionReduceCount",n);
			// }
		}
	}
</script>

<style scoped>

</style>