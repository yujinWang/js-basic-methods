<template>
	<div>
		<h1>我是子组件</h1>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'ChildSlot',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>

</style>