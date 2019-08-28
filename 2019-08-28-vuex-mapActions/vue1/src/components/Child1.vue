<template>
	<div>
		<h2>我是子组件111</h2>
		<slot name="header"></slot>
		<slot name="footer"></slot>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>

</style>