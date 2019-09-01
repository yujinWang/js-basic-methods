<template>
	<div class="vuex_test">
		<h1>vuex的使用</h1>
		<p>vuex是一个专门为vue.js开发的状态管理模式</p>
		<p>当我们需要的数据需要在各个组件之间传递时候而一般的数据传递方式不能达到目的的时候就可以使用vuex</p>
		<p style="color: red;padding: 10px 0;">vuex中，有默认的五种基本的对象：</p> 
		<p>state：存储状态（变量）</p>
		<p>getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()</p>
		<p>mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。</p>
		<p>actions：异步操作。在组件中使用是$store.dispath('')</p>
		<p>modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。</p>
		<p>npm install vuex --save</p>
		<p>在store文件夹中创建store.js文件然后在其中引入import Vue from "vue" import Vuex from "vuex"</p>
		<p style="color: red;">import Vue from "vue"会从node_modules里面对应的文件夹中寻找对应的文件的</p>
		<p>mutations中进行的是同步操作，若要使用异步操作需要使用actions</p>
	</div>
</template>

<script>
	export default {
		name: 'VuexNote',
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	.vuex_test {
		padding: 10px;
	}
</style>