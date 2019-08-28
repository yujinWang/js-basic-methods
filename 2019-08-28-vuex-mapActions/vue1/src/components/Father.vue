<template>
	<div>
		<h2>我是父组件</h2>
		<Child>
			今天天气好
		</Child>
	</div>
</template>

<script>
	import Child from "./Child";
	export default {
		data() {
			return {
				
			}
		},
		components: {
			Child
		}
	}
</script>

<style scoped>
	
</style>