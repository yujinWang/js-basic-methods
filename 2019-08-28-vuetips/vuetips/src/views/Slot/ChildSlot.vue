<template>
	<div>
		<h1>我是子组件</h1>
		<slot></slot>
		<slot name="slot1"></slot>
		<slot name="slot2"></slot>
		<slot v-bind:msg="msg">
			{{msg}}
		</slot>
	</div>
</template>

<script>
	export default {
		name: 'ChildSlot',
		data() {
			return {
				msg: "我是子组件中的内容，通过作用域插槽展示在了父组件中，影响到了前面的具名插槽"
			}
		}
	}
</script>

<style scoped>

</style>