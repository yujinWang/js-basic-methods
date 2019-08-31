<template>
	<div class="father">
		<h1>我是父组件</h1>
		<Child :msg="msgInfo" v-on:emitInfo="getInfo"></Child>
		<h3 style="color: blue;">{{info}}</h3>
	</div>
</template>

<script>
	import Child from "./Child";
	export default {
		name: 'Father',
		data() {
			return {
				msgInfo: "我是父组件中的内容",
				info: ""
			}
		},
		components: {
			Child
		},
		methods: {
			getInfo(value) {
				this.info = value;
			}
		}
	}
</script>

<style scoped>
	.father {
		padding: 10px 5px;
	}
</style>