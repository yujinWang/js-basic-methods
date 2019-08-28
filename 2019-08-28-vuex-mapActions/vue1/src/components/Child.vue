<template>
	<div>
		<h2>我是子组件</h2>
		<!-- 最基本的使用方法，在子组件中使用slot标签，然后在父组件中调用子组件 -->
		<!-- 并在父组件调用子组件的标签内添加自定义内容，结果被渲染在页面中的子组件范围内 -->
		<!-- 插槽就是vue实现内容分发的API，将slot作为承载内容分发的出口 -->
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