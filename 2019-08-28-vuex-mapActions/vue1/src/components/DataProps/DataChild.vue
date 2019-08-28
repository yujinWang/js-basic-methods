<template>
	<div class="data">
		<h1>DataChild页面，这是子组件</h1>
		<strong>{{info}}</strong>
		<br />
		<button @click="emitData">传递数据到父组件</button>
	</div>
</template>

<script>
	export default {
		name: 'data',
		data(){
			return {
				msg: "我是子组件中的数据，通过$emit方式传递到了父组件中"
			}
		},
		props: {
			info: {
				type: String,
				default(){
					return "";
				}
			}
		},
		methods: {
			emitData(){
				this.$emit("getInfo",this.msg);
			}
		}
	}
</script>

<style scoped>

</style>