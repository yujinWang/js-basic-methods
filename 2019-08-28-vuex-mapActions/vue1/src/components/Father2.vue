<template>
	<div>
		<h2>我是父组件222</h2>
		<!-- 作用域插槽，父组件中使用了子组件中定义的一些数据 -->
		<!-- 当被提供的内容只有默认插槽时，组件的标签才能被当作模板来使用 -->
		<!-- 只要出现多个插槽，需要为每个插槽使用基于template的语法 -->
		<!-- <Child2>
			<template v-slot:default="stopProps">
				{{stopProps.user.userName}}
			</template>
		</Child2> -->
		<Child2 v-slot:default="stopProps">
			{{stopProps.user.userName}}
		</Child2>
	</div>
</template>

<script>
	import Child2 from "./Child2";
	export default {
		data() {
			return {
				
			}
		},
		components: {
			Child2
		}
	}
</script>

<style scoped>

</style>