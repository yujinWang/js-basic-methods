<template>
	<div class="note2">
		<h2>vue-router引入的一点问题</h2>
		<p>对于为预先安装router的项目，创建router文件夹并创建router.js文件</p>
		<p>import Vue from "vue"; npm i vue-router -S
			import VueRouter from "vue-router";
			Vue.use(VueRouter);
		</p>
		<p>
			然后导出
			export default new VueRouter({
			routes: [{}]
			})
		</p>
		<p>之后在main.js文件中进行引用，import Router from "./router/router.js";并在new vue中引用</p>
		<p>需要注意的一点是这里引用名是Router，那么在new vue中需要router:Router这样来使用</p>
		<p style="color: red;font-weight: 700;">如果引用错误的话报错会包含有match不匹配什么的</p>
	</div>
</template>

<script>
	export default {
		name: 'Note2'
	}
</script>

<style scoped>
	.note2 {
		padding: 10px;
	}
	.note2 h2 {
		padding-bottom: 5px;
	}
	.note2 p {
		height: 30px;
		line-height: 30px;
	}
</style>