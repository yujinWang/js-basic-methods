<template>
	<div>
		<h2>我是父组件111</h2>
		<Child1>
			<!-- 在父组件中的写法有两种，一种是将内容放在template中，另一种是写在如h1这样的标签内 -->
			<!-- v-solt:插槽名 -->
			<!-- 不具名的插槽默认名称是default -->
			<template v-slot:header>
				<h1>我是子组件中名称为header的内容</h1>
			</template>
			<template v-slot:footer>
				<h2>我是子组件中名称为footer的内容</h2>
			</template>
			<!-- <h2 slot="header">我是子组件中名称为header的内容</h2>
			<h2 slot="footer">我是子组件中名称为footer的内容</h2> -->
			<template v-slot:default>
				<p style="color:red;">我是子组件中没有名称的插槽内容在这里展示</p>
			</template>
			
		</Child1>
	</div>
</template>

<script>
	import Child1 from "./Child1";
	export default {
		data() {
			return {

			}
		},
		components: {
			Child1
		}
	}
</script>

<style scoped>

</style>