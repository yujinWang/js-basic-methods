<template>
	<div>
		<h1>我是父组件slot</h1>
		<ChildSlot>
			<p>我是写在父组件中自定义的内容，想要嵌套在子组件标签中，现在还不能展示</p>
			<p>当我在子组件中添加slot标签之后就可以展示了，当我们需要在父组件中自定义添加</p>
			<p>一些内容的时候就可以使用插槽，这个是匿名插槽只需在子组件中添加slot即可</p>
		</ChildSlot>
	</div>
</template>

<script>
	import ChildSlot from "./ChildSlot";
	export default {
		name: 'Slot',
		data() {
			return {
				
			}
		},
		components: {
			ChildSlot
		}
	}
</script>

<style scoped>
	
</style>