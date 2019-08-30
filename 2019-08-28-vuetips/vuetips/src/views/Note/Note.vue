<template>
	<div class="note">
		<h2>关于基本的框架设计</h2>
		<p>页面整体结构偏向于后台管理系统，顶部导航栏，左侧目录，右侧页面内容</p>
		<p>项目文件结构分析，Layout.vue文件为整个页面的结构布局文件，上面的导航菜单是</p>
		<p>固定的，暂将他写在App.vue中，还有什么其他方法，之后寻到再补充</p>
		<p>左侧固定，右侧为具体页面内容的布局形式采用element-ui中的menu实现</p>
		<p>需要注意的一点是需要在Layout.vue文件中对内容进行左右布局，父级采用flex即可</p>
		<p>在右边的标签中添加router-view标签作为页面入口</p>
	</div>
</template>

<script>
	export default {
		name: 'Note'
	}
</script>

<style scoped>
	.note {
		padding: 10px;
	}
	.note h2 {
		padding-bottom: 5px;
	}
	.note p {
		height: 30px;
		line-height: 30px;
	}
</style>