<template>
	<div class="data">
		<h1>Data页面，这是父组件</h1>
		<button>
			<router-link to="/">回到首页</router-link>
		</button>
		<DataChild :info="msg" v-on:getInfo="getInfoValue"></DataChild>
		<h1>{{getValue}}</h1>
	</div>
</template>

<script>
	import DataChild from "./DataChild";
	export default {
		name: 'data',
		data(){
			return {
				msg: "这是来自父组件中的数据，现在传递到了子组件中，传递方式为props",
				getValue: ""
			}
		},
		components: {
			DataChild
		},
		methods: {
			getInfoValue(value){
				this.getValue = value;
			}
		}
	}
</script>

<style scoped>
	
</style>