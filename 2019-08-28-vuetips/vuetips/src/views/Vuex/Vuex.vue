<template>
	<div class="vuex_test">
		<h3>Vuex页面，用来测试vuex，下面的原始数据100就是vuex中保存的，通过$store.state.count获取</h3>
		<h2 style="color: red;">{{$store.state.count}}</h2>
		<h2 style="color: red;">{{$store.state.count2}}</h2>
		<button @click="addCountMutation(10)">mutations增加10</button>
		<button @click="reduceCountMutation(5)">mutations减少5</button> <br />
		<button @click="addCountAction(1)">actions增加1,延迟2秒</button>
		<button @click="reduceCountAction(1)">actions减少1，延迟1秒</button>
		<p>对于这个简单的例子而言，在mutations中添加setTimeout也是可以执行异步操作的</p>
		<p>但是对于某些复杂场景来说就不适用了</p>
	</div>
</template>

<script>
	export default {
		name: 'Vuex',
		data() {
			return {

			}
		},
		methods: {
			addCountMutation(n) {
				this.$store.commit("mutationAddCount",n);
			},
			reduceCountMutation(n) {
				this.$store.commit("mutationReduceCount",n);
			},
			addCountAction(n) {
				this.$store.dispatch("actionAddCount",n);
			},
			reduceCountAction(n) {
				this.$store.dispatch("actionReduceCount",n);
			}
		}
	}
</script>

<style scoped>
	.vuex_test {
		padding: 10px;
	}
	.vuex_test button {
		padding: 5px;
		margin-right: 20px;
		margin-bottom: 20px;
	}
</style>