<template>
	<div class="watch_test">
		<p style="color:blue;">computed是一个计算属性，类似于过滤器，对绑定到view的数据进行处理</p>
		<p style="color:blue;">是计算值</p>
		<p style="color:blue;">应用：就是简化template里面的{{}}计算和处理props或$emit的传值</p>
		<p style="color:blue;">具有缓存性，页面重新渲染值不变化,计算属性会立即返回之前的计算结果，而不必再次执行函数</p>
		<p style="color:blue;">watch是一个观察动作，</p>
		<p style="color:blue;">应用：监听props，$emit或本组件的值执行异步操作</p>
		<p style="color:blue;">无缓存性，页面重新渲染时值不变化也会执行</p>
		<p style="color:red;margin-bottom: 20px;">watch_test</p>
		<p style="color:red;">1、简单的监测输入框的值</p>
		<el-input v-model="demo"></el-input>
		<p>watch监测输入框中的值{{value}}</p> 
		<p>这是变化前的值：{{testValue1}}</p> 
		<p>这是变化后的值：{{testValue}}</p> 

		<p style="color:red;">2、监测对象中属性值的变化</p>
		<el-input v-model="demo1.name"></el-input>
		<p>{{testValue2}}</p>
		<p>{{newName}}</p>
		<p>测试，watch不能监测到对象中属性值的变化</p>
	</div>
</template>

<script>
	export default {
		name: 'WatchTest',
		data() {
			return {
				demo: "",
				value: "",
				testValue: "",
				testValue1: "",
				testValue2: "",
				demo1: {
					name: ""
				}
			}
		},
		watch: {
			demo(val,val1) {
				console.log(val,val1);
				this.testValue = val;
				this.testValue1 = val1;
				this.value = this.demo;
			},
			demo1(val) {
				console.log(val);
				this.testValue2 = val;
			}
		},
		computed: {
			newName() {
				return this.demo1.name;
			}
		}
	}
</script>

<style scoped>
	.watch_test {
		padding: 10px;
	}
</style>