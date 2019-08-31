<template>
	<div class="slot_test">
		<h1>我是父组件slot</h1>
		<ChildSlot>
			<!-- 匿名插槽 -->
			<p><span style="color: red;">匿名插槽</span> 我是写在父组件中自定义的内容，想要嵌套在子组件标签中，现在还不能展示</p>
			<p>当我在子组件中添加slot标签之后就可以展示了，当我们需要在父组件中自定义添加</p>
			<p>一些内容的时候就可以使用插槽，这个是匿名插槽只需在子组件中添加slot即可</p>
			<p>看起来匿名插槽是位于具名插槽下面的，打开 <span style="color: red;">SlotTest.vue文件中20行</span>注释可查看作用域插槽效果</p>
			<!-- 具名插槽 -->
			<template v-slot:slot1>
				<p style="color: blue;background: pink;margin-top: 10px;">这是名为slot1的插槽中的内容</p>
				<p style="color: blue;background: pink;">向具名插槽提供内容时候，使用template标签和v-slot:绑定的插槽名</p>
			</template>
			<template v-slot:slot2>
				<p style="color: blue;background: orchid;margin-top: 10px;">这是名为slot2的插槽中的内容</p>
				<p style="color: blue;background: orchid;">插槽默认的名称是default</p>
			</template>
			<!-- 作用域插槽 -->
			<!-- <template v-slot:default="slotProps">
				{{slotProps.msg}}
			</template> -->
		</ChildSlot>
	</div>
</template>

<script>
	import ChildSlot from "./ChildSlot";
	export default {
		name: 'SlotTest',
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
	.slot_test {
		padding: 10px;
	}
</style>